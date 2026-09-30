import Link from 'next/link';
import Header from '@/components/Header';
import Clock from '@/components/Clock';
import SocialLinks from '@/components/SocialLinks';
import { person } from '@/config';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="home" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Welcome to my digital space</p>
          <h1 className="lg-heading">{person.givenName} <span>{person.honorific}</span></h1>
          <h2 className="sm-heading">Hey, I am a Buddhist Monk who is Web Developer, Programmer &amp; Designer.</h2>
          <SocialLinks />
          <Clock />
          <div className="hero-actions">
            <Link className="btn btn-light" href="/about/">About Me</Link>
            <Link className="btn btn-dark" href="/work/">Explore My Work</Link>
          </div>
        </div>
      </main>
    </>
  );
}
