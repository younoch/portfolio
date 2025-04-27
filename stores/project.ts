import type { PersonalProject, CategorizedSkill } from "./type";
export const useProjectStore = defineStore('project', {
  state: (): { count: number; personalProjects: PersonalProject[]; cetegorizedSkills: CategorizedSkill[] } => ({
      count: 0,
      personalProjects: [
        {
          id: 1,
          label: "KireiBD: A Marketplace for Beauty Products",
          slug: "kireibd-marketplace",
          projectOverview: "KireiBD is a comprehensive marketplace for beauty products, offering a user-friendly interface for both buyers and sellers. The platform includes features like product listings, reviews, and secure payment processing, ensuring a seamless shopping experience.",
          startDate: "2022-01-01",
          endDate: "2022-06-01",
          status: "completed",
          thumbnail: "https://app.kireibd.com/assets/img/social-share.png",
          link: "https://kireibd.com",

          featured: true,
          keyFeatures: [
            {
              label: "User-Friendly Interface",
              description: "Designed for easy navigation and product discovery."
            },
            {
              label: "Secure Payment Processing",
              description: "Integrated payment gateways for safe transactions."
            },
            {
              label: "Product Reviews",
              description: "Allows users to leave feedback and ratings."
            },
            {
              label: "Admin Dashboard",
              description: "Comprehensive admin panel for managing products and users."
            },
            {
              label: "Product Listings",
              description: "Sellers can easily list their products with detailed descriptions."
            }
          ],
          role: "Sr. Frontend Developer",
          teamSize: 5,
          problemSolved: [
            "Data management and storage for beauty products.",
            "Payment processing and security.",
            "Social media integration for product sharing.",
          ],
          technologies: [
            { label: "Vue.js", expertise: "advanced", icon: "i-uil:vuejs" },
            { label: "Nuxt.js", expertise: "advanced", icon: "i-uil:nuxtjs" },
            { label: "Tailwind CSS", expertise: "advanced", icon: "i-uil:tailwindcss" },
            { label: "Node.js", expertise: "intermediate", icon: "i-uil:nodejs" },
            { label: "PostgreSQL", expertise: "intermediate", icon: "i-uil:postgresql" },
          ],
          screenshots: [
            "https://raw.githubusercontent.com/digin1/web-images/main/ansible-screenshot1.png",
            "https://raw.githubusercontent.com/digin1/web-images/main/ansible-screenshot2.png"
          ],
        },
        {
          id: 2,
          label: "Bytelancers: a chainise freelancing platform connecting businesses with remote professionals",
          slug: "bytelancers-freelancing-platform",
          projectOverview: "Bytelancers is a freelancing platform that connects businesses with remote professionals across various fields. It offers a streamlined process for posting jobs, hiring freelancers, and managing projects, ensuring a smooth experience for both parties.",
          startDate: "2022-01-01",
          endDate: "2022-06-01",
          status: "completed",
          thumbnail: "/images/Bytelancer-ss-1.png",
          link: "https://bytelancers.com",

          featured: true,
          keyFeatures: [
            {
              label: "Freelancer Marketplace",
              description: "Connects businesses with vetted freelancers and agencies across tech, design, marketing, and more."
            },
            {
              label: "Project Posting & Hiring",
              description: "Clients can post jobs, review proposals, and hire the best freelancers for their projects."
            },
            {
              label: "Secure Payments & Escrow System",
              description: "Payment protection ensures freelancers are paid upon project completion, with multiple payment options."
            },
            {
              label: "Skill-Based Categories",
              description: "Organizes freelancers by expertise (e.g., Web Dev, UI/UX, Content Writing, AI/Blockchain)."
            },
            {
              label: "Ratings & Reviews",
              description: "Client feedback and performance metrics help users choose reliable freelancers."
            },
            {
              label: "Collaboration Tools",
              description: "Built-in messaging, file-sharing, and project management integrations for seamless workflows."
            },
            {
              label: "Flexible Hiring Models",
              description: "Supports hourly, fixed-price, or retainer-based contracts for short-term or long-term work."
            },
            {
              label: "Freelancer Verification",
              description: "Identity checks, skill assessments, and portfolio reviews to ensure quality talent."
            },
            {
              label: "Global Talent Pool",
              description: "Access to freelancers worldwide, offering cost-effective and multilingual solutions."
            },
            {
              label: "Membership/Subscription Plans",
              description: "Optional premium tiers for freelancers (lower fees) and clients (exclusive hiring perks)."
            }
        ],
          role: "Frontend Developer",
          teamSize: 5,
          problemSolved: [
            "Dynamic favicon and notifications.",
            "AI chatbot for user assistance.",
          ],
          technologies: [
            { label: "Vue.js", expertise: "advanced", icon: "i-uil:vuejs" },
            { label: "Tailwind CSS", expertise: "advanced", icon: "i-uil:tailwindcss" },
            { label: "Websocket", expertise: "intermediate", icon: ""}
          ],
          screenshots: [
            "https://raw.githubusercontent.com/digin1/web-images/main/ansible-screenshot1.png",
            "https://raw.githubusercontent.com/digin1/web-images/main/ansible-screenshot2.png"
          ],
        },
      ],
      cetegorizedSkills: [
        {
          label: 'Frontend',
          icon: 'i-uil:frontend',
          skills: [
            { label: 'JavaScript', icon: 'i-uil:javascript' },
            { label: 'TypeScript', icon: 'i-uil:typescript' },
            { label: 'Vue', icon: 'i-uil:vuejs' },
            { label: 'Nuxt', icon: 'i-uil:nuxtjs'},
            { label: 'Tailwind CSS', icon: 'i-uil:tailwindcss' },
            { label: 'Bootstrap', icon: 'i-uil:bootstrap' },
            { label: 'websocket', icon: 'i-uil:websocket' },
          ],
        },
        {
          label: 'Backend',
          icon: 'i-uil:backend',
          skills: [
            { label: 'Node.js', icon: 'i-uil:nodejs' },
            { label: 'Django', icon: 'i-uil:djangoproject' },
            { label: 'REST APIs', icon: 'i-uil:restapi' },
            { label: 'PostgreSQL', icon: 'i-uil:postgresql' },
            { label: 'Redis', icon: 'i-uil:redis' },
            { label: 'SQLite', icon: 'i-uil:sqlite' },
          ],
        },
        {
          label: 'DevOps',
          icon: 'i-uil:devops',
          skills: [
            { label: 'Docker', icon: 'i-uil:docker' },
          ],
        },
        {
          label: 'tools',
          icon: 'i-uil:tools',
          skills: [
            { label: 'Git', icon: 'i-uil:git' },
            { label: 'GitHub', icon: 'i-uil:github' },
            { label: 'GitLab', icon: 'i-uil:gitlab' },
            { label: 'Bitbucket', icon: 'i-uil:bitbucket' },
            { label: 'Jira', icon: 'i-uil:jira' },
            { label: 'Trello', icon: 'i-uil:trello' },
          ],
        }
      ]
    }),
    getters: {
      doubleCount: (state) => state.count * 2,
      getProjectBySlug: (state) => {
        return (slug: string) => state.personalProjects.find(project => project.slug === slug)
      },
      getTechList: (state) => {
        return [...new Set(
          state.personalProjects.flatMap(project => 
            project.technologies.map(tech => tech.label)
          )
        )];
      }
    },
    actions: {
      increment() {
        this.count++
      },
    },
  })