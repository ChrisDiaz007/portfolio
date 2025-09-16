import Swal from "sweetalert2";

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

  return (
    <section className="Contacts">
      <form onSubmit={onSubmit} className="Contact-form">
        Name: <input type="text" name="name" />
        Email Address: <input type="email" name="email" />
        Your Message: <textarea name="message" rows={6}></textarea>
        <button type="submit">Submit Form</button>
      </form>
    </section>
  );
}
export default Contacts;
