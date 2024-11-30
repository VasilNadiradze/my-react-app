import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const customOnSubmit = (data: FieldValues) => console.log(data)

  return (
    <form onSubmit={handleSubmit(customOnSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          სახელი
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          {...register("name")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          ასაკი
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          {...register("age")}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        გაგზავნა
      </button>
    </form>
  );
};

export default Form;
