"use client";

import { useForm } from "react-hook-form";

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input
        {...register("firstName")}
        className="border border-gray-400 rounded-lg"
        placeholder="firstName"
      />
      {errors.firstName && (
        <p className="text-red-400">First name is required.</p>
      )}
      <input
        {...register("lastName", { required: true })}
        className="border border-gray-400 rounded-lg"
        placeholder="lastName"
      />
      {errors.lastName && (
        <p className="text-red-400">Last name is required.</p>
      )}
      <input
        {...register("age", { pattern: /\d+/ })}
        className="border border-gray-400 rounded-lg"
        placeholder="age"
      />
      {errors.age && (
        <p className="text-red-400">Please enter number for age.</p>
      )}
      <input type="submit" />
    </form>
  );
}

export default ReactHookForm;
