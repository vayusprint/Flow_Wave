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
  {
  id: "11",
  category: "instrument",
  title: "Full View Type Sight Glass",
  image: productImage[10], // id 11 → index 10
  alt: "product_image",
  imageBackground: bgColors[10],

  shortDesc:
    "Full-view sight glass offering a clear and unobstructed view of liquid flow for accurate process monitoring.",

  longDesc: [
    "The Full View Type Sight Glass provides a complete 360-degree visual inspection window, allowing operators to clearly observe liquid flow, color, clarity, and movement within pipelines and tanks.",
    "With its transparent borosilicate glass body, this sight glass ensures maximum visibility, making it ideal for critical process monitoring in chemical, pharmaceutical, food, and water treatment industries.",
    "It is engineered with high-quality materials including MS, SS, PP, and borosilicate glass to ensure durability, corrosion resistance, and long-lasting operation even under demanding conditions.",
    "Easy to install and maintain, this sight glass is suitable for tanks, pipelines, reactors, and various process vessels where continuous visual observation is essential."
  ],

  specifications: [
    { parameter: "Material", value: "Borosilicate Glass / MS / SS / PP" },
    { parameter: "Design Type", value: "Full View, 360° Visibility" },
    { parameter: "Operating Pressure", value: "Up to 10 Bar (depending on model)" },
    { parameter: "Operating Temperature", value: "0°C to 120°C" },
    { parameter: "End Connections", value: "Flanged / Threaded" },
    { parameter: "Application", value: "Pipelines, Tanks, Vessels, Processing Lines" },
    { parameter: "Glass Type", value: "Heat & Chemical Resistant Borosilicate Glass" },
    { parameter: "Body Material Options", value: "MS Painted / SS304 / SS316 / PP" },
    { parameter: "Visibility", value: "360° Unobstructed Viewing" },
    { parameter: "Maintenance", value: "Easy to Clean & Replace" },
    { parameter: "Seal Material", value: "Neoprene / PTFE (optional)" },
    { parameter: "Industries Used", value: "Chemical, Food, Pharma, Water Treatment" }
  ]
  },
  {
  id: "12",
  category: "instrument",
  title: "Float & Board Level Indicator",
  image: productImage[11], // id 12 → index 11
  alt: "product_image",
  imageBackground: bgColors[11],

  shortDesc:
    "Reliable float and board level indicator offering clear visual level reading for transparent and opaque liquids.",

  longDesc: [
    "The Float & Board Level Indicator is a widely used mechanical level monitoring device designed to provide direct visual indication of liquid levels in large storage tanks and industrial vessels.",
    "It operates on a simple float-driven mechanism where the float moves with the liquid level, pulling the board indicator along a scale for easy and accurate reading—even from a distance.",
    "Suitable for both transparent and opaque liquids, the indicator is built to withstand high temperatures and harsh industrial conditions. Its rugged construction ensures long service life and dependable performance.",
    "With various mounting configurations and material options like MS, SS304, SS316, and PP, this level indicator is ideal for industries such as chemical processing, water treatment, petroleum, and food manufacturing."
  ],

  specifications: [
    { parameter: "Material", value: "MS / SS304 / SS316 / PP" },
    { parameter: "Type", value: "Mechanical Float & Board Level Indicator" },
    { parameter: "Maximum Temperature", value: "Up to 250°C" },
    { parameter: "Operating Pressure", value: "Atmospheric" },
    { parameter: "Tank Height Compatibility", value: "Up to 20 meters (custom options available)" },
    { parameter: "Float Material", value: "SS316 or PP depending on application" },
    { parameter: "Scale Type", value: "Front Indication Scale with Board" },
    { parameter: "Suitable Liquids", value: "Transparent & Opaque, Water, Oils, Chemicals" },
    { parameter: "Mounting Options", value: "Top Mount / Side Mount" },
    { parameter: "Application", value: "Industrial Tanks, Reservoirs, Chemical Processing Units" },
    { parameter: "Indicator Visibility", value: "Long-distance readable scale" },
    { parameter: "Maintenance", value: "Low maintenance, easy installation" }
  ]
  },
  {
  id: "13",
  category: "instrument",
  title: "Reflex & Transparent Level Indicator",
  image: productImage[12], // id 13 → index 12
  alt: "product_image",
  imageBackground: bgColors[12],

  shortDesc:
    "High-clarity reflex and transparent level indicator suitable for high-temperature liquid level monitoring in industrial applications.",

  longDesc: [
    "The Reflex & Transparent Level Indicator is designed to provide clear, sharp visual indication of liquid levels in both transparent and opaque fluids. Using specially designed glass prisms, the reflex type enhances visibility by reflecting light for darker liquids, while the transparent type provides a direct view of the liquid column.",
    "Engineered for high-temperature and high-pressure applications, this level indicator delivers reliable performance in chemical plants, boilers, refineries, and other demanding environments.",
    "Constructed using robust materials such as MS, SS304, SS316, and PP, it offers excellent durability and long service life, even in corrosive and extreme industrial conditions.",
    "With multiple mounting options and strong structural design, the Reflex & Transparent Level Indicator ensures accurate monitoring, easy maintenance, and dependable operation across a wide range of process industries."
  ],

  specifications: [
    { parameter: "Material", value: "MS / SS304 / SS316 / PP" },
    { parameter: "Type", value: "Reflex Type / Transparent Type Level Indicator" },
    { parameter: "Maximum Temperature", value: "Up to 250°C" },
    { parameter: "Operating Pressure", value: "Up to 40 Bar (depending on model)" },
    { parameter: "Glass Type", value: "Borosilicate Reflex Glass / Transparent Glass" },
    { parameter: "Connection Type", value: "Flanged / Threaded" },
    { parameter: "Suitable Liquids", value: "Transparent & Opaque Liquids, Chemicals, Oils, Water" },
    { parameter: "Gasket Material", value: "Graphite / PTFE" },
    { parameter: "Mounting Options", value: "Side Mount / Front Mount" },
    { parameter: "Application", value: "Boilers, Chemical Tanks, Pressure Vessels, Industrial Processes" },
    { parameter: "Visibility", value: "High-clarity liquid level indication" },
    { parameter: "Maintenance", value: "Easy cleaning and replacement of glass" }
  ]
  },
  {
  id: "14",
  category: "instrument",
  title: "Tubular Level Indicator",
  image: productImage[13], // id 14 → index 13
  alt: "product_image",
  imageBackground: bgColors[13],

  shortDesc:
    "Simple and cost-effective tubular level indicator offering clear visibility for monitoring liquid levels across various industrial applications.",

  longDesc: [
    "The Tubular Level Indicator is a widely used and economical solution for liquid level monitoring in storage tanks, process vessels, and industrial containers. Its transparent tube design allows operators to visually inspect liquid levels with high clarity.",
    "Suitable for a variety of liquids, this indicator ensures accurate and dependable monitoring in chemical processing, water treatment, oil storage, and general industrial applications.",
    "With a straightforward construction, the indicator offers excellent visibility even in varying lighting conditions. Maintenance is minimal, and installation is quick and user-friendly.",
    "Available in multiple material options including MS, SS304, SS316, PP, and FEP-lined versions, the tubular level indicator provides superior corrosion resistance and long service life in harsh environments."
  ],

  specifications: [
    { parameter: "Material", value: "MS / SS304 / SS316 / PP / MS + FEP Lined / SS + FEP Lined" },
    { parameter: "Type", value: "Tubular Level Indicator (See-through)" },
    { parameter: "Length (C to C)", value: "300 mm to 5000 mm" },
    { parameter: "Tube Material", value: "Borosilicate Glass / Polycarbonate (optional)" },
    { parameter: "Operating Temperature", value: "Up to 120°C (higher with FEP lining)" },
    { parameter: "Operating Pressure", value: "Up to 10 Bar" },
    { parameter: "Suitable Liquids", value: "Water, Oils, Chemicals, Diesels" },
    { parameter: "Connection Type", value: "Flanged / Threaded" },
    { parameter: "Scale Visibility", value: "Clear reading under different lighting conditions" },
    { parameter: "Mounting Options", value: "Side Mounted on Tanks/Vessels" },
    { parameter: "Application", value: "Chemical Plants, Food Processing, Water Treatment, Oil Storage" },
    { parameter: "Maintenance", value: "Simple tube replacement and easy servicing" }
  ]
  },
  {
  id: "15",
  category: "instrument",
  title: "Piezometer",
  image: productImage[14], // id 15 → index 14
  alt: "product_image",
  imageBackground: bgColors[14],

  shortDesc:
    "High-accuracy piezometer designed for reliable liquid level and groundwater monitoring with long-term stability.",

  longDesc: [
    "The Piezometer is a precision instrument used for measuring liquid levels, groundwater depth, and pressure in wells, boreholes, and industrial tanks. Its robust design ensures highly accurate readings even in challenging environmental conditions.",
    "Engineered with durable stainless steel construction, it provides excellent resistance to corrosion, moisture, and chemical exposure, making it ideal for long-term field monitoring.",
    "With a wide measurement range of up to 200 meters, the piezometer is suitable for hydrological studies, environmental monitoring, water resource management, and industrial liquid level applications.",
    "Featuring a 24V DC input and 4–20 mA output, it offers seamless integration with SCADA, PLC, and data logging systems for continuous and reliable monitoring."
  ],

  specifications: [
    { parameter: "Material", value: "Stainless Steel" },
    { parameter: "Measurement Range", value: "0 to 200 meters" },
    { parameter: "Output Signal", value: "4–20 mA" },
    { parameter: "Power Supply", value: "24V DC" },
    { parameter: "Operating Temperature", value: "0°C to 80°C" },
    { parameter: "Accuracy", value: "High accuracy for groundwater and liquid level measurement" },
    { parameter: "Application", value: "Groundwater Monitoring, Borewell Measurement, Industrial Tanks" },
    { parameter: "Construction", value: "Corrosion-resistant stainless steel body" },
    { parameter: "Cable Length", value: "Custom length available" },
    { parameter: "Protection Class", value: "IP68 (submersible)" },
    { parameter: "Output Type", value: "Two-wire current loop" },
    { parameter: "Suitable Media", value: "Water, Groundwater, Process Liquids" }
  ]
  },
  {
  id: "16",
  category: "instrument",
  title: "Hygienic Pressure Transmitter",
  image: productImage[15], // id 16 → index 15
  alt: "product_image",
  imageBackground: bgColors[15],

  shortDesc:
    "Hygienic pressure transmitter designed for food, pharma, and sanitary applications with CIP/SIP compatibility.",

  longDesc: [
    "The Hygienic Pressure Transmitter is engineered for industries that require strict hygiene, such as food processing, pharmaceuticals, dairy, and beverage manufacturing. Its flush diaphragm design prevents contamination and ensures easy cleaning.",
    "Built from corrosion-resistant stainless steel, the transmitter delivers highly stable and accurate pressure measurements even in demanding sanitary environments.",
    "The compact construction makes it suitable for installations where space is limited, while its CIP/SIP compatible design supports high-temperature sterilization without affecting performance.",
    "With a 24V DC input and 4–20 mA output, the pressure transmitter ensures seamless integration with PLC, SCADA, and automation systems."
  ],

  specifications: [
    { parameter: "Material", value: "Stainless Steel (SS316L)" },
    { parameter: "Process Connection", value: "Tri-Clamp / SMS / DIN / ISO (optional)" },
    { parameter: "Output Signal", value: "4–20 mA (2-wire system)" },
    { parameter: "Power Supply", value: "24V DC" },
    { parameter: "Design Type", value: "Flush Diaphragm Hygienic Design" },
    { parameter: "Operating Pressure Range", value: "0–10 bar / 0–16 bar / 0–25 bar (optional ranges)" },
    { parameter: "Accuracy", value: "±0.25% to ±0.5% FS" },
    { parameter: "Operating Temperature", value: "-20°C to 150°C (CIP/SIP compatible)" },
    { parameter: "Seal Material", value: "EPDM / PTFE / Silicone" },
    { parameter: "Ingress Protection", value: "IP67 / IP68" },
    { parameter: "Application", value: "Food, Pharma, Dairy, Beverage, Biotech" },
    { parameter: "Cleaning Compatibility", value: "CIP (Clean-in-Place) & SIP (Sterilize-in-Place)" }
  ]
  },
  {
  id: "17",
  category: "instrument",
  title: "Electronic Pressure Transmitters",
  image: productImage[16], // id 17 → index 16
  alt: "product_image",
  imageBackground: bgColors[16],

  shortDesc:
    "High-accuracy electronic pressure transmitters designed for diverse industrial applications with multiple output options and compact installation.",

  longDesc: [
    "Electronic Pressure Transmitters provide precise and stable pressure measurement for a wide range of industrial processes. Their solid-state sensing technology ensures high accuracy and long-term reliability across varying pressure conditions.",
    "With a compact and robust stainless-steel construction, these transmitters are suitable for applications involving gases, liquids, steam, and hydraulic systems.",
    "Offering multiple output options such as 4–20 mA and 0–5 VDC, they allow seamless integration with PLC, SCADA, DCS, and automation systems.",
    "Available in threaded, Tri-Clamp, and other process connection types, these transmitters are versatile and suitable for chemical, water treatment, HVAC, food processing, oil & gas, and general industrial applications."
  ],

  specifications: [
    { parameter: "Material", value: "Stainless Steel (SS316L)" },
    { parameter: "Input Supply", value: "24V DC" },
    { parameter: "Output Signal", value: "4–20 mA / 0–5 VDC / 0–10 VDC (optional)" },
    { parameter: "Accuracy", value: "±0.5% FS" },
    { parameter: "Pressure Range", value: "0–1 bar to 0–600 bar (various ranges)" },
    { parameter: "Process Connection", value: "Threaded (1/4” NPT, BSP), Tri-Clamp, etc." },
    { parameter: "Operating Temperature", value: "-20°C to 85°C" },
    { parameter: "Overpressure Limit", value: "150% of rated pressure" },
    { parameter: "Ingress Protection", value: "IP65 / IP67 / IP68 (model dependent)" },
    { parameter: "Sensor Type", value: "Strain Gauge / Piezoresistive" },
    { parameter: "Suitable Media", value: "Gas, Water, Oil, Air, Steam, Hydraulic Fluids" },
    { parameter: "Application", value: "Industrial Automation, Chemical Plants, HVAC, Water Treatment, Oil & Gas" }
  ]
  },
  {
  id: "18",
  category: "instrument",
  title: "Low Flow Acrylic Body Rotameter",
  image: productImage[17], // id 18 → index 17
  alt: "product_image",
  imageBackground: bgColors[17],

  shortDesc:
    "Low-flow acrylic rotameter designed for precise measurement of liquids and gases in laboratory and industrial applications.",

  longDesc: [
    "The Low Flow Acrylic Body Rotameter is designed for accurate measurement of small flow rates, making it ideal for laboratory setups, dosing systems, pilot plants, gas sampling, and low-flow industrial applications.",
    "Its clear acrylic construction provides excellent visibility of the float and flow scale, ensuring easy reading even in challenging lighting conditions. The meter is lightweight, corrosion-resistant, and suitable for a wide range of liquids and gases.",
    "Featuring a compact design, the rotameter is easy to install in tight spaces and requires minimal maintenance due to its simple mechanical structure.",
    "Available with stainless steel, brass, or polymer fittings, this rotameter offers durable performance and reliable flow measurement across varying process conditions."
  ],

  specifications: [
    { parameter: "Body Material", value: "Acrylic (PMMA)" },
    { parameter: "Flow Range", value: "10 LPH to 500 LPH (model dependent)" },
    { parameter: "Float Material", value: "SS316 / PTFE / Glass (application based)" },
    { parameter: "End Connections", value: "SS316 / Brass / PVC" },
    { parameter: "Operating Temperature", value: "0°C to 50°C" },
    { parameter: "Operating Pressure", value: "Up to 5 Bar" },
    { parameter: "Suitable Media", value: "Liquids and Gases" },
    { parameter: "Scale", value: "Direct reading, engraved on acrylic body" },
    { parameter: "Accuracy", value: "±2% FSD" },
    { parameter: "Mounting", value: "Vertical, In-Line" },
    { parameter: "Valve Option", value: "Needle valve for fine control (optional)" },
    { parameter: "Applications", value: "Labs, Pilot Plants, Dosing Systems, Gas Flow Monitoring" }
  ]
  },
  {
  id: "19",
  category: "instrument",
  title: "Gang Rotameter",
  image: productImage[18], // id 19 → index 18
  alt: "product_image",
  imageBackground: bgColors[18],

  shortDesc:
    "Multi-tube gang rotameter designed for simultaneous and accurate measurement of multiple low flow rates.",

  longDesc: [
    "The Gang Rotameter is a multi-tube flow measurement device used for monitoring several flow lines at once. It is ideal for laboratory, gas sampling, process control, and applications requiring precise low-flow measurement.",
    "Each tube operates independently, allowing accurate monitoring of individual flows while providing a consolidated and compact measurement system.",
    "Constructed with high-quality materials such as aluminum and stainless steel, these rotameters offer durability, chemical resistance, and long service life even in demanding industrial conditions.",
    "Its compact and lightweight design makes it easy to install in limited spaces, while the clear acrylic body ensures excellent visibility and easy reading of flow values."
  ],

  specifications: [
    { parameter: "Material", value: "Aluminum / Stainless Steel" },
    { parameter: "Body Type", value: "Acrylic Multi-Tube (Gang) Rotameter" },
    { parameter: "Number of Tubes", value: "2 to 6 tubes (customizable)" },
    { parameter: "Accuracy", value: "±0.5% FSD" },
    { parameter: "Flow Range", value: "10 LPH to 200 LPH per tube (depending on model)" },
    { parameter: "Float Material", value: "SS316 / PTFE / Glass" },
    { parameter: "Operating Pressure", value: "Up to 5 Bar" },
    { parameter: "Operating Temperature", value: "0°C to 50°C" },
    { parameter: "Suitable Media", value: "Liquids & Gases" },
    { parameter: "End Connections", value: "SS316 / Brass / PVC" },
    { parameter: "Mounting", value: "Panel Mounted" },
    { parameter: "Applications", value: "Lab Testing, Gas Sampling, Process Control, Water Treatment" }
  ]
  },
  {
  id: "20",
  category: "instrument",
  title: "Acrylic Body Rotameter",
  image: productImage[19], // id 20 → index 19
  alt: "product_image",
  imageBackground: bgColors[19],

  shortDesc:
    "High-precision acrylic body rotameter designed for accurate liquid and gas flow measurement with low pressure drop.",

  longDesc: [
    "The Acrylic Body Rotameter is a versatile and economical flow measurement device designed for monitoring liquids and gases in various industrial and laboratory applications. Its transparent acrylic body ensures excellent visibility of the float and flow scale for easy reading.",
    "With a low pressure drop design, this rotameter provides smooth and reliable performance across a wide range of flow conditions. It is suitable for chemical dosing, water treatment, gas sampling, and general-purpose flow measurement.",
    "Constructed using durable acrylic with stainless steel and plastic components, it offers long service life and resistance to corrosion in demanding environments.",
    "The rotameter is compact, lightweight, and easy to install, making it ideal for panel mounting, skid assemblies, and compact process setups."
  ],

  specifications: [
    { parameter: "Material", value: "Acrylic Body / Plastic / Stainless Steel" },
    { parameter: "Accuracy", value: "±1% FSD" },
    { parameter: "Flow Range", value: "10 LPH to 1000 LPH (depending on model)" },
    { parameter: "Suitable Media", value: "Liquids and Gases" },
    { parameter: "Float Material", value: "SS316 / PTFE / Glass" },
    { parameter: "Operating Pressure", value: "Up to 5 Bar" },
    { parameter: "Operating Temperature", value: "0°C to 50°C" },
    { parameter: "End Connections", value: "SS316 / Brass / PVC" },
    { parameter: "Mounting Type", value: "Panel Mounted / Inline" },
    { parameter: "Scale Type", value: "Engraved or Printed on Acrylic Body" },
    { parameter: "Pressure Drop", value: "Very Low" },
    { parameter: "Applications", value: "Water Treatment, Labs, Gas Flow, Chemical Dosing, Industrial Processes" }
  ]
  },
  {
  id: "21",
  category: "instrument",
  title: "Metal Tube Rotameter",
  image: productImage[20], // id 21 → index 20
  alt: "product_image",
  imageBackground: bgColors[20],

  shortDesc:
    "Robust metal tube rotameter designed for accurate flow measurement of liquids, gases, and steam under high-pressure and high-temperature conditions.",

  longDesc: [
    "The Metal Tube Rotameter is a highly durable variable area flow meter used for measuring the flow of liquids, gases, and steam in industrial applications. Its metallic construction ensures reliable operation under extreme temperature and pressure conditions.",
    "Ideal for volumetric or mass flow measurement, the rotameter provides stable and accurate performance even in corrosive and high-vibration environments. It is widely used in chemical, petrochemical, power generation, and process industries.",
    "With a mechanical pointer and sealed indicator, the rotameter offers clear visibility and minimal maintenance requirements. Optional transmitters or alarms can be integrated for remote monitoring.",
    "Manufactured using high-grade stainless steel, the device ensures long service life, corrosion resistance, and suitability for demanding industrial processes."
  ],

  specifications: [
    { parameter: "Material", value: "Stainless Steel (SS304 / SS316)" },
    { parameter: "Suitable Media", value: "Liquids, Gases, Steam" },
    { parameter: "Flow Measurement Type", value: "Volumetric or Mass Flow (with transmitter)" },
    { parameter: "Operating Pressure", value: "Up to 100 Bar (model dependent)" },
    { parameter: "Operating Temperature", value: "-20°C to 400°C" },
    { parameter: "Accuracy", value: "±1.5% FSD (standard), ±1% optional" },
    { parameter: "End Connections", value: "Flanged / Threaded" },
    { parameter: "Scale Indicator", value: "Analog pointer dial" },
    { parameter: "Output Options", value: "4–20 mA (optional transmitter)" },
    { parameter: "Application", value: "Chemical Plants, Refineries, Water Treatment, Power Plants" },
    { parameter: "Pressure Drop", value: "Low and stable across range" },
    { parameter: "Maintenance", value: "Low maintenance, durable design" }
  ]
  },
  {
  id: "22",
  category: "instrument",
  title: "Open Channel Ultrasonic Flow Meter",
  image: productImage[21], // id 22 → index 21
  alt: "product_image",
  imageBackground: bgColors[21],

  shortDesc:
    "Non-contact ultrasonic flow meter designed for accurate measurement of open channel flow in various channel types.",

  longDesc: [
    "The Open Channel Ultrasonic Flow Meter is engineered for precise and reliable flow measurement in open channels, canals, weirs, and flumes. Its non-contact ultrasonic sensing technology ensures accurate readings without being affected by debris, sediment, or harsh liquid conditions.",
    "This flow meter is ideal for irrigation systems, wastewater treatment plants, stormwater monitoring, and industrial effluent measurement. It provides stable long-term performance even under fluctuating flow rates.",
    "With support for various channel shapes such as V-notch, rectangular, trapezoidal, and Parshall flume designs, it ensures high versatility and accuracy across different applications.",
    "Equipped with built-in data logging and advanced signal processing, the meter supports trend analysis, remote monitoring, and integration with SCADA or telemetry systems."
  ],

  specifications: [
    { parameter: "Measurement Type", value: "Non-contact Ultrasonic Flow Measurement" },
    { parameter: "Suitable Channels", value: "V-notch, Rectangular, Trapezoidal, Parshall Flume" },
    { parameter: "Accuracy", value: "±1% to ±2% of reading" },
    { parameter: "Sensor Mounting", value: "Above the liquid level (non-contact)" },
    { parameter: "Range", value: "0.1 to 10 meters (level measurement)" },
    { parameter: "Output Options", value: "4–20 mA / RS485 / Modbus" },
    { parameter: "Power Supply", value: "24V DC" },
    { parameter: "Display", value: "LCD / LED with real-time flow indication" },
    { parameter: "Data Logging", value: "Built-in storage for long-term trend analysis" },
    { parameter: "Ingress Protection", value: "IP68 Sensor (submersible capable)" },
    { parameter: "Applications", value: "Wastewater Plants, Irrigation, Stormwater Monitoring, Industrial Effluents" },
    { parameter: "Maintenance", value: "Low maintenance due to non-contact design" }
  ]
  },
  {
  id: "23",
  category: "instrument",
  title: "Ultrasonic Flow Meter",
  image: productImage[22], // id 23 → index 22
  alt: "product_image",
  imageBackground: bgColors[22],

  shortDesc:
    "Clamp-on ultrasonic flow meter offering non-intrusive and highly accurate flow measurement for a wide range of liquids.",

  longDesc: [
    "The Ultrasonic Flow Meter is a clamp-on type device designed for non-intrusive flow measurement of liquids in full pipes. It eliminates the need for pipe cutting, shutdown, or process interruption, making installation quick and cost-effective.",
    "Using advanced transit-time ultrasonic technology, the meter provides high accuracy and stability across various pipe materials such as steel, PVC, copper, and ductile iron.",
    "Its user-friendly LCD display with backlight offers clear real-time flow data, totalizer readings, and configuration settings, making it suitable for industrial as well as utility monitoring applications.",
    "With communication options like RS485 and Modbus, this flow meter integrates seamlessly with SCADA systems, PLCs, and remote monitoring platforms for advanced data analysis and automation."
  ],

  specifications: [
    { parameter: "Measurement Type", value: "Clamp-on, Non-intrusive Transit-Time Ultrasonic" },
    { parameter: "Accuracy", value: "±1% or better" },
    { parameter: "Pipe Size Range", value: "DN15 to DN6000 (depending on model)" },
    { parameter: "Suitable Liquids", value: "Water, Chemicals, Oils, Coolants, Solvents" },
    { parameter: "Display", value: "LCD with Backlight" },
    { parameter: "Communication", value: "RS485, Modbus RTU" },
    { parameter: "Power Supply", value: "24V DC or AC Adapter" },
    { parameter: "Temperature Range", value: "-20°C to 160°C (with high-temperature sensors)" },
    { parameter: "Output Options", value: "4–20 mA / Pulse / Relay" },
    { parameter: "Installation", value: "Clamp-on sensors, no pipe cutting required" },
    { parameter: "Ingress Protection", value: "IP65 / IP67 (depending on sensor type)" },
    { parameter: "Applications", value: "Water Supply, HVAC, Chemical Plants, Process Industries" }
  ]
  },
  {
  id: "24",
  category: "instrument",
  title: "Vortex Flow Meter",
  image: productImage[23], // id 24 → index 23
  alt: "product_image",
  imageBackground: bgColors[23],

  shortDesc:
    "Reliable vortex flow meter suitable for volumetric and mass flow measurement of liquids, gases, and steam.",

  longDesc: [
    "The Vortex Flow Meter is designed for precise measurement of liquids, gases, and steam using the vortex shedding principle. It delivers stable and accurate readings regardless of temperature, pressure, or fluid density changes.",
    "Ideal for both volumetric and mass flow monitoring, the meter is widely used in chemical plants, HVAC systems, food processing, oil & gas, and steam applications.",
    "Its stainless-steel construction ensures durability and corrosion resistance, enabling high performance in demanding industrial environments.",
    "Featuring minimal moving parts, the vortex flow meter requires very low maintenance and provides long-term reliability across a wide operating range."
  ],

  specifications: [
    { parameter: "Material", value: "Stainless Steel (SS304 / SS316)" },
    { parameter: "Measurement Type", value: "Volumetric or Mass Flow (with transmitter)" },
    { parameter: "Suitable Media", value: "Liquids, Gases, Steam" },
    { parameter: "Operating Pressure", value: "Up to 40 Bar" },
    { parameter: "Operating Temperature", value: "-40°C to 400°C" },
    { parameter: "Accuracy", value: "±1% of reading" },
    { parameter: "Output Signal", value: "4–20 mA / Pulse / HART (optional)" },
    { parameter: "Power Supply", value: "24V DC" },
    { parameter: "End Connections", value: "Flanged / Wafer Type" },
    { parameter: "Applications", value: "Steam Flow, Gas Flow, Liquid Flow, HVAC, Chemical Plants" },
    { parameter: "Maintenance", value: "Low maintenance, no moving parts" },
    { parameter: "Display", value: "LCD / Digital Indicator (depending on model)" }
  ]
  },
  {
  id: "25",
  category: "instrument",
  title: "Glass Tube Rotameter",
  image: productImage[24], // id 25 → index 24
  alt: "product_image",
  imageBackground: bgColors[24],

  shortDesc:
    "High-clarity glass tube rotameter offering precise flow indication for liquids and gases with durable borosilicate construction.",

  longDesc: [
    "The Glass Tube Rotameter is designed for accurate flow measurement of liquids and gases, providing clear visibility through its high-quality borosilicate glass tube. The transparent design enables easy monitoring of flow rate and float movement.",
    "It features a direct reading scale that ensures simple and precise observation without the need for external indicators. The meter delivers stable performance and is widely used in chemical plants, laboratories, water treatment facilities, and industrial process lines.",
    "With excellent chemical resistance and reliable durability, the borosilicate glass construction makes the rotameter suitable for corrosive and high-purity applications.",
    "The robust design, accurate flow reading, and wide operating range make the Glass Tube Rotameter a dependable solution for various flow monitoring requirements."
  ],

  specifications: [
    { parameter: "Material", value: "Borosilicate Glass Tube" },
    { parameter: "Flow Range", value: "0 to 25 m³/hr" },
    { parameter: "Accuracy", value: "±2% FSD" },
    { parameter: "Suitable Media", value: "Liquids and Gases" },
    { parameter: "Float Material", value: "SS316 / PTFE / PVC (application dependent)" },
    { parameter: "End Connections", value: "Flanged / Threaded" },
    { parameter: "Operating Temperature", value: "Up to 120°C" },
    { parameter: "Operating Pressure", value: "Up to 10 Bar" },
    { parameter: "Scale Type", value: "Direct Reading, Engraved Scale" },
    { parameter: "Mounting", value: "Vertical, In-Line" },
    { parameter: "Visibility", value: "High clarity through borosilicate glass" },
    { parameter: "Applications", value: "Chemical Plants, Labs, Water Treatment, Gas Flow Monitoring" }
  ]
  },
  {
  id: "26",
  category: "instrument",
  title: "Hydrostatic Level Transmitter",
  image: productImage[25], // id 26 → index 25
  alt: "product_image",
  imageBackground: bgColors[25],

  shortDesc:
    "High-precision hydrostatic level transmitter designed for accurate liquid level measurement in tanks, wells, and reservoirs.",

  longDesc: [
    "The Hydrostatic Level Transmitter is engineered for precise liquid level measurement based on hydrostatic pressure. It is ideal for deep wells, borewells, tanks, reservoirs, and industrial vessels.",
    "Its robust submersible design ensures reliable operation even in harsh and underwater environments, making it suitable for continuous level monitoring of water, wastewater, and industrial liquids.",
    "The transmitter offers stable performance with a wide measuring range of up to 200 meters, delivering dependable readings for even the most demanding applications.",
    "With a 4–20 mA output and 24V DC power supply, it seamlessly integrates with PLCs, SCADA systems, and remote monitoring setups for automated level control."
  ],

  specifications: [
    { parameter: "Material", value: "Stainless Steel (SS316)" },
    { parameter: "Measurement Range", value: "0 to 200 meters" },
    { parameter: "Output Signal", value: "4–20 mA" },
    { parameter: "Power Supply", value: "24V DC" },
    { parameter: "Design Type", value: "Submersible Hydrostatic Pressure Sensor" },
    { parameter: "Operating Temperature", value: "-10°C to 80°C" },
    { parameter: "Accuracy", value: "High accuracy hydrostatic measurement" },
    { parameter: "Cable Type", value: "Vented polyurethane/PVC cable (custom lengths available)" },
    { parameter: "Ingress Protection", value: "IP68 (Fully Submersible)" },
    { parameter: "Suitable Media", value: "Water, Wastewater, Industrial Liquids" },
    { parameter: "Application", value: "Tanks, Borewells, Underground Reservoirs, Industrial Storage Vessels" },
    { parameter: "Response Time", value: "< 200 ms" }
  ]
  },
  {
  id: "27",
  category: "instrument",
  title: "Float Type Level Transmitter",
  image: productImage[26], // id 27 → index 26
  alt: "product_image",
  imageBackground: bgColors[26],

  shortDesc:
    "Reliable float-based level transmitter designed for accurate and continuous level measurement in tanks and vessels.",

  longDesc: [
    "The Float Type Level Transmitter provides precise and continuous level measurement using a buoyant float mechanism that moves with the liquid level. It is suitable for a wide range of industrial applications involving open and closed tanks.",
    "Its compact and robust stainless-steel construction ensures durability, corrosion resistance, and long service life even in harsh environments. The transmitter offers stable performance across varying temperatures and fluid conditions.",
    "With a measuring range of up to 3000 mm, this transmitter is ideal for process industries, water treatment, chemical storage systems, and general-purpose tank level monitoring.",
    "The device operates on a 24V DC supply and provides a standard 4–20 mA output, ensuring seamless integration with PLCs, SCADA systems, and other industrial automation platforms."
  ],

  specifications: [
    { parameter: "Material", value: "Stainless Steel (SS316)" },
    { parameter: "Measurement Range", value: "0 to 3000 mm" },
    { parameter: "Output Signal", value: "4–20 mA" },
    { parameter: "Power Supply", value: "24V DC" },
    { parameter: "Design Type", value: "Float-Based Level Transmitter" },
    { parameter: "Suitable Media", value: "Water, Chemicals, Oils, Industrial Liquids" },
    { parameter: "Operating Temperature", value: "-10°C to 80°C" },
    { parameter: "Accuracy", value: "±1% of span (typical)" },
    { parameter: "Mounting Type", value: "Top Mounted" },
    { parameter: "Ingress Protection", value: "IP65 / IP67" },
    { parameter: "Cable/Connector", value: "Industrial grade connector or cable" },
    { parameter: "Applications", value: "Industrial Tanks, Water Treatment, Chemical Processing, Storage Vessels" }
  ]
  },
  {
  id: "28",
  category: "instrument",
  title: "Top Mounted Magnetic Level Indicator",
  image: productImage[27], // id 28 → index 27
  alt: "product_image",
  imageBackground: bgColors[27],

  shortDesc:
    "Magnetic level indicator designed for accurate, maintenance-free liquid level monitoring in pressurized and industrial tanks.",

  longDesc: [
    "The Top Mounted Magnetic Level Indicator provides reliable and accurate liquid level indication using a float and magnetic coupling mechanism. This design eliminates the need for direct contact between the indicator and the process fluid, ensuring smooth and maintenance-free operation.",
    "It is ideal for high-pressure and high-temperature applications, offering superior safety and stability compared to traditional glass level gauges. The magnetic indication system provides clear visibility and supports remote monitoring options when paired with transmitters or switches.",
    "With a length range of 300 mm to 5000 mm, the indicator is suitable for a wide variety of tank sizes in industries such as chemical processing, water treatment, oil & gas, and pharmaceuticals.",
    "Constructed using materials like SS304, SS316, and PP, the indicator offers excellent corrosion resistance and long service life even in challenging industrial environments."
  ],

  specifications: [
    { parameter: "Material", value: "SS316 / SS304 / PP" },
    { parameter: "Measurement Length (C to C)", value: "300 mm to 5000 mm" },
    { parameter: "Operating Pressure", value: "Up to 40 Bar (model dependent)" },
    { parameter: "Operating Temperature", value: "-20°C to 250°C" },
    { parameter: "Working Principle", value: "Magnetic Float with External Indicator" },
    { parameter: "Indication Type", value: "Visual Magnetic Indicator / Remote Transmitter (optional)" },
    { parameter: "Mounting Type", value: "Top Mounted" },
    { parameter: "Suitable Media", value: "Water, Chemicals, Oils, Solvents" },
    { parameter: "Connection Type", value: "Flanged / Threaded" },
    { parameter: "Float Material", value: "SS316 or PP (application based)" },
    { parameter: "Applications", value: "Chemical Tanks, Storage Vessels, Water Treatment, Oil & Gas" },
    { parameter: "Maintenance", value: "Maintenance-free magnetic coupling design" }
  ]
  },
  {
  id: "29",
  category: "instrument",
  title: "Tank Mounted Sight Glass",
  image: productImage[28], // id 29 → index 28
  alt: "product_image",
  imageBackground: bgColors[28],

  shortDesc:
    "Durable tank-mounted sight glass designed for clear visual monitoring of liquid levels in tanks and vessels.",

  longDesc: [
    "The Tank Mounted Sight Glass provides a clear and direct visual indication of liquid levels inside industrial tanks and vessels. Its compact and sturdy design allows seamless integration even in space-constrained environments.",
    "Made with high-quality borosilicate glass, it offers excellent visibility, chemical resistance, and durability. This makes it ideal for a wide range of industrial liquid applications, including chemicals, oils, solvents, and water-based media.",
    "The sight glass is available with optional level indicators for enhanced monitoring, ensuring precise and reliable visual level measurement in various process conditions.",
    "Constructed with MS or SS housings, the sight glass ensures long service life and stable performance in harsh industrial environments."
  ],

  specifications: [
    { parameter: "Material", value: "Borosilicate Glass / MS / SS304 / SS316" },
    { parameter: "Design Type", value: "Tank Mounted Sight Glass" },
    { parameter: "Operating Pressure", value: "Up to 10 Bar (depending on model)" },
    { parameter: "Operating Temperature", value: "Up to 180°C" },
    { parameter: "Suitable Media", value: "Water, Oils, Chemicals, Solvents" },
    { parameter: "Mounting Type", value: "Side or Top Mounted (model dependent)" },
    { parameter: "Glass Type", value: "Transparent Borosilicate Glass" },
    { parameter: "Optional Features", value: "Level Indicator / LED Backlight (optional)" },
    { parameter: "Connection Type", value: "Flanged / Threaded" },
    { parameter: "Visibility", value: "Clear, unobstructed viewing" },
    { parameter: "Applications", value: "Industrial Tanks, Reactors, Storage Vessels" },
    { parameter: "Maintenance", value: "Easy to clean and replace" }
  ]
  },
  {
  id: "30",
  category: "instrument",
  title: "Double Window Sight Glass",
  image: productImage[29], // id 30 → index 29
  alt: "product_image",
  imageBackground: bgColors[29],

  shortDesc:
    "High-durability double window sight glass for clear process observation in high-pressure and industrial applications.",

  longDesc: [
    "The Double Window Sight Glass is designed for visual inspection of fluid flow, color, clarity, and movement inside pipelines and process systems. Its dual-window design ensures enhanced strength and clear visibility from both sides.",
    "Built to withstand high-pressure and high-temperature industrial media, this sight glass is commonly used in chemical processing, pharmaceuticals, food industries, and water treatment plants.",
    "Constructed using borosilicate glass and high-grade MS, SS, or PP housings, it provides excellent chemical resistance and long operational life even in corrosive environments.",
    "Available with multiple flange standards and end-connection options, the sight glass supports easy installation and reliable performance in demanding process conditions."
  ],

  specifications: [
    { parameter: "Material", value: "Borosilicate Glass / MS / SS304 / SS316 / PP" },
    { parameter: "Design Type", value: "Double Window Sight Glass" },
    { parameter: "Operating Pressure", value: "Up to 25 Bar (model dependent)" },
    { parameter: "Operating Temperature", value: "Up to 200°C" },
    { parameter: "Suitable Media", value: "Liquids, Chemicals, Oils, Water, Solvents" },
    { parameter: "Connection Type", value: "Flanged (ANSI / DIN / JIS options)" },
    { parameter: "Window Material", value: "Heat & Chemical-resistant Borosilicate Glass" },
    { parameter: "Body Material Options", value: "MS Painted / SS304 / SS316 / PP" },
    { parameter: "Visibility", value: "Dual-sided clear viewing" },
    { parameter: "Applications", value: "Chemical Plants, Reactors, Pipelines, Storage Systems" },
    { parameter: "Maintenance", value: "Easy to clean and replace windows" },
    { parameter: "Sealing Material", value: "PTFE / Viton / Graphite (depending on temperature)" }
  ]
  },
  {
  id: "31",
  category: "instrument",
  title: "Top Mounted Magnetic Level Indicator",
  image: productImage[30], // id 31 → index 30
  alt: "product_image",
  imageBackground: bgColors[30],

  shortDesc:
    "Reliable top-mounted magnetic level indicator designed for accurate liquid level monitoring in industrial tanks and vessels.",

  longDesc: [
    "The Top Mounted Magnetic Level Indicator provides clear and dependable liquid level indication using a magnetic float mechanism. Its non-contact coupling ensures smooth operation without leakage risk or maintenance issues.",
    "Designed for high-pressure and high-temperature applications, it offers excellent safety and stability compared to conventional sight glasses. The top-mounted design allows installation where side access is not possible.",
    "The indicator supports both visual monitoring and remote level transmission when integrated with magnetic switches or transmitters, providing flexible level control solutions.",
    "Manufactured using SS304, SS316, and PP materials, this indicator delivers long service life, corrosion resistance, and reliable performance in a wide range of industrial environments."
  ],

  specifications: [
    { parameter: "Material", value: "SS316 / SS304 / PP" },
    { parameter: "Measurement Length (C to C)", value: "300 mm to 5000 mm" },
    { parameter: "Operating Pressure", value: "Up to 40 Bar (model dependent)" },
    { parameter: "Operating Temperature", value: "-20°C to 250°C" },
    { parameter: "Working Principle", value: "Magnetic Float with External Indicator" },
    { parameter: "Indication Type", value: "Visual Magnetic Indicator / Remote Transmitter (optional)" },
    { parameter: "Mounting Type", value: "Top Mounted" },
    { parameter: "Suitable Media", value: "Water, Oils, Chemicals, Solvents" },
    { parameter: "Connection Type", value: "Flanged / Threaded" },
    { parameter: "Float Material", value: "SS316 or PP (application based)" },
    { parameter: "Applications", value: "Chemical Tanks, Storage Vessels, Water Treatment, Oil & Gas" },
    { parameter: "Maintenance", value: "Maintenance-free magnetic coupling design" }
  ]
  },
  {
  id: "32",
  category: "instrument",
  title: "Side Mounted Magnetic Level Indicator",
  image: productImage[31], // id 32 → index 31
  alt: "product_image",
  imageBackground: bgColors[31],

  shortDesc:
    "Durable side-mounted magnetic level indicator designed for continuous and reliable liquid level monitoring in industrial applications.",

  longDesc: [
    "The Side Mounted Magnetic Level Indicator provides accurate and maintenance-free liquid level measurement using a float-based magnetic coupling system. Its side-mounted configuration is ideal for tanks and vessels where top or bottom mounting is not feasible.",
    "This indicator is widely used for corrosive, hazardous, and high-purity liquids due to its non-contact magnetic operation, ensuring zero leakage and enhanced safety.",
    "With continuous visual indication and optional transmitter or switch outputs, it can be seamlessly integrated into industrial automation and control systems.",
    "Available in SS304, SS316, PP, and SS + FEP lined materials, it guarantees high corrosion resistance and long-term performance in demanding industrial conditions."
  ],

  specifications: [
    { parameter: "Material", value: "SS316 / SS304 / PP / SS + FEP Lined" },
    { parameter: "Measurement Length (C to C)", value: "300 mm to 5000 mm" },
    { parameter: "Operating Pressure", value: "Up to 40 Bar (model dependent)" },
    { parameter: "Operating Temperature", value: "-20°C to 250°C" },
    { parameter: "Working Principle", value: "Magnetic Float with External Indicator Rail" },
    { parameter: "Indication Type", value: "Continuous Magnetic Visual Indication" },
    { parameter: "Output Options", value: "Reed Switches / Transmitters (optional)" },
    { parameter: "Mounting Type", value: "Side Mounted" },
    { parameter: "Suitable Media", value: "Chemicals, Water, Oils, Corrosive Liquids" },
    { parameter: "Connection Type", value: "Flanged / Threaded" },
    { parameter: "Float Material", value: "SS316 / PP (application based)" },
    { parameter: "Applications", value: "Chemical Plants, Storage Tanks, Petrochemical, Water Treatment" }
  ]
  },
  {
  id: "33",
  category: "instrument",
  title: "Flush Diaphragm Pressure Transmitter",
  image: productImage[32], // id 33 → index 32
  alt: "product_image",
  imageBackground: bgColors[32],

  shortDesc:
    "Stainless-steel flush diaphragm pressure transmitter designed for sanitary, clog-free, and easy-to-clean industrial applications.",

  longDesc: [
    "The Flush Diaphragm Pressure Transmitter is engineered for applications requiring a smooth, cavity-free sensing surface for easy cleaning and zero clogging. This design makes it ideal for viscous, slurry-based, or hygienic process media.",
    "Built with a corrosion-resistant stainless-steel flush diaphragm, the transmitter ensures long-term durability and accurate performance in harsh or sanitary environments.",
    "Sanitary connections such as Tri-Clamp and DIN standard fittings support CIP/SIP applications, making the transmitter suitable for food, pharmaceuticals, and biotech industries.",
    "With a 24V DC supply and standard 4–20 mA output, it integrates seamlessly with PLCs, SCADA, and industrial automation systems."
  ],

  specifications: [
    { parameter: "Material", value: "Stainless Steel (SS316L)" },
    { parameter: "Diaphragm Type", value: "Flush, Clog-Free Diaphragm" },
    { parameter: "Output Signal", value: "4–20 mA (2-wire)" },
    { parameter: "Power Supply", value: "24V DC" },
    { parameter: "Process Connection", value: "Tri-Clamp / DIN Hygienic / Threaded" },
    { parameter: "Operating Pressure Range", value: "0–10 bar / 0–25 bar / 0–40 bar (optional ranges)" },
    { parameter: "Accuracy", value: "±0.25% to ±0.5% FS" },
    { parameter: "Operating Temperature", value: "-20°C to 150°C (CIP/SIP compatible)" },
    { parameter: "Suitable Media", value: "Viscous Liquids, Slurries, Pastes, Sanitary Media" },
    { parameter: "Ingress Protection", value: "IP67 / IP68" },
    { parameter: "Applications", value: "Food, Dairy, Pharma, Biotech, Chemical Processing" },
    { parameter: "Cleaning Compatibility", value: "CIP (Clean-in-Place) / SIP (Sterilize-in-Place)" }
  ]
  },
];
