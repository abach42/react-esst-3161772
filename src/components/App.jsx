import react from "react";

export class App extends react.Component {
    render() {
        console.log(this.props);
        const { title, name, nameObj} = this.props;
        return <div title={title}>Hallo {nameObj.prename} {nameObj.lastname}</div>
    }
}