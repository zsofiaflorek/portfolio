import Link from "next/link";
import classNames from "classnames";
export function MenuItem({ children, href, className }) {
  return (
    <li className="overflow-hidden ">
      <Link href={href}>
        <a
          className={classNames(
            "hover:text-primary pl-2 pr-2 py-2 last:pr-0 ",
            className
          )}
        >
          {children}
        </a>
      </Link>
    </li>
  );
}
