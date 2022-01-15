import React from "react";
import MainPage from "./MainPage";
import { useDispatch, useSelector } from "react-redux";
import { updateHistory } from "../../redux/actions";

const Index = (props) => {
  const { user, userDetail } = useSelector((state) => state.UserAuth);
  const dispatch = useDispatch();
  if (userDetail) {
    if (!userDetail.history.includes(parseInt(props.match.params.id))) {
      dispatch(
        updateHistory(user, [
          ...userDetail.history,
          parseInt(props.match.params.id),
        ])
      );
    }
  }
  return (
    <React.Fragment key={props.match.params.id}>
      <MainPage movie_id={props.match.params.id} />
    </React.Fragment>
  );
};

export default Index;
