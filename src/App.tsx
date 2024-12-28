import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ImageGenerator from './pages/tools/ImageGenerator';
import CodeGenerator from './pages/tools/CodeGenerator';
import PromptGenerator from './pages/tools/PromptGenerator';
import AIAssistant from './pages/tools/AIAssistant';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools/image-generator" element={<ImageGenerator />} />
          <Route path="/tools/code-generator" element={<CodeGenerator />} />
          <Route path="/tools/prompt-generator" element={<PromptGenerator />} />
          <Route path="/tools/ai-assistant" element={<AIAssistant />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;