import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { person, skills } from '@/config';

export const metadata = { title: 'About Me' };

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <h1 className="lg-heading">About <span>Me</span></h1>
        <h2 className="sm-heading">Let me tell you a few things…</h2>
        <div className="about-info">
          <Image src="/assets/snbhante.png" alt={person.name} width={420} height={420} className="bio-image" priority />
          <section className="bio"><h3>BIO</h3><p>{person.bio}</p></section>
          {person.roles.slice(0,3).map((role,index)=><article className="job" key={role}><h3>{role}</h3><h4>{index===0 ? 'That is my Great Job!' : index===1 ? 'Fullstack JavaScript Developer' : 'Graphics & UI/UX Designer'}</h4><p>{person.interests[index] ?? 'Learning, building and sharing meaningful work.'}</p></article>)}
        </div>
        <section className="skills-section">
          <h2>Skills &amp; Tools</h2>
          <div className="skill-groups">{skills.groups.map(group=><article key={group.name}><h3>{group.name}</h3><div>{group.items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
