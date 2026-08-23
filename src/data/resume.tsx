import { Icons } from "@/components/icons";
import {
    HomeIcon,
    NotebookIcon,
    BookUserIcon,
} from "lucide-react";

export const DATA = {
    name: "Omkar Wagholikar",
    initials: "OW",
    url: "https://github.com/Omkar-Wagholikar",
    location: "Pune, Maharashtra",
    locationLink: "https://www.google.com/maps/place/pune",
    description:
        "22 year old Software Engineer at NiCE Ltd. I enjoy backend, data engineering, and building things that touch real systems — from event-driven cloud pipelines to RAG packages.",
    summary:
        "I'm a **Software Engineer** and **Full-Stack Developer** working on backend systems in **C#**, where I optimize application logic, debug distributed workflows, and build scalable document ingestion pipelines on cloud infrastructure. My interests span systems programming, Generative AI, and building reliable developer-focused tools.\n\nMy day-to-day toolbox includes **Python, Java, JavaScript/TypeScript, and C#**, with meaningful experience across **Django/DRF, React, Node.js, Flask, Celery, and RabbitMQ**, along with data tooling like **Airflow, DBT, BigQuery, and Elasticsearch**. I’m comfortable across both application and data engineering — from building **full-stack platforms** and scalable ingestion systems to authoring **BRAGS**, a published Python package for customizable on-device RAG pipelines with a Go-based file watcher. I also enjoy exploring lower-level programming in **C and Rust** to better understand performance and concurrency.\n\nOutside engineering, I’m a **passionate reader, astronomy enthusiast, and occasional graphic designer**. I actively contribute to open source, participate in hackathons, and speak at developer communities, including a session on **Unix file descriptors and PTY internals** at **FOSS United Pune**.",
    avatarUrl: "/me.png",
    skills: [
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "C#",
        "Django",
        "DRF",
        "React",
        "Node.js",
        "Celery",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Redis",
        "Docker",
        "Kafka",
        "RabbitMQ",
        "Elastic Search",
        "Airflow",
        "DBT",
        "BigQuery",
        "GCS",
        "AWS Bedrock",
    ],
    iconCloud: [
        "java",
        "python",
        "javascript",
        "typescript",
        "csharp",
        "django",
        "react",
        "nodedotjs",
        "celery",
        "postgresql",
        "mongodb",
        "mysql",
        "redis",
        "docker",
        "apachekafka",
        "rabbitmq",
        "elasticsearch",
        "apacheairflow",
        "dbt",
        "googlebigquery",
        "googlecloud",
        "amazonaws",
        "git",
        "github",
        "linux",
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        {
            href: "https://medium.com/@Omkar-Wagholikar",
            icon: NotebookIcon,
            label: "Blog",
        },
        { href: "/resume.pdf", icon: BookUserIcon, label: "Resume" },
    ],
    contact: {
        email: "omkarrwagholikar@gmail.com",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/Omkar-Wagholikar",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://linkedin.com/in/omkar-wagholikar",
                icon: Icons.linkedin,
                navbar: true,
            },
            X: {
                name: "X",
                url: "https://x.com/",
                icon: Icons.x,
                navbar: false,
            },
            Email: {
                name: "Send Email",
                url: "mailto:omkarrwagholikar@gmail.com",
                icon: Icons.email,
                navbar: true,
            },
        },
    },

    work: [
        {
            company: "NiCE Ltd",
            href: "https://www.nice.com",
            badges: [],
            location: "Pune",
            title: "Associate Software Development Engineer",
            logoUrl: "/nice.png",
            start: "July 2025",
            end: "Present",
            description:
                "Optimized core backend application logic in C#, improving performance and reliability of critical paths. Fixed an infinite reprocessing issue in the DLQ by debugging and correcting routing logic to prevent unwanted retries. Designed document ingestion pipelines with checkpointing, batch processing, retry logic, and failure handling. Leveraged AWS services like Bedrock, Lambda, and Batch to build scalable, event-driven cloud solutions.",
        },
        {
            company: "Pune Knowledge Cluster",
            href: "https://pkc.org.in/",
            badges: [],
            location: "Pune",
            title: "Project Assistant",
            logoUrl: "/pkc.png",
            start: "October 2024",
            end: "February 2025",
            description:
                "Architected and deployed a full-stack platform for a national-level data challenge competition. Built the frontend in React and the backend in Django REST Framework with secure token-based auth. Designed a scalable submission pipeline handling large user file uploads via Azure object storage, and created internal tools for communication, contact registration, and workflow automation.",
        },
        {
            company: "General Mills India",
            href: "https://www.generalmills.com/",
            badges: [],
            location: "Mumbai",
            title: "Software Engineering Intern, Digital and Technology",
            logoUrl: "/generalmills.png",
            start: "June 2024",
            end: "August 2024",
            description:
                "Worked with the Data Engineering team on a commercial File Data Ingestion project utilizing BigQuery. Established standardized procedures for incoming file management via shared mailbox and GCP Buckets. Executed the FDI process with data quality checks using DBT, integrated into Airflow DAGs.",
        },
        {
            company: "Pune Knowledge Cluster",
            href: "https://pkc.org.in/",
            badges: [],
            location: "Pune",
            title: "Research Associate",
            logoUrl: "/pkc.png",
            start: "November 2023",
            end: "February 2024",
            description:
                "Developed solutions for a Central Government problem statement using Docker, Elastic Search, and DRF. Led the full project lifecycle from requirement analysis to system design, development, and deployment. Implemented a custom Information Retrieval System using RAG to assist social healthcare workers.",
        },
    ],
    education: [
        {
            school: "Pune Institute of Computer Technology",
            href: "https://pict.edu",
            degree: "Bachelor of Engineering (B.E.) in Computer Engineering — CGPA: 8.8",
            logoUrl: "/pict.jpg",
            start: "July 2021",
            end: "July 2025",
        },
    ],
    projects: [
        {
            title: "EduNexus",
            href: "https://github.com/Omkar-Wagholikar/EduNexus.git",
            dates: "2024 - 2025",
            active: true,
            description:
                "Academic file-sharing platform with hybrid lexical + semantic search over PDFs, slides, and docs, plus OCR and LLM summaries.",
            technologies: [
                "Django",
                "React",
                "TypeScript",
                "Celery",
                "Firebase",
                "pgvector",
                "PostgreSQL",
                "Tailwind CSS",
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/Omkar-Wagholikar/EduNexus.git",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/edunexus.png",
            video: "",
        },
        {
            title: "Project MAVIS",
            href: "https://github.com/Project-MAVIS/MAVIS",
            dates: "BE Project, 2024 - 2025",
            active: true,
            description:
                "Media authenticity system that signs images at capture with an emulated Secure Enclave and verifies them via steganographic watermarks.",
            technologies: ["Python", "FastAPI", "Gradio", "OpenCV", "PyWavelets"],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/Project-MAVIS/MAVIS",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/mavis.png",
            video: "",
        },
        {
            title: "BRAGS: Build your own RAGs",
            href: "https://pypi.org/project/brags/",
            dates: "2024 - Present",
            active: true,
            description:
                "CLI + Python package for spinning up custom RAG pipelines, with a live-syncing file watcher, hallucination checking, and an MCP server for Claude Code.",
            technologies: ["Python", "Go", "FAISS", "Chroma", "tree-sitter", "MCP", "RAG"],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/Omkar-Wagholikar/brags",
                    icon: <Icons.github className="size-3" />,
                },
                {
                    type: "Website",
                    href: "https://pypi.org/project/brags/",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/brags.png",
            video: "",
        },
        {
            title: "Cloudrive",
            href: "https://github.com/Omkar-Wagholikar/Cloudrive",
            dates: "2026",
            active: true,
            description:
                "Self-hosted, Google Drive-style storage system with a Go backend built for low-RAM ARM devices and a native Android client with offline music playback.",
            technologies: ["Go", "Kotlin", "Jetpack Compose", "SQLite", "SeaweedFS", "Kafka", "Media3"],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/Omkar-Wagholikar/Cloudrive",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/clouddrive.png",
            video: "",
        },
        {
            title: "Orbital8: SIMD Gravity Simulator",
            href: "https://github.com/Omkar-Wagholikar/Orbital8",
            dates: "2026",
            active: true,
            description:
                "AVX2 SIMD-accelerated N-body gravity simulator capped at exactly 8 bodies, one vectorized pass per frame, rendered live with raylib.",
            technologies: ["C", "AVX2", "SIMD", "raylib"],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/Omkar-Wagholikar/Orbital8",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/orbital8.png",
            video: "",
        },
        {
            title: "Termion: Terminal Emulator",
            href: "https://github.com/Omkar-Wagholikar/Termion",
            dates: "2025",
            active: true,
            description:
                "Terminal emulator built from scratch on PTY and egui, with ANSI escape parsing, non-blocking I/O, and command history.",
            technologies: ["Rust", "egui", "nix", "PTY"],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/Omkar-Wagholikar/Termion",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/termion.png",
            video: "",
        },
    ],
    hackathons: [
        {
            title: "FOSS United Pune",
            type: "Speaker",
            dates: "April 2026",
            position: "Speaker",
            location: "Pune",
            description:
                "Spoke on Unix file descriptors and PTY internals at FOSS United Pune.",
            image: "/fossunited.png",
            links: [
                {
                    title: "Talk Page",
                    icon: <Icons.globe className="size-3" />,
                    href: "https://fossunited.org/c/pune/2026-march/cfp/38r9ib8ar8",
                },
            ],
        },
        {
            title: "Impetus and Concepts 2025",
            type: "Project Competition",
            dates: "2025",
            position: "1st Prize 🥇",
            location: "PICT, Pune",
            description:
                "Winner at PICT InC' 2025 with a project on media provenance and authenticity verification.",
            image: "/pict.jpg",
            links: [],
        },
        {
            title: "Nexus 2.0",
            type: "Project Competition",
            dates: "2025",
            position: "1st Prize 🥇",
            location: "Army Institute of Technology, Pune",
            description:
                "Winner at Nexus 2.0 (AIT) for an end-to-end system tackling deepfakes via hardware-backed image provenance and steganographic techniques resilient to compression.",
            image: "/ait.png",
            links: [],
        },
        {
            title: "Innovation '25",
            type: "Project Competition",
            dates: "2025",
            position: "Top 5",
            location: "Cummins College of Engineering, Pune",
            description:
                "Top 5 finalist at Innovation '25 (Cummins COE).",
            image: "/cummins.png",
            links: [],
        },
        {
            title: "Open Source: CircuitVerse",
            type: "Open Source",
            dates: "2024 - 2025",
            position: "3 merged PRs",
            location: "Remote",
            description:
                "Open source contributor to CircuitVerse 3 merged pull requests (bug fixes and refactoring) and 1 issue reported.",
            image: "/circuitverse.png",
            links: [
                {
                    title: "Merged PRs",
                    icon: <Icons.github className="size-3" />,
                    href: "https://github.com/CircuitVerse/CircuitVerse/pulls?q=is%3Apr+author%3AOmkar-Wagholikar+is%3Aclosed",
                },
            ],
        },
    ],
    certifications: [
        {
            name: "Deep Learning Specialization",
            href: "https://coursera.org/share/89ea828184f62fca51f5823288501cec",
        },
        {
            name: "Basic GANs",
            href: "https://coursera.org/share/3eaf11ccbac55376e58a4f1781216145",
        },
        {
            name: "GCP Core Infrastructure",
            href: "https://coursera.org/share/bb036975dcfbcf235e731257ccfb6291",
        },
        {
            name: "LFD103: Linux Kernel Development",
            href: "https://www.credly.com/badges/ac8a4440-822c-4c6d-90b6-063950d6cfbc/public_url",
        },
    ],
} as const;
