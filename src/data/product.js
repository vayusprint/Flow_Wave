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
  {
  id: "4",
  category: "instrument",
  title: "Turbine Flow Meter",
  image: productImage[3],
  alt: "product_image",
  imageBackground: bgColors[3],

  shortDesc:
    "High-precision turbine flow meter designed for accurate measurement of liquid flow with low pressure drop and long service life.",

  longDesc: [
    "The Turbine Flow Meter offers highly accurate and repeatable measurements for clean, low-viscosity liquids. Its precision-engineered turbine rotor ensures stable performance across a wide flow range.",
    "With a low pressure drop design, it allows smooth fluid movement while maintaining excellent measurement sensitivity. It is widely used in water systems, petrochemical processes, fuel measurement, and industrial automation.",
    "The meter is available in high-durability materials including stainless steel and industrial-grade plastics, making it suitable for both standard and corrosive applications.",
    "Designed for long-term reliability, the Turbine Flow Meter provides fast response, high accuracy, and easy installation, making it a trusted solution for various flow monitoring requirements."
  ],

  specifications: [
    { parameter: "Accuracy", value: "±1% FSD" },
    { parameter: "Flow Range", value: "0.6 to 400 m³/h (depending on size)" },
    { parameter: "Pipe Sizes", value: "DN15 to DN200" },
    { parameter: "Material", value: "Plastic / Stainless Steel" },
    { parameter: "Operating Pressure", value: "Up to 25 Bar" },
    { parameter: "Temperature Range", value: "-20°C to 120°C" },
    { parameter: "Output Options", value: "Pulse Output / 4–20 mA (with transmitter)" },
    { parameter: "Connection Type", value: "Threaded / Flanged" },
    { parameter: "Viscosity Range", value: "Up to 5 cSt" },
    { parameter: "Protection Class", value: "IP65 / IP67" },
    { parameter: "Repeatability", value: "±0.2%" },
    { parameter: "Power Supply (Transmitter)", value: "12–24V DC" }
  ]
  },
  {
  id: "5",
  category: "instrument",
  title: "By-Pass Glass Tube Rotameter",
  image: productImage[4], 
  alt: "product_image",
  imageBackground: bgColors[4],

  shortDesc:
    "Versatile and reliable glass tube rotameter designed for accurate bypass-type flow measurement across various industrial applications.",

  longDesc: [
    "The By-Pass Glass Tube Rotameter is engineered for precise flow measurement in pipelines where direct flow monitoring is difficult or requires a secondary measurement setup. Its bypass design ensures smooth performance with minimal pressure drop.",
    "With a durable glass tube and high-quality materials like SS, MS, and PP, this rotameter is suitable for handling a variety of liquids and gases. It offers excellent chemical resistance and long operational life.",
    "Designed for easy installation and maintenance, it supports multiple scale options, allowing users to select the most suitable range for their process requirements.",
    "This rotameter is commonly used in water treatment plants, chemical industries, cooling systems, and general industrial applications requiring reliable and economical flow measurement."
  ],

  specifications: [
    { parameter: "Accuracy", value: "±2% FSD" },
    { parameter: "Flow Range", value: "10 LPH to 30,000 LPH (depending on model)" },
    { parameter: "Material Options", value: "SS / MS / PP" },
    { parameter: "Tube Material", value: "Borosilicate Glass" },
    { parameter: "Operating Pressure", value: "Up to 10 Bar" },
    { parameter: "Operating Temperature", value: "Up to 80°C" },
    { parameter: "Scale Options", value: "LPM / LPH / M³/H" },
    { parameter: "Connection Type", value: "Flanged / Threaded" },
    { parameter: "End Fittings", value: "SS304 / SS316 / MS" },
    { parameter: "Float Material", value: "SS316 / PTFE / PVC" },
    { parameter: "Mounting", value: "Vertical, In-Line" },
    { parameter: "Application Medium", value: "Liquids & Gases" }
  ]
  },
  {
    id: "6",
    category: "instrument",
    title: "Cable Float Level Switch",
    image: productImage[5], // id 6 → index 5
    alt: "product_image",
    imageBackground: bgColors[5],

    shortDesc:
      "Compact and reliable cable float level switch ideal for point-level detection in a wide range of liquid applications.",

    longDesc: [
      "The Cable Float Level Switch is designed for efficient and accurate point-level detection in tanks, wells, reservoirs, and industrial liquid storage systems. Its compact structure makes it suitable for installations where space is limited.",
      "Built to perform reliably with various liquid types, it offers a long operational life and consistent switching performance even in harsh environments.",
      "The switch is easy to install, simple to adjust, and provides dependable liquid-level monitoring for applications such as water treatment, chemical processing, and industrial automation.",
      "Constructed using high-quality materials like Stainless Steel, PP, and Brass, the level switch ensures durability, chemical resistance, and stable performance across demanding applications."
    ],

    specifications: [
      { parameter: "Material", value: "Stainless Steel / PP / Brass" },
      { parameter: "Switch Type", value: "Cable Float Type" },
      { parameter: "Cable Length", value: "2m to 20m (customizable)" },
      { parameter: "Operating Temperature", value: "0°C to 80°C" },
      { parameter: "Operating Pressure", value: "Up to 5 Bar" },
      { parameter: "Applications", value: "Water, Effluent, Chemical Solutions, Industrial Liquids" },
      { parameter: "Output", value: "SPST / SPDT (model dependent)" },
      { parameter: "Mounting", value: "Top Mount / Suspension" },
      { parameter: "Protection Class", value: "IP68" },
      { parameter: "Float Material", value: "PP / SS316" },
      { parameter: "Electrical Rating", value: "10A @ 250V AC" },
      { parameter: "Installation", value: "Simple tie-weight or counterweight setup" }
    ]
  },
  {
  id: "7",
  category: "instrument",
  title: "L Type Level Switch",
  image: productImage[6], // id 7 → index 6
  alt: "product_image",
  imageBackground: bgColors[6],

  shortDesc:
    "Reliable side-mounted L-type float level switch designed for precise liquid level detection in tanks and industrial systems.",

  longDesc: [
    "The L Type Level Switch is a compact, side-mounted float switch engineered for accurate liquid level monitoring in tanks, vessels, and industrial containers. Its L-shaped design allows easy installation from the side wall where top mounting is not feasible.",
    "Constructed using high-quality stainless steel and durable float materials, it ensures excellent chemical resistance and long-term reliability, even in harsh or corrosive environments.",
    "This switch provides precise ON/OFF switching for pump control, alarm indication, and process automation. It is suitable for water, oils, chemicals, and a wide range of industrial liquids.",
    "With simple installation and minimal maintenance, the L Type Level Switch is widely used in water treatment plants, chemical processing units, and industrial automation systems."
  ],

  specifications: [
    { parameter: "Material", value: "SS304 / SS316 (float & stem)" },
    { parameter: "Mounting Type", value: "Side Mounted (L-Type)" },
    { parameter: "Switching Output", value: "SPST / SPDT (model dependent)" },
    { parameter: "Operating Temperature", value: "0°C to 120°C" },
    { parameter: "Operating Pressure", value: "Up to 10 Bar" },
    { parameter: "Float Material", value: "SS316 or PP (application based)" },
    { parameter: "Electrical Rating", value: "100V AC/DC to 250V AC, 0.5A to 5A" },
    { parameter: "Cable Connection", value: "2-Core or 3-Core Cable" },
    { parameter: "Medium Compatibility", value: "Water, Oil, Diesel, Chemicals" },
    { parameter: "Protection Class", value: "IP65 / IP67" },
    { parameter: "Switching Differential", value: "12–20 mm" },
    { parameter: "Application", value: "Pump Control, High/Low Level Alarm, Industrial Automation" }
  ]
  },
  {
  id: "8",
  category: "instrument",
  title: "Side Mounted Level Switch",
  image: productImage[7], 
  alt: "product_image",
  imageBackground: bgColors[7],

  shortDesc:
    "Reliable side-mounted float level switch designed for accurate and efficient liquid level control across various industrial applications.",

  longDesc: [
    "The Side Mounted Level Switch is a simple yet highly effective device for monitoring and controlling liquid levels in tanks and industrial vessels. Its float-operated mechanism ensures stable and dependable switching.",
    "Designed to work with a wide range of liquids, it offers excellent versatility, making it suitable for water, oils, chemicals, and general industrial applications.",
    "With a compact form and easy installation, the switch supports multiple mounting orientations, allowing efficient integration even in space-constrained setups.",
    "Manufactured using high-quality Stainless Steel and PP materials, the level switch provides long service life, chemical resistance, and reliable performance even under harsh operating conditions."
  ],

  specifications: [
    { parameter: "Material", value: "Stainless Steel / PP" },
    { parameter: "Mounting Type", value: "Side Mounted" },
    { parameter: "Switching Type", value: "Float Operated, SPST/SPDT" },
    { parameter: "Operating Temperature", value: "0°C to 120°C" },
    { parameter: "Operating Pressure", value: "Up to 10 Bar" },
    { parameter: "Float Material", value: "PP / SS316" },
    { parameter: "Electrical Rating", value: "250V AC, 5A (typical)" },
    { parameter: "Process Connection", value: "Threaded / Flanged (optional)" },
    { parameter: "Medium Compatibility", value: "Water, Oils, Chemicals" },
    { parameter: "Protection Class", value: "IP65 / IP67" },
    { parameter: "Application", value: "Level Control, Pump Automation, High/Low Level Alarm" },
    { parameter: "Installation", value: "Horizontal Side Mount" }
  ]
  },
  {
  id: "9",
  category: "instrument",
  title: "Displacer Type Float Level Switch",
  image: productImage[8], // id 9 → index 8
  alt: "product_image",
  imageBackground: bgColors[8],

  shortDesc:
    "Heavy-duty displacer-type float level switch designed for accurate level detection in high-temperature and corrosive liquid environments.",

  longDesc: [
    "The Displacer Type Float Level Switch is engineered for reliable and precise level detection using a robust mechanical displacer mechanism. This design ensures stable operation even under varying liquid densities and turbulence.",
    "Built to withstand extreme conditions, the switch is ideal for high-temperature, corrosive, and chemically aggressive liquids. Its rugged construction ensures long-term performance in demanding industrial applications.",
    "The displacer mechanism provides highly accurate switching for pump control, alarms, and process automation, making it suitable for industries like chemical processing, petrochemical plants, and water treatment.",
    "With a wide operating temperature range and materials like Stainless Steel and PP, the displacer switch offers durability, chemical resistance, and consistent performance across harsh environments."
  ],

  specifications: [
    { parameter: "Material", value: "Stainless Steel / PP" },
    { parameter: "Operating Principle", value: "Displacer-Type Float Mechanism" },
    { parameter: "Operating Temperature", value: "Up to 120°C" },
    { parameter: "Operating Pressure", value: "Up to 15 Bar" },
    { parameter: "Switch Output", value: "SPST / SPDT (model dependent)" },
    { parameter: "Medium Compatibility", value: "Water, Oils, Chemicals, Corrosive Liquids" },
    { parameter: "Installation Type", value: "Top or Side Mount (depending on model)" },
    { parameter: "Electrical Rating", value: "5A @ 250V AC" },
    { parameter: "Float / Displacer Material", value: "SS316 / PP" },
    { parameter: "Protection Class", value: "IP65 / IP67" },
    { parameter: "Application", value: "High/Low Level Alarms, Pump Automation, Process Control" },
    { parameter: "Temperature Resistance", value: "High-temperature operation up to 120°C" }
  ]
  },
  {
  id: "10",
  category: "instrument",
  title: "Top Mounted Mini Level Switch",
  image: productImage[9], // id 10 → index 9
  alt: "product_image",
  imageBackground: bgColors[9],

  shortDesc:
    "Compact top-mounted mini level switch ideal for point-level detection in small tanks and limited space environments.",

  longDesc: [
    "The Top Mounted Mini Level Switch is designed for precise and dependable point-level detection, especially in compact tanks, small containers, and applications where space is limited. Its mini design ensures smooth installation even in tight spaces.",
    "Built for reliable performance, the switch works efficiently with various liquids including water, oil, chemicals, and industrial fluids, making it suitable for versatile use cases.",
    "Featuring easy installation and simple adjustment, this level switch is ideal for applications requiring quick setup and minimal maintenance.",
    "Constructed using high-quality materials such as Stainless Steel, PP, and Brass, the switch offers excellent durability, corrosion resistance, and long service life in harsh industrial environments."
  ],

  specifications: [
    { parameter: "Material", value: "Stainless Steel / PP / Brass" },
    { parameter: "Mounting Type", value: "Top Mounted" },
    { parameter: "Design", value: "Miniature Float Switch" },
    { parameter: "Switch Type", value: "SPST / SPDT (model dependent)" },
    { parameter: "Operating Temperature", value: "0°C to 80°C" },
    { parameter: "Operating Pressure", value: "Up to 5 Bar" },
    { parameter: "Float Material", value: "PP / SS316" },
    { parameter: "Electrical Rating", value: "10A @ 250V AC (typical)" },
    { parameter: "Cable/Connector", value: "2-Core Cable or Terminal Connection" },
    { parameter: "Suitable Media", value: "Water, Oil, Diesel, Chemicals" },
    { parameter: "Installation", value: "Vertical Top Mount" },
    { parameter: "Application", value: "Point-Level Detection, Pump Control, Fluid Monitoring" }
  ]
},
];
