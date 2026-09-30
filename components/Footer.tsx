import { site } from '@/config';

export default function Footer() {
  const year = new Date().getFullYear();
  return <footer id="main-footer">© {site.copyrightStartYear === year ? year : `${site.copyrightStartYear}–${year}`} {site.name}</footer>;
}
