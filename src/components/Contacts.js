import Swal from "sweetalert2";
import CustomHook from "./CustomHook";
import { useRef } from "react";

function Contacts() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c3b1ae84-8451-4e9f-bb60-924c0043fef7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Message send successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="contacts" ref={scrollTab}>
      <div className="contact-title">
        <h1>Contact me by Email</h1>
      </div>
      <div className="form-selection">
        <form onSubmit={onSubmit} className="Contact-form">
          Name: <input type="text" name="name" className="form-input" />
          Email Address:{" "}
          <input type="email" name="email" className="form-input" />
          Your Message:{" "}
          <textarea name="message" className="form-input" rows={6}></textarea>
          <button type="submit" className="form-Submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contacts;
