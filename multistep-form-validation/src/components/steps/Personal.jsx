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

const Personal = ({
  setValidationTrigger,
  setCurrentStep,
  formData,
  setFormData,
}) => {
  const {
    register,
    trigger,
    setValue,
    // to manually trigger validation
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    // validation triggers on change
  });

  useEffect(() => {
    Object.keys(formData).forEach((key) => {
      setValue(key, formData[key]);
    });
  }, [formData, setValue]);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    setValidationTrigger(() => trigger);
  }, [trigger, setValidationTrigger]);

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
          onChange={handleInputChange}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}
        <Input
          label="Surname Name"
          placeholder="sur names"
          {...register("surName")}
          onChange={handleInputChange}
        />
        {errors.surName && (
          <p className="text-red-500 text-sm">{errors.surName.message}</p>
        )}

        <Input
          label="Other Name"
          placeholder="other names"
          type="text"
          {...register("otherName")}
          onChange={handleInputChange}
        />
        <div className="mt-4 flex items-center justify-between w-full">
          <span className="font-medium">Gender</span>
          <label>
            <input
              type="radio"
              value="Male"
              className="form-radio"
              {...register("gender")}
              onChange={handleInputChange}
            />
            <span>Male</span>
          </label>
          <label>
            <input
              type="radio"
              value="Female"
              {...register("gender")}
              onChange={handleInputChange}
            />
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
