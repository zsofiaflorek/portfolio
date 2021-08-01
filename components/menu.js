import { MenuItem } from "./menuItem";

export function Menu() {
  return (
    <nav className=" font-semibold uppercase shadow-md border-b-2 border-primary">
      <div className="max-w-screen-lg flex justify-between items-center mx-auto px-6">
        <h1 className="text-primary text-md mt-2">Zsofia Florek</h1>
        <ul className="flex gap-10 justify-end py-4">
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/about">About</MenuItem>
          <MenuItem href="/">Portfolio</MenuItem>
          <MenuItem href="/">Contact</MenuItem>
        </ul>
      </div>
    </nav>
  );
}
