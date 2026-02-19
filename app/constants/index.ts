export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Business Development",
    icon: "/backend.webp",
  },
  {
    title: "Full Stack Web Development",
    icon: "/web.webp",
  },
  {
    title: "Digital Marketing",
    icon: "/mobile.webp",
  },
  {
    title: "Forex Trading",
    icon: "/creator.webp",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "/tech/html.webp",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.webp",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.webp",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.webp",
  },
  {
    name: "React JS",
    icon: "/tech/reactjs.webp",
  },
  {
    name: "Next.JS",
    icon: "/tech/nextjs.svg",
  },
  {
    name: "Redux Toolkit",
    icon: "/tech/redux.webp",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.webp",
  },
  {
    name: "Three JS",
    icon: "/tech/threejs.webp",
  },
  {
    name: "git",
    icon: "/tech/git.webp",
  },
  {
    name: "figma",
    icon: "/tech/figma.webp",
  },
  {
    name: "wordpress",
    icon: "/tech/wordpress.webp",
  },
  {
    name: "bootstrap",
    icon: "/tech/bootstrap.webp",
  },
];

const experiences = [
  {
    title: "Wordpress Developer & Digital Marketer - Trainee",
    company_name: "Digi Pondi Technologies",
    icon: "/company/digipondy.png",
    iconBg: "#383E56",
    date: "07/2024 -  10/2024",
    points: [
      "Self-Taught Expertise: Built strong proficiency in WordPress and digital marketing through hands-on projects and independent learning.",
      "Collaborative Execution: Coordinated with clients and stakeholders to gather input and refine website content and user experience.",
      "Website Development Success: Designed and developed responsive, SEO-friendly WordPress websites tailored to business needs.",
      "Marketing-Driven Results: Executed digital marketing strategies that boosted traffic and conversions, directly contributing to +64.25% business growth.",
    ],
  },
  {
    title: "Next.JS Developer",
    company_name: "Yuvabe",
    icon: "/company/yuvabe.png",
    iconBg: "#E6DEDD",
    date: "10/2024 - present",
    points: [
      "Self-Taught Expertise: Gained advanced proficiency in Next.js, Typescript, React, and Three.js through hands-on learning and real-world projects.",
      "Successful Website Development: Led the design and development of dynamic, responsive, and animated websites using Next.js, Tailwind CSS, and Framer Motion.",
      "Collaborative Design: Partnered with stakeholders to collect feedback and iteratively enhance UI interactivity, performance, and 3D experiences.",
      "API Integration: Integrated RESTful and third-party APIs to enhance functionality and user experience across projects.",
      "Team Collaboration: Actively collaborated with the backend team to ensure smooth data flow, consistent architecture, and scalable solutions.",
    ],
  },
  // {
  // 	title: "Software Developer",
  // 	company_name: "Way to Web Pvt. Ltd.",
  // 	icon: "/company/wtw.jpg",
  // 	iconBg: "#E6DEDD",
  // 	date: "2024 - Present",
  // 	points: [
  // 		"Developing and maintaining Wordpress Site for A.V.M Auto The Car Body Shop based in Ahmedabad, Gujarat India.",
  // 		"Analyzing feedbacks and fixing bugs.",
  // 		"Search Engine Optimization.",
  // 		"Design Maintainence and hosting maintenance.",
  // 	],
  // },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "Instagram primarily focused on sharing and discovering visual content, allowing users to showcase creativity through photos, videos, and stories.",
    name: "Rooban",
    image: "/socialmedia/instagram.svg",
    link: "https://www.instagram.com/madeby_rvn?igsh=MXZuMzlvdnYzaXQxNQ%3D%3D&utm_source=qr",
  },
  {
    id: 2,
    testimonial:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Rooban",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/roopavanan-r-01094121a",
  },
  {
    id: 3,
    testimonial:
      "Twitter(X) primarily used for sharing real-time thoughts, news, and updates through short posts, fostering conversation and discovery across a wide range of topics.",
    name: "Rooban",
    image: "/socialmedia/twitter.svg",
    link: "https://x.com/skvjy1?s=21",
  },
  {
    id: 4,
    testimonial:
      "Also do check out my dev Portfolio where I have shared by dev studies.",
    name: "Rooban",
    image: "/socialmedia/vercel.svg",
    link: "https://vercel.com/roopavanans-projects",
  },
  {
    id: 5,
    testimonial:
      "Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
    name: "Rooban",
    image: "/tech/github.webp",
    link: "https://github.com/Roopavanan",
  },
];

const projects: {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web";
}[] = [
  {
    name: "Aurogurukul - E-learning Platform",
    description:
      "A responsive e-learning platform designed to deliver structured online courses with an intuitive and user-friendly interface.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Restful API",
        color: "green-text-gradient",
      },
    ],
    image: "/projectimg/aurogurukul.png",
    platform: "Web",
    deploy_link: "https://aurogurukul.com/",
  },
  {
    name: "Buglerock Singapore",
    description:
      " Corporate website developed using WordPress, showcasing global multi-family office services, tailored wealth management solutions, and investment strategies for ultra-high-net-worth clients.",
    tags: [
      {
        name: "Wordpress",
        color: "red-text-gradient",
      },
      {
        name: "ui design",
        color: "orange-text-gradient",
      },
    ],
    image: "/projectimg/buglerock.png",
    platform: "Wordpress",
    deploy_link: "https://buglerock.sg/",
  },
  {
    name: "Yuvabe Education",
    description:
      "A purpose-driven youth empowerment platform built with Next.js (TSX) and Tailwind CSS, promoting skill development, community service, and personal growth through the “Work. Serve. Evolve.” approach.",
    tags: [
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: "/projectimg/ybeducation.png",
    source_code_link: "https://github.com/Roopavanan/Yuvabe-Educations.git",
    platform: "Vercel",
    deploy_link: "https://yuvabeeducation.com/",
  },
  {
    name: "Yuvabe Studios",
    description:
      " Yuvabe - A purpose-driven digital agency based in Auroville, blending innovation and sustainability to craft impactful digital solutions.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: "/projectimg/ybstudios.png",
    source_code_link: "https://github.com/Roopavanan/yuvabe-landingpage.git",
    platform: "Web",
    deploy_link: "https://yuvabestudios.com/",
  },
  {
    name: "CAT",
    description:
      "Website developed to support India's agroecological movement, empowering 40 million farmers toward a sustainable and equitable food system by 2030.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "database",
        color: "orange-text-gradient",
      },
    ],
    image: "/projectimg/cat.png",
    source_code_link: "https://github.com/Roopavanan/surveyMap.git",
    platform: "Vercel",
    deploy_link: "https://survey-map.vercel.app/",
  },
  {
    name: "Advance UI/UX Course",
    description:
      "A Next.js-based landing page for an Advanced UI/UX Design course, designed to present course details with smooth scroll interactions",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "UseEffect",
        color: "green-text-gradient",
      },
    ],
    image: "/projectimg/uiux.png",
    platform: "Web",
    deploy_link: "https://www.yuvabeeducation.com/bridge/advanced-design-workshop",
  },
];

export { services, technologies, experiences, testimonials, projects };
