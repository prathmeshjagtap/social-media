import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ChakraProvider, theme, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

// Call make Server
makeServer();

root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>
);
