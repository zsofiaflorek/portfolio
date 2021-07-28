import classNames from "classnames";

export function Layout({ children, className }) {
  return (
    <main
      className={classNames(
        "mt-10 mb-16 px-6 md:max-w-[500px] md:mx-auto lg:max-w-[1000px]",
        className
      )}
    >
      {children}
    </main>
  );
}
