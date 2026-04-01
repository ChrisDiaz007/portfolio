import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faTimeline } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="Contact flex justify-center p-15">
      <div className="body w-325 p-5 flex flex-col gap-15 items-center">
        <div className="flex items-center">
          <h1>Get in Touch</h1>
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
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
          <FontAwesomeIcon icon={faTimeline} size="3x" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
