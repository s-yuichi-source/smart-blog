import { AxiosResponse } from 'axios';

export interface ApiResponse<T> extends AxiosResponse<T> {
  isError: boolean;
  message: string;
}
