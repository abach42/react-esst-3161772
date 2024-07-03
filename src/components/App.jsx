import React, { useEffect, useState } from "react";

export function App() {
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const ref = setInterval(() => {
            setCountdown((oldCountdownValue) => {
                if(oldCountdownValue > 0) {
                    return oldCountdownValue -1;
                }
                return 0;
            });
        }, 1000);

        return () => {
            window.clearInterval(ref);
        };
    }, []);

    return (
    <div>
      <h1>Countdown</h1>
      <p>{countdown}</p>
      <progress value={countdown} min="0" max="10" />
    </div>
  );
}
