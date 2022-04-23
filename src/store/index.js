import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./authReducer";
import { tiendaReducer } from "./productsReducer";

const persistConfig = {
  key: "root",
  storage,
};

const allReducer = combineReducers({
  tienda: tiendaReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, allReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store);

export { store, persistor };
