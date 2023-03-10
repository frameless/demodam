/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";
import isAbsoluteUrl from "is-absolute-url";
import React from "react";
import "@utrecht/component-library-react/dist/css-module";

interface CustomLinkProps extends Omit<GatsbyLinkProps<any>, "to"> {
  href: string;
}

export const Link = ({ className, href, children, ref, ...restProps }: CustomLinkProps) => {
  const external = typeof href === "string" && isAbsoluteUrl(href);

  if (external) {
    return (
      <a className={clsx("utrecht-link", className)} href={href} {...restProps}>
        {children}
      </a>
    );
  }

  return (
    <GatsbyLink
      to={href}
      className={clsx("utrecht-link", className)}
      ref={ref as any}
      {...restProps}
      rel={external ? "external noopener noreferrer" : undefined}
    >
      {children}
    </GatsbyLink>
  );
};
