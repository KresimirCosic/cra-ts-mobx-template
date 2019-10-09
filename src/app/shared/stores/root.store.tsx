import { RouterState, RouterStore } from 'mobx-state-router';

import routes from '../routing/routes.routing';

const notFound = new RouterState('notFound');

class RootStore {
  routerStore = new RouterStore(this, routes, notFound);
}

export default RootStore;
