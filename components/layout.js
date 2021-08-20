import classNames from "classnames";
import { Menu } from "./menu";

export function Layout({ children, className }) {
  return (
    <div>
      <Menu />
      <main
        className={classNames(
          "mt-10 mb-16 px-6 md:max-w-screen-md md:mx-auto lg:max-w-screen-lg",
          className
        )}
      >
        {children}
      </main>
    </div>
  );
}
