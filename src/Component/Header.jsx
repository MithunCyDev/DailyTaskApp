import React from "react";
import logo from "../../src/logo.png";
import Avatar from "react-avatar";
export const Header = () => {
  return (
    <section className="w-full h-full">
      <div className="bg-black h-24 w-full flex items-center justify-between px-20">
        <img src={logo} alt="logo" className="w-[200px] h-auto" />
        <Avatar name="Mithun" round={50} color="#0084ff" size="60" />
      </div>
    </section>
  );
};
