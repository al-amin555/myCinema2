/* eslint-disable react/prop-types */
import { useState } from "react";
import { getImageUrl } from "../MoviesPic/moviesPic";
import Tag from "../assets/tag.svg";
import MovieDetailModal from "./MovieDetailModal";
import Rating from "./Rating";

export default function MovieCard({ movie, onAddCart }) {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);

  const handleCloseModal = () => {
    setSelectedModal(null);
    setShowDetails(false);
  };

  const handleChange = (movie) => {
    setSelectedModal(movie);
    setShowDetails(true);
  };
  return (
    <>
      {showDetails && (
        <MovieDetailModal
          movie={movie}
          onClose={handleCloseModal}
          selectedModal={selectedModal}
          onAddCart={onAddCart}
        />
      )}

      <a href="#" onChange={(movie) => handleChange(movie)}>
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
            onClick={() => setShowDetails(true)}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">
              {movie.genre.map((item) => item)}
            </p>
            <Rating value={movie.rating} />
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => onAddCart(e, movie)}
            >
              <img src={Tag} alt="" />
              <span>{movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </figure>
      </a>
    </>
  );
}
