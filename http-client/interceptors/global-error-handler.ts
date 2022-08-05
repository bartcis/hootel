import axios, { AxiosInstance } from 'axios';

export const globalErrorHandlerInterceptor = ({ instance }: { instance: AxiosInstance }) => {
  instance.interceptors.response.use(undefined, (error) => {
    if (axios.isCancel(error)) {
      return;
    }

    // TODO handle error globally before rejected
    // const status = error?.response?.status;

    return Promise.reject(error);
  });
};
