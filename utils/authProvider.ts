import { AuthProvider } from '@pankod/refine-core';
import nookies from 'nookies';

import { supabaseClient } from '@/utils/supabase-client';

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    console.log('login', email, password);

    const { user, error, data } = await supabaseClient.auth.signIn({
      email,
      password
    });

    if (error) {
      return Promise.reject(error);
    }

    if (user && data) {
      nookies.set(null, 'token', data.access_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      });
      return Promise.resolve();
    }
  },
  logout: async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      return Promise.reject(error);
    }

    nookies.destroy(null, 'token');
    return Promise.resolve('/');
  },
  checkError: () => Promise.resolve(),
  checkAuth: async (ctx) => {
    const { token } = nookies.get(ctx);
    const { data: user } = await supabaseClient.auth.api.getUser(token);

    if (user) {
      return Promise.resolve();
    }
    console.log("Before redirect: @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    
    return Promise.reject({ redirectPath: '/asda' });
  },
  getPermissions: async () => {
    const user = supabaseClient.auth.user();

    if (user) {
      return Promise.resolve(user.role);
    }
  },
  getUserIdentity: async () => {
    const user = supabaseClient.auth.user();

    if (user) {
      return Promise.resolve({
        ...user,
        name: user.email
      });
    }
  }
};
