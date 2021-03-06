import { userConstants } from "./constants";
import { firestore } from "firebase";

import { clearLoader, isLoading } from "./loadingAction";

export const getRealtimeUsers = (uid) => {
  //console.log('uid', uid)

  return async (dispatch) => {
    dispatch({ type: `${userConstants.GET_REALTIME_USERS}_REQUEST` });

    const db = firestore();
    const unsubscribe = db
      .collection("users")
      //.where("uid", "!=", uid)
      .onSnapshot((querySnapshot) => {
        const users = [];
        querySnapshot.forEach(function (doc) {
          if (doc.data().uid != uid) {
            users.push(doc.data());
          }
        });
        //console.log(users);

        dispatch({
          type: `${userConstants.GET_REALTIME_USERS}_SUCCESS`,
          payload: { users },
        });
      });

    return unsubscribe;
  };
};

export const updateMessage = (msgObj) => {
  console.log(msgObj);
  return async (dispatch) => {
    const db = firestore();
    db.collection("conversations")
      .add({
        ...msgObj,
        isView: false,
        createdAt: new Date(),
      })
      .then((data) => {
        console.log(data);
        // success;
        // dispatch({
        //   type: userConstants.GET_REALTIME_MESSAGES,
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getRealtimeConversations = (user) => {
  console.log("object");
  return async (dispatch) => {
    // dispatch(isLoading());
    const db = firestore();
    db.collection("conversations")
      .where("user_uid_1", "in", [user.uid_1, user.uid_2])
      .orderBy("createdAt", "asc")
      .onSnapshot((querySnapshot) => {
        const conversations = [];

        querySnapshot.forEach((doc) => {
          if (
            (doc.data().user_uid_1 == user.uid_1 &&
              doc.data().user_uid_2 == user.uid_2) ||
            (doc.data().user_uid_1 == user.uid_2 &&
              doc.data().user_uid_2 == user.uid_1)
          ) {
            conversations.push(doc.data());
          }

          // if(conversations.length > 0){

          // }else{
          //     dispatch({
          //         type: `${userConstants.GET_REALTIME_MESSAGES}_FAILURE`,
          //         payload: { conversations }
          //     })
          // }
        });

        dispatch({
          type: userConstants.GET_REALTIME_MESSAGES,
          payload: { conversations },
        });
        // dispatch(clearLoader());
        console.log(conversations);
      });
    //user_uid_1 == 'myid' and user_uid_2 = 'yourId' OR user_uid_1 = 'yourId' and user_uid_2 = 'myId'
  };
};
