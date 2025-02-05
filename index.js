import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-200 to-blue-200 p-6 font-cute">
        <nav className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="h-12 w-12 mr-3 rounded-full" />
            <h1 className="text-4xl font-bold text-purple-800">Ashita's Music Portfolio</h1>
          </div>
          <Link to="/memelody" className="text-blue-700 hover:underline text-lg">MeMelody Initiative</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memelody" element={<MeMelody />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  const songs = [
    { title: 'Song One', src: 'song1.mp4', cover: 'cover1.jpg' },
    { title: 'Song Two', src: 'song2.mp4', cover: 'cover2.jpg' },
    { title: 'Song Three', src: 'song3.mp4', cover: 'cover3.jpg' },
  ];

  return (
    <div className="grid gap-6">
      {songs.map((song, index) => (
        <div key={index} className="bg-white shadow-lg rounded-2xl p-4">
          <h2 className="text-2xl font-semibold mb-2 text-purple-700">{song.title}</h2>
          <img src={song.cover} alt={`${song.title} Cover`} className="w-full h-48 object-cover rounded-xl mb-4" />
          <video controls className="w-full rounded-xl">
            <source src={song.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

const MeMelody = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-3xl font-bold mb-4 text-purple-800">MeMelody Initiative</h2>
      <p className="mb-4 text-gray-700">
        MeMelody is a nonprofit initiative focused on empowering students through music. Join our next cohort starting this June to explore, learn, and create with a community of passionate individuals.
      </p>
      <a
        href="https://forms.gle/your-google-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-purple-500 text-white px-4 py-2 rounded-xl hover:bg-purple-600"
      >
        Sign Up Here
      </a>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
