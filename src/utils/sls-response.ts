import { ISLSErrorResp } from './dto/sls-response-dto';
import {
  ResponseCodes,
  ResponseStatus,
} from '../../commons/enums/app-responses';

class SlsResponse {
  public execute(
    statusCode: ResponseStatus,
    code: ResponseCodes,
    data: unknown | ISLSErrorResp
  ) {
    if (data instanceof Error) {
      const err: ISLSErrorResp = data;
      statusCode = err?.statusCode || ResponseStatus.INTERNAL_SERVER_ERROR;
      code = err?.code || ResponseCodes.INTERNAL_SERVER_ERROR;
      data = { message: data.message, stack: data.stack };
    }

    return {
      statusCode,
      body: JSON.stringify(
        {
          code,
          data,
        },
        null,
        2
      ),
    };
  }
}

export default SlsResponse;
