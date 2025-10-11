const windowsData = [
  {
    category: "Fenêtres PVC",
    type: "windows",
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
    type: "windows",
    items: ["MB-86N SI", "MB-79N SI", "MB-70HI", "MB-70", "MB-45"],
  },
  {
    category: "Fenêtres en bois",
    type: "windows",
    items: ["SOFTLINE - 68, 78, 88"],
  },
  {
    category: "Fenêtres mixtes bois-aluminium",
    type: "windows",
    items: ["DUOLINE - 68, 78, 88"],
  },
];

const doorsData = [
  {
    category: "Porte d'entrée en PVC",
    type: "doors",
    items: ["Iglo Energy", "Iglo 5", "Iglo Edge"],
  },
  {
    category: "Portes en aluminium",
    type: "doors",
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
    type: "doors",
    items: ["SOFTLINE 68, 78, 88"],
  },
];

const slidingSystemsData = [
  {
    category: "Levant coulissant HS",
    type: "terracesystems",
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
    type: "terracesystems",
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
    type: "terracesystems",
    items: ["MB-86 Fold Line HD", "SOFTLINE 68"],
  },
  {
    category: "Oscillo - coulissant PSK",
    type: "terracesystems",
    items: [
      "IGLO ENERGY PSK",
      "IGLO ENERGY CLASSIC PSK",
      "IGLO 5 PSK",
      "IGLO 5 CLASSIC PSK",
      "IGLO LIGHT PSK",
      "MB-70 and MB-70HI PSK",
      "Softline PSK",
      "DUOLINE PSK",
    ],
  },
];

const shuttersData = [
  {
    category: "Rénovation",
    type: "shutters",
    items: ["Volets roulants en aluminium"],
  },
  {
    category: "MONOBLOC",
    type: "shutters",
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
    type: "doors",
    details: doorsData,
  },
  {
    title: "Systèmes coulissants",
    type: "slidingSystems",
    details: slidingSystemsData,
  },
  {
    title: "Volets roulants",
    type: "shutters",
    details: shuttersData,
  },
];

export default Products;
