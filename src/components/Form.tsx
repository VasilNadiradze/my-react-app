import { FormEvent } from "react";

const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("გაიგზავნა");
  };

  const test = 'ტესტი'; // eslint-disable-line

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          სახელი
        </label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          ასაკი
        </label>
        <input type="number" className="form-control" id="age" />
      </div>
      <button className="btn btn-primary" type="submit">
        გაგზავნა
      </button>
    </form>
  );
};

export default Form;
