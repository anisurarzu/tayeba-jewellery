import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://obscure-journey-77099.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          setMessage("Admin make successfully");
        }
        console.log(data);
      });
    e.preventDefault();
  };
  return (
    <div>
      <h1>Make an Admin</h1>
      <form onSubmit={handleAdminSubmit}>
        <input className="p-2 border-2" type="email" onBlur={handleOnBlur} />
        <button className="bg-black p-2 text-white" type="submit">
          Make Admin
        </button>
      </form>
      <span>{message}</span>
    </div>
  );
};

export default MakeAdmin;
