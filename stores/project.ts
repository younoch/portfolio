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
            { label: "Tailwind CSS", expertise: "advanced", icon: "i-mdi:tailwind" },
            { label: "Node.js", expertise: "intermediate", icon: "i-uil:nodejs" },
            { label: "Axios", expertise: "intermediate", icon: "i-uil:axios" },
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
          thumbnail: "/portfolio/images/Bytelancer-ss-1.png",
          link: "https://bytelancers.com",

          featured: false,
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
        {
          id: 3,
          label: "ReadyKit: Admin & User Dashboard Templates (with functionality)",
          slug: "readykit-admin-dashboard",
          projectOverview: "ReadtKit – A smart solution for building applications with ready UI and good laravel application structure. It contains many ready components which are required for most of the applications. It includes user role management, email, notifications and other CRUD functionality. If you are planning to develop your next project and want to save thousands of hours, then this is the right choice for you.",
          startDate: "2022-01-01",
          endDate: "2022-06-01",
          status: "completed",
          thumbnail: "https://market-resized.envatousercontent.com/codecanyon.net/files/515022215/Inline%20Preview%20image%20-%20Readykit%203.1.jpg?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=6e4de912f6f1fd76803a58778c3956ea2dfe4fdb853df8b6406a09f999087299",
          link: "https://readykit.gainhq.com/",

          featured: true,
          keyFeatures: [
            {
              label: "Integrated Services",
              description: "Supports major payment gateways (PayPal, Razorpay, Stripe), cloud storage via AWS S3, Google Maps integration, and Twilio SMS services."
            },
            {
              label: "User Experience & UI",
              description: "Includes dark/light mode, RTL support, dynamic filters, reusable Vue components, and various UI elements like progress bars, datatables, calendar, kanban, and report views."
            },
            {
              label: "Social & Communication Features",
              description: "Built-in user chat, social network-style feeds and profile pages, notifications, and customizable email templates for seamless communication."
            },
            {
              label: "Data Handling & Display",
              description: "Advanced datatables with CRUD functionality, export options, list and card views, plus automated form validation for smooth data operations."
            },
            {
              label: "User & Access Management",
              description: "Robust authentication system, user role management, user profiles, and mandatory application settings interface with proper UI handling."
            },
            {
              label: "System Essentials",
              description: "Prebuilt dashboards, invoice and error pages, support for multiple layouts, and many more practical tools to speed up development."
            }
          ],
          role: "Frontend Developer",
          teamSize: 5,
          problemSolved: [
            "kanban view for task management.",
            "AI chatbot for user assistance.",
          ],
          technologies: [
            { label: "Vue.js", expertise: "advanced", icon: "i-uil:vuejs" },
            { label: "Bootstrap", expertise: "advanced", icon: "i-uil:tailwindcss" },
            { label: "Nuxt.js", expertise: "intermediate", icon: ""}
          ],
          screenshots: [
            "https://raw.githubusercontent.com/digin1/web-images/main/ansible-screenshot1.png",
            "https://raw.githubusercontent.com/digin1/web-images/main/ansible-screenshot2.png"
          ],
        },
        {
          id: 4,
          label: "CourseCab: An Online Learning Platform",
          slug: "coursecab-online-learning-platform",
          projectOverview: "CourseCab is an online learning platform that connects educators with students. It offers a wide range of courses, interactive learning tools, and a community for learners to engage and collaborate.",
          startDate: "2022-01-01",
          endDate: "2022-06-01",
          status: "completed",
          thumbnail: "/portfolio/images/coursecab-ss-1.png",
          link: "https://www.coursecab.com/",

          featured: true,
          keyFeatures: [
            {
              label: "Course Management",
              description: "Allows educators to create, manage, and sell courses."
            },
            {
              label: "Interactive Learning Tools",
              description: "Includes quizzes, forums, and live sessions for enhanced learning."
            },
            {
              label: "Community Engagement",
              description: "Connects learners with peers and educators for collaboration."
            },
            {
              label: "Exam Management",
              description: "Facilitates online exams and assessments for students."
            },
            {
              label: "Payment Integration",
              description: "Supports multiple payment methods for course purchases."
            },
            {
              label: "User Profiles",
              description: "Personalized profiles for students and educators."
            }
          ],
          role: "Frontend Developer",
          teamSize: 5,
          problemSolved: [
            "Dynamic favicon and notifications.",
            "AI chatbot for user assistance.",
          ],
          technologies: [
            { label: "Nuxt.js", expertise: "advanced", icon: "i-uil:vuejs" },
            { label: "Bootstrap", expertise: "advanced", icon: "i-uil:tailwindcss" },
            { label: "Axios.js", expertise: "intermediate", icon: ""}
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
            { label: 'JavaScript', icon: 'i-uil:java-script' },
            { label: 'TypeScript', icon: 'i-tabler:brand-typescript' },
            { label: 'Vue', icon: 'i-uil:vuejs' },
            { label: 'Nuxt', icon: 'i-mdi:nuxt'},
            { label: 'Tailwind CSS', icon: 'i-mdi:tailwind' },
            { label: 'Bootstrap', icon: 'i-tabler:brand-bootstrap' },
            { label: 'Axios', icon: 'i-simple-icons:axios' },
            { label: 'Websocket', icon: 'i-logos:websocket' },
          ],
        },
        {
          label: 'Backend',
          icon: 'i-uil:backend',
          skills: [
            { label: 'Node.js', icon: 'i-devicon-plain:nodejs-wordmark' },
            { label: 'Django', icon: 'i-tabler:brand-django' },
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