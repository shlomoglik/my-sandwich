import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const FoodsPackContext = React.createContext({
  selecedFoods: [],
  remove: async (id) => {},
  add: async (data) => {},
});

export function FoodsPackProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  function selecetFood(data) {
    return db.collection("selectedFoods").doc().set(data, { merge: true });
  }

  function removeFood(id) {
    return db.doc(`selectedFoods/${id}`).delete()
  }

  useEffect(() => {
    const unsubscribe = db.collection("selectedFoods").onSnapshot((snap) => {
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
    add: selecetFood,
    remove: removeFood,
  };

  return <FoodsPackContext.Provider value={value}>{children}</FoodsPackContext.Provider>;
}
export default FoodsPackContext;
