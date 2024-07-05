import ecommerce from "../assets/project/ecommerce.png";
import project2 from "../assets/react.svg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 6 years of hands-on experience, I have honed my skills in front-end technologies like Typescript, Javascript, React, HTML and CSS, as well as back-end technologies like Python, Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 6 years of professional experience, I have worked with a variety of technologies, including React, Python, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active and exploring new technologies`;

export const EXPERIENCES = [
  {
    year: "May 2022 - June 2024",
    role: "Software Engineer",
    company: "Sage",
    description: `Developed a resilient SaaS web application using TypeScript, React, REST APIs, and component libraries, ensuring scalability and reliability. I created high-priority features for Sage for Accountants software, driving revenue growth and enhancing user engagement. By implementing a micro-frontend architecture, I improved team efficiency and code maintenance. I achieved 100% code coverage with unit and integration tests using Jest, ensuring high code reliability. I ensured UI compliance with global accessibility standards using Axe and collaborated with Product Owners, UX designers, and back-end developers for seamless integration. I partnered with software architects to keep UI templates up to date, mentored junior developers, and consistently met sprint goals, contributing to a 90% sprint success rate.`,
    technologies: ["Typescript", "React.js", "Python", "HTML", "CSS", "mySQL"],
  },
  {
    year: "June 2018 - Arpil 2022",
    role: "Technology Analyst",
    company: "Infosys",
    description: `Developed web applications using HTML5, CSS3, JavaScript, React, and Redux, enhancing application look and feel across all platforms with CSS3, Bootstrap, and Media Queries. By implementing Redux architecture and the Context API, I ensured seamless application functionality. I also optimized performance through techniques like infinite scrolling and lazy loading. My involvement spanned all stages of the SDLC, from requirement analysis to implementation and maintenance. Furthermore, I played a key role in bug fixes, testing, and code reviews, ensuring high-quality deliverables.`,
    technologies: [
      "Typescript",
      "React.js",
      "Nodejs",
      "HTML",
      "CSS",
      "mongoDB",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: ecommerce,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart etc",
    technologies: ["React", "Javascript", "HTML", "CSS"],
    link: "https://flamboyant-curran-87346c.netlify.app/",
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Javascript", "HTML", "TailwindCSS"],
  },
];

export const CONTACT = {
  address: "Ottawa, ON",
  phoneNo: "+1 (613) 406-3396",
  email: "harsh.preet096@gmail.com",
};
