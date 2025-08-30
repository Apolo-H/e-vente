"use client";

import React, { FormEvent } from "react";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  // Load Google API script
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const clientId = "673509704007-dd0g20lhvs22nfbmdof3m2kvsulaa6je.apps.googleusercontent.com";

  function handleGoogleLogin() {
    // @ts-ignore
    if (window.google && window.google.accounts && window.google.accounts.id) {
      // @ts-ignore
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: (response: any) => {
          console.log("ID Token: 673509704007-dd0g20lhvs22nfbmdof3m2kvsulaa6je.apps.googleusercontent.com", response.credential);
          // Aqui você pode enviar pro backend e validar o login
        },
      });
      // @ts-ignore
      window.google.accounts.id.prompt();
    } else {
      alert("Google API not loaded yet.");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleRegister(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // Implement registration logic here
    console.log("Registering:", form);
  }

  return (
    <div className="flex min-h-screen">
      {/* LEFT */}
      <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
        <button className="mb-6">
          <span className="text-4xl">⬅</span>
        </button>

        <h1 className="text-4xl font-bold text-center mb-6">
          Your adventure <br /> begins here!
        </h1>

        <button
          className="border rounded-full px-6 py-2 flex items-center justify-center gap-2 mb-4"
          onClick={handleGoogleLogin}
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="google"
            className="w-5 h-5"
          />
          Login com Google
        </button>

        <div className="flex items-center mb-4">
          <div className="flex-1 border-t" />
          <span className="px-2 text-sm text-gray-500">
            Or register with Email
          </span>
          <div className="flex-1 border-t" />
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="border rounded px-3 py-2"
            value={form.name}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
            className="border rounded px-3 py-2"
            value={form.email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="border rounded px-3 py-2"
            value={form.password}
          />
          <input
            type="password"
            name="confirm"
            placeholder="Confirm-password"
            onChange={handleChange}
            className="border rounded px-3 py-2"
            value={form.confirm}
          />

          <button
            type="submit"
            className="bg-[#244248] text-white rounded px-6 py-2 mt-4"
          >
            Register
          </button>
        </form>
      </div>

      {/* RIGHT */}
      <div className="w-1/2 bg-gradient-to-b from-[#244248] to-[#4d7a82] flex flex-col justify-center items-center p-10 text-white">
        <h2 className="text-6xl font-serif mb-2">Welcome</h2>
        <p className="text-lg mb-6">to the e-vent</p>
        <hr className="w-3/4 border-white mb-6" />
        <p className="max-w-md text-center text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className="flex gap-2 mt-6">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}

