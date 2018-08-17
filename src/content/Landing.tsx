import * as React from "react";
import ExternalLink from "../components/ExternalLink";

export default class Landing extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div>
        <p>
          At Readwell we want to inspire you to not just read but read well.
        </p>
        <p>
          Our platform will help you become a better reader. We will help you
          digest a book. Starting before you start reading and going further then just
          a single book.
        </p>
        <p>
          Readwell is aimed primarily at non-fiction books. But the principles
          can be applied to all reading material
        </p>
        <p>
          We believe in open source so the code that powers Readwell is hosted for free on{" "}
          <ExternalLink href="https://github.com/bartw/readwell">
            GitHub
          </ExternalLink>
          .
        </p>
      </div>
    );
  }
}
