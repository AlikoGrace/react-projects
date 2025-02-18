import Input from "../Input";

const Personal = ({ label, placeholder, type }) => {
  return (
    <div
      className=" w-full mx-auto max-w-md border-1/2 p-6 rounded-lg shadow-lg
     ">
      <form action="" className="w-full">
        <Input label="Full Name" placeholder="first name" type="text" />
        <Input label="Surname Name" placeholder="first name" type="text" />
        <Input label="Other Name" placeholder="first name" type="text" />
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
