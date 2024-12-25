const data = {
    basicInfo: {
      descriptionHeader: "Bonjour",
      description: `👋 
      <p style="font-family: 'Georgia', sans-serif; font-size: 14px; color: #444; font-weight: bold;">
        Bonjour à tous, je suis DO Uy Khang du Vietnam. Actuellement, je suis étudiant en 4e année à l'INSA Centre Val de Loire, Bourges, Cher, France.
    
      Mon domaine d'études actuel est le génie logiciel et la cybersécurité. 
      J'ai une passion pour créer des solutions logicielles innovantes qui ont un impact. 
      Avec une solide base en algorithmes et une bonne maîtrise de Java et C, 
      j'ai perfectionné mes compétences en programmation orientée objet (OOP) avec Java. Quand je ne code pas,
       vous pouvez me trouver en train d'explorer de nouvelles technologies, de lire des livres ou de jouer à des jeux vidéo. 
       Grâce à mes projets universitaires et personnels, j'ai acquis une gamme de compétences—en utilisant Node.js,
        React, Next.js pour le développement, Docker pour le déploiement, et même un aperçu de la cybersécurité.
      </p>
      `,
      sectionName: {
        about: "À propos de moi",
        projects: "Projets",
        skills: "Compétences",
        experience: "Expérience",
      },
    },
    projects: [
      {
        title: "KD Store",
        startDate: "2024",
        description: `
          <h2 style="color: #58a6ff;">En résumé</h2>
          <p> Loukas NGUYEN 
          J'ai développé un site e-commerce simple qui permet aux utilisateurs d'acheter et de vendre des produits en ligne. Le site comprend les fonctionnalités de base suivantes :</p>
          <ul style="color: #8b949e;">
            <li><b>Page de liste des produits :</b> Affiche une liste de produits avec des images, des prix et des descriptions détaillées.</li>
            <li><b>Panier :</b> Permet aux utilisateurs d'ajouter, de modifier ou de supprimer des produits dans le panier.</li>
            <li><b>Processus de commande :</b> Intègre un simple flux de commande pour finaliser les achats.</li>
            <li><b>Page de gestion des produits (pour les vendeurs) :</b> Permet aux vendeurs d'ajouter, de modifier ou de supprimer des produits.</li>
          </ul>
          <h3 style="color: #58a6ff;">Stack technologique & Apprentissages</h3>
          <ul style="color: #8b949e;">
            <li><b>Backend :</b> Utilisation de Node.js pour construire les APIs.</li>
            <li><b>Frontend :</b> React.js pour une interface utilisateur dynamique, utilisant une architecture basée sur des composants.</li>
            <li><b>Communication :</b> APIs pour connecter le backend et le frontend.</li>
          </ul>
          <p>Ce projet m'a enseigné l'importance de la modularité, chaque fonctionnalité ayant sa propre structure (par ex., contrôleurs, modèles, etc.).</p>
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
        title: "ChatApp",
        startDate: "2024",
        description: `
          <h2 style="color: #58a6ff;">Introduction</h2>
          <p > Cette application de chat est construite en utilisant les technologies modernes de développement web pour fournir une expérience de messagerie en temps réel fluide</p>
          <ul style="color: #8b949e;">
            <li><b>Messagerie en temps réel :</b> Grâce à l'intégration de Pusher, les messages sont livrés instantanément au navigateur de l'utilisateur sans recharger la page.</li>
            <li><b>Authentification des utilisateurs :</b> NextAuth offre une authentification sécurisée et flexible, prenant en charge plusieurs options de connexion.</li>
            <li><b>Design responsive :</b> Tailwind CSS garantit que l'application fonctionne parfaitement sur différentes tailles d'écran, offrant une expérience mobile-first.</li>
          </ul>
          <h3 style="color: #58a6ff;">Stack technologique & Apprentissages</h3>
          <ul style="color: #8b949e;">
            <li><b>Backend :</b> Utilisation de MongoDB.</li>
            <li><b>Frontend :</b> React.js, Tailwind pour une interface utilisateur dynamique.</li>
            <li><b>Outils :</b> Next Auth, Pusher.</li>
          </ul>
          <p >Ce projet m'a enseigné l'importance de la modularité, chaque fonctionnalité ayant sa propre structure.</p>
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
        title: "ShoeShop",
        startDate: "2023",
        description: `
          <p>Une boutique en ligne de chaussures développée avec HTML, CSS et JavaScript.</p>
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
        title: "Développeur Front-End",
        years: "10.2019 - présent",
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
                  Création d'un pipeline permettant le déploiement de l'application sur JIRA via Atlassian Forge.
                </li>
                <li style="font-family: 'Georgia', sans-serif; font-size: 14px; color: #444; font-weight: bold;">
                  Développement des écrans de l'application en utilisant les APIs Jira en backend et le framework Forge avec React.JS.
                </li>`,
  
      },
      {
        company: "Serros Solutions",
        title: "Stagiaire",
        years: "01.2018 - 09.2019",
        mainTech: ["Angular 7/8"],
        technologies: ["RxJS", "Django", "PHP", "JavaScript", "DHTMLX Gantt"],
      },
    ],
  };
  
  export default data;
  