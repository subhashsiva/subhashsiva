"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (name.trim() === "") {
      setError("Name cannot be empty");
      return;
    }
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      setError("Phone number must be 10 digits");
      return;
    }
    if (!email.includes("@")) {
      setError("Email must contain '@'");
      return;
    }

    // Clear error and show success message
    setError("");
    alert("Form submitted successfully ✅");

    // Reset all fields
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="w-screen h-screen bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-48 pt-28 place-items-center">
        {/* Contact Info */}
        <div className="bg-black w-[400px] h-[300px] p-5 rounded-2xl shadow-lg">
          <p className="text-5xl font-sans flex items-center text-white">
            Contact
          </p>
          <div className="mt-15 text-white">
            <p className="text-xl">Email: subhashsiva368@gmail.com</p>
            <p className="text-xl">Phone: 8122932284</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-black w-[400px] h-[350px] p-6 rounded-2xl shadow-lg">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-black"
          >
            <p className="text-white">Name :</p>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 rounded bg-white"
            />
            <p className="text-white">Phone number :</p>
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2 rounded bg-white"
            />
            <p className="text-white">Email :</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded bg-white"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="bg-white text-black p-2 rounded hover:bg-green-600 font-bold mt-10"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
