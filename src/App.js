import React, { useState } from "react";
import "./styles.css";

const foodDB = {
  SouthIndian: [
    {
      name: "Masala Dosa",
      rating: "5/5"
    },
    {
      name: "Medu Vada",
      rating: "4.3/5"
    },
    {
      name: "Pongal",
      rating: "4/5"
    },
    {
      name: "Idli sambhar",
      rating: "3.2/5"
    },
    {
      name: "Pulihora",
      rating: "4/5"
    }
  ],
  Gujarati: [
    {
      name: "Dhokla, Khandvi",
      rating: "4.4/5"
    },
    {
      name: "Achaar thepla",
      rating: "4/5"
    },
    {
      name: "Fafda- jalebi",
      rating: "3.7/5"
    },
    {
      name: "Undhiyu",
      rating: "3.5/5"
    },
    {
      name: "Aam Shrikhand with Mango Salad",
      rating: "5/5"
    }
  ],
  NorthIndian: [
    {
      name: "Chole Bhatoorey",
      rating: "5/5"
    },
    {
      name: "Rajma-chawal",
      rating: "4.3/5"
    },
    {
      name: "Kadhi-chawal",
      rating: "4/5"
    },
    {
      name: "Aaloo samosa chat",
      rating: "4.9/5"
    },
    {
      name: "Rabdi Falooda",
      rating: "3/5"
    }
  ],
  Bengali: [
    {
      name: "Aloo Potol Posto",
      rating: "4/5"
    },
    {
      name: "Sandesh",
      rating: "4.3/5"
    },
    {
      name: " Aam Pora Shorbot",
      rating: "3.6/5"
    },
    {
      name: " Alur Dom",
      rating: "4.9/5"
    },
    {
      name: "Patishapta",
      rating: "3/5"
    }
  ]
};

export default function App() {
  const [selectedCuisine, setSelectedCuisine] = useState("SouthIndian");

  function onClickHandler(cuisine) {
    setSelectedCuisine(cuisine);
  }

  return (
    <div className="App">
      <h1>🥘🥣 foodiieeIndian </h1>
      <small>Delicious Types of Cuisine You Should Try</small>
      <div>
        {Object.keys(foodDB).map((cuisine) => {
          return (
            <button
              key={cuisine}
              onClick={() => onClickHandler(cuisine)}
              className="btn"
            >
              {cuisine}
            </button>
          );
        })}
      </div>
      <hr />

      <div className="container">
        <ul>
          {foodDB[selectedCuisine].map((cuisine) => {
            return (
              <li key={cuisine.name}>
                <div className="lrg">{cuisine.name}</div>
                <div className="sml">{cuisine.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
