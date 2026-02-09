import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    last_name: "",
    first_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSubmitted(false);

    emailjs
      .sendForm("service_39wgkv7", "template_kt55sya", form.current, {
        publicKey: "I09vqa_60VGsdPEM4",
      })
      .then(() => {
        console.log("SUCCESS!");
        setLoading(false);
        setSubmitted(true);
        setFormData({
          last_name: "",
          first_name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("FAILED...", error.text || error.message);
        setLoading(false);
        setError(true);
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => {
          setError(false);
        }, 7000);
      });
  };

  return (
    <section id="contact" className="py-24 bg-[var(--color-background)]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-[var(--color-text)]">
          Contact <span className="text-[var(--color-primary)]">Me</span>
        </h2>
        <p className="text-center text-[var(--color-muted)] mb-14">
          Have a project, an idea, or a question? Feel free to reach out.
        </p>
        {submitted ? (
          <div className="max-w-xl mx-auto bg-[var(--color-surface)] border border-gray-200 p-8 rounded-xl shadow text-center">
            <div className="text-3xl mb-4 flex items-center justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                className="md:w-15 md:h-15 md:p-2 w-12 h-12 p-1 bg-green-500 text-[var(--color-surface)] rounded-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
              Message sent successfully
            </h3>
            <p className="text-[var(--color-muted)]">
              Thank you for your message! A confirmation email has been sent to
              you. I’ll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form
            ref={form}
            onSubmit={sendEmail}
            className="max-w-xl mx-auto bg-[var(--color-surface)] p-8 rounded-xl shadow-lg space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                value={formData.last_name}
                onChange={handleChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <input
                type="text"
                name="first_name"
                placeholder="First name"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <button
              type="submit"
              className="relative w-full bg-[var(--color-primary)] text-[var(--color-surface)] py-3 rounded-lg font-medium hover:bg-[var(--color-primary-dark)] transition-all duration-300 flex items-center justify-center gap-4 md:gap-6 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-6 h-6 md:w-7 md:h-7"
              >
                <g transform="rotate(-45 12 12)">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </g>
              </svg>
              <p>Send message</p>
              {loading && (
                <div className="absolute top-3 right-3 w-3 h-3 bg-[var(--color-background)] rounded-full animate-ping"></div>
              )}
            </button>
            {error && (
              <div className="text-red-500 text-sm text-center">
                Failed to send your message. Please try again or check your
                network.
              </div>
            )}
          </form>
        )}
      </div>
    </section>
  );
};
export default Contact;
