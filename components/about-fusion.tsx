"use client"

import { motion } from "framer-motion"
import { Code, Database, Smartphone, Server, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function About() {
  const { language } = useLanguageContext()

  const content = {
    en: {
      title: "My Story",
      subtitle: "Who is behind the keyboard?",
      description:
        "With over 11 years of experience as a full-stack engineer, I'm passionate about creating innovative web and mobile solutions. My holistic approach, spanning from front-end to back-end development, enables me to build high-quality applications that solve complex challenges effectively. Every line of code I write is driven by a commitment to excellence and a deep understanding of modern development practices.",
      skills: "Skills & Expertise",
      experience: "Experience",
      education: "Education",
      skillsList: [
        {
          name: "Frontend Development",
          icon: <Code className="h-6 w-6 text-lime-500" />,
          details: "React, Angular, HTML5, CSS3, JavaScript, TypeScript",
        },
        {
          name: "Backend Development",
          icon: <Server className="h-6 w-6 text-lime-500" />,
          details: ".NET Core, C#, Java, Node.js, REST APIs, .NET Asp",
        },
        {
          name: "Mobile Development",
          icon: <Smartphone className="h-6 w-6 text-lime-500" />,
          details: ".NET MAUI, Xamarin Forms, Flutter",
        },
        {
          name: "Database Management",
          icon: <Database className="h-6 w-6 text-lime-500" />,
          details: "SQL Server, PostgreSQL, MongoDB, Firebase, My SQLServer",
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
      title: "Mi Historia",
      subtitle: "¿Quién está detrás del teclado?",
      description:
        "Con más de 11 años de experiencia como ingeniero full-stack, me apasiona enfrentar desafíos complejos y ofrecer soluciones innovadoras. Adopto un enfoque holístico, cubriendo tanto el desarrollo frontend como backend, lo que me permite construir aplicaciones web y móviles de alta calidad.",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educación",
      skillsList: [
        {
          name: "Desarrollo Frontend",
          icon: <Code className="h-6 w-6 text-lime-500" />,
          details: "React, Angular, HTML5, CSS3, JavaScript, TypeScript",
        },
        {
          name: "Desarrollo Backend",
          icon: <Server className="h-6 w-6 text-lime-500" />,
          details: ".NET Core, C#, Java, Node.js, REST APIs, .NET Asp",
        },
        {
          name: "Desarrollo Móvil",
          icon: <Smartphone className="h-6 w-6 text-lime-500" />,
          details: ".NET MAUI, Xamarin Forms, Flutter",
        },
        {
          name: "Gestión de Bases de Datos",
          icon: <Database className="h-6 w-6 text-lime-500" />,
          details: "SQL Server, PostgreSQL, MongoDB, Firebase, MY SQLServer",
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
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-500/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-2 w-2 bg-lime-500 rounded-full top-1/4 left-1/4 animate-float-slow"></div>
        <div className="absolute h-2 w-2 bg-lime-500 rounded-full top-3/4 right-1/4 animate-float"></div>
        <div className="absolute h-3 w-3 bg-lime-500 rounded-full top-1/2 left-3/4 animate-float-slower"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Title section with enhanced styling */}
          <div className="text-center mb-16 relative">
            <motion.div
              className="flex flex-col items-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{content[language].title}</h2>
              <p className="text-lime-500 text-lg font-light tracking-wider uppercase">{content[language].subtitle}</p>
              <div className="w-32 h-1 bg-gradient-to-r from-lime-500/0 via-lime-500 to-lime-500/0"></div>
            </motion.div>

            <motion.p 
              className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {content[language].description}
            </motion.p>
          </div>

          {/* Main content card with enhanced styling */}
          <Card className="bg-zinc-900/40 backdrop-blur-md border-zinc-800/50 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-500/5 via-transparent to-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 relative z-10">
                            <Tabs defaultValue="skills" className="w-full">
                <TabsList className="w-full flex justify-center mb-12">
                  <div className="relative group">
                    <TabsTrigger
                      value="skills"
                      className="text-[13px] font-medium text-zinc-400 tracking-wider uppercase transition-all duration-300 hover:text-lime-500"
                    >
                      {content[language].skills}
                    </TabsTrigger>
                    <div className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-transparent via-lime-500/30 to-transparent"></div>
                  </div>
                </TabsList>

                <TabsContent value="skills" className="mt-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-1">
                    {content[language].skillsList.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group h-full"
                      >
                        <Card className="relative bg-zinc-800/30 backdrop-blur-md border-zinc-700/50 h-full hover:border-lime-500 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 via-lime-500/0 to-lime-500/0 group-hover:from-lime-500/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-500 rounded-lg"></div>
                          
                          {/* Glowing corners */}
                          <div className="absolute -inset-px bg-gradient-to-r from-transparent via-lime-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-500"></div>
                          
                          <CardContent className="p-6 relative">
                            {/* Icon container with animations */}
                            <div className="flex items-start space-x-4 mb-4">
                              <div className="flex-shrink-0 p-3 bg-zinc-900/70 rounded-xl border border-zinc-800 group-hover:border-lime-500/50 transform group-hover:scale-110 transition-all duration-500 relative">
                                <div className="absolute inset-0 bg-lime-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                  {skill.icon}
                                </div>
                              </div>
                              <div className="flex-1 min-w-0"> {/* Added min-w-0 to prevent text overflow */}
                                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-lime-500 transition-colors duration-300 truncate">
                                  {skill.name}
                                </h3>
                                <div className="h-0.5 w-12 bg-gradient-to-r from-lime-500/50 to-transparent rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                              </div>
                            </div>
                            
                            {/* Skills details with enhanced typography and better wrapping */}
                            <div className="relative">
                              <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed text-sm break-words">
                                {skill.details.split(', ').map((detail, i, arr) => (
                                  <span key={i} className="inline-block">
                                    <span className="relative z-10 hover:text-lime-500 transition-colors duration-200">
                                      {detail}
                                    </span>
                                    {i < arr.length - 1 && <span className="mx-2 text-zinc-600 select-none">•</span>}
                                  </span>
                                ))}
                              </p>
                            </div>
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
                        <Card className="bg-zinc-800/50 backdrop-blur-sm border-zinc-700 hover:border-lime-500 transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                              <div>
                                <h3 className="text-xl font-medium text-white">{exp.position}</h3>
                                <p className="text-lime-500">{exp.company}</p>
                              </div>
                              <span className="text-zinc-400 mt-2 md:mt-0">{exp.period}</span>
                            </div>
                            <p className="text-zinc-300">{exp.description}</p>
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
                        <Card className="bg-zinc-800/50 backdrop-blur-sm border-zinc-700 hover:border-lime-500 transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                              <div>
                                <h3 className="text-xl font-medium text-white">{edu.degree}</h3>
                                <p className="text-lime-500">{edu.institution}</p>
                              </div>
                              <span className="text-zinc-400 mt-2 md:mt-0">{edu.year}</span>
                            </div>
                            <p className="text-zinc-300">{edu.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
