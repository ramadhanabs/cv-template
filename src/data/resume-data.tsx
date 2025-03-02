import { ConsultlyLogo, ParabolLogo } from "@/images/logos"
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"

export const RESUME_DATA = {
  name: "Ramadhana Bagus S.",
  initials: "RBS",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/jakarta",
  about: "Fullstack Engineer from Indonesia 🇮🇩",
  summary:
    "Interested in software development, microservices, infrastructure, and Web3 (DeFi). Also love running and weightlifting.",
  avatarUrl: "/avatar.jpg",
  personalWebsiteUrl: "https://bagus.men",
  contact: {
    email: "ramadhanabagus99@gmail.com",
    tel: "+6282227804252",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ramadhanabs",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ramadhanabagus/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Universitas Islam Indonesia",
      degree: "Bachelor's Degree in Computer Science",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Deloitte Consulting - SEA",
      link: "https://www2.deloitte.com/id/en.html",
      badges: ["Full Time - Remote"],
      title: "Senior Technology Analyst",
      logo: ParabolLogo,
      start: "2024",
      end: "Current",
      description:
        "<div>\n    <p><strong>Deloitte</strong> is a leading global professional services firm, providing audit, consulting, tax, and advisory services with a strong presence in over 150 countries.</p>\n    <ul class='list-disc pl-4 pt-2'>\n        <li>Developed the frontend website of ticketing features for Resort World Sentosa Singapore, ensuring seamless integration with microservices and Adobe Experience Manager (AEM).</li>\n        <li>Collaborated with cross-functional teams from Singapore, Malaysia, and the Philippines to optimize website performance and improve the overall user experience.</li>\n        <li>Worked closely with the Microservices and AEM teams to integrate dynamic content and backend services, improving website updates and time-to-market.</li>\n        <li>Utilized TypeScript, ReactJS, and AEM to build scalable, high-performance web applications, enhancing the speed and reliability of key customer-facing features.</li>\n    </ul>\n</div>",
    },
    {
      company: "Kounslr",
      link: "https://kounslr.com",
      badges: ["Freelance - Remote"],
      title: "Fullstack Engineer",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "<div>\n    <p><strong>Kounslr</strong> is an educational counseling platform designed to help high school students navigate the college application process and achieve their dream college.</p>\n    <ul class='list-disc pl-4 pt-2'>\n        <li>Built Kounslr independently, turning the founder's product ideas into reality using TypeScript, ReactJS, TailwindCSS, Firebase, NodeJS, and Cloud Functions, while also integrating AI to enhance the platform's functionality.</li>\n        <li>Managed both the production and development environments, and developed the public-facing website and admin portal for statistics monitoring, ensuring smooth operations and seamless user experience.</li>\n    </ul>\n</div>\n",
    },
    {
      company: "Erajaya Swasembada",
      link: "https://eraspace.com",
      badges: ["Full Time - On Site"],
      title: "Frontend Developer - B2C",
      logo: ParabolLogo,
      start: "2022",
      end: "2024",
      description:
        "<div>\n    <p><strong>Erajaya Swasembada</strong> is one of Indonesia's leading distributors of consumer electronics and telecommunications products, with a strong presence in both retail and e-commerce.</p>\n    <ul class='list-disc pt-2 pl-4'>\n        <li>Developed key features such as the order and promo notification inbox for Eraspace and iBox, enhancing customer engagement and real-time updates.</li>\n        <li>Improved the iBox codebase by implementing TypeScript, Tanstack Query for efficient data-fetching and caching, and migrating from Next.js 10 to 13, optimizing performance and maintainability.</li>\n        <li>Enhanced site performance by improving Core Web Vitals for the JDSports website and supporting SEO efforts through Salesforce and Google Analytics integration, driving better customer insights.</li>\n        <li>Led testing initiatives by introducing unit and integration testing in the iBox codebase using Jest, React Testing Library, and Mock Service Worker, improving code quality and reliability.</li>\n    </ul>\n</div>\n",
    },
    {
      company: "PT Infosys Solusi Terpadu",
      link: "https://eraspace.com",
      badges: ["Full Time - Hybrid"],
      title: "Frontend Developer",
      logo: ParabolLogo,
      start: "2022",
      end: "2022",
      description:
        "<div>\n    <p><strong>Infosys Solusi Terpadu</strong> is a leading provider of integrated IT services and solutions in Indonesia, specializing in digital transformation, cloud computing, and enterprise technologies.</p>\n    <ul class='list-disc pt-2 pl-4'>\n        <li>Developed an internal dashboard for a major Indonesian bank, collaborating with the backend and QC teams, using ReactJS and VueJS for a seamless user experience.</li>\n    </ul>\n</div>\n",
    },
  ],
  techstack: [
    "ReactJS",
    "VueJS",
    "NextJS",
    "Gin",
    "Panda",
    "Google Cloud Platform",
    "Firebase",
    "Adobe Experience Manager",
    "Jquery",
    "Foundry",
    "Wagmi"
  ],
  programmingLanguages: ["Typescript", "Golang", "C++", "Python", "Solidity"],
  projects: [
    {
      title: "Eraspace",
      techStack: ["TypeScript", "Next.js", "TailwindCSS"],
      description: "Eraspace is a biggest lifestyle and gadget retailer website in Indonesia.",
      logo: ConsultlyLogo,
      link: {
        label: "eraspace.com",
        href: "https://eraspace.com/",
      },
    },
    {
      title: "iBox",
      techStack: ["TypeScript", "Next.js", "TailwindCSS"],
      description: "iBox is an official reseller of Apple Premium Product in Indonesia.",
      logo: ConsultlyLogo,
      link: {
        label: "ibox.co.id",
        href: "https://ibox.co.id/",
      },
    },
    {
      title: "Kounslr",
      techStack: ["TypeScript", "ReactJS", "Firebase", "GCP"],
      description: "Kounslr is a counseling platform for US students.",
      logo: ConsultlyLogo,
      link: {
        label: "kounslr.com",
        href: "https://kounslr.com/",
      },
    },
  ],

  sideProjects: [
    {
      title: "Secure File Uploader",
      techStack: ["Golang", "Gin", "Sqlite", "ReactJS", "Side Project"],
      description: "Exploration about securing and chunking file upload",
      logo: ConsultlyLogo,
      link: {
        label: "go-secure-file-management",
        href: "https://github.com/ramadhanabs/go-secure-file-management",
      },
    },
    {
      title: "Novaria DeFi",
      techStack: ["Solidity", "Foundry", "ReactJS", "TailwindCSS", "Web3 Hackathon"],
      description:
        "Web3 DeFi for hackathon project: Tokenizing funding rate to Principle Token and Yield Token",
      logo: ConsultlyLogo,
      link: {
        label: "novaria",
        href: "https://novaria.vercel.app/",
      },
    },
  ],
} as const
