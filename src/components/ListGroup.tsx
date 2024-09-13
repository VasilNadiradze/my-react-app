import { useState } from "react";

export function ListGroup() {
  let cities = ["თბილისი", "მცხეთა", "ბათუმი", "ქუთაისი"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>სია</h1>
      {cities.length === 0 && <p>სია ცარიელია</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
