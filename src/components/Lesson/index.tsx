import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  isActive: boolean;
  type: "live" | "class";
}

export function Lesson({
  title,
  slug,
  availableAt,
  type,
  isActive,
}: LessonProps) {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  return (
    <Link
      to={`/event/lesson/${slug}`}
      className={`group ${
        !isLessonAvailable && "pointer-events-none"
      } relative`}
    >
      {isActive && (
        <div className="w-5 h-5 bg-blue-500 rotate-45 absolute -left-[7px] bottom-[60px]" />
      )}

      <span className="text-gray-300 text-sm">{availableDateFormatted}</span>

      <div
        className={`rounded border border-gray-500 p-4 mt-2 ${
          isLessonAvailable
            ? "group-hover:border-blue-500"
            : "border-orange-500 opacity-70"
        } ${isActive && "border-blue-500 bg-blue-500"}`}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={`text-sm text-blue-500 font-medium flex items-center gap-2 ${
                isActive && "text-white"
              }`}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em Breve
            </span>
          )}

          <span
            className={`text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold ${
              isActive && "bg-green-300"
            }`}
          >
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong
          className={`mt-5 block ${isActive ? "text-white" : "text-gray-200"}`}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}
