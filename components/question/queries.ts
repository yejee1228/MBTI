import * as API from 'lib/api/mbti';
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { IQuestion } from 'lib/types';
import { AxiosError } from 'axios';

const queryKey = {
    all: ['questions'] as const,
}

export const useQuestions = (options?: UseQueryOptions<{ data: IQuestion[] }, AxiosError>) => {
    return useQuery<{ data: IQuestion[] }, AxiosError>(queryKey.all, () => API.getQuestions(), options)
}