import { ArrowRight, Flag } from "phosphor-react";

interface ChallengeProps {
  title: string;
  description: string;
  reward: string;
  url: string;
}

export function Challenge({ title, description, reward, url }: ChallengeProps) {
  return (
    <div className="w-[736px] bg-[#202024] border-2 transition-colors border-transparent hover:border-green-500 rounded-[5px] px-8 pt-8 pb-10 flex gap-6">
      <div className="text-green-300">
        <Flag size={54} />
      </div>
      <div className="flex flex-col my-2">
        <p className="text-2xl text-white font-bold">{title}</p>
        <p className="text-gray-200 my-6">{description}</p>

        <div className="flex justify-between items-center">
          <p>
            <span className="text-green-300">Prêmio:</span> {reward}
          </p>
          <a href={url} className="flex align-center gap-3 justify-center uppercase font-bold text-green-300 text-xs">
            formulário de entrega{" "}
            <span className="self-center">
              <ArrowRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
