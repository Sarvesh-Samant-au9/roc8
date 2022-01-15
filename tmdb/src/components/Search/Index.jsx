import React from "react";
import SearchPage from "./SearchPage";
const Index = (props) => {
  return (
    <React.Fragment>
      <SearchPage keyword={props} />
    </React.Fragment>
  );
};
export default Index;
