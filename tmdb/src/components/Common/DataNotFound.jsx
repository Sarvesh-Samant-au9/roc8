import { Link } from "react-router-dom";
import "../../css/DataNotFound.scss";
const DataNotFound = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="jumbotron">
        <div className="toy-train">
          <div className="engine">
            <div className="window">
              <div className="engine-main">
                <div className="smokes">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="engine-body">
              <div className="wheels">
                <div className="big-wheel"></div>
                <div className="normal-wheel"></div>
              </div>
            </div>
          </div>
          <div className="locomotive">
            <div className="trash"></div>
            <div className="wheels">
              <div className="normal-wheel"></div>
              <div className="normal-wheel"></div>
            </div>
          </div>
          <div className="tracks">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="font-weight-bolder text-danger">Data Not Found</h1>
        <h4 className="font-weight-bolder text-primary">
          Sorry for inconvenience
        </h4>
        <Link className="font-weight-bold text-secondary gotoHomeBtn" to="/">
          <p>Go to Home Page</p>
        </Link>
      </div>
    </div>
  );
};

export default DataNotFound;
