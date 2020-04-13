import React from "react";
import { observer } from "mobx-react";

import useRootStore from "../../shared/hooks/useRootStore.hook";

const NotFound = () => {
  const rootStore = useRootStore();

  return (
    <div className="Page Page-NotFound">
      <h1>This is the page: {rootStore.routerStore.getCurrentRoute().name}.</h1>
    </div>
  );
};

export default observer(NotFound);
