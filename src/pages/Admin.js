import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { db } from "../firebase";

const Admin = () => {
  const [dataValue, setDataValue] = useState([
    { index: "1", title: "סלט ביצים", img: "eggs.jpg" },
    { index: "2", title: "אבוקדו", img: "avocado.jpg" },
    { index: "3", title: "דבש", img: "honey.jpg" },
    { index: "4", title: "ריבה", img: "jim.jpg" },
    { index: "5", title: "ביצה בקן", img: "eggOnBread.jpg" },
    { index: "6", title: "ביצה קשה", img: "boiledEgg.jpg" },
    { index: "7", title: "סילאן", img: "silan.jpg" },
    { index: "8", title: "קראנץ' בתנור", img: "toast.jpg" },
    { index: "9", title: "גבינה צהובה", img: "yellowCheese.jpg" },
    { index: "10", title: "חמאה", img: "butter.jpg" },
    { index: "11", title: "טונה", img: "tuna.jpg" },
  ]);
  const handleAddMultiple = async () => {
    const batch = db.batch();
    dataValue.forEach((data) => {
      batch.set(db.collection("foods").doc(), data);
    });
    await batch.commit();
  };
  return (
    <>
      <Button onClick={handleAddMultiple}>הוספה</Button>
    </>
  );
};

export default Admin;
