import { auth, db, fbProvider, googleProvider } from "../Firebase";
import {
  LOGIN_ERROR,
  REGISTER_ERROR,
  SOCIAL_ERROR,
  TOGGLE_IS_LOADING_AUTH_USER,
} from "../reducers/ConstantActions";
import { triggerSwal } from "./swalToast";

export const registerUser = (fullname, email, password) => (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_IS_LOADING_AUTH_USER,
    });
    dispatch({
      type: REGISTER_ERROR,
      payload: null,
    });
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        db.collection("users").doc(res.user.uid).set({
          name: fullname,
          wishlist: [],
          history: [],
          fav_genres: [],
          themeColor: "#032541",
        });
      })
      .catch((error) => {
        dispatch({
          type: REGISTER_ERROR,
          payload: error,
        });
      });
  } catch (error) {
    triggerSwal(error.message);
  } finally {
    dispatch({
      type: TOGGLE_IS_LOADING_AUTH_USER,
    });
  }
};

export const signupWithFB = () => (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_IS_LOADING_AUTH_USER,
    });
    dispatch({
      type: SOCIAL_ERROR,
      payload: null,
    });
    auth
      .signInWithPopup(fbProvider)
      .then((res) => {
        db.collection("users").doc(res.user.uid).set({
          name: res.user.displayName,
          wishlist: [],
          history: [],
          fav_genres: [],
          themeColor: "#032541",
        });
      })
      .catch((error) => {
        triggerSwal(error.message);
        dispatch({
          type: SOCIAL_ERROR,
          payload: error,
        });
      });
  } catch (error) {
    triggerSwal(error.message);
  } finally {
    dispatch({
      type: TOGGLE_IS_LOADING_AUTH_USER,
    });
  }
};

export const signupWithGoogle = () => (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_IS_LOADING_AUTH_USER,
    });
    dispatch({
      type: SOCIAL_ERROR,
      payload: null,
    });
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        db.collection("users").doc(res.user.uid).set({
          name: res.user.displayName,
          wishlist: [],
          history: [],
          fav_genres: [],
          themeColor: "#032541",
        });
      })
      .catch((error) => {
        // console.log(error, "SSSSSS");
        triggerSwal(error.message);
        dispatch({
          type: SOCIAL_ERROR,
          payload: error,
        });
      });
  } catch (error) {
    // console.log(error);
    triggerSwal(error.message);
  } finally {
    dispatch({
      type: TOGGLE_IS_LOADING_AUTH_USER,
    });
  }
};

export const loginUser = (email, password) => (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_IS_LOADING_AUTH_USER,
    });
    dispatch({
      type: LOGIN_ERROR,
      payload: null,
    });
    auth
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        // console.log(data);
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_ERROR,
          payload: error,
        });
      });
  } catch (error) {
    triggerSwal(error.message);
  } finally {
    dispatch({
      type: TOGGLE_IS_LOADING_AUTH_USER,
    });
  }
};

export const logoutUser = () => (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_IS_LOADING_AUTH_USER,
    });
    auth
      .signOut()
      .then()
      .catch((err) => triggerSwal(err.message));
  } catch (error) {
    triggerSwal(error.message);
  } finally {
    dispatch({
      type: TOGGLE_IS_LOADING_AUTH_USER,
    });
  }
};
