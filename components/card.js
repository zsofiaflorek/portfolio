import classNames from "classnames";

export function Card({ children, className }) {
  return (
    <div
      className={classNames("shadow bg-white rounded-xl px-6 py-8", className)}
    >
      {children}
    </div>
  );
}

export function CVCard({ children, title, className }) {
  return (
    <Card
      className={classNames(
        "shadow bg-white rounded-xl px-6 py-8 mb-8",
        className
      )}
    >
      <h1 className="border-b-2 border-primary text-lg uppercase font-semibold">
        {title}
      </h1>
      {children}
    </Card>
  );
}
