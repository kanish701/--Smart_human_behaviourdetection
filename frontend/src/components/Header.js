import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <div>
      <header style={styles.navbar}>
        <div style={styles.logo}>
          <img
            src="your-logo-path.svg" // Replace with your logo path
            alt="Shady Logo"
            style={styles.logoImg}
          />
          <span style={styles.logoText}>Shady</span>
        </div>
        <nav style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
          <Link to="/contact" style={styles.navLink}>
            Contact Me
          </Link>
          <Link to="/github" style={styles.navLink}>
            Github
          </Link>
        </nav>
      </header>
    </div> // Ensure this closing tag exists
  );
};

const styles = {
  container: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#0a0a0a',
    color: '#fff',
    minHeight: '100vh',
    overflowX: 'hidden',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: '10px 20px',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    width: '30px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '20px',
    fontSize: '16px',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#f28',
  },
  mainContent: {
    textAlign: 'center',
    padding: '100px 20px 50px',
    background: 'url("your-background-image-path.jpg") no-repeat center center/cover', // Replace with your background image path
    minHeight: '100vh',
  },
  title: {
    fontSize: '50px',
    marginBottom: '10px',
    color: '#f28',
  },
  subtitle: {
    fontSize: '20px',
    marginBottom: '50px',
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
  },
  feature: {
    textAlign: 'center',
    flex: '1',
    minWidth: '150px',
  },
  icon: {
    fontSize: '40px',
    color: '#f28',
  },
  featureText: {
    marginTop: '10px',
    fontSize: '16px',
  },
};

export default Header;
