import clientApi from './clientApi';

export const getQuestions = async () => {
    const data = await clientApi.get(`/api/question`)
    return data;
};

export const getResult = async (key: string) => {
    const data = await clientApi.get(`/api/result/${key}`)
    return data;
};

