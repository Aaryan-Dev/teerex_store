import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import filterStyles from "../CSS/filter.module.css";
import { getShirts } from "../React-Redux/App/action";

const Filter = () => {
  const dispatch = useDispatch();

  const [colour, setColour] = useState([]);
  const [gender, setGender] = useState([]);
  const [price, setPrice] = useState([]);
  const [type, setType] = useState([]);

  const handleFilterColour = (e) => {
    // check if the value is present, then remove it, else add it.
    const newCategories = [...colour];
    if (newCategories.includes(e.target.value)) {
      //remove it
      newCategories.splice(newCategories.indexOf(e.target.value), 1);
    } else {
      newCategories.push(e.target.value);
    }
    setColour(newCategories);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleFilterType = (e) => {
    // check if the value is present, then remove it, else add it.
    const newCategories = [...type];
    if (newCategories.includes(e.target.value)) {
      //remove it
      newCategories.splice(newCategories.indexOf(e.target.value), 1);
    } else {
      newCategories.push(e.target.value);
    }
    setType(newCategories);
  };

  useEffect(() => {
    let filterObject = {
      filterColour: colour,
      filterGender: gender,
      filterPrice: price,
      filterType: type,
    };

    dispatch(getShirts(filterObject));
  }, [dispatch, colour, gender, price, type]);

  return (
    <div className={filterStyles.filter}>
      <div>
        <div>
          <h3>Colour</h3>
          <input
            type="checkbox"
            value="Red"
            checked={colour.includes("Red")}
            onChange={handleFilterColour}
          />
          <label>Red</label>
        </div>

        <div>
          <input
            type="checkbox"
            value="Blue"
            checked={colour.includes("Blue")}
            onChange={handleFilterColour}
          />
          <label>Blue</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Green"
            checked={colour.includes("Green")}
            onChange={handleFilterColour}
          />
          <label>Green</label>
        </div>
      </div>

      <div>
        <div>
          <h3>Gender</h3>

          <label for="101">
            <input
              type="radio"
              value="Men"
              name="gender"
              id="101"
              onChange={handleGender}
              defaultChecked={gender === "Men"}
            />
            Men
          </label>

          <label for="102">
            <input
              type="radio"
              value="Women"
              name="gender"
              id="102"
              onChange={handleGender}
              defaultChecked={gender === "Women"}
            />
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
                onChange={handlePrice}
                defaultChecked={price === "Rs0-Rs250"}
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
                onChange={handlePrice}
                defaultChecked={price === "Rs251-Rs450"}
                id="202"
              />
              Rs251-Rs450
            </label>
          </div>

          <div>
            <label for="203">
              <input
                type="radio"
                value="Rs450+"
                name="price-range"
                id="203"
                onChange={handlePrice}
                defaultChecked={price === "Rs450+"}
              />
              Rs450+
            </label>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3>Type</h3>
          <input
            type="checkbox"
            value="Polo"
            checked={type.includes("Polo")}
            onChange={handleFilterType}
          />
          <label>Polo</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Hoodie"
            checked={type.includes("Hoodie")}
            onChange={handleFilterType}
          />
          <label>Hoodie</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Basic"
            checked={type.includes("Basic")}
            onChange={handleFilterType}
          />
          <label>Basic</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
