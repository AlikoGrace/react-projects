import Input from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";

const schema = yup.object().shape({
  contact: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(20).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});

const Contact = ({ setValidationTrigger }) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
        />
        {errors.contact && (
          <p className="text-red-500 text-sm">{errors.contact.message}</p>
        )}
        <Input
          label="Email"
          placeholder="example@mail.com"
          type="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <Input
          label="Password"
          placeholder="password"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <Input
          label="Comfirm password"
          placeholder="confirm password"
          type="password"
          {...register("confirmPassword")}
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
