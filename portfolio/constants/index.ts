import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/assets/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/assets/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/assets/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/assets/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/assets/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/assets/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/assets/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/assets/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/assets/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Stripe Payment",
    Image: "/assets/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/assets/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/assets/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    name: "Discord",
    src: "./assets/discord.svg",
    link: "https://www.discordapp.com/users/718017049569263667",
    
  },
  {
    name: "Facebook",
    src: "./assets/facebook.svg",
    link: "https://www.facebook.com/vaishali.chaudhary.01?mibextid=LQQJ4d"
  },
  {
    name: "Instagram",
    src: "./assets/instagram.svg",
    link: "https://www.instagram.com/vaishalii__23?igsh=dHZyenRzcXF1MXRh "
  },
];
export const Projects = [
  {
    title: "Social Nextjs Website",
    text: "A modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance using React JS, Appwrite, TypeScript, and more.",
    src: "./assets/echogram.png",
  },
  {
    title: "Crwn Clothing E-commerce App",
    text: "E-commerce app with Redux, Hooks, Stripe, Firebase.",
    src: "./assets/crwn.png",
  },
  {
    title: "Photo Gallery",
    text: "A Typescript Application to display a photo Gallery with Recently added and Favorited pictures. User can select an image and favorite, unfavorite or delete it",
    src: "./assets/gallery.png",
  },
  {
    title: "Travel Blog",
    text: "Travel Blog Website in which admin can add, delete and edit the blogs. For users, its read-only. Users can find reliable sources to book hotels, insurance, etc.",
    src: "./assets/vagary.png",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    title: "Home",
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    title: "Skills",
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    title: "Projects",
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    title: "Contact",
    link: "/contact-me",
  },
];