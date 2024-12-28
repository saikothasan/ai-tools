import Hero from '../components/home/Hero';
import ToolCard from '../components/home/ToolCard';
import { tools } from '../constants/tools';

export default function Home() {
  return (
    <>
      <Hero />
      
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}