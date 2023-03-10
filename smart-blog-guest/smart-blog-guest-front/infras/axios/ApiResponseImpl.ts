import { ApiResponse } from './ApiResponse';

export class ApiResponseImpl implements ApiResponse<any> {
  constructor(
    public isError = false,
    public message = '',
    public data = undefined,
    public status = 0,
    public statusText = '',
    public headers = undefined,
    public config = {}
  ) {}
}
