import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  }

  //비동기 axios가 끝날때까지 기다려라 await라는 예약어는 함수에 asunc가 있을때만 가능하다
  getMovies = async () => {
    // const movies = ...
    // console.log(movies.data.data.movies); // 이런 방식이 있는데 멋진 es6에서는 이따위로 하지 않는다.
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    // movies에도 당연히 {}처리를 해줘야지 모두 객체인데!!
    // this.setState({movies: movies}) // es6에서는 이런 방식으로 하지 않는다.
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (<section className="container">
      {isLoading ? (<div className="loader">
        <span className="loader__text">Loading...</span>
      </div>
      ) : (
        <div className="movies">
          {
            movies.map(movie => {
              return (<Movie 
                key={movie.id} 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                genres={movie.genres}
                />
                )
            })
          }
        </div>)}
    </section>)
  }
}

export default App;
