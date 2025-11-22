import Product_1 from '../assets/productImg/1.png'
import Product_2 from '../assets/productImg/2.png'
import Product_3 from '../assets/productImg/3.png'
import Product_4 from '../assets/productImg/4.png'
import Product_5 from '../assets/productImg/5.png'
import Product_6 from '../assets/productImg/6.png'
import Product_7 from '../assets/productImg/7.png'
import Product_8 from '../assets/productImg/8.png'
import Product_9 from '../assets/productImg/9.png'
import Product_10 from '../assets/productImg/10.png'

import Product_11 from '../assets/productImg/11.png'
import Product_12 from '../assets/productImg/12.png'
import Product_13 from '../assets/productImg/13.png'
import Product_14 from '../assets/productImg/14.png'
import Product_15 from '../assets/productImg/15.png'
import Product_16 from '../assets/productImg/16.png'
import Product_17 from '../assets/productImg/17.png'
import Product_18 from '../assets/productImg/18.png'
import Product_19 from '../assets/productImg/19.png'
import Product_20 from '../assets/productImg/20.png'

import Product_21 from '../assets/productImg/21.png'
import Product_22 from '../assets/productImg/22.png'
import Product_23 from '../assets/productImg/23.png'
import Product_24 from '../assets/productImg/24.png'
import Product_25 from '../assets/productImg/25.png'
import Product_26 from '../assets/productImg/26.png'
import Product_27 from '../assets/productImg/27.png'
import Product_28 from '../assets/productImg/28.png'
import Product_29 from '../assets/productImg/29.png'
import Product_30 from '../assets/productImg/30.png'

import Product_31 from '../assets/productImg/31.png'
import Product_32 from '../assets/productImg/32.png'
import Product_33 from '../assets/productImg/33.png'

export const productImage = [
    Product_1,
    Product_2,
    Product_3,
    Product_4,
    Product_5,
    Product_6,
    Product_7,
    Product_8,
    Product_9,
    Product_10,
    Product_11,
    Product_12,
    Product_13,
    Product_14,
    Product_15,
    Product_16,
    Product_17,
    Product_18,
    Product_19,
    Product_20,
    Product_21,
    Product_22,
    Product_23,
    Product_24,
    Product_25,
    Product_26,
    Product_27,
    Product_28,
    Product_29,
    Product_30,
    Product_31,
    Product_32,
    Product_33,
]

// Background Colors Array
export const bgColors = [
  "#091020",
  "#822E38",
  "#8A6229",
  "#005399",
  "#5C82C2",
  "#FDDD00",
  "#44392F",
  "#1A4587",
  "#96704B",
  "#12150C",
  "#807F9E",
  "#050507",
  "#4F68A7",
  "#939598",
  "#0D3122",
  "#243538",
  "#07090F",
  "#ACA69D",
  "#00649A",
  "#1D1C26",
  "#8BD0E7",
  "#1B9ED9",
  "#89A95B",
  "#8D9358",
  "#0A0E1C",
  "#168BC8",
  "#110E11",
  "#B61E22",
  "#252329",
  "#3F3328",
  "#1C1A36",
  "#B25763",
  "#11181B"
];


