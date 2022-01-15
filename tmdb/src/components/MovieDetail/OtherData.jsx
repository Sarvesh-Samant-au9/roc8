import "../../css/OtherData.css";
const OtherData = (props) => {
  return (
    <div className="other_data">
      <p>
        <b className="heading_color">Original Title: </b>
        {props.original_title}
      </p>
      <p>
        <b className="heading_color">Vote Count: </b>
        {props.vote_count}
      </p>
      <p>
        <b className="heading_color">Popularity: </b>
        {props.popularity}
      </p>
      <p>
        <b className="heading_color">Status: </b>
        {props.status}
      </p>
      <p>
        <b className="heading_color">External links: </b>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://www.imdb.com/title/${props.imdb}`}
          className="btn btn-warning font-bold font-weight-bold"
        >
          IMDB
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={props.website}
          className="btn btn-danger font-weight-bold ml-1"
        >
          Website
        </a>
      </p>
    </div>
  );
};
export default OtherData;
