import React from "react";

import { Linkchecker } from "./Linkchecker";

export function App() {
  return (
    <div>
      <h1>Linkchecker</h1>

      <Linkchecker />
      <ul>
      <li>
          <a href="https://linkedin.com">LinkedIn</a>
        </li>
        <li>
          <a href="https://blog.activenode.de">activenode</a>
        </li>
        <li>
          <a href="https://unsecure-link">Bank Webseite</a>
        </li>
      </ul>
    </div>
  );
}
