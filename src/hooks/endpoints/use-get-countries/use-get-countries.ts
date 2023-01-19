import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { AxiosResponse } from 'axios';
import { instanceApi } from 'infrastructure/api/config';
import type { CountriesResponse } from 'models';

type TQueryFnData = AxiosResponse<CountriesResponse>;
type TError = AxiosResponse;

type TOptions = UseQueryOptions<TQueryFnData, TError>;

export const useGetCountries = (options?: TOptions) => {
  return useQuery<TQueryFnData, TError>(
    ['countries'],
    () =>
      instanceApi.request({
        method: 'get',
        url: '/projects/spotify-pricing/data/countries.json',
      }),
    options
  );
};
