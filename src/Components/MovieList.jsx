import { useContext } from "react";
import { toast } from "react-toastify";
import { MovieContext } from "../context";
import { getAllmovies } from "../data/movieData";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const { state, dispatch } = useContext(MovieContext);
  const movies = getAllmovies();

  const handleAddCart = (e, movie) => {
    e.preventDefault();

    console.log(state.cartData);
    const found = state.cartData.find((item) => item.id === movie.id);

    if (!found) {
      // setCartData([...cartData, movie]);
      dispatch({
        type: "adding",
        payload: {
          ...movie,
        },
      });

      toast.success(`You have add ${movie.title} in your cart`, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.warn(`${movie.title} is already in cart!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onAddCart={handleAddCart} />
          ))}
        </div>
      </div>
    </>
  );
}
