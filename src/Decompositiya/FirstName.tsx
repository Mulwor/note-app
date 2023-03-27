import React from "react";
import { useForm } from "react-hook-form";

function FirstName() {
  return (
    <div className="item">
      <label className="labels">
        Secondname:
        <input type="text" id="surname" className="text secondname" required />
      </label>
    </div>
  );
}

export default FirstName;
