export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>© {year} Sajjat Hossain. Built with care.</p>
      <a href="#top">Back to top</a>
    </footer>
  );
}
