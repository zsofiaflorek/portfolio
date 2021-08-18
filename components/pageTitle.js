export default function PageTitle({ children }) {
  return (
    <h1 className="uppercase text-black text-xxl font-bold my-6 text-center">
      {children}
      <Strong prefix="Me" />
    </h1>
  );
}

export function Strong({ children }) {
  return <strong className="text-primary">{children}</strong>;
}
