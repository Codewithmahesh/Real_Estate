// Import React Icons
import {
  FaTrophy,
  FaBriefcase,
  FaLightbulb,
  FaHeart,
  FaCheck,
  FaTimes,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export const nav = [
  {
      text: "home",
      path: "/",
  },
  {
    text: "Property",
    path: "/ListPage",
  },
  {
    text: "pricing",
    path: "/pricing",
  },
  {
    text: "contact",
    path: "/contact",
  },
];

export const featured = [
  {
    cover: "../hero/h1.png",
    name: "Family House",
    total: "122 Property",
  },
  {
    cover: "../hero/h2.png",
    name: "House & Villa",
    total: "155 Property",
  },
  {
    cover: "../hero/h3.png",
    name: "Apartment",
    total: "300 Property",
  },
  {
    cover: "../hero/h4.png",
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    cover: "../hero/h6.png",
    name: "Villa & Condo",
    total: "80 Property",
  },
];

export const awards = [
  {
    icon: <FaTrophy />,
    num: "32 M",
    name: "Blue Burmin Award",
  },
  {
    icon: <FaBriefcase />,
    num: "43 M",
    name: "Mimo X11 Award",
  },
  {
    icon: <FaLightbulb />,
    num: "51 M",
    name: "Australian UGC Award",
  },
  {
    icon: <FaHeart />,
    num: "42 M",
    name: "IITCA Green Award",
  },
];

export const price = [
  {
    plan: "Basic",
    price: "29",
    ptext: "per user, per month",
    list: [
      {
        icon: <FaCheck />,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <FaCheck />,
        text: "120GB CDN Bandwidth",
      },
      {
        icon: <FaCheck />,
        text: "5GB Cloud Storage",
      },
      {
        change: "color",
        icon: <FaTimes />,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <FaTimes />,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    best: "Best Value",
    plan: "Standard",
    price: "49",
    ptext: "per user, per month",
    list: [
      {
        icon: <FaCheck />,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <FaCheck />,
        text: "150GB CDN Bandwidth",
      },
      {
        icon: <FaCheck />,
        text: "10GB Cloud Storage",
      },
      {
        icon: <FaCheck />,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <FaTimes />,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    plan: "Platinum",
    price: "79",
    ptext: "2 users, per month",
    list: [
      {
        icon: <FaCheck />,
        text: "100% Uptime Guarantee",
      },
      {
        icon: <FaCheck />,
        text: "200GB CDN Bandwidth",
      },
      {
        icon: <FaCheck />,
        text: "20GB Cloud Storage",
      },
      {
        icon: <FaCheck />,
        text: "Personal Help Support",
      },
      {
        icon: <FaCheck />,
        text: "Enterprise SLA",
      },
    ],
  },
];

export const team = [
  {
    list: "50",
    cover: "../team/team-1.jpg",
    address: "Liverpool, Canada",
    name: "Sargam S. Singh",
    icon: [<FaFacebookF />, <FaLinkedin />, <FaTwitter />, <FaInstagram />],
  },
  {
    list: "70",
    cover: "../team/team-2.jpg",
    address: "Montreal, Canada",
    name: "Harijeet M. Siller",
    icon: [<FaFacebookF />, <FaLinkedin />, <FaTwitter />, <FaInstagram />],
  },
  {
    list: "80",
    cover: "../team/team-3.jpg",
    address: "Denver, USA",
    name: "Anna K. Young",
    icon: [<FaFacebookF />, <FaLinkedin />, <FaTwitter />, <FaInstagram />],
  },
  {
    list: "51",
    cover: "../team/team-4.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [<FaFacebookF />, <FaLinkedin />, <FaTwitter />, <FaInstagram />],
  },
  {
    list: "42",
    cover: "../team/team-5.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [<FaFacebookF />, <FaLinkedin />, <FaTwitter />, <FaInstagram />],
  },
  {
    list: "38",
    cover: "../team/team-5.jpg",
    address: "Montreal, USA",
    name: "Adam K. Jollio",
    icon: [<FaFacebookF />, <FaLinkedin />, <FaTwitter />, <FaInstagram />],
  },
];

export const footer = [
  {
    title: "LAYOUTS",
    text: [
      { list: "Home Page" },
      { list: "About Page" },
      { list: "Service Page" },
      { list: "Property Page" },
      { list: "Contact Page" },
      { list: "Single Blog" },
    ],
  },
  {
    title: "ALL SECTIONS",
    text: [
      { list: "Headers" },
      { list: "Features" },
      { list: "Attractive" },
      { list: "Testimonials" },
      { list: "Videos" },
      { list: "Footers" },
    ],
  },
  {
    title: "COMPANY",
    text: [
      { list: "About" },
      { list: "Blog" },
      { list: "Pricing" },
      { list: "Affiliate" },
      { list: "Login" },
      { list: "Changelog" },
    ],
  },
];

export const list = [
  {
    id: 1,
    cover: "../list/p-1.png",
    name: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    category: "For Rent",
    price: "$3,700",
    type: "Apartment",
  },
  {
    id: 2,
    cover: "../list/p-2.png",
    name: "Fairmount Properties",
    location: "5698 Zirak Road, NewYork",
    category: "For Sale",
    price: "$9,750",
    type: "Condos",
  },
  {
    id: 3,
    cover: "../list/p-7.png",
    name: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    category: "For Rent",
    price: "$5,860",
    type: "Offices",
  },
  {
    id: 4,
    cover: "../list/p-4.png",
    name: "Herringbone Realty",
    location: "5621 Liverpool, London",
    category: "For Sale",
    price: "$7,540",
    type: "Homes & Villas",
  },
  {
    id: 5,
    cover: "../list/p-5.png",
    name: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    category: "For Rent",
    price: "$4,850",
    type: "Commercial",
  },
  {
    id: 6,
    cover: "../list/p-6.png",
    name: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    category: "For Sale",
    price: "$2,742",
    type: "Apartment",
  },
];

export const location = [
  {
    id: 1,
    name: "New Orleans, Louisiana",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "./location/city-1.png",
  },
  {
    id: 2,
    name: "Jerrsy, United State",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "./location/city-2.png",
  },
  {
    id: 3,
    name: "Liverpool, London",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: "./location/city-3.png",
  },
  {
    id: 4,
    name: "NewYork, United States",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: "./location/city-4.png",
  },
  {
    id: 5,
    name: "Montreal, Canada",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: "./location/city-5.png",
  },
  {
    id: 6,
    name: "California, USA",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: "./location/city-6.png",
  },
];
