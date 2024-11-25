"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import FloatingLabelInput from "@/components/ui/floating-label-input";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const createMailToLink = () => {
    const sub = encodeURIComponent(subject);
    const body = encodeURIComponent(message);
    return `mailto:info@aavatechnepal.com?subject=${sub}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !subject || !message) {
      return;
    }
    window.open(createMailToLink(), "_blank");
  };

  return (
    <div className="container border border-[#B7B1B1] rounded-xl p-4 my-8 md:my-12">
      <h2 className="text-center underline underline-offset-4 decoration-highlight text-xl font-semibold mb-8">
        Get In <span className="text-highlight">Touch</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="font-medium text-lg">Leave us a message</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FloatingLabelInput label="Name">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FloatingLabelInput>
            {/* <FloatingLabelInput label="Email">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FloatingLabelInput> */}
            <FloatingLabelInput label="Subject">
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </FloatingLabelInput>
            <FloatingLabelInput label="Message">
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </FloatingLabelInput>
            <Button type="submit" className="w-full">
              Send
            </Button>
          </form>
        </div>
        <div className="rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d606.6418760817661!2d85.32900449976397!3d27.709849517637785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc02600de97a373d%3A0xad90f5cecbb03451!2sAava%20Tech%20Nepal!5e0!3m2!1sen!2snp!4v1731986429683!5m2!1sen!2snp"
            width="800"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
