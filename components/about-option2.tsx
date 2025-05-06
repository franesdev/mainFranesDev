"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Database, Smartphone, Server, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function About() {
  const [language, setLanguage] = useState<"en" | "es">("en")

  useEffect(() => {
    // Get language from localStorage
    const storedLanguage = localStorage.getItem("language") as "en" | "es" | null
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }

    // Listen for language changes
    const handleLanguageChange = () => {
      const newLanguage = localStorage.getItem("language") as "en" | "es" | null
      if (newLanguage) {
        setLanguage(newLanguage)
      }
    }

    window.addEventListener("languageChange", handleLanguageChange)
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange)
    }
  }, [])

  const content = {
    en: {
      title: "Who is behind the keyboard?",
      description:
        "With over 10 years of experience as a full-stack engineer, I'm passionate about tackling complex challenges and delivering innovative solutions. I take a holistic approach, covering both front-end and back-end development, which allows me to build high-quality web and mobile applications.",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      skillsList: [
        {
          name: "Frontend Development",
          icon: <Code className="h-6 w-6 text-lime-500" />,
          details: "React, Angular, Vue.js, HTML5, CSS3, JavaScript, TypeScript",
        },
        {
          name: "Backend Development",
          icon: <Server className="h-6 w-6 text-lime-500" />,
          details: ".NET Core, C#, Java, Node.js, REST APIs, GraphQL",
        },
        {
          name: "Mobile Development",
          icon: <Smartphone className="h-6 w-6 text-lime-500" />,
          details: ".NET MAUI, Xamarin Forms, React Native, Flutter",
        },
        {
          name: "Database Management",
          icon: <Database className="h-6 w-6 text-lime-500" />,
          details: "SQL Server, PostgreSQL, MongoDB, Firebase, Redis",
        },
        {
          name: "Problem Solving",
          icon: <Lightbulb className="h-6 w-6 text-lime-500" />,
          details: "Algorithm design, System architecture, Performance optimization",
        },
      ],
      experienceList: [
        {
          position: "Senior Full Stack Developer",
          company: "Tech Solutions Inc.",
          period: "2018 - Present",
          description: "Leading development of enterprise applications using .NET Core, React, and SQL Server.",
        },
        {
          position: "Mobile Developer",
          company: "App Innovations",
          period: "2015 - 2018",
          description: "Developed cross-platform mobile applications using Xamarin Forms and .NET MAUI.",
        },
        {
          position: "Web Developer",
          company: "Digital Creations",
          period: "2012 - 2015",
          description: "Created responsive web applications using JavaScript frameworks and RESTful APIs.",
        },
      ],
      educationList: [
        {
          degree: "Master's in Computer Science",
          institution: "Tech University",
          year: "2014",
          description: "Specialized in Software Engineering and Distributed Systems.",
        },
        {
          degree: "Bachelor's in Computer Engineering",
          institution: "National University",
          year: "2012",
          description: "Focused on Programming Languages and Database Systems.",
        },
      ],
    },
    es: {
      title: "¿Quién está detrás del teclado?",
      description:
        "Con más de 10 años de experiencia como ingeniero full-stack, me apasiona enfrentar desafíos complejos y ofrecer soluciones innovadoras. Adopto un enfoque holístico, cubriendo tanto el desarrollo frontend como backend, lo que me permite construir aplicaciones web y móviles de alta calidad.",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educación",
      skillsList: [
        {
          name: "Desarrollo Frontend",
          icon: <Code className="h-6 w-6 text-lime-500" />,
          details: "React, Angular, Vue.js, HTML5, CSS3, JavaScript, TypeScript",
        },
        {
          name: "Desarrollo Backend",
          icon: <Server className="h-6 w-6 text-lime-500" />,
          details: ".NET Core, C#, Java, Node.js, REST APIs, GraphQL",
        },
        {
          name: "Desarrollo Móvil",
          icon: <Smartphone className="h-6 w-6 text-lime-500" />,
          details: ".NET MAUI, Xamarin Forms, React Native, Flutter",
        },
        {
          name: "Gestión de Bases de Datos",
          icon: <Database className="h-6 w-6 text-lime-500" />,
          details: "SQL Server, PostgreSQL, MongoDB, Firebase, Redis",
        },
        {
          name: "Resolución de Problemas",
          icon: <Lightbulb className="h-6 w-6 text-lime-500" />,
          details: "Diseño de algoritmos, Arquitectura de sistemas, Optimización de rendimiento",
        },
      ],
      experienceList: [
        {
          position: "Desarrollador Full Stack Senior",
          company: "Tech Solutions Inc.",
          period: "2018 - Presente",
          description:
            "Liderando el desarrollo de aplicaciones empresariales utilizando .NET Core, React y SQL Server.",
        },
        {
          position: "Desarrollador Móvil",
          company: "App Innovations",
          period: "2015 - 2018",
          description: "Desarrollé aplicaciones móviles multiplataforma utilizando Xamarin Forms y .NET MAUI.",
        },
        {
          position: "Desarrollador Web",
          company: "Digital Creations",
          period: "2012 - 2015",
          description: "Creé aplicaciones web responsivas utilizando frameworks de JavaScript y APIs RESTful.",
        },
      ],
      educationList: [
        {
          degree: "Maestría en Ciencias de la Computación",
          institution: "Universidad Tecnológica",
          year: "2014",
          description: "Especializado en Ingeniería de Software y Sistemas Distribuidos.",
        },
        {
          degree: "Licenciatura en Ingeniería Informática",
          institution: "Universidad Nacional",
          year: "2012",
          description: "Enfocado en Lenguajes de Programación y Sistemas de Bases de Datos.",
        },
      ],
    },
  }

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">{content[language].title}</h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto text-center mb-12">{content[language].description}</p>

          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800">
              <TabsTrigger value="skills" className="data-[state=active]:bg-lime-500 data-[state=active]:text-black">
                {content[language].skills}
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="data-[state=active]:bg-lime-500 data-[state=active]:text-black"
              >
                {content[language].experience}
              </TabsTrigger>
              <TabsTrigger value="education" className="data-[state=active]:bg-lime-500 data-[state=active]:text-black">
                {content[language].education}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="skills" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {content[language].skillsList.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800 border-gray-700 h-full hover:border-lime-500 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {skill.icon}
                          <h3 className="ml-3 text-xl font-medium text-white">{skill.name}</h3>
                        </div>
                        <p className="text-gray-400">{skill.details}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="experience" className="mt-6">
              <div className="space-y-6">
                {content[language].experienceList.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800 border-gray-700 hover:border-lime-500 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                          <div>
                            <h3 className="text-xl font-medium text-white">{exp.position}</h3>
                            <p className="text-lime-500">{exp.company}</p>
                          </div>
                          <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                        </div>
                        <p className="text-gray-300">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-6">
              <div className="space-y-6">
                {content[language].educationList.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-800 border-gray-700 hover:border-lime-500 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                          <div>
                            <h3 className="text-xl font-medium text-white">{edu.degree}</h3>
                            <p className="text-lime-500">{edu.institution}</p>
                          </div>
                          <span className="text-gray-400 mt-2 md:mt-0">{edu.year}</span>
                        </div>
                        <p className="text-gray-300">{edu.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
