/**
 * Copyright © 2025 metasyndikate. All rights reserved.
 */
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
    // Set document title and favicon to the logo
    try {
        document.title = "Devbhoomi - Travel with trust.";
        const iconUrl = new URL("./assets/60e125f48eba70acc7c4bd712a78ebd53a2c0c09.png", import.meta.url).toString();
        let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
        if (!link) {
            link = document.createElement("link");
            link.rel = "icon";
            document.head.appendChild(link);
        }
        link.type = "image/png";
        link.href = iconUrl;
    } catch {}

  createRoot(document.getElementById("root")!).render(<App />);
  