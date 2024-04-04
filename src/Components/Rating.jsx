import StarIcon from "../assets/star.svg";
export default function Rating({ value }) {
  const ratings = Array(value).fill(StarIcon);
  return (
    <div className="flex items-center space-x-1 mb-5">
      {ratings.map((rating, index) => (
        <img key={index} src={rating} width="14" height="14" alt="rating" />
      ))}
    </div>
  );
}
