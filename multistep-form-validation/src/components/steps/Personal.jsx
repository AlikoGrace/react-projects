import { useEffect, useState } from "react";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// shapping our validations will look like

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  surName: yup.string().required("surname is required"),
  otherName: yup.string().optional(),
  gender: yup.string().required("Please select a gender"),
});

const Personal = ({ setValidationTrigger, setCurrentStep }) => {
  const {
    register,
    trigger,
    // to manually trigger validation
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    // validation triggers on change
  });

  useEffect(() => {
    setValidationTrigger(() => trigger);
  }, [trigger, setValidationTrigger]);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div
      className=" w-full mx-auto max-w-md border-1/2 p-6 rounded-lg shadow-lg
     ">
      <form action="" className="w-full">
        <Input
          label="First Name"
          placeholder="first name"
          type="text"
          {...register("firstName")}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}
        <Input
          label="Surname Name"
          placeholder="sur names"
          {...register("surName")}
        />
        {errors.surName && (
          <p className="text-red-500 text-sm">{errors.surName.message}</p>
        )}

        <Input
          label="Other Name"
          placeholder="other names"
          type="text"
          {...register("otherName")}
        />
        <div className="mt-4 flex items-center justify-between w-full">
          <span className="font-medium">Gender</span>
          <label>
            <input
              type="radio"
              value="Male"
              className="form-radio"
              {...register("gender")}
            />
            <span>Male</span>
          </label>
          <label>
            <input type="radio" value="Female" {...register("gender")} />
            <span>Female</span>
          </label>
        </div>
        {errors.gender && (
          <p className="text-red-500 text-sm">{errors.gender.message}</p>
        )}
      </form>
    </div>
  );
};

export default Personal;
