export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {year} Sajjat Hossain. All rights reserved.</p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  );
}
