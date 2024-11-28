import { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null); // საწყისი მნიშვნელობა null
  const ageRef = useRef<HTMLInputElement>(null); // საწყისი მნიშვნელობა null
  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current) person.name = nameRef.current.value;
    if (ageRef.current) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          სახელი
        </label>
        <input type="text" className="form-control" id="name" ref={nameRef} />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          ასაკი
        </label>
        <input type="number" className="form-control" id="age" ref={ageRef} />
      </div>
      <button className="btn btn-primary" type="submit">
        გაგზავნა
      </button>
    </form>
  );
};

export default Form;
