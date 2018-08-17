import * as React from "react";

export declare interface ExternalLinkProps {
  children: React.ReactNode;
  href: string;
}

export default class ExternalLink extends React.PureComponent<
  ExternalLinkProps
> {
  render(): React.ReactNode {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer">
        {this.props.children}
      </a>
    );
  }
}
