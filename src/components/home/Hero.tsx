import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Brain className="w-24 h-24 text-accent" />
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-accent to-neon bg-clip-text text-transparent"
      >
        AI Tools Platform
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-xl md:text-2xl text-gray-300 max-w-2xl"
      >
        Unleash the power of AI with our suite of advanced tools
      </motion.p>
    </section>
  );
}