import SlsResponse from '../utils/sls-response';
import {
  THandlerWithoutCallback,
  TMiddlewareFunction,
} from './dto/handler-orchestrator-dto';
import { Context, LambdaFunctionURLEvent, Callback } from 'aws-lambda';

class HandlerOrchestrator {
  private _handler: THandlerWithoutCallback;
  private _middlewares: TMiddlewareFunction[] = [];

  constructor(handler: THandlerWithoutCallback) {
    this._handler = handler;
  }

  public withMiddlewares(middlewares: TMiddlewareFunction[]) {
    this._middlewares = middlewares;
    return this;
  }

  public execute() {
    return async (event: LambdaFunctionURLEvent, context: Context) => {
      try {
        if (this._middlewares.length) {
          // Execute each middleware
          for (const mw of this._middlewares) {
            await mw(event, context);
          }
        }
        // Handle the request after all middlewares have been processed
        return await this._handler(event, context);
      } catch (error) {
        // Ensure error object has the correct properties
        throw new SlsResponse().execute(error.status, error.statusCode, error);
      }
    };
  }
}

export default HandlerOrchestrator;
