import { db } from "../Firebase";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import { TOGGLE_IS_UPDATING_USER_DATA } from "../reducers/ConstantActions";
import { triggerSwal } from "./swalToast";

export const updateWishlist = (user, newList) => async (dispatch) => {
  // console.log(user, newList);
  try {
    dispatch({
      type: TOGGLE_IS_UPDATING_USER_DATA,
    });
    // const query = await db.collection("users");
    // // const [users] = useCollectionData(query);
    // console.log(query);
    // const res = await db.collection("cities").doc("LA").set(data);
    // console.log(res);
    await db
      .collection("users")
      .add({
        wishlist: newList,
      })
      .doc(user.uid)
      .set({ wishlist: [newList] }, { merge: true });
  } catch (error) {
    triggerSwal(error.message);
  } finally {
    dispatch({
      type: TOGGLE_IS_UPDATING_USER_DATA,
    });
  }
};

export const updateHistory = (user, newList) => async (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_IS_UPDATING_USER_DATA,
    });
    // let userCollection = db.collection("users");
    // let userInfof = await userCollection.get();

    await db
      .collection("users")
      .doc(user.uid)
      .set({ history: newList }, { merge: true });

    // const logCities = async () => {
    //   let citiesRef = db.collection("cities");
    //   let allCities = await citiesRef.get();
    //   for (const doc of allCities.docs) {
    //     console.log(doc.id, "=>", doc.data());
    //   }
    // };
  } catch (error) {
    triggerSwal(error.message);
  } finally {
    dispatch({
      type: TOGGLE_IS_UPDATING_USER_DATA,
    });
  }
};
