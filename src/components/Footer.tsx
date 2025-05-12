
const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground mt-12 py-8 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Blog Platform</h3>
            <p className="text-muted-foreground">
              A modern content management system for creating and managing beautiful blog posts.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/new" className="text-muted-foreground hover:text-primary transition-colors">
                  Create Post
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <p className="text-muted-foreground mb-2">
              Stay updated with our latest posts and announcements.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Blog Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
