import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { BackgroundBeams } from './ui/BackgroundBeams'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <BackgroundBeams />
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-bar-accent to-bar-secondary">
            Urban Lounge Bar
          </h1>
          
          <p className="text-xl mb-8 text-gray-300">
            Атмосферное место для незабываемых вечеров с изысканными коктейлями и уникальной музыкой
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-bar-accent text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2"
            >
              <Calendar size={20} /> Забронировать
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-bar-accent text-bar-accent px-6 py-3 rounded-lg font-bold flex items-center gap-2"
            >
              <MapPin size={20} /> Наше Расположение
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero