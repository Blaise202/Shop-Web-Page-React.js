import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendData() {
    alert("Data sent successfully");
  }

  return (
    <>
      <h2>Contact Us Below</h2>
      <div className="block">
        <div>
          <input
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name..."
          />
        </div>
        <div>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="name"
            placeholder="Email..."
          />
        </div>
        <div>
          <textarea
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            placeholder="Question/Message"
          ></textarea>
        </div>
        <div>
          <button onClick={() => sendData()}>Submit</button>
        </div>
      </div>
    </>
  );
}
