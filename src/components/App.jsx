import react from "react";

export class App extends react.Component {
    state = {
        counterValue: 3
    };

    componentDidMount() {
        setInterval(() => {
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
}