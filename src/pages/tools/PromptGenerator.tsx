import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

const categories = [
  'Creative Writing',
  'Marketing',
  'Academic',
  'Business',
  'Technical',
];

export default function PromptGenerator() {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('Creative Writing');
  const [prompts, setPrompts] = useState<string[]>([]);
  const [copied, setCopied] = useState<number | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    // Implement prompt generation API call here
    setTimeout(() => {
      setPrompts([
        'Write a story about a time traveler who can only go 24 hours into the future',
        'Describe a world where dreams are traded as currency',
        'Create a character who can hear plants think',
      ]);
      setLoading(false);
    }, 1500);
  };

  const handleCopy = async (prompt: string, index: number) => {
    await navigator.clipboard.writeText(prompt);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">AI Prompt Generator</h1>
      
      <div className="space-y-8">
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                category === cat
                  ? 'bg-accent text-white'
                  : 'bg-secondary/50 hover:bg-secondary/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full py-3 rounded-lg bg-accent hover:bg-accent/80 transition-colors disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Prompts'}
        </button>

        <div className="space-y-4">
          {prompts.map((prompt, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-lg bg-secondary/50 backdrop-blur-sm flex justify-between items-start gap-4"
            >
              <p className="flex-1">{prompt}</p>
              <button
                onClick={() => handleCopy(prompt, index)}
                className="p-2 text-gray-400 hover:text-accent transition-colors"
                aria-label="Copy prompt"
              >
                {copied === index ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}