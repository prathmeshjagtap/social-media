import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ChakraProvider, theme, ColorModeScript } from "@chakra-ui/react";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript />
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
