import * as React from "react";
import Header from "../header/Header";
import Content from "../content/Content";
import Footer from "../footer/Footer";

export default class Page extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
