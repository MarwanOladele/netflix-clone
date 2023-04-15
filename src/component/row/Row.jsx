import { useEffect, useRef, useState } from "react";
import "./Row.css";
import axios from "../../api/axios";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;

    console.log(current);

    if (direction === "left") {
      current.scrollLeft -= 500;
    } else {
      current.scrollLeft += 500;
    }
  };

  const baseurl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posterClass" ref={scrollRef}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__psoter ${isLargeRow && "row__posterLarge"}`}
            src={`${baseurl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <MdArrowBackIosNew
        className={`galley_display_arrowLeft ${isLargeRow && "display_Large"}`}
        onClick={() => scroll("left")}
      />
  
      <MdArrowForwardIos
        className={`galley_display_arrowRight ${isLargeRow && "display_Large"}`}
        onClick={() => scroll("right")}
      />
    </div>
  );
};

export default Row;
