import React from 'react';
import './styles.css';



function StylePanel({ setStyles }) {
  const changeStyle = (feature, value) => {
    setStyles(prevStyles => ({
      ...prevStyles,
      [feature]: value,
    }));
  };

  return (
    <div>
      <div>
        <h2>Color</h2>
        <button className="button" onClick={() => changeStyle("FABRIC", "IVORY")}>Ivory Fabric</button>
        <button className="button" onClick={() => changeStyle("FABRIC", "SAND")}>Sand Fabric</button>
        <button className="button" onClick={() => changeStyle("FABRIC", "VELVET BLUE")}>Velvet Blue Fabric</button>
      </div>
      <div>
        <h2>Pillows</h2>
        <button className="button" onClick={() => changeStyle("PILLOWS", "OFF")}>No Pillows</button>
        <button className="button" onClick={() => changeStyle("PILLOWS", "CYLINDRICAL")}>Cylindrical Pillows</button>
        <button className="button" onClick={() => changeStyle("PILLOWS", "RECTANGLE")}>Rectangle Pillows</button>
      </div>
      <div>
        <h2>Legs</h2>
        <button className="button" onClick={() => changeStyle("LEGS", "Dark Brown")}>Dark Brown Legs</button>
        <button className="button" onClick={() => changeStyle("LEGS", "METAL LEG SILVER")}>Metal Leg Silver</button>
      </div>
    </div>
  );
}

export default StylePanel;
