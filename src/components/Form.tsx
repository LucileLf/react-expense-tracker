import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// interface FormProps {
//   listItems: [];
//   onSubmit: (data: FieldValues) => void;
// }

const Form = (/*{listItems, onSubmit}: FormProps*/) => {
  const schema = z.object({
    description: z.string().min(3, { message: "Description should be at least 3 characters." }),
    amount: z.number().min(1),
    category: z.string({ invalid_type_error: "Category is required." }), //must be in the list
  });

  type FormData = z.infer<typeof schema>;
  // console.log(FormData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  //console.log(errors);

  //const onSubmit = (data: FieldValues) => console.log(data);
//add data to listItems


  return (
    <form /*onSubmit={handleSubmit(onSubmit)}*/>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger"> {errors.description.message} </p>
        )}

        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="string"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger"> {errors.amount.message} </p>
        )}

        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          id="category"
          className="form-control"
        >
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>

        {errors.category && (
          <p className="text-danger"> {errors.category.message} </p>
        )}
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
