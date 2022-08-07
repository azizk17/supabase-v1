import { GetServerSideProps } from "next";
export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";
import { checkAuthentication } from "@pankod/refine-nextjs-router";
import { dataProvider } from "@pankod/refine-supabase";
import nookies from "nookies";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { authProvider } from "utils/authProvider";
import { supabaseClient } from "utils";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { isAuthenticated, ...props } = await checkAuthentication(
    authProvider,
    context
  );

  const i18nProps = await serverSideTranslations(context.locale ?? "en", [
    "common",
  ]);

  if (!isAuthenticated) {
    return { props: { ...props, ...i18nProps } };
  }

  const { query } = context;

  try {
    const { token } = nookies.get(context);
    await supabaseClient.auth.setAuth(token);

    const data = await dataProvider(supabaseClient).getList({
      resource: query["resource"] as string,
    });

    return {
      props: {
        initialData: data,
        ...i18nProps,
      },
    };
  } catch (error) {
    return {
      props: {
        ...i18nProps,
      },
    };
  }
};
