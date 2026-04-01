import { useState } from "react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const data = await res.json();

      if (data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Message sent successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        event.target.reset();
        setResult("");
      } else {
        setResult("Error sending message");
      }
    } catch (err) {
      setResult("Network error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="border p-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="border p-2 rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition"
      >
        Send
      </button>
      <span className="text-sm text-white">{result}</span>
    </form>
  );
}
