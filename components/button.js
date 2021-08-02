import classNames from "classnames";

export function Button({ children, heavy }) {
  return (
    <button
      className={classNames(
        "uppercase text-on-primary bg-primary px-4 py-2 rounded-md shadow-sm",
        { "font-semibold": heavy }
      )}
    >
      {children}
    </button>
  );
}
