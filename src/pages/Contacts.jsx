import React, { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import db from "../firebase/config";
import "../styles/contact.css";

const Contacts = () => {
  const [contactsData, setContactsData] = useState([]);
  const contactdata = [];

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "ibsywlccontact"));
    querySnapshot.forEach((doc) => {
      //   console.log(doc.id, " => ", doc.data());
      //   setContactsData((prev) => [...prev, doc.data()]);
      contactdata.push(doc.data());
      setContactsData(contactdata);
      //   console.log(doc);
    });
  };

  useEffect(() => {
    getData();
    // console.log(contactsData);
  }, []);

  return (
    <div id="contactsDataSection">
      <h1>Contact Data</h1>
      {contactsData.map((item) => {
        return (
          <div className="contactDataList">
            <h2>{item.name}</h2>
            <a href={`mailto:${item.email}`}>{item.email}</a>
            <a href={`tel:${item.phone}`}>{item.phone}</a>
            <p>{item.message}</p>
            <span>Contacted on - {item.timestamp}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
