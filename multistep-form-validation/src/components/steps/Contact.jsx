import Input from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";

const schema = yup.object().shape({
  contact: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6, "Passwird must be at least 6 characters")
    .max(20)
    .required("Please enter a password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Please confirm password"),
});

const Contact = ({ setValidationTrigger, formData, setFormData }) => {
  const {
    register,
    trigger,
    setValue,
    // setValue allow you manually updat a fields value
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // to prefilled inputs with saved data in local storage

  useEffect(() => {
    Object.keys(formData).forEach((key) => {
      setValue(key, formData[key]);
    });
  }, [formData, setValue]);

  // update formData stae when input changes
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
      className=" w-full max-w-md mx-auto border-1/2 p-6 rounded-lg shadow-lg
         ">
      <form action="" className="w-full">
        <Input
          label="Contact"
          placeholder="+1234567890"
          type="tel"
          {...register("contact")}
          onChange={handleInputChange}
        />
        {errors.contact && (
          <p className="text-red-500 text-sm">{errors.contact.message}</p>
        )}
        <Input
          label="Email"
          placeholder="example@mail.com"
          type="email"
          {...register("email")}
          onChange={handleInputChange}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <Input
          label="Password"
          placeholder="password"
          type="password"
          {...register("password")}
          onChange={handleInputChange}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <Input
          label="Comfirm password"
          placeholder="confirm password"
          type="password"
          {...register("confirmPassword")}
          onChange={handleInputChange}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
