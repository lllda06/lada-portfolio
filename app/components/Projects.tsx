"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";


const featuredProjects = [
  {
    title: "Airflow ML Pipeline",
    description:
      "Automated machine learning workflow for model training and prediction using Apache Airflow, Docker and Scikit-learn.",
    stack: [
      "Python",
      "Apache Airflow",
      "Docker",
      "Scikit-learn",
    ],
    link:
      "https://github.com/lllda06/AIRFLOW-ML-PIPELINE",
  },

  {
    title: "ML Prediction Service",
    description:
      "Production-oriented machine learning API for serving trained models with FastAPI and REST endpoints.",
    stack: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "Docker",
    ],
    link:
      "https://github.com/lllda06/FASTAPI-PROJECT",
  },

  {
    title: "Used Cars Data Analysis",
    description:
      "Data cleaning, exploratory analysis and visualization of vehicle datasets with feature preparation.",
    stack: [
      "Python",
      "Pandas",
      "Jupyter",
      "Data Analysis",
    ],
    link:
      "https://github.com/lllda06/DATA-ANALYSIS",
  },

  {
    title: "FlatmateFlow",
    description:
      "Household management platform with REST API architecture for organizing tasks and responsibilities.",
    stack: [
      "Django",
      "DRF",
      "PostgreSQL",
      "Python",
    ],
    link:
      "https://github.com/lllda06/FLATMATEFLOW",
  },
];


const softwareProjects = [
  {
    title: "CodeVerse",
    description:
      ".NET MAUI mobile application for digital learning with courses, materials and student progress tracking.",
    stack: [
      "C#",
      ".NET MAUI",
    ],
    link:
      "https://github.com/lllda06/CodeVerse",
  },

  {
    title: "API Events",
    description:
      "Django REST Framework API for city events with authentication and user subscriptions.",
    stack: [
      "Python",
      "Django",
      "DRF",
      "JWT",
    ],
    link:
      "https://github.com/lllda06/API-EVENTS",
  },

  {
    title: "LINAZA.KIDS",
    description:
      "Responsive website for a children's clothing brand built with modern frontend technologies.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    link:
      "https://github.com/lllda06/LINAZA.KIDS",
  },
];


function ProjectCard({
  project,
}: {
  project: {
    title: string;
    description: string;
    stack: string[];
    link: string;
  };
}) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
      }}

      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        transition
        hover:border-cyan-400/50
        hover:-translate-y-2
      "
    >

      <h3
        className="
          text-2xl
          font-semibold
          text-white
        "
      >
        {project.title}
      </h3>


      <p
        className="
          mt-4
          text-slate-400
          leading-relaxed
        "
      >
        {project.description}
      </p>


      <div
        className="
          mt-5
          flex
          flex-wrap
          gap-2
        "
      >

        {project.stack.map((item)=>(
          <span
            key={item}
            className="
              rounded-full
              border
              border-white/10
              px-3
              py-1
              text-sm
              text-cyan-300
            "
          >
            {item}
          </span>
        ))}

      </div>


      <a
        href={project.link}
        target="_blank"
        className="
          mt-6
          inline-flex
          items-center
          gap-2
          text-sm
          text-white
          transition
          hover:text-cyan-400
        "
      >
        View Project
        <FaGithub size={18}/>
            GitHub
      </a>


    </motion.div>
  );
}


export default function Projects() {

  return (

    <section
      id="projects"
      className="
        px-6
        py-24
      "
    >

      <div className="mx-auto max-w-6xl">


        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
          "
        >
          Featured <span className="text-cyan-400">Projects</span>
        </h2>


        <p
          className="
            mt-5
            text-slate-400
          "
        >
          Machine learning systems, data projects
          and software applications.
        </p>


        <h3
          className="
            mt-12
            text-2xl
            font-semibold
            text-white
          "
        >
          ⭐ ML & Data
        </h3>


        <div
          className="
            mt-6
            grid
            gap-6
            md:grid-cols-2
          "
        >
          {featuredProjects.map((project)=>(
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>


        <h3
          className="
            mt-16
            text-2xl
            font-semibold
            text-white
          "
        >
          💻 Software Development
        </h3>


        <div
          className="
            mt-6
            grid
            gap-6
            md:grid-cols-2
          "
        >
          {softwareProjects.map((project)=>(
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>


      </div>

    </section>

  );
}