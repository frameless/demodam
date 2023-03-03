import clsx from "clsx";
import { Link as GatsbyLink } from "gatsby";
import isAbsoluteUrl from "is-absolute-url";
import React from "react";
import "@utrecht/component-library-react/dist/css-module";

export const Link = ({ className, href, ...restProps }) => {
  const external = typeof href === "string" && isAbsoluteUrl(href);
  return (
    <GatsbyLink
      to={external ? undefined : href}
      href={external ? href : undefined}
      className={clsx("utrecht-link", className)}
      {...restProps}
      rel={external ? "external noopener noreferrer" : undefined}
    />
  );
};
