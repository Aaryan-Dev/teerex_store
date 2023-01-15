import React from "react";
import filterStyles from "../CSS/filter.module.css";

const Filter = () => {
  return (
    <div className={filterStyles.filter}>
      <div>
        <div>
          <h3>Colour</h3>
          <input type="checkbox" value="Red" />
          <label>Red</label>
        </div>

        <div>
          <input type="checkbox" value="Blue" />
          <label>Blue</label>
        </div>
        <div>
          <input type="checkbox" value="Green" />
          <label>Green</label>
        </div>
      </div>

      <div>
        <div>
          <h3>Gender</h3>

          <label for="101">
            <input type="radio" value="Men" name="gender" id="101" />
            Men
          </label>

          <label for="102">
            <input type="radio" value="Women" name="gender" id="102" />
            Women
          </label>
        </div>
      </div>
      <div>
        <div>
          <h3>Price</h3>

          <div>
            <label for="201">
              <input
                type="radio"
                value="Rs0-Rs250"
                name="price-range"
                id="201"
              />
              Rs0-Rs250
            </label>
          </div>

          <div>
            <label for="202">
              <input
                type="radio"
                value="Rs251-Rs450"
                name="price-range"
                id="202"
              />
              Rs251-Rs450
            </label>
          </div>

          <div>
            <label for="203">
              <input type="radio" value="Rs450+" name="price-range" id="203" />
              Rs450+
            </label>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3>Type</h3>
          <input type="checkbox" value="Polo" />
          <label>Polo</label>
        </div>
        <div>
          <input type="checkbox" value="Hoodie" />
          <label>Hoodie</label>
        </div>
        <div>
          <input type="checkbox" value="Basic" />
          <label>Basic</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
