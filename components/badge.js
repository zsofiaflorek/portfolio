export default function Badge({ children }) {
  return (
    <div className="uppercase text-on-primary bg-primary text-xs py-1 px-2 mb-2 rounded-md shadow-sm min-w-[64px] rounded-full text-center inline-block">
      {children}
    </div>
  );
}
