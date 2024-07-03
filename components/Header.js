import FaustLogo from "./FaustLogo";
import PrimaryMenu from "./PrimaryMenu";

export default function Header() {
  return (
    <header className="flex px-4 py-6 border-2 border-gray-500 justify-between">
      <div className="flex gap-5">
        <div className="flex border-2 border-rose-500 items-center">
          <FaustLogo />
          <h2>Faust.js&trade;</h2>
        </div>
        <div className="flex border-2 border-green-500 items-center">
          <PrimaryMenu />
        </div>
      </div>
      <div className="flex gap-5 items-center border-2 border-blue-600">
        <p>Other stuff</p>
      </div>
    </header>
  );
}
