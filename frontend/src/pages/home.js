import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import background from '../assests/bg.jpg'; // Correct import of the background image

const Home = () => {
  return (
    <div style={styles.container}>
      <main style={{ ...styles.mainContent, backgroundImage: `url(${background})` }}>
        <h1 style={styles.title}>SHADY</h1>
        <p style={styles.subtitle}>Smart Human Activity Detection using YOLO</p>
        <div style={styles.features}>
          <div style={styles.feature}>
            <Link to="objectdetection" style={styles.navLink}>
              <span style={styles.icon}>📷</span>
              <p style={styles.featureText}>Object Detection</p>
            </Link>
          </div>
          <div style={styles.feature}>
            <Link to="vehiclecrashdetection" style={styles.navLink}>
              <span style={styles.icon}>🚚</span>
              <p style={styles.featureText}>Vehicle Crash Detection</p>
            </Link>
          </div>
          <div style={styles.feature}>
            <Link to="falldetection" style={styles.navLink}>
              <span style={styles.icon}>📉</span>
              <p style={styles.featureText}>Fall Detection</p>
            </Link>
          </div>
          <div style={styles.feature}>
            <Link to="socialdistancing" style={styles.navLink}>
              <span style={styles.icon}>👥</span>
              <p style={styles.featureText}>Social Distancing Detection</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#0a0a0a',
    color: '#fff',
    minHeight: '100vh',
    overflowX: 'hidden',
  },
  mainContent: {
    textAlign: 'center',
    padding: '100px 20px 50px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    display: 'block',
    transition: 'color 0.3s',
  },
};

export default Home;
