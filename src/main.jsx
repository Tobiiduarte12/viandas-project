import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { Store, persistor } from "./store/Store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<Provider store={Store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</>
);
