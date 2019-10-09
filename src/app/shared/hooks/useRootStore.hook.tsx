import { useContext } from 'react';

import { RootStoreContext } from '../../../App';

function useRootStore() {
  return useContext(RootStoreContext);
}

export default useRootStore;
