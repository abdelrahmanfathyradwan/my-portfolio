export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Developing My Skills",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ocean - CRM Dashboard for Engineering Teams",
    des: "A powerful CRM dashboard built with Next.js and Tailwind CSS to boost engineering team productivity with task management, meeting scheduling, and real-time analytics.",
    img: "/ocen.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://ocean-ten.vercel.app",
  },
  {
    id: 2,
    title: "Nebras Academy - Educational Platform",
    des: "A modern educational website for a real client, featuring course browsing, responsive design, and smooth user experience using React and Tailwind CSS.",
    img: "/nebras.png",
    iconLists: ["/re.svg", "/tail.svg", "/Vite1.jpeg"],
    link: "https://nebrasacadem.netlify.app",
  },
  {
    id: 3,
    title: "Bidaya 1447 - Islamic Learning Portal",
    des: "A clean, responsive Islamic educational platform built for a real client with React, Tailwind CSS, and mobile-first design.",
    img: "/bidaya.png",
    iconLists: ["/re.svg", "/tail.svg", "/Vite1.jpeg"],
    link: "https://bidaya1447.netlify.app",
  },
  {
    id: 4,
    title: "Food Delivery App - Multi-Language",
    des: "A fully functional food delivery web app with i18n support (Arabic/English), cart system, and modern UI using React, Tailwind, and React Router.",
    img: "/foodDelivary.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://food-delivery-afathi.vercel.app",
  },
  {
    id: 5,
    title: "Kanban Board - Task Management",
    des: "Interactive drag-and-drop Kanban board for task tracking, built with React and Tailwind CSS for smooth animations and responsive layout.",
    img: "/kanban board.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://kanban-board-app-eight-rosy.vercel.app",
  },
  {
    id: 6,
    title: "Shopping Cart with Redux",
    des: "E-commerce shopping cart with product filtering, cart persistence, and state management using Redux, React, and Tailwind CSS.",
    img: "/shopping cart.png",
    iconLists: ["/re.svg", "/tail.svg", "/re.png"],
    link: "https://shopping-cart-drab-beta.vercel.app",
  },
  {
    id: 7,
    title: "Age Calculator - Vanilla JS",
    des: "A beautiful, animated age calculator with spiritual messages, built using pure HTML, CSS (glassmorphism), and Vanilla JavaScript.",
    img: "/age calc.png",
    iconLists: ["/html.jpeg", "/css.png", "/js.png"],
    link: "https://abdelrahmanfathyradwan.github.io/Age-Calculator",
  },
  {
    id: 8,
    title: "GitHub Repo Finder - Vanilla JS",
    des: "Search and explore GitHub repositories with live API integration, built with Vanilla JavaScript and responsive design.",
    img: "/Repo finder.png",
    iconLists: ["/html.jpeg", "/css.png", "/js.png"],
    link: "https://abdelrahmanfathyradwan.github.io/Github-Repo-Finder",
  },
  {
    id: 9,
    title: "Modern Calculator - Glassmorphism",
    des: "Sleek calculator with keyboard support, animations, and glassmorphism design using pure Vanilla JavaScript.",
    img: "/calc.png",
    iconLists: ["/html.jpeg", "/css.png", "/js.png"],
    link: "https://abdelrahmanfathyradwan.github.io/Calculator",
  },
  {
    id: 10,
    title: "To-Do List App - Vanilla JS",
    des: "Simple, elegant to-do list with local storage, task editing, and smooth animations using only Vanilla JavaScript.",
    img: "/todoApp.png",
    iconLists: ["/html.jpeg", "/css.png", "/js.png"],
    link: "https://abdelrahmanfathyradwan.github.io/ToDOList",
  },
  {
    id: 11,
    title: "Landing Page for Engineer",
    des: "Simple, elegant landing page for engineer, and smooth animations using only Vanilla JavaScript.",
    img: "/khalidPortfolio.png",
    iconLists: ["/html.jpeg", "/css.png", "/js.png"],
    link: "https://eng-khalid.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:"Masha'Allah, incredible creativity! May Allah reward you abundantly for your outstanding work.",
    name: "Eng/ Khalid Fathy",
    title: "Engineer",
    img: "/engkhaled.jpeg",
  },
  {
    quote:"Absolutely beautiful! Your attention to detail and execution is top-notch. Well done!",
    name: "Nebras Academy Team",
    title: "Client Project Lead",
    img: "/nebrasLogo.png",
  },
  {
    quote:"Highly professional work. Clean, responsive, and delivered exactly as promised. Thank you!",
    name: "Bidaya Team",
    title: "Client Project Lead",
    img: "/bidayaLogo.jpg",
  },
  {
    quote:"The website is fire, bro! Super smooth and looks amazing on all devices. Big respect!",
    name: "Ahmed Sarhan",
    title: "Lab Technician",
    img: "/Ahmed sarhan.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "Almdrasa",
    img: "/almdrasa",
    nameImg: "/almdrasa_logo.jpeg",
  },
  {
    id: 2,
    name: "Homains",
    img: "Homains",
    nameImg: "/Homains.jpeg",
  },
  {
    id: 3,
    name: "freelancer",
    img: "freelancer",
    nameImg: "/freelancer.png",
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern ",
    desc: "Assisted in the development of a web-based platform using Angular at Homains Company, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/abdelrahmanfathyradwan",
  },
  {
    id: 2,
    img: "/whatsIcon.png",
    link:"https://wa.me/201220407008",
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/abdelrahmanfathyradwan",
  },
];
