import React from "react";
import filterStyles from "../CSS/filter.module.css";

const Filter = () => {
  return (
    <div className={filterStyles.filter}>
      {/* ******************************************************************************************* */}
      <h3>Colour</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="Novel"
            // checked={category.includes("Novel")}
            // onChange={handleFilterCheckbox}
          />
          <label>Red</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Motivational"
            // checked={category.includes("Motivational")}
            // onChange={handleFilterCheckbox}
          />
          <label>Blue</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Science_Fiction"
            // checked={category.includes("Science_Fiction")}
            // onChange={handleFilterCheckbox}
          />
          <label>Green</label>
        </div>
      </div>

      {/* ***************************************************************************** */}
      <h3>Gender</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="Novel"
            // checked={category.includes("Novel")}
            // onChange={handleFilterCheckbox}
          />
          <label>Men</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Motivational"
            // checked={category.includes("Motivational")}
            // onChange={handleFilterCheckbox}
          />
          <label>Women</label>
        </div>
      </div>
      {/* ***************************************************************************** */}
      <h3>Price</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="Novel"
            // checked={category.includes("Novel")}
            // onChange={handleFilterCheckbox}
          />
          <label>Rs0-Rs250</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Motivational"
            // checked={category.includes("Motivational")}
            // onChange={handleFilterCheckbox}
          />
          <label>Rs251-Rs450</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Science_Fiction"
            // checked={category.includes("Science_Fiction")}
            // onChange={handleFilterCheckbox}
          />
          <label>Rs450+</label>
        </div>
      </div>
      {/* ***************************************************************************** */}
      <h3>Type</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="Novel"
            // checked={category.includes("Novel")}
            // onChange={handleFilterCheckbox}
          />
          <label>Polo</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Motivational"
            // checked={category.includes("Motivational")}
            // onChange={handleFilterCheckbox}
          />
          <label>Hoodie</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Science_Fiction"
            // checked={category.includes("Science_Fiction")}
            // onChange={handleFilterCheckbox}
          />
          <label>Basic</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
