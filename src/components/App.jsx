import React from "react";
import { BusinessProfile } from "./BusinessProfile";
import { OpenToWorkContext } from "../OpenToWorkContext";

export function App() {
  return (
    <div>
      <h1>Contexts &amp; Theming</h1>

      <BusinessProfile
        name="Johana Doe"
        job="Frontend Designer:inneninneneden"
      />

      <OpenToWorkContext.Provider value={true}>
        <div>
          <h2>Opfen to work: </h2>

          <BusinessProfile
            name="Johana Doe"
            job="Frontend Designer:inneninneneden"
          />

          <BusinessProfile
            name="Johana Doe"
            job="Frontend Designer:inneninneneden"
          />
        </div>
      </OpenToWorkContext.Provider>
    </div>
  );
}
