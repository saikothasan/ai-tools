import { Brain, Image, Code, MessageSquare } from 'lucide-react';
import type { Tool } from '../types';

export const tools: Tool[] = [
  {
    id: 'image-generator',
    name: 'AI Image Generator',
    description: 'Create stunning images with advanced AI algorithms',
    icon: 'Image',
    path: '/tools/image-generator',
  },
  {
    id: 'code-generator',
    name: 'AI Code Generator',
    description: 'Generate code snippets and complete functions',
    icon: 'Code',
    path: '/tools/code-generator',
  },
  {
    id: 'prompt-generator',
    name: 'AI Prompt Generator',
    description: 'Create effective prompts for any AI model',
    icon: 'Brain',
    path: '/tools/prompt-generator',
  },
  {
    id: 'ai-assistant',
    name: 'AI Assistant',
    description: 'Your personal AI assistant for any task',
    icon: 'MessageSquare',
    path: '/tools/ai-assistant',
  },
];