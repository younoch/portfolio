import type { PersonalProject, CategorizedSkill } from "./type";
export const useProjectStore = defineStore('project', {
  state: (): { count: number; personalProjects: PersonalProject[]; cetegorizedSkills: CategorizedSkill[] } => ({
      count: 0,
      personalProjects: [
        {
          id: 1,
          label: "Automating Secure Infrastructure with Ansible",
          slug: "automating-secure-infrastructure-with-ansible",
          projectOverview: "Automating Secure Infrastructure with Ansible streamlines SSH key management, user provisioning, and sudoers configuration to enhance security and efficiency. This project ensures password-less authentication, centralized sudo monitoring, and safe system administration through Infrastructure as Code (IaC).",
          startDate: "2021-12-12",
          endDate: "2022-03-15",
          status: "completed",
          thumbnail: "https://raw.githubusercontent.com/digin1/web-images/main/ansible.png",
          link: "https://example.com/ansible-automation",
          featured: true,
          keyFeatures: [
            {
              label: "SSH Key Management",
              description: "Automated SSH key generation and distribution for secure access.",
            },
            {
              label: "User Provisioning",
              description: "Streamlined user account creation and management.",
            },
            {
              label: "Sudoers Configuration",
              description: "Centralized sudoers file management for enhanced security.",
            },
            {
              label: "Infrastructure as Code (IaC)",
              description: "Implemented IaC principles for consistent and repeatable deployments.",
            }
          ],
          role: "Lead Infrastructure Engineer",
          teamSize: 3,
          problemSolved: [
            "Automated SSH key management to eliminate manual errors.",
            "Streamlined user provisioning process for faster onboarding.",
            "Centralized sudoers configuration for better security and auditing.",
            "Implemented Infrastructure as Code (IaC) for consistent deployments."
          ],
          tech: [
            { label: "ansible", expertise: "expert", icon: "simple-icons:ansible" },
            { label: "ubuntu", expertise: "advanced", icon: "simple-icons:ubuntu" },
            { label: "ssh", expertise: "expert", icon: "mdi:ssh" },
            { label: "yaml", expertise: "advanced", icon: "vscode-icons:file-type-yaml" },
            { label: "linux", expertise: "expert", icon: "mdi:linux" }
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
            { label: 'MySQL', icon: 'i-uil:mysql' },
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
            project.tech.map(tech => tech.label)
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