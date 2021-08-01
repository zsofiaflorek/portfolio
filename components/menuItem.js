import Link from "next/link";
export function MenuItem({ children, href, className }) {
  return (
    <li>
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
    </li>
  );
}
