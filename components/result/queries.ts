import * as API from 'lib/api/mbti';
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { IResult } from 'lib/types';
import { AxiosError } from 'axios';

export const useResult = (key: string, options?: UseQueryOptions<{ data: IResult }, AxiosError>) => {
    return useQuery<{ data: IResult }, AxiosError>(['result', key], () => API.getResult(key), options)
}
export const useResultBestChemi = (key: string, options?: UseQueryOptions<{ data: IResult }, AxiosError>) => {
    return useQuery<{ data: IResult }, AxiosError>(['best', key], () => API.getResult(key), options)
}
export const useResultWorstChemi = (key: string, options?: UseQueryOptions<{ data: IResult }, AxiosError>) => {
    return useQuery<{ data: IResult }, AxiosError>(['worst', key], () => API.getResult(key), options)
}