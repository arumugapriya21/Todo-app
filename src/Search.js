import React, { useState } from "react";
import movie1 from "./movie1.jpg";
import movie2 from "./movie2.jpg";
import movie3 from "./movie3.jpg";

export default function Search() {
  const [movies, setMovies] = useState({
    filter: "",
    moviedetails: [
      {
        moviename: "Avengers",
        img: movie1,
        genre: "fiction"
      },
      {
        moviename: "Journey to the center of Earth",
        img: movie2,
        genre: "fiction"
      },
      {
        moviename: "The pianist",
        img: movie3,
        genre: "non fiction"
      }
    ]
  });
  const handleChange = event => {
    setMovies({
      ...movies,
      filter: event.target.value
    });
  };

  const { filter, moviedetails } = movies;
  const lowerCase = filter.toLowerCase();
  const filteredData = moviedetails.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toLowerCase().includes(lowerCase)
    );
  });
  return (
    <div className="container">
      <div className="row padding-top">
        <input
          class="form-control form-control-sm"
          type="text"
          name="inputValue"
          placeholder="Search Movies"
          onChange={handleChange}
        />
        {filteredData.map(item => (
          <div className="col-3 padding-top">
            <div key={item.email}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top" alt="movie" />
                <div className="card-body">
                  <p className="card-text">{item.moviename}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
