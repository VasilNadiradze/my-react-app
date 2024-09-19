import { useState } from "react";
import './ListGroup.css';

interface ListGroupProps {
  heading: string; // სიის სათაური
  items: string[]; // სტრიქონების მასივი, სიაში გამოსატანი ინფორმაცია
  onSelectItem: (item: string) => void; // ქალაქის არჩევის მომენტი
}

export function ListGroup({ heading, items, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>სია ცარიელია</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
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
