"use client";
import { useEffect, useState } from "react";
import firebase_app from "../../firebase/config.js";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default function RSVPPage() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(1);
  const [diet, setDiet] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "rsvps"), {
        name: name,
        number: number,
        diet: diet,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
      <h1>RSVP</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Number:
            <input
              type="number"
              min={1}
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>
          <label>
            Dietary Requirements or Allergies:
            <textarea
              name="diet"
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}
