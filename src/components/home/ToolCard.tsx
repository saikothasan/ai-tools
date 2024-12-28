import { motion } from 'framer-motion';
import { Tool } from '../../types';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

interface ToolCardProps {
  tool: Tool;
  index: number;
}

export default function ToolCard({ tool, index }: ToolCardProps) {
  const Icon = Icons[tool.icon as keyof typeof Icons];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={tool.path}
        className="block p-6 rounded-lg bg-secondary/50 backdrop-blur-sm hover:bg-secondary/70 transition-colors"
      >
        <Icon className="w-12 h-12 text-accent mb-4" />
        <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
        <p className="text-gray-400">{tool.description}</p>
      </Link>
    </motion.div>
  );
}