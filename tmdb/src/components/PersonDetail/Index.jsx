import React from "react";
import { withRouter } from "react-router-dom";
import PersonData from "./PersonData";
import KnownForMovie from "./KnownForMovie";

const Index = (props) => {
  return (
    <>
      <PersonData data={props.match.params.id} />
      <KnownForMovie person_id={props.match.params.id} />
    </>
  );
};

export default withRouter(Index);
