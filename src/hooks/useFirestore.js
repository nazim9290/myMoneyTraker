import { useReducer, useEffect, useState } from "react";
import { projectFirestore, timestamp } from "../firebase/config";
let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};
const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return {
        ...state,
        isPending: true,
        document: null,
        success: false,
        error: null,
      };
    case "ADDED_DOCUMENT":
      return {
        ...state,
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "DELETED_DOCUMENT":
      return {
        isPending: false,
        document: null,
        success: true,
        error: null,
      };
    case "ERROR":
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);
  //collection ref
  const ref = projectFirestore.collection(collection);
  //only dispatch is not cancelled
  const dispatchNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };
  //add a document
  const addDocument = async (doc) => {
    dispatch({
      type: "IS_PENDING",
    });
    try {
      const createAt = timestamp.fromDate(new Date());
      const addedDocument = await ref.add({ ...doc, createAt });
      dispatchNotCancelled({ type: "ADDED_DOCUMENT", payload: addedDocument });
    } catch (err) {
      dispatchNotCancelled({ type: "ERROR", payload: err.message });
    }
  };
  //delete a document
  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const deletedDocument = await ref.doc(id).delete();
      dispatchNotCancelled({
        type: "DELETED_DOCUMENT",
      });
    } catch (error) {
      dispatchNotCancelled({ type: "ERROR", payload: "could not delete" });
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { addDocument, deleteDocument, response };
};
