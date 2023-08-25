import React, { useState } from 'react';
import CylindoViewer from './CylindoViewer';
import StylePanel from './StylePanel';

function App() {
  const [styles, setStyles] = useState({
    FABRIC: "IVORY",
    PILLOWS: "OFF",
    LEGS: "Dark Brown",
  });

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <CylindoViewer styles={styles} />
      </div>
      <div style={{ flex: 1 }}>
        <StylePanel setStyles={setStyles} />
      </div>
    </div>
  );
}

export default App;
