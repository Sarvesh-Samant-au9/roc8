import MovieCard from "../Common/MovieCard";
import PersonCard from "../Common/PersonCard";
const SearchCard = (props) => {
  // console.log(props);
  const searchdata = (data) => {
    return data.map((val, idx) => {
      if (props.type === "movie" && val.media_type === "movie") {
        return (
          <MovieCard
            data={val}
             show_wishlist={true}
            key={idx}
          />
        );
      } else if (props.type === "person" && val.media_type === "person") {
        return <PersonCard data={val} key={idx} />;
      } else {
        return <span key={idx}></span>;
      }
    });
  };
  return (
    <div className="row" style={{ margin: "0 auto" }}>
      {searchdata(props.list)}
    </div>
  );
};
export default SearchCard;
