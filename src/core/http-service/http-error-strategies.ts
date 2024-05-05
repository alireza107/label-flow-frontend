import {
  ApiError,
  BadRequestError,
  NetworkError,
  NotFoundError,
  UnauthorizedError,
  UnhandledException,
  ValidationError,
} from '@/types/http-errors.interface';

export type ApiErrorHandler = (errorData: ApiError) => void;

export const badRequestErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } as unknown as BadRequestError;
};

export const validationErrorStrategy: ApiErrorHandler = (errorData) => {
  throw { ...errorData } as unknown as ValidationError;
};

export const notFoundErrorStrategy: ApiErrorHandler = (errorData) => {
  throw { ...errorData, detail: 'سرویس مورد نظر یافت نشد' } as unknown as NotFoundError;
};

export const unauthorizedErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: 'دسترسی به سرویس مورد نظر امکان پذیر نمی باشد',
  } as unknown as UnauthorizedError;
};

export const unhandledExceptionStrategy: ApiErrorHandler = (errorData) => {
  throw { ...errorData, detail: 'خطای سرور' } as unknown as UnhandledException;
};

export const networkErrorStrategy = (): void => {
  throw { detail: 'خطای شبکه' } as NetworkError;
};

export const errorHandler: Record<number, ApiErrorHandler> = {
  400: (errorData) =>
    (errorData.errors ? validationErrorStrategy : badRequestErrorStrategy)(errorData),
  403: unauthorizedErrorStrategy,
  404: notFoundErrorStrategy,
  500: unhandledExceptionStrategy,
};
