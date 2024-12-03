import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
  domain="dev-hg8zed6i4nqrkifr.us.auth0.com"
  clientId="hyXcPuHcv2OlGqE9ojTTFfm5mhxEzbMP"
  authorizationParams={{
    redirect_uri: "https://homyz-agr381oal-vasundras-projects.vercel.app"
  }}
  audience="https://dev-hg8zed6i4nqrkifr.us.auth0.com/api/v2/"
  scope="openid profile email"
  >
    <App />
  </Auth0Provider>
);
