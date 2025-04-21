import type { PersonalProject } from "./type";
export const useProjectStore = defineStore('project', {
  state: (): { count: number; personalProjects: PersonalProject[]} => ({
      count: 0,
      personalProjects: [
        {
          id: 1,
          name: "Automating Secure Infrastructure with Ansible",
          slug: "automating-secure-infrastructure-with-ansible",
          tagline: "SSH, Sudoers, and User Access Control Automation",
          description: "Automating Secure Infrastructure with Ansible streamlines SSH key management, user provisioning, and sudoers configuration to enhance security and efficiency. This project ensures password-less authentication, centralized sudo monitoring, and safe system administration through Infrastructure as Code (IaC).",
          startDate: "2021-12-12",
          endDate: "2022-03-15",
          status: "completed",
          preview: "https://raw.githubusercontent.com/digin1/web-images/main/ansible-preview.png",
          thumbnail: "https://raw.githubusercontent.com/digin1/web-images/main/ansible.png",
          link: "https://example.com/ansible-automation",
          repo: "https://github.com/yourusername/ansible-secure-infra",
          featured: true,
          category: "DevOps",
          role: "Lead Infrastructure Engineer",
          teamSize: 3,
          challenges: "Managing multi-environment configurations and ensuring idempotency across different Linux distributions",
          achievements: "Reduced server provisioning time from 2 hours to 15 minutes per instance",
          techStack: [
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
          learnings: "Gained deep understanding of idempotent operations and how to properly structure Ansible playbooks for large-scale deployments",
          futurePlans: "Expand to support Windows environments and integrate with Terraform for full infrastructure provisioning"
        },
        {
          id: 2,
          name: "Mohammed's Portfolio",
          slug: 'project-name',
          tagline: 'Short catchy description',
          description: 'Detailed description of the project',
          startDate: 'YYYY-MM-DD',
          endDate: 'YYYY-MM-DD', // or null if ongoing
          status: 'completed', // 'completed', 'in-progress', 'on-hold', 'planned'
          preview: '/images/project-preview.jpg',
          thumbnail: '/images/project-thumbnail.jpg',
          link: 'https://project-url.com',
          repo: 'https://github.com/username/repo', // if applicable
          featured: true, // for highlighting important projects
          category: 'web development', // e.g., 'mobile', 'design', 'ai', etc.
          role: 'Full-stack Developer', // your role in the project
          teamSize: 1, // number of people involved
          challenges: 'Describe technical or other challenges faced',
          achievements: 'Key accomplishments or metrics',
          techStack: [
            {
              label: 'React',
              expertise: 'advanced', // 'beginner', 'intermediate', 'advanced', 'expert'
              icon: 'react-icon.svg' // optional
            }
          ],
          screenshots: [
            '/screenshots/screen1.jpg',
            '/screenshots/screen2.jpg'
          ],
          learnings: 'What you learned from this project',
          futurePlans: 'Potential future improvements'
        },
        {
          id: 3,
          name: "Another Project",
          slug: 'project-name',
          tagline: 'Short catchy description',
          description: 'Detailed description of the project',
          startDate: 'YYYY-MM-DD',
          endDate: 'YYYY-MM-DD', // or null if ongoing
          status: 'completed', // 'completed', 'in-progress', 'on-hold', 'planned'
          preview: '/images/project-preview.jpg',
          thumbnail: '/images/project-thumbnail.jpg',
          link: 'https://project-url.com',
          repo: 'https://github.com/username/repo', // if applicable
          featured: true, // for highlighting important projects
          category: 'web development', // e.g., 'mobile', 'design', 'ai', etc.
          role: 'Full-stack Developer', // your role in the project
          teamSize: 1, // number of people involved
          challenges: 'Describe technical or other challenges faced',
          achievements: 'Key accomplishments or metrics',
          techStack: [
            {
              label: 'React',
              expertise: 'advanced', // 'beginner', 'intermediate', 'advanced', 'expert'
              icon: 'react-icon.svg' // optional
            }
          ],
          screenshots: [
            '/screenshots/screen1.jpg',
            '/screenshots/screen2.jpg'
          ],
          learnings: 'What you learned from this project',
          futurePlans: 'Potential future improvements'
        }
      ]
    }),
    getters: {
      doubleCount: (state) => state.count * 2,
      getProjectBySlug: (state) => {
        return (slug: string) => state.personalProjects.find(project => project.slug === slug)
      },
    },
    actions: {
      increment() {
        this.count++
      },
    },
  })