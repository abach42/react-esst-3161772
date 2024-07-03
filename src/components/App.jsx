import { clear } from "@testing-library/user-event/dist/clear";
import react from "react";

export class App extends react.Component {
    state = {
        counterValue: 5,
    };

    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState((state) => {
                if(state.counterValue > 0) {
                    return { counterValue: state.counterValue -1 };
                } else {
                    return { counterValue: 0 };
                }
            });
        }, 1000);
    }

    render() {
        return <strong>c = {this.state.counterValue}</strong>
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState);
    }

    shouldComponentUpdate() {
        if (this.state.counterValue === 0) {
            return false;
        }

        return true;
    }
}