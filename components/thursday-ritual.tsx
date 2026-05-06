"use client"

import { motion } from "framer-motion"
import { Calendar, Users, Heart, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguageContext } from "@/contexts/LanguageContext"
import Link from "next/link"

export default function ThursdayRitual() {
  const { language } = useLanguageContext()

  const content = {
    en: {
      title: "The Thursday Ritual",
      subtitle: "My Thinking Mistake This Week",
      description: "Every Thursday, we share something real: what we got wrong in our thinking this week. Not finished content. Not polished advice. Just honest learning from real people building real things.",
      why_it_matters: {
        title: "Why This Ritual Matters",
        items: [
          {
            icon: "🧠",
            title: "Thinking Out Loud",
            desc: "You're not learning from perfection. You're learning from someone actually building and thinking in public."
          },
          {
            icon: "👥",
            title: "Real Community",
            desc: "70% non-programmers, 30% developers. We share the same struggles: how to think clearly in a noisy world."
          },
          {
            icon: "📈",
            title: "Growth Through Mistakes",
            desc: "The mistakes we share are how we improve. You see the real thinking process, not the highlight reel."
          },
          {
            icon: "🎯",
            title: "Predictable & Real",
            desc: "Every Thursday at the same time. You know exactly when the community gathers. No algorithms. No surprises. Just us thinking together."
          }
        ]
      },
      how_to_join: {
        title: "Join the Ritual",
        description: "Get the weekly logic challenge + my thinking notes every Thursday. Plus access to the community where everyone shares their mistakes and learns together.",
        button: "Subscribe to the Thursday Ritual",
        email_placeholder: "your@email.com"
      },
      testimonial: {
        quote: "It's not about learning to code. It's about learning to think. And that's something you need in everything you do.",
        author: "Someone in the community"
      }
    },
    es: {
      title: "El Ritual de los Jueves",
      subtitle: "Mi Error de Pensamiento de Esta Semana",
      description: "Cada jueves compartimos algo real: en qué nos equivocamos pensando esta semana. No contenido terminado. No consejos pulidos. Solo aprendizaje honesto de personas reales construyendo cosas reales.",
      why_it_matters: {
        title: "Por Qué Este Ritual Importa",
        items: [
          {
            icon: "🧠",
            title: "Pensamiento en Voz Alta",
            desc: "No aprendes de la perfección. Aprendes de alguien construyendo y pensando en público de verdad."
          },
          {
            icon: "👥",
            title: "Comunidad Real",
            desc: "70% no-programadores, 30% developers. Compartimos las mismas luchas: cómo pensar claro en un mundo ruidoso."
          },
          {
            icon: "📈",
            title: "Crecimiento a Través de Errores",
            desc: "Los errores que compartimos son cómo mejoramos. Ves el proceso real de pensar, no el carrete de destacados."
          },
          {
            icon: "🎯",
            title: "Predecible y Real",
            desc: "Cada jueves a la misma hora. Sabes exactamente cuándo se reúne la comunidad. Sin algoritmos. Sin sorpresas. Solo nosotros pensando juntos."
          }
        ]
      },
      how_to_join: {
        title: "Únete al Ritual",
        description: "Recibe el reto de lógica semanal + mis notas de pensamiento cada jueves. Más acceso a la comunidad donde todos compartimos nuestros errores y aprendemos juntos.",
        button: "Suscríbete al Ritual de los Jueves",
        email_placeholder: "tu@email.com"
      },
      testimonial: {
        quote: "No es sobre aprender a programar. Es sobre aprender a pensar. Y eso lo necesitas en todo.",
        author: "Alguien en la comunidad"
      }
    }
  }

  const data = content[language]

  return (
    <section id="thursday-ritual" className="py-20 px-4 bg-zinc-900/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/20 border border-lime-500/50 text-lime-500 text-sm font-medium">
              <Calendar className="w-4 h-4" />
              Every Thursday
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{data.title}</h2>
          <p className="text-xl text-zinc-300 mb-2">{data.subtitle}</p>
          <p className="text-zinc-400 max-w-3xl mx-auto text-lg">{data.description}</p>
        </motion.div>

        {/* Why It Matters */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">{data.why_it_matters.title}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {data.why_it_matters.items.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg border border-zinc-800 bg-zinc-800/30 hover:border-lime-500/50 hover:bg-zinc-800/50 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-lime-500/10 via-transparent to-lime-500/10 border border-lime-500/30 rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">{data.how_to_join.title}</h3>
          <p className="text-zinc-300 mb-8 max-w-2xl mx-auto text-lg">{data.how_to_join.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder={data.how_to_join.email_placeholder}
              className="px-6 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700 focus:border-lime-500 text-white placeholder-zinc-500 focus:outline-none transition-colors w-full sm:w-80"
            />
            <Button
              asChild
              className="bg-lime-500 hover:bg-lime-600 text-zinc-900 font-semibold px-8 py-3 whitespace-nowrap group"
            >
              <Link href="#contact-courses">
                {data.how_to_join.button}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-zinc-300 italic mb-4">"{data.testimonial.quote}"</p>
            <p className="text-lime-500 font-semibold">{data.testimonial.author}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
