// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { USER_LC_KEY } from '@/shared/constants';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: __API_URL__,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LC_KEY) ?? '';
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
