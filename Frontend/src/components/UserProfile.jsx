import { useState } from "react";
import MyAvatar from "./MyAvatar"; // Import your Avatar component

const UserProfile = () => {
  const [name, setName] = useState("John Doe"); // Example name

  const handleMessage = (name) => {
    console.log(`Sending message to ${name}`);
  };

  return (
    <div
      style={{
        width: 300,
        padding: 10,
        backgroundColor: "#333",
        borderRadius: 10,
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: 10 }}>
        <MyAvatar /> {/* Render the Avatar component */}
      </div>
      <div style={{ marginBottom: 10 }}>
        <h2>{name}</h2>
      </div>
      <div style={{ marginBottom: 10 }}>
        <button
          style={{
            backgroundColor: "purple",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: 5,
            cursor: "pointer",
          }}
          onClick={() => handleMessage(name)}
        >
          Message
        </button>
      </div>
      <div>
        {/* <p>{name}</p> */}
      </div>
    </div>
  );
};

export default UserProfile;
