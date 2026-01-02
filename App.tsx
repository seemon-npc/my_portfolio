
import React from 'react';
import { 
  Code, 
  Video, 
  Github, 
  Mail, 
  Phone, 
  ExternalLink, 
  ChevronRight,
  Monitor,
  Feather,
  Youtube,
  Instagram
} from 'lucide-react';

const SkillCard = ({ title, desc, icon: Icon, color }: any) => (
  <div className="glass p-6 rounded-2xl group hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2">
    <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${color}`}>
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-200">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 px-6 py-6 flex justify-center">
        <div className="glass px-8 py-3 rounded-full flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#work" className="hover:text-blue-400 transition-colors">Archive</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 blur-[120px] animate-pulse"></div>
        
        <div className="text-center z-10 max-w-4xl">
          <div className="inline-block glass px-4 py-1.5 rounded-full text-blue-400 text-sm font-medium mb-6">
            Architect of Digital Aesthetics
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight uppercase">
            Crafting Digital <span className="gradient-text">Experiences.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            I’m <span className="text-white font-medium">Arul Seemon Raj</span>, a 17-year-old multidisciplinary developer and artist blurring the lines between logical code and kinetic art.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#work" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
              Explore Archive <ChevronRight size={20} />
            </a>
            <a href="#contact" className="glass text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              Contact Me
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Skill Matrix */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard 
            title="Programming" 
            desc="Self-taught developer building efficient web applications with modern tech stacks."
            icon={Code}
            color="bg-blue-600"
          />
          <SkillCard 
            title="Motion Design" 
            desc="After Effects specialist creating visual stories through motion and kinetic typography."
            icon={Video}
            color="bg-purple-600"
          />
          <SkillCard 
            title="Pencil Art" 
            desc="Analog artist specializing in detailed pencil sketches and hyper-realistic portraiture."
            icon={Feather}
            color="bg-pink-600"
          />
          <SkillCard 
            title="Video Editing" 
            desc="Skilled in Premiere Pro, focusing on pacing and high-quality production value."
            icon={Monitor}
            color="bg-indigo-600"
          />
        </div>
      </section>

      {/* Work Archive Section */}
      <section id="work" className="py-24 px-6 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Work <span className="gradient-text">Archive</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive look at my creative and technical journey. Explore my work across different platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* GitHub Card */}
            <a 
              href="https://github.com/seemon-npc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass p-10 rounded-[2.5rem] group hover:border-blue-500/50 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[50px] -z-10 group-hover:bg-blue-600/10 transition-colors"></div>
              <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-blue-500/30">
                <Github size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Programming</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Repository of my self-taught coding journey, featuring web apps, experiments, and open-source contributions.
              </p>
              <div className="mt-auto flex items-center gap-2 text-blue-400 font-bold tracking-wide uppercase text-xs">
                Browse Github <ExternalLink size={14} />
              </div>
            </a>

            {/* YouTube Card */}
            <a 
              href="https://www.youtube.com/@DiodasNeedsTherapy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass p-10 rounded-[2.5rem] group hover:border-red-500/50 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-[50px] -z-10 group-hover:bg-red-600/10 transition-colors"></div>
              <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-red-500/30">
                <Youtube size={40} className="text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Motion Graphics</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Visual storytelling through After Effects and Premiere Pro. High-energy edits and kinetic typography.
              </p>
              <div className="mt-auto flex items-center gap-2 text-red-400 font-bold tracking-wide uppercase text-xs">
                Watch on YouTube <ExternalLink size={14} />
              </div>
            </a>

            {/* Instagram Card */}
            <a 
              href="https://www.instagram.com/seemon.558/?igsh=MWt2aWhyZjFoamN1aQ%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass p-10 rounded-[2.5rem] group hover:border-pink-500/50 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600/5 blur-[50px] -z-10 group-hover:bg-pink-600/10 transition-colors"></div>
              <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-pink-500/30">
                <Instagram size={40} className="text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Pencil Sketches</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Hyper-realistic pencil art and detailed sketches. Capturing raw analog textures in a digital world.
              </p>
              <div className="mt-auto flex items-center gap-2 text-pink-400 font-bold tracking-wide uppercase text-xs">
                View on Instagram <ExternalLink size={14} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Horizontal Scroll */}
      <section className="py-20 border-y border-white/5 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[
            'TypeScript', 'React', 'Node.js', 'After Effects', 'Premiere Pro', 'Photoshop', 'Git', 'Tailwind CSS',
            'TypeScript', 'React', 'Node.js', 'After Effects', 'Premiere Pro', 'Photoshop', 'Git', 'Tailwind CSS'
          ].map((tech, i) => (
            <span key={i} className="text-3xl font-black text-white/10 uppercase italic">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-7xl mx-auto text-center">
        <div className="glass rounded-[3rem] p-12 md:p-24 overflow-hidden relative inline-block w-full">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-[100px]"></div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Contact <span className="gradient-text">Info</span></h2>
          <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Ready to start a project together? Reach out directly via email or phone.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
            <a href="mailto:arulseemonraj@gmail.com" className="group">
              <div className="w-20 h-20 glass rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:border-blue-500/50 transition-all">
                <Mail size={32} className="text-blue-400" />
              </div>
              <p className="text-xl font-medium text-white">arulseemonraj@gmail.com</p>
              <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest">Email Me</p>
            </a>
            
            <div className="hidden md:block w-px h-32 bg-white/10"></div>

            <a href="tel:9363270270" className="group">
              <div className="w-20 h-20 glass rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:border-purple-500/50 transition-all">
                <Phone size={32} className="text-purple-400" />
              </div>
              <p className="text-xl font-medium text-white">9363270270</p>
              <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest">Call Me</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white font-bold text-xl uppercase tracking-tighter">Seemon</div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Crafting Digital Experiences. Handcrafted by Arul Seemon Raj.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/seemon-npc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={20}/></a>
            <a href="https://www.youtube.com/@DiodasNeedsTherapy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20}/></a>
            <a href="https://www.instagram.com/seemon.558/?igsh=MWt2aWhyZjFoamN1aQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20}/></a>
            <a href="mailto:arulseemonraj@gmail.com" className="text-gray-400 hover:text-white transition-colors"><Mail size={20}/></a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </div>
  );
};

export default App;
