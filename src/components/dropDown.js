import React, { useState } from "react";


 export default function ObjectPropertiesDropdown({myObject}) {
  const [selectedKey, setSelectedKey] = useState("");

  const handleChange = (e) => {
    setSelectedKey(e.target.value);
  };

  return (
    <div>
      <label>
        Select a property:
        <select value={selectedKey} onChange={handleChange}>
          <option value="">-- Select a property --</option>
          {Object.keys(myObject).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </label>

      {selectedKey && (
        <div style={{ marginTop: "10px" }}>
          <strong>Value:</strong> {myObject[selectedKey].toString()}
        </div>
      )}
    </div>
  );
}

