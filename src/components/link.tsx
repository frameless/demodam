/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link as DesignSystemLink } from "@utrecht/component-library-react/dist/css-module";
import clsx from "clsx";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";
import isAbsoluteUrl from "is-absolute-url";
import React from "react";

interface CustomLinkProps<T> extends Omit<GatsbyLinkProps<T>, "placeholder" | "ref" | "to"> {
  href: string;
}

/**
 * TypeScript made it challenging to support features from both GatsbyLink and the Utrecht link.
 * Currently `placeholder` from UtrechtLink and `ref` from `GatsbyLink` are not supported.
 * Unlike Gatsby, you must use `href` instead of `to` for internal links too. Internal links must be relative URLs.
 */
export const Link = <T,>({
  className,
  href,
  children,
  activeClassName,
  activeStyle,
  partiallyActive,
  replace,
  state,
  ...restProps
}: CustomLinkProps<T>) => {
  const external = typeof href === "string" && isAbsoluteUrl(href);
  const gatsbyLinkProps = { activeClassName, activeStyle, partiallyActive, replace, state };

  if (external || !href) {
    return (
      <DesignSystemLink href={href} external={external} {...restProps}>
        {children}
      </DesignSystemLink>
    );
  } else {
    return (
      <GatsbyLink to={href} className={clsx("utrecht-link", className)} {...gatsbyLinkProps} {...restProps}>
        {children}
      </GatsbyLink>
    );
  }
};
