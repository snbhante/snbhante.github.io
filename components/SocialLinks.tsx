import { social } from '@/config';

const links = [
  ['Blog', social.blogger],
  ['GitHub', social.github],
  ['Email', `mailto:${social.email}`],
  ['YouTube', social.youtube],
] as const;

export default function SocialLinks() {
  return <div className="icons">{links.map(([label, href]) => <a key={label} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">{label}</a>)}</div>;
}
