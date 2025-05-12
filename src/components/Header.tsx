
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, Plus } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border py-3 backdrop-blur-lg">
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">
          Blog<span className="text-foreground">Platform</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/new">
            <Button className="flex items-center gap-2">
              <Plus size={16} />
              New Post
            </Button>
          </Link>
        </nav>
        
        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card py-4 px-6 absolute top-full left-0 w-full border-b border-border slide-up">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/new"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="flex items-center gap-2 w-full">
                <Plus size={16} />
                New Post
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
