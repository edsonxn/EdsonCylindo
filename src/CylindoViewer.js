import React, { useRef, useLayoutEffect } from 'react';
import './styles.css';



function CylindoViewer({ styles }) {
  const viewer = useRef(null);

  useLayoutEffect(() => {
    if (viewer.current) {
      viewer.current.features = styles;
    }
  }, [styles]);

  return (
    <cylindo-viewer
      ref={viewer}
      customer-id="5098"
      code="CONFIGURABLE-SECTIONAL-PDP"
    />
  );
}

export default CylindoViewer;
