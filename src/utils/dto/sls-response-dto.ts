import {
  ResponseCodes,
  ResponseStatus,
} from '../../../commons/enums/app-responses';

export interface ISLSErrorResp extends Error {
  statusCode?: ResponseStatus;
  code?: ResponseCodes;
}
