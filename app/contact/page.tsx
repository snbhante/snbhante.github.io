import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { person, social } from '@/config';

export const metadata = { title: 'Contact Me' };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <h1 className="lg-heading">Contact <span>Me</span></h1>
        <h2 className="sm-heading">This is how you can reach me…</h2>
        <div className="contact-form">
          <div className="boxes">
            <div><strong>☎</strong> {social.contactEmail === 'sarbanandabhikkhu@gmail.com' ? '+880 1840-981604' : ''}</div>
            <div><strong>✉</strong> {social.contactEmail}</div>
            <div><strong>⌖</strong> {person.location}</div>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
