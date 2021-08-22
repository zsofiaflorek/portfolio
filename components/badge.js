export default function Badge({ children }) {
  return (
    <div className="uppercase text-on-primary bg-primary text-xs py-1 mb-2 rounded-md shadow-sm w-16 rounded-full text-center inline-block">
      {children}
    </div>
  );
}
