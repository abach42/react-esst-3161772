import { useState } from "react";

export function App() {
    const [counsterState, setCounterState] = useState(0);
    const [counsterState2, setCounterState2] = useState(0);
    
    return (
        <div>
            <button type="button" onClick={() => {
                setCounterState(counsterState + 1);
                setCounterState2(counsterState2 + 2);
            }}>Click me</button>
            CounterValue = {counsterState}, CounterValue2 = {counsterState}
        
        </div>
    );
}
