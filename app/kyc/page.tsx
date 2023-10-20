"use client";
import React, { useState } from "react";
import { MetaMaskButton } from "@metamask/sdk-react-ui";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    address: "",
    idType: "",
    idNumber: "",
    walletAddress: "",
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitForm = (e: any) => {
    e.preventDefault();

    const formURL = e.target.action;
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    fetch(formURL+"?name="+formData.name + "&email=" + formData.email+"&country="+formData.country+"&phone="+formData.phone+"&address="+formData.address+"&idType="+formData.idType+"&idNumber="+formData.idNumber+"&walletAddress="+formData.walletAddress, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: "",
          email: "",
          country: "",
          phone: "",
          address: "",
          idType: "",
          idNumber: "",
          walletAddress: ""
        });

        setFormSuccess(true);
        setFormSuccessMessage(data.submission_text);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="flex flex-col bg-white rounded p-5 md:w-1/3 w-3/4 m-4">
        <p className="text-4xl mb-4">Complete Your KYC</p>
        {formSuccess ? (
          <div>{formSuccessMessage}</div>
        ) : (
          <form
            method="POST"
            action="https://immigration-cartoon-sunday-pamela.trycloudflare.com/kyc"
            onSubmit={submitForm}
            className="flex flex-col w-100"
          >
            {/* Input fields with proper handleInput and state structure */}
            <input
              className="mb-3 p-3 bg-purple-50 rounded border border-gray-300"
              type="text"
              name="name"
              onChange={handleInput}
              value={formData.name}
              placeholder="Name"
            />
            <input
              className="mb-3 p-3 bg-purple-50 rounded border border-gray-300"
              type="email"
              name="email"
              onChange={handleInput}
              value={formData.email}
              placeholder="Email"
            />
            <input
              className="mb-3 p-3 bg-purple-50 rounded border border-gray-300"
              type="text"
              name="country"
              onChange={handleInput}
              value={formData.country}
              placeholder="Country"
            />
            <input
              className="mb-3 p-3 bg-purple-50 rounded border border-gray-300"
              type="tel"
              name="phone"
              onChange={handleInput}
              value={formData.phone}
              placeholder="Phone Number"
            />
            <textarea
              className="mb-3 p-3 bg-purple-50 rounded border border-gray-300"
              name="address"
              onChange={handleInput}
              value={formData.address}
              placeholder="Address"
            />
            <input
              className="mb-3 p-3 bg-purple-50 rounded border border-gray-300"
              type="text"
              name="idType"
              onChange={handleInput}
              value={formData.idType}
              placeholder="ID Type"
            />
            <input
              className="mb-3 p-3 bg-purple-50 rounded border border-gray-300"
              type="number"
              name="idNumber"
              onChange={handleInput}
              value={formData.idNumber}
              placeholder="ID Number"
            />
            <input
              className="mb-3 p-3 bg-purple-50 rounded border border-gray-300"
              type="text"
              name="walletAddress"
              onChange={handleInput}
              value={formData.walletAddress}
              placeholder="Wallet Address"
            />
            
            {/* <MetaMaskButton theme={"light"} color="white"></MetaMaskButton> */}
            <button className="bg-pink-700 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded mt-5 md:w-1/3 w-1/2 self-center">
              Connect Here
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
