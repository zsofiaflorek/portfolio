import { MenuItem } from "./menuItem";

export function Menu() {
  return (
    <nav className=" font-semibold uppercase shadow-md border-b-2 border-primary">
      <div className="max-w-screen-lg mx-auto px-4 pt-4 sm:px-6 sm:pt-0 sm:flex sm:gap-2 sm:justify-between sm:items-center">
        <h1 className="block text-primary text-base text-center sm:flex sm:flex-shrink-0 sm:text-md">
          Zsofia Florek
        </h1>
        <ul className="flex gap-2 justify-between overflow-hidden py-2 text-sm sm:text-md sm:gap-6 sm:py-4 md:gap-10">
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/about">About</MenuItem>
          <MenuItem href="/portfolio">Portfolio</MenuItem>
          <MenuItem href="/contact">Contact</MenuItem>
        </ul>
      </div>
    </nav>
  );
}
