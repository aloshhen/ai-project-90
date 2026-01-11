import React from 'react'
import { motion } from 'framer-motion'
import { Cocktail, Music, Star } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-[#14141F] p-6 rounded-xl border border-bar-accent/20 space-y-4"
  >
    <div className="text-bar-accent">
      <Icon size={40} />
    </div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
)

const Features = () => {
  const features = [
    {
      icon: Cocktail,
      title: 'Уникальное Меню',
      description: 'Коктейли ручной работы от наших талантливых барменов'
    },
    {
      icon: Music,
      title: 'Живая Музыка',
      description: 'Еженедельные выступления лучших джаз и лаунж музыкантов'
    },
    {
      icon: Star,
      title: 'Премиум Атмосфера',
      description: 'Стильный интерьер и непринужденная атмосфера высокого класса'
    }
  ]

  return (
    <section className="py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-bar-accent to-bar-secondary">
          Почему Urban Lounge?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features