import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wide">I'm Jcastaneda_Dev</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            Building responsive and accessible web applications
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#" target="_blank" rel="noreferrer">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-emerald-500 transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-emerald-500 transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-emerald-500 transition-colors" />
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Hero;
