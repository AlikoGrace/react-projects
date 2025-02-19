import { useState } from "react";
import Input from "../Input";

const Personal = ({ label, placeholder, type }) => {
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [otherName, setOtherName] = useState("");
  return (
    <div
      className=" w-full mx-auto max-w-md border-1/2 p-6 rounded-lg shadow-lg
     ">
      <form action="" className="w-full">
        <Input
          label="Full Name"
          placeholder="first name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e)}
        />
        <Input
          label="Surname Name"
          placeholder="first name"
          type="text"
          value={surName}
          onChange={(e) => setSurName(e.target.value)}
        />
        <Input
          label="Other Name"
          placeholder="first name"
          type="text"
          value={otherName}
          onChange={(e) => setOtherName(e.target.value)}
        />
        <div className="mt-4 flex items-center justify-between w-full">
          <span className="font-medium">Gender</span>
          <label>
            <input type="radio" name="gender" className="form-radio" />
            <span>Male</span>
          </label>
          <label>
            <input type="radio" name="gender" />
            <span>Female</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Personal;
