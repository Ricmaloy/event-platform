import { Challenge } from "../../components/Challenge";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function Checkpoints() {
  return (
    <>
      <div className="min-h-screen bg-blur-purple bg-cover bg-no-repeat flex flex-col items-center">
        <Header />
        <div className="w-full max-w-[1100px] flex justify-center align-start items-center mt-20 mx-auto">
          <div className="flex">
            <div className="max-w-[298px]">
              <h1 className="text-gray-100 text-5xl font-bold leading-[54px]">
                Mission checkpoints
              </h1>
              <p className="text-gray-100 leading-6 mt-6">
                Conclua as etapas da missão e concorra a 20 camisetas da
                Rocketseat.
              </p>
            </div>
            <img src="/src/assets/images/tshirt-ignite-lab.png" alt="" />
          </div>
          <div className="flex flex-col gap-8"></div>
        </div>

        <div className="flex flex-col gap-8 mb-12">
          <Challenge
            title="Mission checkpoint 01"
            description="Conclua a terceira etapa da nossa missão, responda o formulário e concorra a 4 camisetas exclusivas do Ignite Lab. Formulário disponível até domingo, às 12h00 de Brasília."
            reward="4 camisetas exclusivas"
            url=""
          />
           <Challenge
            title="Mission checkpoint 02"
            description="Conclua a terceira etapa da nossa missão, responda o formulário e concorra a 4 camisetas exclusivas do Ignite Lab. Formulário disponível até domingo, às 12h00 de Brasília."
            reward="4 camisetas exclusivas"
            url=""
          />
           <Challenge
            title="Mission checkpoint 03"
            description="Conclua a terceira etapa da nossa missão, responda o formulário e concorra a 4 camisetas exclusivas do Ignite Lab. Formulário disponível até domingo, às 12h00 de Brasília."
            reward="4 camisetas exclusivas"
            url=""
          />
           <Challenge
            title="Mission checkpoint 04"
            description="Conclua a terceira etapa da nossa missão, responda o formulário e concorra a 4 camisetas exclusivas do Ignite Lab. Formulário disponível até domingo, às 12h00 de Brasília."
            reward="4 camisetas exclusivas"
            url=""
          />
        </div>
      </div>
      <div className="px-[100px]">
        <Footer />
      </div>
    </>
  );
}
