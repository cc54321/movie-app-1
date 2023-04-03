import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MovieListPage from './Components/MovieListPage';
import MoviePage from './Components/MoviePage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// - Route: "/" Link: "Home" Component: "App". Page for Movie App
// - Route: "/movies" Link: "Movies" Component: "MovieListPage". Page for showing all movies
// - Route: "/movies/:filmTitle" Link: "MoviePage" Component: "MoviePage". Page for showing details of one movie
// - Navbar for navigating between Pages.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/movies/:filmTitle" element={<MoviePage />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();