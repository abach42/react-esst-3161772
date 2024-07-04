import React from "react";
import { Course } from "./Course";

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.headline}</h1>

        <Course title="Learn Foobar:innen beginners" author="Mr. Foobar" />
        <Course title="Learn Foobar:innen*den/XRW advanced" author="Mr. Foobar" />

        <Course />
        <Course author="Peter" />
      </div>
    );
  }
}

App.defaultProps = {
  headline: "Meine Kuhlen Kurse",
}
App.displayName = 'Courses';