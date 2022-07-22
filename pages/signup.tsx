import Link from 'next/link';
// import { useRouter } from 'next/router';
import { supabaseClient } from 'utils';

import { Input, Button } from 'components/ui2';
import {Logo} from '@/components/Logo';
// import { User } from '@supabase/gotrue-js';
import { useLogin, useTranslate } from '@pankod/refine-core';
import { useNotification } from '@pankod/refine-core';
import { useForm } from '@pankod/refine-react-hook-form';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

export interface ISignupForm {
  name: string;
  email: string;
  password: string;
}

export const SignUp: React.FC = () => {
  const t = useTranslate();
  const { open, close } = useNotification();

  const {
    refineCore: { formLoading },
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid }
  } = useForm<ISignupForm>({ mode: 'onChange' });

  const handleSignup = async (values: any) => {
    const { error, user: createdUser } = await supabaseClient.auth.signUp({
      // name: values.name,
      email: values.email,
      password: values.password
    });
    if (error) {
      open({ type: 'error', message: error.message });
    } else {
    }
  };

  return (
    <div className="flex justify-center height-screen-helper">
      <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
        <div className="flex justify-center pb-12 ">
          <Logo  className=' w-18'/>
        </div>
        <form
          onSubmit={handleSubmit(handleSignup)}
          className="flex flex-col space-y-4"
        >
          <Input {...register('name', { required: true })} placeholder="Name" />
          <Input
            {...register('email', { required: true })}
            type="email"
            placeholder={t('auth:pages.signUp.email', 'Email')}
          />
          <Input
            {...register('password', { required: true })}
            type="password"
            placeholder={t('auth:pages.signUp.password', 'Password')}
          />
          <div className="pt-2 w-full flex flex-col">
            <Button
              type="submit"
              loading={formLoading}
              disabled={!isDirty || !isValid}
              // disabled={formLoading || !email.length || !password.length}
            >
              {t('auth:pages.signUp.signUp', 'Sign up')}
            </Button>
          </div>

          <span className="pt-1 text-center text-sm">
            <span className="text-zinc-200">Do you have an account?</span>
            {` `}
            <Link href="/signin">
              <a className="text-accent-9 font-bold hover:underline cursor-pointer">
                {t('auth:pages.signIn.signIn', 'Sign in')}
              </a>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', ['auth']))
    }
  };
};

export default SignUp;
