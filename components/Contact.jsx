const Input = ({ placeholder }) => {
  return (
    <input
      typ="text"
      placeholder={placeholder}
      className="w-[250px] md:w-[350px] lg:w-[450px] bg-black border-b-2 focus:outline-none focus:border-b-2 p-3 my-5"
    />
  );
};

export default function Contact() {
  return (
    <div className="my-20">
      <h1 className="text-center text-2xl font-semibold my-3">
        Connect with me
      </h1>
      <div className="bg-[#111319] p-10 flex flex-col rounded">
        <Input placeholder="Enter name.." />
        <Input placeholder="Enter email.." />
        <Input placeholder="Enter message.." />
        <button
          className={`bg-white text-black px-8 mt-5 py-[8px] rounded-lg hover:bg-black hover:text-white border hover:border-white`}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
