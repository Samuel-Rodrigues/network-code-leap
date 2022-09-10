import { ROUTES_TYPE, STACKS_TYPE } from '../utils/enums/routes.enum';

declare global {
  namespace Modules {
    export { ROUTES_TYPE, STACKS_TYPE };
  }
}
