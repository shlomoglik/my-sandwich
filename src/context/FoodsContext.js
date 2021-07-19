import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const FoodContext = React.createContext({
  foods: [],
  remove: async (id) => {},
  add: async (data) => {},
});

export function FoodProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  function addFood(data) {
    return db.collection("foods").doc().set(data, { merge: true });
  }

  function removeFood(id) {
    return db.doc(`foods/${id}`).delete()
  }

  useEffect(() => {
    const unsubscribe = db.collection("foods").onSnapshot((snap) => {
      const data = [];
      snap.docs.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setFoods(data);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    foods,
    add: addFood,
    remove: removeFood,
  };

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
}
export default FoodContext;
