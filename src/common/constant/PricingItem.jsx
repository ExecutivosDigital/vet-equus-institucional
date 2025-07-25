export const PricingItem = [
  {
    plan: "Básico",
    price: "R$79,90",
    yearly: "R$79,90",
    className: "lg:w-[25%] h-auto bg-[#E8E8E8] rounded-3xl ",
    features: [
      {
        name: "Ficha de animais e proprietários",
        active: true,
      },
      {
        name: "Agenda integrada de atendimentos",
        active: true,
      },
      {
        name: "Sem análise de exames com IA",
        active: false,
      },
      {
        name: "Sem IA clínica ou administrativa",
        active: false,
      },
    ],
  },
  {
    plan: "Intermediário",
    price: "R$397,90",
    yearly: "R$397,90",
    className: "lg:w-[25%] h-auto bg-[#E8E8E8] rounded-3xl ",
    features: [
      {
        name: "Todos os Recursos do Plano Básico",
        active: true,
      },
      {
        name: "Análise de exames com IA",
        active: true,
      },
      {
        name: "Suporte técnico especializado",
        active: true,
      },
      {
        name: "IA administrativa e de marketing não incluída",
        active: false,
      },
    ],
  },
  {
    plan: "Plano Completo para Legislativos",
    yearly: "R$997,00",
    price: "R$997,00",
    className:
      "lg:w-[25%] h-auto bg-gradient-to-b from-primary to-[#283620] text-white rounded-3xl ",
    features: [
      {
        name: "Todos os Recursos Liberados",
        active: true,
      },
      {
        name: "Suporte com humanos",
        active: true,
      },
      {
        name: "Controle financeiro completo",
        active: true,
      },
      {
        name: "Acesso completo à IA clínica e administrativa",
        active: true,
      },
    ],
  },
];
