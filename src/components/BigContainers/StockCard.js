import React, { useState } from "react";
import styles from "./StockCard.module.css";

const drinks = [
  "Captain Morgan",
  "Empress",
  "Two Hearted",
  "Bogle",
  "Modelo",
  "Stella Artois",
  "Root Beer",
];

let stocks = [];

const StockCard = () => {
  const [searchBox, setSearchBox] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState(0);

  const SearchDrinkTap = (props) => {
    return (
      <button
        style={{
          backgroundColor: "rgb(62, 139, 154)",
          padding: "8px",
          borderRadius: 15,
          color: "#fff",
          border: "none",
        }}
        onClick={selectItemHandler.bind(this, props.name)}
      >
        {props.name}
      </button>
    );
  };

  const selectItemHandler = (name) => {
    setSearchBox(name);
    setSelectedItem(name);
  };

  const ResetButton = () => {
    return (
      <button
        style={{
          backgroundColor: "#FF5335",
          padding: "8px",
          borderRadius: 15,
          color: "#fff",
          border: "none",
        }}
        onClick={resetHandler}
      >
        RESET
      </button>
    );
  };

  const updateQuantityHandler = (tempQuan) => {
    let temp = quantity + tempQuan;
    setQuantity(parseInt(temp));
  };

  const resetQuantityHandler = () => {
    setQuantity(0);
  };

  const resetHandler = () => {
    setQuantity(0);
    setSearchBox("");
  };

  const addHandler = (name, quan) => {
    resetHandler();
    stocks.push({ name: name, quantity: quan });
  };

  const subHandler = (name, quan) => {
    resetHandler();
    stocks.push({ name: name, quantity: -quan });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className={styles.mainStockContainer}>
        <div className={styles.stockContainer}>
          <h2 className={styles.stockHeading}>Stock In/Out</h2>
          <input
            className={styles.stockInput}
            type="text"
            placeholder="Enter a Drink Name"
            value={searchBox}
            onChange={(e) => setSearchBox(e.target.value)}
          />
          <div className={styles.searchTabContainer}>
            {drinks.map((drink) => {
              if (
                drink.toLowerCase().indexOf(searchBox.toLowerCase()) !== -1 &&
                searchBox.length > 2
              ) {
                return (
                  <>
                    <SearchDrinkTap name={drink} />
                    <ResetButton />
                  </>
                );
              }
            })}
          </div>
          {selectedItem === searchBox && searchBox.length > 2 && (
            <div className={styles.quantityButtonContainer}>
              <input
                className={styles.stockInput}
                type="number"
                value={quantity}
                disabled
              />
              <div
                className={styles.quantityHContainer}
                style={{ marginTop: 20 }}
              >
                <button
                  onClick={updateQuantityHandler.bind(this, "1")}
                  className={styles.quantityButton}
                >
                  1
                </button>
                <button
                  onClick={updateQuantityHandler.bind(this, "2")}
                  className={styles.quantityButton}
                >
                  2
                </button>
                <button
                  onClick={updateQuantityHandler.bind(this, "3")}
                  className={styles.quantityButton}
                >
                  3
                </button>
              </div>
              <div className={styles.quantityHContainer}>
                <button
                  onClick={updateQuantityHandler.bind(this, "4")}
                  className={styles.quantityButton}
                >
                  4
                </button>
                <button
                  onClick={updateQuantityHandler.bind(this, "5")}
                  className={styles.quantityButton}
                >
                  5
                </button>
                <button
                  onClick={updateQuantityHandler.bind(this, "6")}
                  className={styles.quantityButton}
                >
                  6
                </button>
              </div>
              <div className={styles.quantityHContainer}>
                <button
                  onClick={updateQuantityHandler.bind(this, "7")}
                  className={styles.quantityButton}
                >
                  7
                </button>
                <button
                  onClick={updateQuantityHandler.bind(this, "8")}
                  className={styles.quantityButton}
                >
                  8
                </button>
                <button
                  onClick={updateQuantityHandler.bind(this, "9")}
                  className={styles.quantityButton}
                >
                  9
                </button>
              </div>
              <div className={styles.quantityHContainer}>
                <button
                  onClick={updateQuantityHandler.bind(this, "0")}
                  className={styles.quantityButton}
                >
                  0
                </button>
                <button
                  onClick={resetQuantityHandler}
                  className={styles.quantityButton}
                >
                  Cl
                </button>
              </div>
              <div className={styles.footerButtons}>
                <button
                  className={styles.updateButton}
                  onClick={addHandler.bind(this, searchBox, quantity)}
                >
                  Add
                </button>
                <button
                  className={styles.updateButton}
                  onClick={subHandler.bind(this, searchBox, quantity)}
                >
                  Substract
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={styles.stockContainer}
        style={{ marginTop: 50, marginBottom: 100 }}
      >
        <h2 className={styles.stockInfoItem}>Summary</h2>
        {stocks.length > 0 ? (
          stocks.map((stock) => (
            <p className={styles.stockInfoItem}>
              <b>{stock.name}</b>: {stock.quantity}
            </p>
          ))
        ) : (
          <p className={styles.stockInfoItem} style={{ marginBottom: 30 }}>
            Your list is empty 🙁
          </p>
        )}
      </div>
    </div>
  );
};

export default StockCard;