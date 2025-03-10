import React, { useRef, useState } from "react";
import CustomHook from "./CustomHook";

const Contacts = () => {
  const [listContacts] = useState([
    {
      title: "Phone Number",
      value: "+17777777777",
    },
    {
      title: "Email",
      value: "Christopher.a.Diaz007@gmail.com",
    },
  ]);
  const refTab = useRef();
  const divs = useRef([]);
  CustomHook(refTab, divs);
  return (
    <section className="contacts" ref={refTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        123456789
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
