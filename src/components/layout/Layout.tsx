import { ReactNode, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Background from '../canvas/Background';
import Navigation from './Navigation';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-text">
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Background />
        </Canvas>
      </div>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={<LoadingSpinner />}>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>
    </div>
  );
}