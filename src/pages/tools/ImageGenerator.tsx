import { useState } from 'react';
import { motion } from 'framer-motion';
import PromptInput from '../../components/tools/PromptInput';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';

export default function ImageGenerator() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleGenerate = async (prompt: string) => {
    setLoading(true);
    // Implement image generation API call here
    setTimeout(() => {
      setImage('https://source.unsplash.com/random/800x600/?ai');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">AI Image Generator</h1>
      
      <div className="space-y-8">
        <PromptInput
          onSubmit={handleGenerate}
          placeholder="Describe the image you want to generate..."
          disabled={loading}
        />

        <div className="aspect-video rounded-lg overflow-hidden bg-secondary/50 backdrop-blur-sm">
          {loading ? (
            <div className="w-full h-full flex items-center justify-center">
              <LoadingSpinner />
            </div>
          ) : image ? (
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={image}
              alt="Generated image"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Your generated image will appear here
            </div>
          )}
        </div>
      </div>
    </div>
  );
}