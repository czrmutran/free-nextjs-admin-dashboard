"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

const Contacts = [
  {
    question: "Como posso recuperar minha senha?",
    answer:
      "Clique em 'Esqueci minha senha' na tela de login e siga as instruções enviadas para seu e-mail cadastrado.",
  },
  {
    question: "Quanto tempo leva para o suporte responder?",
    answer:
      "Nosso suporte costuma responder em até 24h úteis, mas sempre buscamos ser mais rápidos.",
  },
  {
    question: "É possível alterar meus dados após o cadastro?",
    answer:
      "Sim! Você pode editar suas informações no seu painel de usuário após fazer login.",
  },
  {
    question: "Como entrar em contato com o suporte?",
    answer:
      "Você pode acessar a seção de contato ou enviar um e-mail para suporte@seudominio.com.",
  },
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleContact = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="Contact" className="bg-gray-50 dark:bg-[#000000]  py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-6">
        <SectionTitle
          title="Dúvidas Frequentes"
          paragraph="Encontre respostas para as perguntas mais comuns antes de nos contatar."
          center
        />

        <div className="mt-10 space-y-6">
          {Contacts.map((Contact, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
              >
                {/* Indicador de seleção à esquerda */}
                <div
                  className={`absolute left-0 top-0 h-full w-1 transition-all duration-300 ${
                    isOpen ? "bg-[#027B3F]" : "bg-transparent"
                  }`}
                />

                {/* Botão da pergunta */}
                <button
                  onClick={() => toggleContact(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      isOpen
                        ? "text-[#027B3F]"
                        : "text-gray-800 dark:text-gray-100"
                    }`}
                  >
                    {Contact.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#027B3F]" : "text-gray-400"
                    }`}
                  />
                </button>

                {/* Resposta com transição suave */}
                <div
                  className={`mt-4 grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-sm text-gray-600 dark:text-gray-300">
                    <p className="pt-2">{Contact.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;