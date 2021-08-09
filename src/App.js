import React from "react";
import MovieData from '../src/components/MovieData';

import MovieList from "../src/components/MovieList";
import NavBar from "./components/NavBar";
import { Link, Route } from 'react-router-dom';
import Description from "./components/description/Description";


function App() {
  const [movieName, setMovieName] = React.useState(MovieData)
  const [titleSearch, setTitleSearch] = React.useState('');
  const [ratingSearch, setRatingSearch] = React.useState(0)
  return (
    <div className="App">

      <Route exact path='/' render={() => {

        return (
          <div>

            <NavBar

              titleSearch={titleSearch}
              ratingSearch={ratingSearch}
              movieName={movieName}
              setMovieName={setMovieName}
              setTitleSearch={setTitleSearch}
              setRatingSearch={setRatingSearch}

            />


            <MovieList
              movieName={movieName}
              titleSearch={titleSearch}
              ratingSearch={ratingSearch}
            />
          </div>
        )
      }} />



      <Route path='/:movietitle/description/:id' component={Description} />
       
    </div>
  )
};


export default App;
