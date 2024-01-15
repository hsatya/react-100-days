import { useState } from "react";

const MyForm2 = () => {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });
  return (
    <>
      <label>Name: </label>{" "}
      <input
        type='text'
        value={person.name}
        onChange={(e) => {
          setPerson({
            ...person,
            name: e.target.value,
          });
        }}
      />{" "}
      <br />
      <label>Title: </label>{" "}
      <input
        type='text'
        value={person.artwork.title}
        onChange={(e) => {
          setPerson({
            ...person,
            artwork: {
              ...person.artwork,
              title: e.target.value,
            },
          });
        }}
      />{" "}
      <br />
      <label>City: </label>
      <input
        type='text'
        value={person.artwork.city}
        onChange={(e) => {
          setPerson({
            ...person,
            artwork: {
              ...person.artwork,
              city: e.target.value,
            },
          });
        }}
      />{" "}
      <br />
      <label>Image: </label>
      <input
        type='text'
        value={person.artwork.image}
        onChange={(e) =>
          setPerson({
            ...person,
            artwork: {
              ...person.artwork,
              image: e.target.value,
            },
          })
        }
      />
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
};

export default MyForm2;
