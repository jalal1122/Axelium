const windowsData = [
  {
    category: "Fenêtres PVC",
    items: [
      "IGLO EDGE",
      "IGLO Energy",
      "IGLO Energy Classic",
      "IGLO ENERGY ALUCOVER",
      "IGLO 5",
      "IGLO 5 Classic",
      "IGLO Light",
      "IGLO EXT",
      "IGLO PREMIER",
      "IDEAL",
    ],
  },
  {
    category: "Fenêtres en aluminium",
    items: ["MB-86N SI", "MB-79N SI", "MB-70HI", "MB-70", "MB-45"],
  },
  {
    category: "Fenêtres en bois",
    items: ["SOFTLINE - 68, 78, 88"],
  },
  {
    category: "Fenêtres mixtes bois-aluminium",
    items: ["DUOLINE - 68, 78, 88"],
  },
];

const doorsData = [
  {
    category: "Porte d'entrée en PVC",
    items: ["IGLO ENERGY", "IGLO 5", "IGLO EDGE"],
  },
  {
    category: "Portes en aluminium",
    items: [
      "D-ART Line",
      "MB-86N SI",
      "MB-79N SI+",
      "MB-70HI",
      "MB-70",
      "MB-45",
      "MB-78EI Fire-Doors",
      "PIVOT",
    ],
  },
  {
    category: "Porte d'entrée en bois",
    items: ["SOFTLINE 68, 78, 88"],
  },
];

const slidingSystemsData = [
  {
    category: "Levant coulissant HS",
    items: [
      "IGLO-HS",
      "IGLO-HS ALUCOVER",
      "MB-77HS HI",
      "MB-77HS HI MONORAIL",
      "MB-59HS HI",
      "SOFTLINE HS",
      "DUOLINE HS",
    ],
  },
  {
    category: "Coulissant",
    items: [
      "IGLO EDGE SLIDE",
      "IGLO SLIDE",
      "MB-SLIDE",
      "COR VISION",
      "COR VISION PLUS",
    ],
  },
  {
    category: "Accordéon",
    items: ["MB-86 FOLD LINE HD", "SOFTLINE 86", "IGLO EDGE"],
  },
  {
    category: "Oscillo - coulissant PSK",
    items: [
      "IGLO ENERGY PSK",
      "IGLO ENERGY CLASSIC PSK",
      "IGLO 5 PSK",
      "IGLO 5 CLASSIC PSK",
      "IGLO LIGHT PSK",
      "MB-70/MB-70HI PSK",
      "SOFTLINE PSK",
      "DUOLINE PSK",
    ],
  },
];

const shuttersData = [
  {
    category: "Rénovation",
    items: ["Volets roulants en aluminium"],
  },
  {
    category: "MONOBLOC",
    items: [
      "Volets roulants en PVC",
      "Volets roulants avec caisson en polystyrène",
    ],
  },
];

const Products = [
  {
    title: "Fenêtres",
    details: windowsData,
  },
  {
    title: "Porte d'entrée",
    details: doorsData,
  },
  {
    title: "Systèmes coulissants",
    details: slidingSystemsData,
  },
  {
    title: "Volets roulants",
    details: shuttersData,
  },
];

export default Products;
