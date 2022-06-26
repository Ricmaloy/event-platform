import { Logo } from "../../assets/Logo";
import { LogoFull } from "../../assets/LogoFull";
import { Navigation } from "../Navigation";

export function Header() {
  return (
    <header className="w-full px-10 flex justify-between items-center bg-gray-700 border-b border-gray-600">
      <Logo />
      <Navigation />
      <LogoFull />
    </header>
  );
}
