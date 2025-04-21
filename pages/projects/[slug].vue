<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;
const { getProjectBySlug } = useProjectStore();

const project = computed(() => getProjectBySlug(slug as string));

// Handle 404
if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Project Not Found",
  });
}

// SEO
useHead({
  title: project.value?.name,
  meta: [{ name: "description", content: project.value?.tagline }],
});
</script>
<template>
<main class="flex-grow mt-4">
    <section class="px-8 max-w-5xl mx-auto py-12 w-full">
    <a
        href="/projects"
        class="text-gray-900 flex items-center mb-12 no-underline"
    >
        <svg
        class="w-4 h-4 mr-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
        ></path>
        </svg>
        Back to Projects
    </a>
    <article
        class="shadow-sm bg-white rounded-lg overflow-hidden p-8 relative transition-all duration-300 ease-in-out max-w-3xl mx-auto"
    >
        <figure class="rounded-t-lg overflow-hidden -mx-6 mb-8">
        <img
            src="https://raw.githubusercontent.com/digin1/web-images/main/ansible.png"
            alt="Automating Secure Infrastructure with Ansible: Managing SSH, Sudoers, and User Access Control"
            loading="lazy"
            class="object-contain w-full h-auto"
        />
        </figure>
        <header>
        <h1 class="text-3xl leading-10 text-gray-900 font-bold mb-6">
            Automating Secure Infrastructure with Ansible: Managing SSH,
            Sudoers, and User Access Control
        </h1>
        </header>
        <div class="flex flex-wrap gap-2 mb-6">
        <a
            href="/projects?tag=ansible"
            class="transition duration-150 ease-in-out text-blue-600 text-sm leading-5 px-3 py-1 bg-blue-100 border border-blue-200 rounded-full no-underline"
            >ansible</a
        >
        <a
            href="/projects?tag=ubuntu"
            class="transition duration-150 ease-in-out text-blue-600 text-sm leading-5 px-3 py-1 bg-blue-100 border border-blue-200 rounded-full no-underline"
            >ubuntu</a
        >
        </div>
        <section class="text-gray-700 text-base leading-7">
        <h2 class="mt-0 text-gray-900 text-2xl font-bold leading-8 mb-6">
            <strong class="text-gray-900 font-extrabold">Introduction</strong>
        </h2>
        <p class="mt-0 mb-5">
            Infrastructure automation is a critical aspect of modern system
            administration. My project focused on using
            <strong class="text-gray-900 font-semibold">Ansible</strong> to
            automate essential administrative tasks such as:
        </p>
        <ul class="list-disc mb-5 mt-5 pl-6">
            <li class="pl-1 mb-2 mt-2">
            <strong class="text-gray-900 font-semibold"
                >Managing SSH Key Authentication</strong
            >
            </li>
            <li class="pl-1 mb-2 mt-2">
            <strong class="text-gray-900 font-semibold"
                >Creating and Removing Users Securely</strong
            >
            </li>
            <li class="pl-1 mb-2 mt-2">
            <strong class="text-gray-900 font-semibold"
                >Configuring Sudoers for Role-Based Access Control</strong
            >
            </li>
            <li class="pl-1 mb-2 mt-2">
            <strong class="text-gray-900 font-semibold"
                >Monitoring and Logging Sudo Actions</strong
            >
            </li>
            <li class="pl-1 mb-2 mt-2">
            <strong class="text-gray-900 font-semibold"
                >Deploying Security Enhancements (Safe Deletion, Password
                Policies, etc.)</strong
            >
            </li>
        </ul>
        <p class="mb-5 mt-5">
            The primary goal was to create an automated, repeatable, and
            scalable solution for managing user access and securing the
            infrastructure.
        </p>
        <hr class="border-gray-200 border-t mb-12 mt-12" />
        <h2 class="mt-0 text-gray-900 text-2xl font-bold leading-8 mb-6">
            <strong class="text-gray-900 font-extrabold"
            >1. SSH Key Management and Secure Access Automation</strong
            >
        </h2>
        <p class="mt-0 mb-5">
            One of the core challenges in multi-node environments is
            <strong class="text-gray-900 font-semibold"
            >secure authentication</strong
            >. Instead of relying on password-based access, I automated
            <strong class="text-gray-900 font-semibold"
            >SSH key generation, distribution, and configuration</strong
            >.
        </p>
        <h3 class="text-gray-900 text-xl font-semibold leading-8 mb-3 mt-8">
            <strong class="text-gray-900 font-bold"
            >Generating and Distributing SSH Keys</strong
            >
        </h3>
        <p class="mt-0 mb-5">
            Ansible was used to generate SSH keys for different hosts and copy
            them to the appropriate machines.
        </p>
        <p class="mb-5 mt-5">
            <strong class="text-gray-900 font-semibold"
            >Playbook for Generating SSH Keys (Conditional Execution to
            Avoid Overwriting):</strong
            >
        </p>
        <pre
            class="bg-gray-800 rounded-md text-gray-200 text-sm font-mono leading-6 mb-6 mt-6 overflow-x-auto px-4 py-3"
        ><code>- name: Generate SSH keys for root if they don’t exist
    hosts: all
    become: false
    tasks:
    - name: Check if root SSH key exists
        stat:
        path: "~/.ssh/id_rsa"
        register: ssh_key_check

    - name: Generate SSH key for root
        shell: ssh-keygen -t rsa -N '' -f ~/.ssh/id_rsa
        when: not ssh_key_check.stat.exists
</code></pre>
        </section>
    </article>
    </section>
</main>
</template>
