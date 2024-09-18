import { useState } from "react";

interface ListGroupProps {
  heading : string, // სიის სათაური
  items: string[] // სტრიქონების მასივი, სიაში გამოსატანი ინფორმაცია
}

export function ListGroup(props: ListGroupProps) {
  
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <p>სია ცარიელია</p>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
