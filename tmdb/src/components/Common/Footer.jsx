import { Link } from "react-router-dom";
import "../../css/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid justify-content-center Footer">
        <div className="row inner-footer">
          <div className="col-md-6 logoItem">
            <h3 className="font-weight-bold">Movie Time.</h3>
            <img
              src="https://dl.dropboxusercontent.com/s/vx8n6h25qj5dgwn/logo.png?dl=0"
              alt="logo"
            />
          </div>
          <div className="col-md-3 col-6">
            <h6 className="mb-3">
              <b>MENU</b>
            </h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movie_list">Movie</Link>
              </li>
              <li>
                <Link to="/setting/profile">Profile</Link>
              </li>
              {/* <li>
                <Link to="/setting/wishlist">Wishlist</Link>
              </li> */}
            </ul>
          </div>
          <div className="col-md-3 col-6">
            <h6 className="mb-3">
              <b>Description</b>
            </h6>
            <p className="mb-1 text-white">
              List of all movies and actors so that you can choose what to watch
            </p>
          </div>
        </div>
        <div className="row inner-footer mt-3">
          <div className="col-md-6 social_icon_hide_on_mobile">
            <p className="social mb-0 pb-0 ">
              <span className="mx-2">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </span>
              <span className="mx-2">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </span>
              <span className="mx-2">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </span>
              <span className="mx-2">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </span>
            </p>
            <small className="rights">
              <span>&#174;</span> MovieTime All Rights Reserved.
            </small>
          </div>
          <div className="col-md-3 col-6">
            <h6>
              <b>Sarvesh S</b>
            </h6>
            <small className="text-white">
              <span>
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
              sarveshsamant1140@gmail.com
            </small>
          </div>
          <div className="social_icon_show_on_mobile col-12">
            <p className="social mb-0 pb-0 ">
              <span className="mx-2">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </span>
              <span className="mx-2">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </span>
              <span className="mx-2">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </span>
              <span className="mx-2">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </span>
            </p>
            <small className="rights">
              <span>&#174;</span> MovieTime All Rights Reserved.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
