// Will be eventually used to bootstrap other services into one root service
import AuthenticationService from "./authentication.service";

export class RootService {
  authenticationServices: AuthenticationService = new AuthenticationService(
    this
  );
}

export const rootService = new RootService();
