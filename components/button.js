import classNames from "classnames";

export function Button({ children, heavy, icon }) {
  return (
    <button
      className={classNames(
        "uppercase text-on-primary bg-primary px-4 py-2 rounded-md shadow-sm",
        { "font-semibold": heavy }
      )}
    >
      {icon ? <i className={classNames("mr-2", icon)} /> : null}
      {children}
    </button>
  );
}

export function AnchorButton({ children, heavy, icon, ...rest }) {
  return (
    <a
      className={classNames(
        "uppercase text-on-primary bg-primary px-4 py-2 rounded-md shadow-sm",
        { "font-semibold": heavy }
      )}
      {...rest}
    >
      {icon ? <i className={classNames("mr-2", icon)} /> : null}
      {children}
    </a>
  );
}

export function PortfolioButton({ children, portfolioIcon }) {
  return (
    <button className="flex justify-center items-center px-3 py-2 text-black bg-white text-base rounded-md shadow-sm font-semibold">
      {portfolioIcon ? (
        <i className={classNames("mr-2", portfolioIcon)} />
      ) : null}
      {children}
    </button>
  );
}
