import { motion } from 'framer-motion';

export const LoadingSpinner = () => (
  <div className="flex items-center justify-center" role="status">
    <motion.div
      className="h-8 w-8 border-4 border-t-accent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      aria-label="Loading"
    />
  </div>
);