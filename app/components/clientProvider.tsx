"use client";

import { Provider } from "react-redux";
import { store,persistor } from "../../redux/store";
import { PersistGate } from "redux-persist/integration/react";

// export default function ClientProvider({ children }: { children: React.ReactNode }) {
//   return <Provider store={store}>{children}</Provider>;
// }

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}