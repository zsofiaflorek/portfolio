import classNames from "classnames";
import * as React from "react";

export function Button({ children, heavy, icon, ...rest }) {
  return (
    <button
      className={classNames(
        "uppercase text-on-primary bg-primary px-4 py-2 rounded-md shadow-sm",
        { "font-semibold": heavy }
      )}
      {...rest}
    >
      {icon ? <i className={classNames("mr-2", icon)} /> : null}
      {children}
    </button>
  );
}

export const AnchorButton = React.forwardRef(function AnchorButton(
  { children, heavy, icon, className, ...rest },
  ref
) {
  return (
    <a
      className={classNames(
        "uppercase text-on-primary bg-primary px-4 py-2 rounded-md shadow-sm",
        { "font-semibold": heavy },
        className
      )}
      {...rest}
      ref={ref}
    >
      {icon ? <i className={classNames("mr-2", icon)} /> : null}
      {children}
    </a>
  );
});

export function PortfolioButton({ children, portfolioIcon, href }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="flex justify-center items-center px-3 py-2 text-black bg-white text-base rounded-md shadow-sm font-semibold"
    >
      {portfolioIcon ? (
        <i className={classNames("mr-2", portfolioIcon)} />
      ) : null}
      {children}
    </a>
  );
}
