import React from "react";

export default function Header() {
  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-half">
        <h1 style={headerStyle}>TODO LIST</h1>
      </div>
    </div>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};
