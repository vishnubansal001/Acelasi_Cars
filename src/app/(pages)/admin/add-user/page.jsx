"use client";

import React, { useState } from "react";
import axios from "axios";

function Page() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const userId = localStorage.getItem("token");
    const response = axios.post("/api/user", { ...data, userId });
    console.log(response);
    if (response.status === 200) {
      console.log("User Added Successfully");
    } else {
      console.log("Failed to add user");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg shadow-md md:w-3/5 mt-6 text-nowrap">
      <h1 className="w-full text-center text-xl font-oswald font-bold">
        Add Admin <span className="text-red-600">Access</span>{" "}
      </h1>
      <div className="flex flex-row w-full justify-center items-center">
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md p-1 w-full "
          placeholder="Name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row w-full justify-center items-center">
        <input
          type="email"
          className="border-2 border-gray-300 rounded-md p-1 w-full"
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row w-full justify-center items-center">
        <input
          type="password"
          className="border-2 border-gray-300 rounded-md p-1 w-full"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row w-full justify-center items-center gap-2">
        <p>Role : </p>
        <select
          name="role"
          value={data.role}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-md p-1 w-full"
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <div
        onClick={handleSubmit}
        className="px-3 py-2 rounded-md hover:bg-red-600 bg-red-500 w-fit text-white cursor-pointer"
      >
        Add Role
      </div>
    </div>
  );
}

export default Page;
