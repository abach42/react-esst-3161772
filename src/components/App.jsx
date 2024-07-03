import react from "react";

export class App extends react.Component {
    render() {
        return (
            <div>
                Hallo <strong>{this.props.name}!</strong>
                <div>{this.props.children}</div>
                {this.props.cool}
            </div>
        );
    }
}