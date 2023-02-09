import React, { useState } from "react";
import { Link } from "react-router-dom";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  return (
    <div className="base container">
      <h3 className="base-title">Step 1: Choose Your Crust</h3>
      <div className="base-list-container">
        <ul className="base-list">
          {bases.map((base) => {
            let spanClass = pizza.base === base ? "active" : "";
            return (
              <li key={base} onClick={() => addBase(base)}>
                <span className={spanClass}>{base}</span>
              </li>
            );
          })}
        </ul>
        {pizza.base && (
          <Link to={"toppings"}>
            <button>Next</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Base;
