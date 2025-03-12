import React, { useRef, useState } from "react";
import CustomHook from "./CustomHook";

const Contacts = () => {
  const [listContacts] = useState([
    {
      title: "GYM, SWIMMING, MUSIC",
      value:
        "I'm passionate about fitness and swimming, always striving to improve my physique through consistency and disipline, values that I started bringing to my coding journey. Music is my focus and relaxation, whether I'm working on projects or unwinding after a workout.",
    },
    {
      title: "",
      value: "",
    },
  ]);
  const refTab = useRef();
  const divs = useRef([]);
  CustomHook(refTab, divs);
  return (
    <section className="contacts" ref={refTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Hobbies
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* Short hoobie description */}
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div key={key} className="item">
            <h3>{value.title}</h3>
            <div>{value.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
