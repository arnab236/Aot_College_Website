import React from "react";
import "../index.css"
import Footer from "./Footer";
import SecNav from "./SecNav";

function Contact() {
  return (
    <div className="container max-w-[600px] my-[50px] mx-auto p-5 bg-white rounded-xl shadow-xl border mb-[4.1%]">
      <h2 className=" text-center text-[#333] font-[Headline] text-2xl">Contact Us</h2>
      <form action="#" method="POST" className="contact-form flex flex-col font-[para]">
        <div className="form-group mb-5">
          <input type="text" name="name" placeholder="Your Name" required  className="w-full p-3 border border-solid border-[#ccc] rounded-md"/>
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Your Email" required  className="w-full p-3 border border-solid border-[#ccc] rounded-md"/>
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            required className="w-full p-3 border border-solid border-[#ccc] rounded-md h-[100px] my-3"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn w-full sm:p-3 bg-[#007bff] text-white border-none rounded-md transition-colors duration-300 ease-linear hover:bg-[#0056b3] p-2">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
