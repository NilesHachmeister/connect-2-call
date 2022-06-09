import React from "react";
import "../homepg.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Info() {
  const cardStuff = [
    {
      image: "card6.jpeg",
      title: "I'm so thankful I can depend on you!",
      subtitle: "-Joan from Minneapolis",
      id: "card_1",
    },
    {
      image: "card3.jpeg",
      title:
        " So appreciative of this service- I can finally get some errands done while I'm at work.",
      subtitle: "-Brook from Scranton.",
      id: "card_2",
    },
    {
      image: "card4.jpeg",
      title: "Thank you so much for your help- it means the world.",
      subtitle: "-Addie from Austin.",
      id: "card_3",
    },
    {
      image: "card13.jpeg",
      title:
        "I love helping others throughout my day- I've also created amazing friendships!",
      subtitle: "-Michael from Portland",
      id: "card_4",
    },
  ];

  const renderCard = (card, index) => {
    let cardContent = {
      paddingLeft: "40px",
      paddingRight: "40px",
      paddingTop: "20px",
      listStyle: "none",
      maxWidth: "200px",
      width: "21rem"
    };

    return (
      <li className = "card">
         
        <Card  style={{renderCard }}>
            <figure>
            <Card.Img variant="top" src={card.image} />
          </figure>
          <Card.Body>
            <Card.Title style={{ fontStyle: "italic" }}>
              {card.title}{" "}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {card.subtitle}
            </Card.Subtitle>
          </Card.Body>
        </Card>
        </li>
    );
  };

  return <div className="card">{cardStuff.map(renderCard)} </div>;
}
