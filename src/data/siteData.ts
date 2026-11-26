// Tudo que aparece na página vem daqui. Edite textos e nomes de imagens neste arquivo.
// As imagens ficam em: public/images/  (ex.: public/images/hero.jpg)

export interface BusinessHours {
  days: string;
  time: string;
}

export interface BusinessInfo {
  name: string;
  phoneDisplay: string;
  phoneLink: string;
  whatsappLink: string;
  email: string;
  address: {
    line1: string;
    line2: string;
  };
  mapsLink: string;
  hours: BusinessHours[];
}

export interface ImageAsset {
  file: string;
  alt: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  items: string[];
  featured?: boolean;
}

export type VehicleId = "carros" | "motos" | "camionetes";

export interface VehicleItem {
  id: VehicleId;
  title: string;
  image: ImageAsset;
}

export interface WorkExample extends ImageAsset {
  caption: string;
}

export const business: BusinessInfo = {
  name: "Paulão Lava-car",
  phoneDisplay: "(44) 99161-4259",
  phoneLink: "tel:+5544991614259",
  whatsappLink:
    "https://wa.me/5544991614259?text=" +
    encodeURIComponent(
      "Olá! Vim pelo site e gostaria de saber mais sobre a lavagem.",
    ),
  email: "espacocar1973@gmail.com",
  address: {
    line1: "Rua Takeshi Mitsuyasu, 587",
    line2: "Jardim Ypê – Paranavaí, PR",
  },
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("R. Takeshi Mitsuyasu, 587 - Jardim Ipe"),
  hours: [
    { days: "Segunda a sábado", time: "8h às 17h" },
    { days: "Domingo", time: "Fechado" },
  ],
};

// Imagem principal do topo da página
export const heroImage: ImageAsset = {
  file: "vehicles/car_silver_03.jpeg",
  alt: "Carro recém-lavado no Paulão Lava-car",
};

export const services: ServiceItem[] = [
  {
    id: "simples",
    title: "Lavagem simples",
    description:
      "Para o dia a dia: seu veículo limpo por fora, rápido e sem complicação.",
    items: ["Lavagem externa", "Enxágue e secagem", "Rodas e pneus limpos"],
  },
  {
    id: "completa",
    title: "Lavagem completa",
    description:
      "Limpeza por fora e por dentro, para entregar o veículo renovado.",
    items: [
      "Tudo da lavagem simples",
      "Aspiração interna",
      "Painel e portas limpos",
      "Vidros por dentro e por fora",
    ],
    featured: true,
  },
];

export const vehicles: VehicleItem[] = [
  {
    id: "carros",
    title: "Carros",
    image: { file: "vehicles/car_silver_04.jpeg", alt: "Carro sendo lavado" },
  },
  {
    id: "motos",
    title: "Motos",
    image: {
      file: "vehicles/motorcycle_black_01.jpeg",
      alt: "Moto sendo lavada",
    },
  },
  {
    id: "camionetes",
    title: "Camionetes",
    image: {
      file: "vehicles/car_silver_03.jpeg",
      alt: "Camionete sendo lavada",
    },
  },
];

// Serviços já feitos (grade em destaque). Troque os nomes dos arquivos pelos seus.
export const workExamples: WorkExample[] = [
  {
    file: "vehicles/car_silver_04.jpeg",
    alt: "Carro após lavagem completa",
    caption: "Lavagem completa",
  },
  {
    file: "vehicles/motorcycle_black_01.jpeg",
    alt: "Moto após lavagem",
    caption: "Moto",
  },
  {
    file: "vehicles/car_silver_03.jpeg",
    alt: "Camionete após lavagem",
    caption: "Camionete",
  },
  {
    file: "vehicles/car_inside_example.jpeg",
    alt: "Interior de carro aspirado",
    caption: "Interior",
  },
];

// Carrossel: adicione ou remova itens à vontade.
export const carouselImages: ImageAsset[] = [
  { file: "vehicles/car_black_01.jpeg", alt: "Serviço realizado 1" },
  { file: "vehicles/car_black_02.jpeg", alt: "Serviço realizado 2" },
  { file: "vehicles/car_black_03.jpeg", alt: "Serviço realizado 3" },
  { file: "vehicles/car_black_04.jpeg", alt: "Serviço realizado 4" },
  { file: "vehicles/car_black_05.jpeg", alt: "Serviço realizado 5" },
  { file: "vehicles/car_black_06.jpeg", alt: "Serviço realizado 6" },
  { file: "vehicles/car_inside_example.jpeg", alt: "Serviço realizado 7" },
  { file: "vehicles/car_red_01.jpeg", alt: "Serviço realizado 8" },
  { file: "vehicles/car_silver_01.jpeg", alt: "Serviço realizado 9" },
  { file: "vehicles/car_silver_02.jpeg", alt: "Serviço realizado 10" },
  { file: "vehicles/car_silver_03.jpeg", alt: "Serviço realizado 11" },
  { file: "vehicles/car_silver_04.jpeg", alt: "Serviço realizado 12" },
  { file: "vehicles/car_white_01.jpeg", alt: "Serviço realizado 13" },
  { file: "vehicles/car_white_02.jpeg", alt: "Serviço realizado 14" },
  { file: "vehicles/car_white_03.jpeg", alt: "Serviço realizado 15" },
  { file: "vehicles/car_white_04.jpeg", alt: "Serviço realizado 16" },
  { file: "vehicles/car_white_05.jpeg", alt: "Serviço realizado 17" },
  { file: "vehicles/car_white_06.jpeg", alt: "Serviço realizado 18" },
  { file: "vehicles/car_white_07.jpeg", alt: "Serviço realizado 16" },
  { file: "vehicles/motorcycle_black_01.jpeg", alt: "Serviço realizado 20" },
  { file: "vehicles/motorcycle_blue_01.jpeg", alt: "Serviço realizado 21" },
];
