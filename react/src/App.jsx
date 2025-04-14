import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="nav-links"
          >
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </motion.div>
          <Link to="/gaming-zone" className="gaming-zone-button">Gaming Zone</Link>
        </nav>

        <main className="content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gaming-zone" element={<GamingZone />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <motion.div 
      className="page"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
    >
      <motion.h1 
        className="page-title"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
      >
        Welcome to Our Gaming Hub
      </motion.h1>
      <motion.div 
        className="page-content"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: 'tween' }}
      >
        <p className="page-text">
          Dive into the ultimate gaming experience! Our hub is designed for gamers of all levels, offering a variety of thrilling games, tutorials, and community events. Whether you're a casual player or a competitive pro, we’ve got something for you. Explore our Gaming Zone to test your skills with Color Match, Reaction Speed, and Memory Tiles!
        </p>
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gaming Setup" className="page-image" />
        <p className="page-text">
          Join our community to stay updated on the latest gaming trends, participate in tournaments, and connect with fellow gamers. Check out our About page to learn more about our passionate team, or reach out via the Contact page for support or collaboration!
        </p>
        <motion.button 
          className="explore-button"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px #ff4d4d" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Scroll to Top
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function About() {
  return (
    <motion.div 
      className="page"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
    >
      <motion.h1 
        className="page-title"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
      >
        About Us
      </motion.h1>
      <motion.div 
        className="page-content"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: 'tween' }}
      >
        <p className="page-text">
          We are a dedicated team of gaming enthusiasts and developers who are passionate about creating immersive web experiences. Founded in 2020, our mission is to bring the excitement of gaming to everyone, blending cutting-edge technology with engaging gameplay.
        </p>
        <img src="https://images.unsplash.com/photo-1507919765661-11e362e2f0e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Working" className="page-image" />
        <p className="page-text">
          Our team includes expert coders, designers, and gamers who collaborate to deliver high-quality games like Color Match, Reaction Speed, and Memory Tiles. We’re committed to fostering a vibrant gaming community through events, tutorials, and support. Stay tuned for upcoming features and expansions!
        </p>
        <motion.button 
          className="explore-button"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px #ff4d4d" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Scroll to Top
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function Contact() {
  return (
    <motion.div 
      className="page"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
    >
      <motion.h1 
        className="page-title"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
      >
        Contact Us
      </motion.h1>
      <motion.div 
        className="page-content"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: 'tween' }}
      >
        <p className="page-text">
          Got questions or want to collaborate? We’re here to help! Reach out to us through the following channels:
        </p>
        <ul className="contact-list">
          <li><strong>Email:</strong> <a href="mailto:support@gaminghub.com" className="contact-link">support@gaminghub.com</a></li>
          <li><strong>Phone:</strong> +1-800-GAME-ON (800-4263-66)</li>
          <li><strong>Address:</strong> 123 Gaming Lane, Tech City, TC 12345</li>
        </ul>
        <img src="https://images.unsplash.com/photo-1600585154526-990d71b8cc4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contact Map" className="page-image" />
        <p className="page-text">
          Follow us on social media for the latest updates and to join our gaming community:
          <ul className="social-list">
            <li><a href="https://twitter.com/GamingHub" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a></li>
            <li><a href="https://facebook.com/GamingHub" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a></li>
            <li><a href="https://instagram.com/GamingHub" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a></li>
          </ul>
        </p>
        <motion.button 
          className="explore-button"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px #ff4d4d" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Scroll to Top
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function GamingZone() {
  const [showGames, setShowGames] = useState(false);
  const games = [
    { 
      id: 1, 
      name: "Color Match", 
      description: "Match the colors as fast as you can!", 
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      url: "/games/color-match.html" 
    },
    { 
      id: 2, 
      name: "Reaction Speed", 
      description: "Test your reflexes with rapid clicks!", 
      image: "https://images.unsplash.com/photo-1507919765661-11e362e2f0e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      url: "/games/reaction-speed.html" 
    },
    { 
      id: 3, 
      name: "Memory Tiles", 
      description: "Flip tiles and match pairs to win!", 
      image: "https://images.unsplash.com/photo-1600585154526-990d71b8cc4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      url: "/games/memory-tiles.html" 
    },
  ];

  return (
    <motion.div 
      className="page gaming-zone"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
    >
      <motion.h1 
        className="page-title"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
      >
        Welcome to the Gaming Zone
      </motion.h1>
      <motion.div 
        className="game-content"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: 'tween' }}
      >
        <p className="page-text">
          Get ready to level up! This is your battlefield, loaded with epic challenges. Choose your game and dominate!
        </p>
        <motion.button 
          className="game-button"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px #ff4d4d" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => setShowGames(!showGames)}
        >
          {showGames ? "Hide Games" : "Start Game"}
        </motion.button>

        <AnimatePresence>
          {showGames && (
            <motion.div 
              className="games-grid"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
            >
              {games.map((game) => (
                <motion.div 
                  key={game.id}
                  className="game-card"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: game.id * 0.1, type: 'spring', stiffness: 100 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px #ff3333" }}
                >
                  <img src={game.image} alt={game.name} className="game-image" />
                  <h2 className="game-title">{game.name}</h2>
                  <p className="game-description">{game.description}</p>
                  <motion.button 
                    className="play-button"
                    whileHover={{ scale: 1.1, boxShadow: "0 0 15px #4dff4d" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    onClick={() => window.open(game.url, '_blank')}
                  >
                    Play Game
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamic year

  return (
    <motion.footer 
      className="footer"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
    >
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
            <li><Link to="/gaming-zone" className="footer-link">Gaming Zone</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://twitter.com/GamingHub" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a></li>
            <li><a href="https://facebook.com/GamingHub" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a></li>
            <li><a href="https://instagram.com/GamingHub" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: <a href="mailto:support@gaminghub.com" className="footer-link">support@gaminghub.com</a></p>
          <p>Phone: +1-800-GAME-ON</p>
        </div>
      </div>
      <p className="footer-copyright">
        &copy; {currentYear} Gaming Hub. All rights reserved.
      </p>
    </motion.footer>
  );
}

export default App;