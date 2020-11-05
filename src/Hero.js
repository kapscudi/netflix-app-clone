import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './hero.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Hero() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header
      className="hero"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="hero_content">
        <img
          key={movie.id}
          className="hero_poster"
          src={`${base_url}${movie.poster_path}`}
          alt={movie.name}
        />
        <div>
          <h1 className="hero_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="hero_buttons">
            <button className="hero_button">PLAY</button>
            <button className="hero_button">WATCH LATER</button>
          </div>
          <h1 className="hero_description">{truncate(movie?.overview, 150)}</h1>
        </div>
      </div>

      <div className="hero--fadeBottom" />
    </header>
  );
}

export default Hero;
