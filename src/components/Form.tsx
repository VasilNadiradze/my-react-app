import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const customOnSubmit = (data: FieldValues) => console.log(data);

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
          {...register("name", { required: true, minLength: 2 })}
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">სახელის მითითება აუცილებელია</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">
            სახელი უნდა შეიცავდეს ერთ სიმბოლოზე მეტს
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          ასაკი
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          {...register("age", { required: true })}
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">ასაკის მითითება აუცილებელია</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        გაგზავნა
      </button>
    </form>
  );
};

export default Form;
