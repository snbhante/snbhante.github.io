import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projects } from '@/config';

export const metadata = { title: 'My Work' };

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <h1 className="lg-heading">My <span>Work</span></h1>
        <h2 className="sm-heading">Check out some of my projects…</h2>
        <div className="projects">{projects.items.map(project=><article className="project" key={project.name}>
          <a href={project.demo} target="_blank" rel="noreferrer" className="project-image">
            <Image src={project.image} alt={project.name} width={700} height={420} />
          </a>
          <div className="project-body"><h3>{project.name}</h3><p>{project.description}</p>
            <div className="project-actions"><a className="btn btn-light" href={project.demo} target="_blank" rel="noreferrer">Demo</a><a className="btn btn-dark" href={project.source} target="_blank" rel="noreferrer">Source Code</a></div>
          </div>
        </article>)}</div>
      </main>
      <Footer />
    </>
  );
}
