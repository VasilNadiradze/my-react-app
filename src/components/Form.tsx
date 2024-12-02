import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.ts";

const schema = z.object({
  name: z
    .string()
    .min(2, { message: "სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს" }),
  age: z.number({ invalid_type_error: "მინიმალური ასაკი 18 წელი" }).min(18),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
          {...register("name")}
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          ასაკი
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          {...register("age", { valueAsNumber: true })}
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button className="btn btn-primary" type="submit">
        გაგზავნა
      </button>
    </form>
  );
};

export default Form;
