import { Context, LambdaFunctionURLEvent } from 'aws-lambda';

export type TMiddlewareFunction = (
  e: any,
  c: any,
  next?: any
) => Promise<any> | void;

export type THandlerWithoutCallback = (
  event: LambdaFunctionURLEvent,
  context: Context
) => Promise<any> | any;
