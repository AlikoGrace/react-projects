import Input from "../Input";

const Contact = () => {
  return (
    <div
      className=" w-full max-w-md mx-auto border-1/2 p-6 rounded-lg shadow-lg
         ">
      <form action="" className="w-full">
        <Input label="Contact" placeholder="+1234567890" type="tel" />
        <Input label="Email" placeholder="example@mail.com" type="email" />
      </form>
    </div>
  );
};

export default Contact;
