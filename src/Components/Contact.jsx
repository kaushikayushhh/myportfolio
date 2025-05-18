import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, Phone, MessageCircleMore } from 'lucide-react';
import { motion } from 'framer-motion';





const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  // const [result, setResult] = useState('');

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


const onSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("access_key", "c62357ef-3905-47a8-b66f-d2e7fd71d2a5");
  formData.append("name", form.name);
  formData.append("email", form.email);
  formData.append("message", form.message);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  } else {
    alert("Failed to send message. Please try again.");
  }
};

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto bg-zinc-800/60 backdrop-blur-md border border-zinc-700 p-10 rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-12">

        {/* Left Side */}
        <motion.div 
        initial={{x:20}}
        whileInView={{x:0}}
        transition={{duration:0.9}}

        className="flex-1">
          <h2 className="text-5xl font-bold mb-4 text-rose-500">Let's Connect</h2>
          <p className="text-zinc-400 text-lg max-w-lg mb-6">
            Got a project in mind or just want to say hi? I’d love to hear from you. Drop your message below!
          </p>

          {/* Contact Details */}
          <div className="text-sm text-zinc-500 mt-6 space-y-1">
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5  text-red-500" /> kaushik.ak8171@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5  text-red-500" /> +91 8273986787
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8 text-zinc-300">
            <a href="mailto:kaushik.ak8171@gmail.com" target="_blank" rel="noreferrer">
              <Mail className="w-5 h-5 sm:w-10 sm:h-10 hover:text-rose-500 transition" />
            </a>
            <a href="https://linkedin.com/in/ayush-kaushik-ba5516329" target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5 sm:w-10 sm:h-10 hover:text-blue-500 transition" />
            </a>
            <a href="https://www.instagram.com/kaushik.ayushh" target="_blank" rel="noreferrer">
              <Instagram className="w-5 h-5 sm:w-10 sm:h-10 hover:text-pink-500 transition" />
            </a>
            <a href="https://wa.me/918273986787" target="_blank" rel="noreferrer">
              <MessageCircleMore className="w-5 h-5 sm:w-10 sm:h-10 hover:text-green-500 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.form 
        initial={{y:100}}
        whileInView={{y:0}}
        transition={{duration:0.9}}
        onSubmit={onSubmit} className="flex-1 space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:ring-2 focus:ring-rose-500 outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:ring-2 focus:ring-rose-500 outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:ring-2 focus:ring-rose-500 outline-none transition-all"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-pink-600 hover:to-rose-600 transition-all px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg"
          >
            ✉️ Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
