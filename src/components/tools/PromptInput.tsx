import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function PromptInput({ onSubmit, placeholder = 'Enter your prompt...', disabled }: PromptInputProps) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt.trim());
      setPrompt('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full p-4 pr-12 rounded-lg bg-secondary/50 backdrop-blur-sm border border-gray-700 focus:border-accent focus:outline-none transition-colors"
      />
      <button
        type="submit"
        disabled={disabled || !prompt.trim()}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-accent disabled:opacity-50 transition-colors"
        aria-label="Send prompt"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
}