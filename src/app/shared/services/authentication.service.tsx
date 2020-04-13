import { OPTIONS, TARGET } from "../environment";
import { RootService } from "./root.service";

class AuthenticationService {
  constructor(private rootService: RootService) {}
}

export default AuthenticationService;
