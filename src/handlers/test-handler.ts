import {
  ResponseCodes,
  ResponseStatus,
} from '../../commons/enums/app-responses';
import HandlerOrchestrator from '../middlewares/handler-orchestrator';
import SlsResponse from '../utils/sls-response';

const testHandler = new HandlerOrchestrator(async (event, context) => {
  return new SlsResponse().execute(ResponseStatus.OK, ResponseCodes.OK as any, {
    test: 123,
  });
}).execute();

export { testHandler };
