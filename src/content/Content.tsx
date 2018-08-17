import * as React from "react";
import Landing from "./Landing";

export default class Content extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div>
        <Landing />
      </div>
    );
  }
}
