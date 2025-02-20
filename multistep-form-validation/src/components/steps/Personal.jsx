import { useState } from "react";
import Input from "../Input";

const Personal = ({ label, placeholder, type }) => {
  const [state, setState] = useState({
    firstName: "",
    surName: " ",
    otherName: "",
    gender: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
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
          value={state.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <Input
          label="Surname Name"
          placeholder="surname"
          type="text"
          name="surName"
          value={state.surName}
          onChange={handleChange}
        />
        <Input
          label="Other Name"
          placeholder="other names"
          type="text"
          name="otherName"
          value={state.otherName}
          onChange={handleChange}
        />
        <div className="mt-4 flex items-center justify-between w-full">
          <span className="font-medium">Gender</span>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              checked={state.gender == "Male"}
              className="form-radio"
            />
            <span>Male</span>
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              checked={state.gender == "Female"}
            />
            <span>Female</span>
          </label>
        </div>
      </form>
      {/* <p className="mt-4">
        Full Name: {state.firstName} {state.surName} {state.otherName}
        {state.gender}
      </p> */}
    </div>
  );
};

export default Personal;
