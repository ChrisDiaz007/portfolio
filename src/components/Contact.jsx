import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faTimeline } from "@fortawesome/free-solid-svg-icons";
import Modal from "./modal/Modal";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="contact" className="Contact flex justify-center p-15">
      <div className="body w-full max-w-[1300px] p-5 flex flex-col gap-15 items-center">
        <div className="flex items-center">
          <h1 className="font-bold">Get in Touch</h1>
        </div>
        <div>
          <p>
            Feel free to reach out if you'd like to connect or just have a chat
            — I'd love to hear from you! You can find me via below contacts.
          </p>
        </div>
        <div className="flex gap-5">
          <a
            href="https://github.com/ChrisDiaz007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="3x"
              className="text-white hover:text-purple-300 cursor-pointer"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/christopher-diaz007/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="3x"
              className="text-white hover:text-purple-300 cursor-pointer"
            />
          </a>
          {/* Open modal on click */}
          <FontAwesomeIcon
            icon={faEnvelope}
            size="3x"
            className="text-white hover:text-purple-300 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <FontAwesomeIcon icon={faTimeline} size="3x" />
        </div>

        {/* Modal */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="text-xl font-bold text-white mb-4">Contact Me</h2>
          <ContactForm />
        </Modal>
      </div>
    </section>
  );
};

export default Contact;
