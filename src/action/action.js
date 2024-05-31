import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import app from "../Firebaseauth";

export const AddData = (data) => {
  return async (dispatch) => {
    try {
      const db = getFirestore(app);
      await addDoc(collection(db, "user"), {
        work: data.work,
      });
      dispatch(ViewData())
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};

export const ViewData = () => {
  return async (dispatch) => {
    try {
      const db = getFirestore(app);
      let data = await getDocs(collection(db, "user"));
      let todo = data.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      dispatch({ type: "Viewdata", payload: todo });
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};



export const DeleteUser = (id) => {
  return async (dispatch) => {
    try {
      const db = getFirestore(app);
      const delRec = doc(db, "user", id);
      await deleteDoc(delRec);
      dispatch(ViewData());
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};

export const EditUser = (editId,work) => {
  console.log("work is => ",work,"id is =>",editId);
  return async (dispatch) => {
    try {
      const db = getFirestore(app)
      const updateUser = doc(db,"user",editId);
      await updateDoc(updateUser,{work:work})
      dispatch(ViewData())
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};
