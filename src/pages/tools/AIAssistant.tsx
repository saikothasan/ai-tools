import { useState } from 'react';
import { motion } from 'framer-motion';
import PromptInput from '../../components/tools/PromptInput';
import { Brain, Download } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    // Implement AI response API call here
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'This is a sample response from the AI assistant. In a real implementation, this would be replaced with an actual API response.',
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setLoading(false);
    }, 1500);
  };

  const handleExport = () => {
    const conversation = messages
      .map((msg) => `${msg.role}: ${msg.content}`)
      .join('\n\n');
    const blob = new Blob([conversation], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'conversation.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">AI Assistant</h1>
        {messages.length > 0 && (
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export Chat
          </button>
        )}
      </div>

      <div className="space-y-8">
        <div className="min-h-[400px] space-y-4 mb-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-start gap-4 ${
                message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.role === 'assistant' ? 'bg-accent' : 'bg-secondary'
              }`}>
                <Brain className="w-4 h-4" />
              </div>
              <div className={`flex-1 p-4 rounded-lg ${
                message.role === 'assistant'
                  ? 'bg-secondary/50 backdrop-blur-sm'
                  : 'bg-accent/20'
              }`}>
                {message.content}
              </div>
            </motion.div>
          ))}
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-accent animate-pulse" />
              <div className="flex-1 p-4 rounded-lg bg-secondary/50 backdrop-blur-sm">
                <div className="w-12 h-4 bg-gray-700 rounded animate-pulse" />
              </div>
            </motion.div>
          )}
        </div>

        <PromptInput
          onSubmit={handleSend}
          placeholder="Ask me anything..."
          disabled={loading}
        />
      </div>
    </div>
  );
}