import { Logo } from "../../assets/icons";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-1 border-b border-b-gray-300">
      <div className="flex items-center gap-2">
        <Logo width={50} />
        <span className="text-sm font-bold">MGMT</span>
      </div>

      <button className="text-red-500 font-bold active:text-red-700">
        Sign out
      </button>
    </nav>
  );
}
