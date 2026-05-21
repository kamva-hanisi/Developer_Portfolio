import { useRef, useState } from "react";
import axios from "axios";

import { motion } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setErrorMessage("");

    try {
      await axios.post(`${API_URL}/api/contact`, {
        name: form.current.user_name.value.trim(),
        email: form.current.user_email.value.trim(),
        message: form.current.message.value.trim(),
      });

      setSuccess(true);

      form.current.reset();
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Failed to send message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Contact Me</h2>

          <p className="text-gray-400 mt-4 text-lg">
            Have a project or opportunity? Let's connect.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="
            bg-white/5
            backdrop-blur-lg
            border border-white/10
            rounded-3xl
            p-8
            space-y-6
          "
        >
          {/* Name */}
          <div>
            <label className="block mb-2 text-gray-300">Name</label>

            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="
                w-full
                bg-slate-800
                border border-slate-700
                rounded-2xl
                px-5
                py-4
                outline-none
                focus:border-cyan-400
                transition
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-gray-300">Email</label>

            <input
              type="email"
              name="user_email"
              required
              placeholder="you@example.com"
              className="
                w-full
                bg-slate-800
                border border-slate-700
                rounded-2xl
                px-5
                py-4
                outline-none
                focus:border-cyan-400
                transition
              "
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-gray-300">Message</label>

            <textarea
              name="message"
              rows="6"
              required
              placeholder="Write your message..."
              className="
                w-full
                bg-slate-800
                border border-slate-700
                rounded-2xl
                px-5
                py-4
                outline-none
                resize-none
                focus:border-cyan-400
                transition
              "
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-cyan-500
              hover:bg-cyan-600
              rounded-2xl
              py-4
              font-semibold
              transition
              disabled:opacity-50
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success */}
          {success && (
            <p className="text-green-400 text-center">
              Message sent successfully!
            </p>
          )}

          {errorMessage && (
            <p className="text-red-400 text-center">{errorMessage}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
