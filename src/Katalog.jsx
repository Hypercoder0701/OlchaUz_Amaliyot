import React from "react";

export default function Katalog() {
  return (
    <button className="katalog">
      <header>
        <input type="checkbox" id="menyAvPaa" defaultChecked="false" />
        <label id="burger" for="menyAvPaa">
          <div></div>
          <div></div>
          <div></div>
        </label>
        <span>Katalog</span>
        <nav id="meny"></nav>
      </header>
    </button>
  );
}
