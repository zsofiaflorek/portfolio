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
