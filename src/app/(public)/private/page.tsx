"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React, { FormEvent } from "react";
import { useState } from "react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Componente para a seta de navegação personalizada
const BackButton = ({ direction }) => (
  <button className="flex items-center justify-center 
                     w-12 h-12 rounded-lg bg-[#2D3C40] text-white
                     transform transition-transform duration-100 ease-in-out
                     hover:scale-105 active:scale-95
                     focus:outline-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 ${direction === 'prev' ? '' : 'rotate-180'}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  // Load Google API script and fonts
  React.useEffect(() => {
    // Load Google GSI client for login
    const gsiScript = document.createElement("script");
    gsiScript.src = "https://accounts.google.com/gsi/client";
    gsiScript.async = true;
    gsiScript.defer = true;
    document.body.appendChild(gsiScript);

    // Load Clicker Script font from Google Fonts
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    return () => {
      document.body.removeChild(gsiScript);
      document.head.removeChild(fontLink);
    };
  }, []);

  const clientId = "673509704007-dd0g20lhvs22nfbmdof3m2kvsulaa6je.apps.googleusercontent.com";

  function handleGoogleLogin() {
    // @ts-ignore
    if (window.google && window.google.accounts && window.google.accounts.id) {
      // @ts-ignore
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: (response) => {
          console.log("ID Token:", response.credential);
          // Aqui você pode enviar pro backend e validar o login
        },
      });
      // @ts-ignore
      window.google.accounts.id.prompt();
    } else {
      console.log("Google API not loaded yet.");
    }
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleRegister(event) {
    event.preventDefault();
    // Implement registration logic here
    console.log("Registering:", form);
  }

  function handleBackToMainPage() {
    window.location.href = "/";
  }

  const carouselTexts = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "Segundo texto do carrossel. Você pode colocar aqui depoimentos, frases de destaque ou qualquer outro tipo de conteúdo.",
    "Terceiro texto. O Swiper.js facilita a criação de carrosséis responsivos e com diversas opções de navegação."
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* LEFT */}
      <div className="w-full md:w-1/2 bg-white p-10 flex flex-col justify-center relative">
        <button 
          className="absolute top-4 left-4 cursor-pointer transform transition-transform duration-100 ease-in-out hover:scale-105 active:scale-95 flex items-center justify-center w-12 h-12 rounded-lg bg-[#2D3C40] text-white"
          onClick={handleBackToMainPage}
        >
          <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>

        <h1 className="text-4xl font-bold text-center mb-6 ">
          Your adventure <br /> begins here!
        </h1>

        <button
          className="border rounded-full px-6 py-2 flex items-center justify-center gap-2 mb-4 cursor-pointer active:scale-95 transition-transform duration-100 ease-in-out"
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
            className="border rounded px-3 py-2 rounded-md shadow-[3px_5px___#000000]"
            value={form.name}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
            className="border rounded px-3 py-2 rounded-md shadow-[3px_5px___#000000]"
            value={form.email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="border rounded px-3 py-2 rounded-md shadow-[3px_5px___#000000]"
            value={form.password}
          />
          <input
            type="password"
            name="confirm"
            placeholder="Confirm-password"
            onChange={handleChange}
            className="border rounded px-3 py-2 rounded-md shadow-[3px_5px___#000000]"
            value={form.confirm}
          />

          <button
            type="submit"
            className="bg-[#244248] text-white rounded px-6 py-2 mt-4 cursor-pointer active:scale-95 transition-transform duration-100 ease-in-out"
          >
            Register
          </button>
        </form>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/2 bg-gradient-to-b from-[#244248] to-[#4d7a82] flex flex-col justify-center items-center p-10 text-white relative">
        <h2 className="text-6xl font-clicker mb-2 text-center">
          Welcome
        </h2>
        <p className="text-lg mb-6 text-center">to the e-vent</p>
        <hr className="w-3/4 border-white mb-6" />
        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ 
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} w-2 h-2 mx-1 bg-gray-400 rounded-full transition-colors duration-200 cursor-pointer"></span>`;
              }
            }}
          >
            {carouselTexts.map((text, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-center items-center pb-10">
                  <p className="max-w-md text-center text-sm">
                    {text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-button-prev-custom absolute z-10 left-4 top-1/2 -translate-y-1/2 cursor-pointer">
          <BackButton direction="prev" />
        </div>
        <div className="swiper-button-next-custom absolute z-10 right-4 top-1/2 -translate-y-1/2">
          <BackButton direction="next" />
        </div>
      </div>
    </div>
  );
}
