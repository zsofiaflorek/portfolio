import Link from "next/link";
export function MenuItem({ children, href, className }) {
  return (
    <li className="overflow-hidden ">
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
    </li>
  );
}
