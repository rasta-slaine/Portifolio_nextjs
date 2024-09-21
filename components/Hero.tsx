import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { socialMedia } from "@/data";


const Hero = () => {
  return (
    <div className="pb-20 pt-36"  id="#Home">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Bem vindo ao meu Portifolio!
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforme suas ideias em realidade com um Desenvolvedor Full Stack de Alta Performace"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Olá! sou o Nathan, Desenvolvedor FullStack com vasta experiência, ofereço serviços de desenvolvimento altamente eficientes e personalizados, que leva seu negócio ao próximo nível! <br/>
            Com mais de 4 anos de experiência em projetos de alta complexidade, ultilizo tecnologias de ponta para entregar resultados
            que geram impacto imediato.
          </p>


          <div className="flex items-center md:gap-3 gap-6 mb-4 ">
              {socialMedia.map((info) => (
                <a href={info.Link} target="_blank">
                    <div
                    key={info.id}
                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                  >
                      <img src={info.img} alt="icons" width={20} height={20} />
                  </div>
                </a>
              ))}
         </div>

          <a href="#about">
            <MagicButton
              title="Veja meus projetos"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

        </div>
      </div>
    </div>
  );
};

export default Hero;
