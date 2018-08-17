import * as React from "react";
import styled from "../styled";

export declare interface ExternalLinkProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

class ExternalLink extends React.PureComponent<ExternalLinkProps> {
  render(): React.ReactNode {
    return (
      <a className={this.props.className} href={this.props.href} target="_blank" rel="noopener noreferrer">
        {this.props.children}
      </a>
    );
  }
}

const StyledExternalLink = styled(ExternalLink)`
  text-decoration: none;
`;

export default StyledExternalLink;
