import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/Logo";
import { useCreateSubscriberMutation } from "../../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(ev: FormEvent) {
    ev.preventDefault();

    await createSubscriber({
      variables: { name, email },
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur-blue bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex justify-between items-center mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 leading-relaxed text-gray-200">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full-width"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <button
              type="submit"
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img
        src="/src/assets/images/code-mockup.png"
        alt="mockup de códigos"
        className="mt-10"
      />
    </div>
  );
}
