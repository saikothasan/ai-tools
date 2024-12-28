import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface CodeEditorProps {
  code: string;
  language: string;
  onCodeChange?: (code: string) => void;
}

export default function CodeEditor({ code, language, onCodeChange }: CodeEditorProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg bg-secondary/50 backdrop-blur-sm">
      <div className="flex items-center justify-between p-2 border-b border-gray-700">
        <span className="text-sm text-gray-400">{language}</span>
        <button
          onClick={handleCopy}
          className="p-1 hover:text-accent transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <textarea
        value={code}
        onChange={(e) => onCodeChange?.(e.target.value)}
        className="w-full bg-transparent p-4 font-mono text-sm focus:outline-none resize-y min-h-[200px]"
        spellCheck="false"
      />
    </div>
  );
}