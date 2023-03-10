import axios, { AxiosError, AxiosResponse } from 'axios';
import { ApiResponse } from './ApiResponse';
import { ApiResponseImpl } from './ApiResponseImpl';

export class AxiosFactory {
  private static initialized = false;

  static initAxios() {
    if (!this.initialized) {
      axios.defaults.timeout = 10000;
      axios.interceptors.request.use(
        config => {
          config.params = {
            ...config.params,
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          };
          return config;
        },
        error => {
          this.nuxtError(error);
          return false;
        }
      );
      axios.interceptors.response.use(
        response => {
          return this.createSuccessApiResponse(response);
        },
      );

      this.initialized = true;
    }
    return axios;
  }

  private static nuxtError(error: AxiosError) {
    window.$nuxt.error({
      message: (error.response?.data as { error?: string })?.error,
      statusCode: error.response?.status,
    });
  }

  private static createSuccessApiResponse(
    res: AxiosResponse<any>
  ): ApiResponse<any> {
    const result = new ApiResponseImpl();
    Object.assign(result, res);
    return result;
  }
}

export const axiosModule = AxiosFactory.initAxios();
