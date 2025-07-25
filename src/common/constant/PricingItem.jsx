export const PricingItem = [
  {
    plan: "Básico",
    price: "R$79,90",
    yearly: "R$79,90",
    className: "lg:w-[25%] h-auto bg-[#E8E8E8] rounded-3xl ",
    features: [
      {
        name: "Notícias e Novidades",
        active: true,
      },
      {
        name: "Dados de Deputados",
        active: true,
      },
      {
        name: "Dados de Plenários",
        active: true,
      },
      {
        name: "IA Legis Dados",
        active: false,
      },
    ],
  },
  {
    plan: "Intermediário",
    price: "R$397,90",
    yearly: "R$397,90",
    className:
      "lg:w-[25%] h-auto bg-gradient-to-b from-[#495464] to-transparent text-white rounded-3xl ",
    features: [
      {
        name: "Todos os Recursos do Plano Básico",
        active: true,
      },
      {
        name: "Suporte com IA",
        active: true,
      },
      {
        name: "IA Legis Dados",
        active: true,
      },
      {
        name: "IA Preditiva",
        active: false,
      },
    ],
  },
  {
    plan: "Plano Completo para Legislativos",
    yearly: "R$997,00",
    price: "R$997,00",
    className: "lg:w-[25%] h-auto bg-[#E8E8E8] rounded-3xl ",
    features: [
      {
        name: "Todos os Recursos Liberados",
        active: true,
      },
      {
        name: "Suporte personalizado",
        active: true,
      },
      {
        name: "IA com prioridade",
        active: true,
      },
      {
        name: "IA Preditiva",
        active: true,
      },
    ],
  },
];
