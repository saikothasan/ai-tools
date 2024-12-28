import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Brain } from 'lucide-react';
import { tools } from '../../constants/tools';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-primary/50 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-accent" />
            <span className="font-bold text-xl">AI Tools</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {tools.map((tool) => (
              <Link
                key={tool.id}
                to={tool.path}
                className={`transition-colors hover:text-accent ${
                  location.pathname === tool.path ? 'text-accent' : 'text-gray-300'
                }`}
              >
                {tool.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            {tools.map((tool) => (
              <Link
                key={tool.id}
                to={tool.path}
                className="block py-2 text-gray-300 hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {tool.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}