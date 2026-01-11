import React from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '../utils'

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="fixed w-full z-50 bg-bar-primary/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-bar-accent">Urban Lounge</div>
        
        <div className="hidden md:flex space-x-6">
          {['Меню', 'Бронирование', 'Галерея', 'Контакты'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-bar-accent transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-bar-primary absolute w-full"
        >
          {['Меню', 'Бронирование', 'Галерея', 'Контакты'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-3 text-white hover:bg-bar-accent/10"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  )
}

export default Navigation