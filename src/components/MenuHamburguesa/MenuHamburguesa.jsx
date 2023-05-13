import React, { useState, useEffect } from "react";

export default function MenuHamburguesa() {
  const [value, setValue] = useState(
    localStorage.getItem("activeHamburguer") === "true"
  );
  useEffect(() => {
    localStorage.setItem("activeHamburguer", value.toString());
  }, []);

  const handleClick = () => {
    const newValue = !value;
    setValue(newValue);
    localStorage.setItem("activeHamburguer", newValue.toString());
  };
  return (
    <div>
      <i
        className={value === true ? "bi bi-list tamaño " : "bi bi-x tamaño "}
        style={{ fontSize: "30px" }}
        onClick={handleClick}
      />
    </div>
  );
}
