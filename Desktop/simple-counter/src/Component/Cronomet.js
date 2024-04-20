import React, { useEffect, useState } from "react";

function Cronomet(props) {
  const [contador, setContador] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setContador((prevContador) => {
        if (prevContador === 9) {
          return 0;
        } else {
          return prevContador + 1;
        }
      });
    }, props.multipl);

    return () => clearInterval(interval);
  }, []);

  return <div className="unidad" ><b>{contador}</b></div>;
}

export default Cronomet;