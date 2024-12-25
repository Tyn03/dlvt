const data = {
  basicInfo: {
    descriptionHeader: "Hi",
    description: `👋 
    <p style="font-family: 'Georgia', sans-serif; font-size: 14px; color: #444; font-weight: bold;">
      Hi Everyone, I am DO Uy Khang from VietNam. I am currently a student at 4th INSA Centre Val de Loire, Bourges, Cher, France.
  
    My actual study field is software engineering and Cyber Security Information. 
    I have a passion for building innovative software solutions that make an impact. 
    With a strong foundation in algorithms and a solid understanding of Java and C, 
    I have honed my skills in Object-Oriented Programming (OOP) within Java. When I am not coding,
     you can find me exploring new technologies, reading books, or playing video games. 
     Along both university and personal projects, I have picked up a range of skills—using Node.js,
      React, Next.js for development, Docker for deployment, and even getting a taste of cybersecurity.
    </p>
    `,
    sectionName: {
      about: "About me",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
    },
  },
  projects: [
    {
      title: "KD Store",
      startDate: "2024",
      description: `
        <h2 style="color: #58a6ff;">The short run</h2>
        <p > Loukas NGUYEN 
        I developed a simple e-commerce website that allows users to buy and sell products online. The website includes the following basic features:</p>
        <ul style="color: #8b949e;">
          <li><b>Product Listing Page:</b> Displays a list of products with images, prices, and detailed descriptions.</li>
          <li><b>Shopping Cart:</b> Allows users to add, modify, or remove products from the cart.</li>
          <li><b>Checkout Process:</b> Integrates a simple checkout flow for completing orders.</li>
          <li><b>Product Management Page (for sellers):</b> Enables sellers to add, edit, or delete products.</li>
        </ul>
        <h3 style="color: #58a6ff;">Tech Stack & Learnings</h3>
        <ul style="color: #8b949e;">
          <li><b>Backend:</b> Worked with Node.js for building APIs.</li>
          <li><b>Frontend:</b> React.js for dynamic UI, using component-based architecture.</li>
          <li><b>Communication:</b> APIs for connecting backend and frontend.</li>
        </ul>
        <p >The project taught me the importance of modularity, as each feature had its own structure (e.g., controllers, models, etc.).</p>
      `,
      images: [
        "images/portfolio/kdstore/ava.jpg",
        "images/portfolio/kdstore/haugai.jpg",
        "images/portfolio/kdstore/anh2.jpg",
        "images/portfolio/kdstore/anh3.jpg",
      ],
      url: "",
      technologies: [
        { class: "devicon-angularjs-plain", name: "React" },
        { class: "devicon-typescript-plain", name: "Nodejs" },
        { class: "devicon-csharp-plain", name: "Java" },
      ],
      styles: {
        backgroundColor: "#0d1117",
        textColor: "#c9d1d9",
        titleColor: "#58a6ff",
      },
    },
    {
      title: "chatapp",
      startDate: "2024",
      description: `
        <h2 style="color: #58a6ff;">Introduction</h2>
        <p > This chat application is built using modern web development technologies to provide a seamless, real-time messaging experience</p>
        <ul style="color: #8b949e;">
          <li><b>Real-time Messaging:</b> With the integration of Pusher, messages are delivered instantly to the user browser without the need for page reloads.</li>
          <li><b>User Authentication:</b> NextAuth provides secure and flexible user authentication, supporting multiple login options.</li>
          <li><b>Responsive Design:</b> Tailwind CSS ensures the chat app works seamlessly across different screen sizes, offering a mobile-first experience.</li>
        </ul>
        <h3 style="color: #58a6ff;">Tech Stack & Learnings</h3>
        <ul style="color: #8b949e;">
          <li><b>Backend:</b> Worked with MongoDB.</li>
          <li><b>Frontend:</b> React.js, Tailwind for dynamic UI, using component-based architecture.</li>
          <li><b>Tools:</b> Next Auth, Pusher.</li>
        </ul>
        <p >The project taught me the importance of modularity, as each feature had its own structure (e.g., controllers, models, etc.).</p>
      `,
      images: [
        "images/portfolio/photography/p1.jpg",
        "images/portfolio/photography/p2.jpg",
      ],
      url: "https://github.com",
      technologies: [
        { class: "devicon-react-original", name: "React" },
        { class: "devicon-javascript-plain", name: "JavaScript" },
      ],
      styles: {
        backgroundColor: "#1c1f26",
        textColor: "#e6edf3",
        titleColor: "#58a6ff",
      },
    },
    {
      title: "shoeshop",
      startDate: "2023",
      description: `
        <p>An simple web store of shoe building by html,css,javascript </p>
      `,
      images: [
        "images/portfolio/adventure/p1.jpg",
        "images/portfolio/adventure/p2.jpg",
      ],
      url: "https://github.com",
      technologies: [
        { class: "devicon-angularjs-plain", name: "Angular" },
        { class: "devicon-typescript-plain", name: "TypeScript" },
        { class: "devicon-csharp-plain", name: "C#" },
      ],
      styles: {
        backgroundColor: "#0d1117",
        textColor: "#c9d1d9",
        titleColor: "#58a6ff",
      },
    },
  ],
  experience: [
    {
      company: "Sarl Biwa",
      title: "Front-End Developer",
      years: "10.2019 - present",
      mainTech: ["Angular 8/9/10"],
      technologies: [
        "REST API",
        "RxJS",
        "JavaScript",
        "Bootstrap",
        "MDBootstrap",
        "EF Core",
        ".NET Core",
        "SignalR",
        "Angular Material",
      ],
      description: `<li style="font-family: 'Georgia', sans-serif; font-size: 14px; color: #444; font-weight: bold;">
                Creation of a pipeline that will allow the deployment of the application on JIRA via Atlassian Forge.
              </li>
              <li style="font-family: 'Georgia', sans-serif; font-size: 14px; color: #444; font-weight: bold;">
                Development of the application screens, using the Jira APIs in backend, the Forge framework, React.JS.
              </li>`,

    },
    {
      company: "Serros Solutions",
      title: "Intern",
      years: "01.2018 - 09.2019",
      mainTech: ["Angular 7/8"],
      technologies: ["RxJS", "Django", "PHP", "JavaScript", "DHTMLX Gantt"],
    },
  ],
};

export default data;
