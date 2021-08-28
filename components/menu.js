import { MenuItem } from "./menuItem";

export function Menu() {
  return (
    <nav className=" font-semibold uppercase shadow-md border-b-2 border-primary">
      <div className="max-w-screen-lg flex gap-4 justify-between items-center mx-auto px-6">
        <h1 className="w-20 flex-shrink-0 text-primary text-md mt-2 sm:w-auto">
          Zsofia Florek
        </h1>
        <ul className="flex gap-2 justify-end overflow-hidden py-4 lg:gap-10">
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/about">About</MenuItem>
          <MenuItem href="/portfolio">Portfolio</MenuItem>
          <MenuItem href="/contact">Contact</MenuItem>
        </ul>
      </div>
    </nav>
  );
}
