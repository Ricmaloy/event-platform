import { LogoFull } from "../../assets/LogoFull";

export function Footer() {
  return (
    <footer className="py-6 border-t border-gray-600 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <LogoFull />
        <p className="text-gray-300 text-sm">
          Rocketseat - Todos os direitos reservados
        </p>
      </div>
      <a className="text-gray-300 text-sm" href="#">
        Políticas e privacidade
      </a>
    </footer>
  );
}
