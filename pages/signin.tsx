import Link from 'next/link';
import { supabaseClient } from 'utils';

import { Button } from 'components/ui2';
import GitHub from 'components/icons/GitHub';
import { Input } from 'components/ui2';
import Logo from 'components/icons/Logo';
import { Provider } from '@supabase/supabase-js';
import camelCase from 'camelcase';
// new
import { useLogin, useTranslate } from '@pankod/refine-core';
import { useNotification } from '@pankod/refine-core';
import { FormEvent, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
export interface ISignInForm {
  email: string;
  password: string;
  // remember: boolean;
}
export const SignIn: React.FC = () => {
  const t = useTranslate();
  const { open, close } = useNotification();
  const [showPasswordInput, setShowPasswordInput] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    mutate: signin,
    isLoading,
    error,
    isSuccess
  } = useLogin<ISignInForm>();

  const formatErrorMsg = (error: any) => {
    if (error.message) {
      return camelCase(error.message, {
        pascalCase: false
      });
    }
  };
  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('signin', email, password);

    await signin({ email, password });
    if (error) {
      open({
        type: 'error',
        message: t(
          `auth:errors.${formatErrorMsg(error.message)}}`,
          error.message
        )
      });
    }
    if (isSuccess && !password) {
      open({
        type: 'success',
        message: t(
          'auth:pages.signIn.magicLinkSent',
          'Check your email for the magic link.'
        )
      });
    }
  };
  const handleOAuthSignIn = async (provider: Provider) => {
    // setisLoading(true);
    const { error } = await supabaseClient.auth.signIn({ provider });
    if (error) {
      open({
        message: error?.message,
        type: 'error'
      });
    }
  };
  return (
    <div className="flex justify-center height-screen-helper">
      <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
        <div className="flex justify-center pb-12 ">
          <Logo width="64px" height="64px" />
        </div>
        <div className="flex flex-col space-y-4">
          {error && (
            <div className="p3 text-pink-500 text-center">
              {t(`auth:errors.${formatErrorMsg(error)}`, error.message)}
            </div>
          )}

          {!showPasswordInput && (
            <form onSubmit={handleSignIn} className="flex flex-col space-y-4">
              <Input
                type="email"
                placeholder={t('auth:pages.signIn.email', 'Email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                loading={isLoading}
                disabled={!email.length}
              >
                {t('auth:pages.signIn.sendMagicLink', 'Send magic link')}
              </Button>
            </form>
          )}

          {showPasswordInput && (
            <form onSubmit={handleSignIn} className="flex flex-col space-y-4">
              <Input
                type="email"
                placeholder={t('auth:pages.signIn.email', 'Email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder={t('auth:pages.signIn.password', 'Password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button
                className="mt-1"
                type="submit"
                loading={isLoading}
                disabled={!password.length || !email.length}
              >
                {t('auth:pages.signIn.signIn', 'Sign in')}
              </Button>
            </form>
          )}

          <span className="pt-1 text-center text-sm">
            <a
              href="#"
              className="text-zinc-200 text-accent-9 hover:underline cursor-pointer"
              onClick={() => {
                if (showPasswordInput) setPassword('');
                setShowPasswordInput(!showPasswordInput);
              }}
            >
              {/* {`Or sign in with ${
                showPasswordInput ? 'magic link' : 'password'
              }.`} */}
              {showPasswordInput
                ? t(
                    'pages.signIn.signinWithMagicLink',
                    'Or sign in with magic link'
                  )
                : t(
                    'pages.signIn.signinWithPassword',
                    'Or sign in with password'
                  )}
            </a>
          </span>

          <span className="pt-1 text-center text-sm">
            <span className="text-zinc-200">
              {t('auth:pages.signIn.noAccount', 'Don’t have an account?')}
            </span>
            {` `}
            <Link href="/signup">
              <a className="text-accent-9 font-bold hover:underline cursor-pointer">
                {t('signUp.signUp', 'Sign up')}.
              </a>
            </Link>
          </span>
        </div>

        <div className="flex items-center my-6">
          <div
            className="border-t border-zinc-600 flex-grow mr-3"
            aria-hidden="true"
          ></div>
          <div className="text-zinc-400">{t('auth:pages.signIn.or', 'Or')}</div>
          <div
            className="border-t border-zinc-600 flex-grow ml-3"
            aria-hidden="true"
          ></div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          onClick={() => handleOAuthSignIn('github')}
        >
          <GitHub />
          <span className="ml-2">
            {t('auth:pages.signIn.withProvider', { provider: 'GitHub' })}
          </span>
        </Button>
        {/* <span className="ml-2">Continue with GitHub</span> */}
      </div>
    </div>
  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', ['auth']))
    }
  };
};
