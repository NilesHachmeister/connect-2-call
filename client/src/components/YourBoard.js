import React, { useState, useQuery } from "react";
import Card from './Card'
import NewPostForm from "./NewPostForm";
import { GET_POSTS } from '../utils/queries'
import BoardPage from "../pages/board";
import pattern2 from '../assets/pattern2.jpeg';


function YourBoard() {
  const [card, setCard] = useState([]);

  // const { loading, data } = useQuery(GET_POSTS);




  // Function to add a bucket list item
  const addCardItem = (item) => {
    console.log(
      item
    );
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    };

    // Add the new bucket list item to the existing array of objects
    const newCard = [item, ...card];
    console.log(newCard);

    // Call setBucket to update state with our new set of bucket list items
    setCard(newCard);
  };

  // Function to mark bucket list item as complete
  const completeCardItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedCard = card.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      };
      return item;
    });

    console.log(updatedCard);
    setCard(updatedCard);
  };

  // Function to remove bucket list item and update state
  const removeCardItem = (id) => {
    const updatedCard = [...card].filter((item) => item.id !== id);

    setCard(updatedCard);
  };

  // Function to edit the bucket list item
  const editCardItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    };

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setCard((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    
 
    <main style={{ backgroundImage: `url(${pattern2})` }}>
          
    <div>
      <h1>What is on your bucket list?</h1>

      <Card className = "sign-up-form"

        card={card}
        completeCardItem={completeCardItem}
        removeCardItem={removeCardItem}
        editCardItem={editCardItem}

      // data={data}

      ></Card>
    </div>
    </main>
  );
};

export default YourBoard;
