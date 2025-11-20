import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { BookOpen } from "lucide-react";
import EducationCard from "@/components/EducationCard";
import CertificationCard from "@/components/CertificationCard";

const Academics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Updated education background (aligned with resume)
  const education = [
    {
      id: 1,
      institution: "Kennesaw State University",
      degree: "Master of Science (M.S.)",
      field: "Computer Science",
      duration: "August 2007 – May 2009",
      location: "Kennesaw, Georgia, USA",
      status: "Completed",
      details: [
        "Completed graduate studies in computer science with focus on software development and distributed systems.",
        "Worked on projects involving cloud-based solutions, backend engineering, and modern application architecture.",
        "Built a capstone project demonstrating scalable system design and real-world engineering practices."
      ]
    },
    {
      id: 2,
      institution: "Kennesaw State University",
      degree: "Bachelor of Science (B.S.)",
      field: "Computer Science",
      duration: "August 2003 – May 2007",
      location: "Kennesaw, Georgia, USA",
      status: "Completed",
      details: [
        "Completed core coursework in algorithms, data structures, operating systems, and software engineering.",
        "Developed academic projects using Java, C#, SQL, and foundational web technologies.",
        "Collaborated with peers on system design practices, OOP principles, and database-driven applications."
      ]
    }
  ];

  // Professional certifications
  const certifications = [
    {
      id: 1,
      name: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      description:
        "Validated expertise in developing and deploying cloud-native applications on AWS."
    },
    {
      id: 2,
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "2022",
      description:
        "Demonstrated proficiency in building, deploying, and maintaining applications on Azure."
    },
    {
      id: 3,
      name: "Advanced .NET Core Development",
      issuer: "Pluralsight",
      date: "2021",
      description:
        "Specialized training on .NET Core APIs, performance optimization, and microservice architecture."
    },
    {
      id: 4,
      name: "React.js & TypeScript Masterclass",
      issuer: "Udemy",
      date: "2021",
      description:
        "Comprehensive training on building scalable front-end applications using React and TypeScript."
    },
    {
      id: 5,
      name: "Docker & Kubernetes for Developers",
      issuer: "Coursera",
      date: "2020",
      description:
        "Hands-on certification in containerization, orchestration, and DevOps pipelines."
    }
  ];

  // Core areas of study (matching your resume expertise)
  const courseHighlights = [
    "Software Architecture & Design Patterns",
    "Cloud Computing (AWS / Azure)",
    "Distributed Systems & Microservices",
    "Data Structures and Algorithms",
    "Database Design & Optimization (SQL / PostgreSQL)",
    "Web Technologies (React, Node.js, .NET Core)",
    "DevOps & CI/CD Automation",
    "Containerization (Docker, Kubernetes)",
    "AI & Automation Tools (OpenAI API, Hugging Face)",
    "System Design & Scalability"
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              Academics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Educational Background" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                My educational foundation and professional certifications that strengthened my
                expertise in software engineering, cloud architecture, and scalable systems design.
              </p>
            </div>
          </motion.div>

          {/* Education Cards */}
          <div className="mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Education
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <EducationCard
                  key={edu.id}
                  institution={edu.institution}
                  degree={edu.degree}
                  field={edu.field}
                  duration={edu.duration}
                  location={edu.location}
                  cgpa={edu.cgpa}
                  details={edu.details}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Core Areas of Study */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{
              boxShadow: "0 20px 25px -5px rgba(155, 135, 245, 0.1)"
            }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Core Areas of Study</h2>

            <div className="glass-panel p-10 rounded-lg">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-teal-500/10 p-4 rounded-full">
                  <BookOpen className="h-8 w-8 text-teal-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseHighlights.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(155, 135, 245, 0.2)",
                      color: "#9b87f5"
                    }}
                    className="flex items-center p-4 bg-secondary/50 rounded-lg"
                  >
                    <div className="h-2 w-2 rounded-full bg-teal-400 mr-3" />
                    <span>{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default Academics;
