import DiscoverMovie from "./DiscoverMovie";
import SortFilter from "./SortFilter";

const Sidebar = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-12 mt-4">
        <DiscoverMovie />
      </div>
      <div className="col-12 col-md-12 mt-4">
        <SortFilter />
      </div>
    </div>
  );
};

export default Sidebar;