export const products = [
  {
    id: "1",
    category: "instrument",
    title: "Precision Gear Assembly",
    image: productImage[0],
    alt:"product_image",
    imageBackground: bgColors[0],

    shortDesc:
      "High-torque, corrosion-resistant gears designed for heavy-duty machinery. Built for long-lasting performance under extreme industrial conditions.",

    longDesc: [
      "The Flow Wave Electromagnetic Flow Meter delivers accurate and reliable flow measurement for conductive liquids across a variety of industrial applications. Using advanced electromagnetic technology, it ensures precise readings without any pressure loss.",
      "Built with durable, corrosion-resistant materials, this flow meter performs efficiently in demanding environments such as water treatment, chemical processing, and food industries. Its digital display provides easy monitoring and seamless integration with control systems.",
      "With no moving parts and minimal maintenance, the Flow Wave Electromagnetic Flow Meter offers long service life and consistent performance — making it a dependable choice for industries that value precision and durability.",
      "Built with durable, corrosion-resistant materials, this flow meter performs efficiently in demanding environments such as water treatment."
    ],

    specifications: [
      { parameter: "Size Range", value: "15 mm to 600 mm" },
      { parameter: "Flow Velocity", value: "Up to 10 m/s" },
      { parameter: "Accuracy", value: "±0.5% of Reading" },
      { parameter: "Pressure Rating", value: "Up to 16 Bar" },
      { parameter: "Liner Material", value: "PTFE / Rubber / Neoprene" },
      { parameter: "Electrode Material", value: "SS316 / Hastelloy / Titanium" },
      { parameter: "Flange Material", value: "Carbon Steel / SS304" },
      { parameter: "Output Signal", value: "4–20 mA, Pulse Output" },
      { parameter: "Power Supply", value: "230V AC or 24V DC" },
      { parameter: "Protection Class", value: "IP65 / IP68 (Optional)" },
      { parameter: "Temperature Range", value: "Up to 120°C" }
    ]
  },
  {
    id: "2",
    category: "instrument",
    title: "Hydraulic Cylinder Unit",
    image: productImage[1],
    imageBackground: bgColors[1],

    shortDesc:
      "Engineered for smooth and powerful motion control in industrial and construction equipment. Ensures precision and reliability in every operation.",

    longDesc: [
      "The Flow Wave Electromagnetic Flow Meter delivers accurate and reliable flow measurement for conductive liquids across a variety of industrial applications. Using advanced electromagnetic technology, it ensures precise readings without any pressure loss.",
      "Built with durable, corrosion-resistant materials, this flow meter performs efficiently in demanding environments such as water treatment, chemical processing, and food industries. Its digital display provides easy monitoring and seamless integration with control systems.",
      "With no moving parts and minimal maintenance, the Flow Wave Electromagnetic Flow Meter offers long service life and consistent performance — making it a dependable choice for industries that value precision and durability.",
      "Built with durable, corrosion-resistant materials, this flow meter performs efficiently in demanding environments such as water treatment."
    ],

    specifications: [
      { parameter: "Size Range", value: "15 mm to 600 mm" },
      { parameter: "Flow Velocity", value: "Up to 10 m/s" },
      { parameter: "Accuracy", value: "±0.5% of Reading" },
      { parameter: "Pressure Rating", value: "Up to 16 Bar" },
      { parameter: "Liner Material", value: "PTFE / Rubber / Neoprene" },
      { parameter: "Electrode Material", value: "SS316 / Hastelloy / Titanium" },
      { parameter: "Flange Material", value: "Carbon Steel / SS304" },
      { parameter: "Output Signal", value: "4–20 mA, Pulse Output" },
      { parameter: "Power Supply", value: "230V AC or 24V DC" },
      { parameter: "Protection Class", value: "IP65 / IP68 (Optional)" },
      { parameter: "Temperature Range", value: "Up to 120°C" }
    ]
  },
  {
    id: "3",
    category: "instrument",
    title: "Stainless Steel Coupling",
    image: productImage[2],
    imageBackground: bgColors[2],

    shortDesc:
      "Durable coupling solution that guarantees seamless connection between rotating shafts. Designed for strength, stability, and vibration resistance.",

    longDesc: [
      "The Flow Wave Electromagnetic Flow Meter delivers accurate and reliable flow measurement for conductive liquids across a variety of industrial applications. Using advanced electromagnetic technology, it ensures precise readings without any pressure loss.",
      "Built with durable, corrosion-resistant materials, this flow meter performs efficiently in demanding environments such as water treatment, chemical processing, and food industries. Its digital display provides easy monitoring and seamless integration with control systems.",
      "With no moving parts and minimal maintenance, the Flow Wave Electromagnetic Flow Meter offers long service life and consistent performance — making it a dependable choice for industries that value precision and durability.",
      "Built with durable, corrosion-resistant materials, this flow meter performs efficiently in demanding environments such as water treatment."
    ],

    specifications: [
      { parameter: "Size Range", value: "15 mm to 600 mm" },
      { parameter: "Flow Velocity", value: "Up to 10 m/s" },
      { parameter: "Accuracy", value: "±0.5% of Reading" },
      { parameter: "Pressure Rating", value: "Up to 16 Bar" },
      { parameter: "Liner Material", value: "PTFE / Rubber / Neoprene" },
      { parameter: "Electrode Material", value: "SS316 / Hastelloy / Titanium" },
      { parameter: "Flange Material", value: "Carbon Steel / SS304" },
      { parameter: "Output Signal", value: "4–20 mA, Pulse Output" },
      { parameter: "Power Supply", value: "230V AC or 24V DC" },
      { parameter: "Protection Class", value: "IP65 / IP68 (Optional)" },
      { parameter: "Temperature Range", value: "Up to 120°C" }
    ]
  },
];
