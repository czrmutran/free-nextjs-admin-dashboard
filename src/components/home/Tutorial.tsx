'use client';
import React from 'react';
import Link from 'next/link';

const Tutorial = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white dark:bg-[#000000] py-24">
      {/* SVG decorativo à direita */}
      <div className="absolute right-[-150px] top-[-100px] z-0 opacity-30 pointer-events-none">
        <svg
          width="600"
          height="700"
          viewBox="0 0 600 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="150" r="250" fill="url(#lg1)" />
          <circle cx="50" cy="300" r="30" fill="url(#rad1)" />
          <circle cx="120" cy="450" r="60" fill="url(#rad2)" />
          <circle
            cx="480"
            cy="400"
            r="200"
            transform="rotate(-30 480 400)"
            fill="url(#lg2)"
          />
          <defs>
            <linearGradient id="lg1" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#027B3F" />
              <stop offset="1" stopColor="#027B3F" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="rad1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="translate(50 300) scale(30)">
              <stop stopColor="#027B3F" stopOpacity="0.3" />
              <stop offset="1" stopColor="#027B3F" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="rad2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="translate(120 450) scale(60)">
              <stop stopColor="#027B3F" stopOpacity="0.2" />
              <stop offset="1" stopColor="#027B3F" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="lg2" x1="300" y1="200" x2="600" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#027B3F" />
              <stop offset="1" stopColor="#C8DAA9" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Conteúdo */}
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 px-4 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white">
            Crie sua conta e comece agora
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-white/80">
            Confira o nosso tutorial e aprenda, de forma simples e rápida, como criar e preencher seu formulário. 
            Em poucos minutos, você terá tudo pronto de maneira eficiente.
          </p>
          <div className="mt-6">
            <Link
              href="/login"
              className="inline-block bg-[#027B3F] text-white px-8 py-3 rounded-xl font-medium text-lg hover:bg-[#025c30] transition shadow-md"
            >
              Criar Seu Formulário
            </Link>
          </div>
        </div>

        {/* Área vazia — usada apenas para equilíbrio do layout com o SVG */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default Tutorial;