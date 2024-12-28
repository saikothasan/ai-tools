import { useState } from 'react';
import { motion } from 'framer-motion';
import PromptInput from '../../components/tools/PromptInput';
import CodeEditor from '../../components/tools/CodeEditor';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';

const languages = ['JavaScript', 'Python', 'TypeScript', 'HTML', 'CSS'];

export default function CodeGenerator() {
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('JavaScript');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleGenerate = async (prompt: string) => {
    setLoading(true);
    // Implement code generation API call here
    setTimeout(() => {
      setGeneratedCode(`// Generated code for: ${prompt}\nfunction example() {\n  console.log("Hello, World!");\n}`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">AI Code Generator</h1>
      
      <div className="space-y-6">
        <div className="flex space-x-4">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                language === lang
                  ? 'bg-accent text-white'
                  : 'bg-secondary/50 hover:bg-secondary/70'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        <PromptInput
          onSubmit={handleGenerate}
          placeholder="Describe the code you want to generate..."
          disabled={loading}
        />

        {loading ? (
          <div className="h-[200px] flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <CodeEditor
            code={generatedCode}
            language={language.toLowerCase()}
            onCodeChange={setGeneratedCode}
          />
        )}
      </div>
    </div>
  );
}