import useGenres from "../hooks/useGenres";

const GenreList = () => {
  // const { genres } = useGenres(); --if u use genre hook --see useGenre copy
  const { data } = useGenres();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
