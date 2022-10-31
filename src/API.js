import React, { useEffect, useState, useRef } from 'react';
import { NotFound } from './Pages/NotFound';

export default function API({ children }) {
  const [val, setVal] = useState(null);
  const fnRef = useRef(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:5000');

    socket.onopen = () => {
      console.log('Connection Opened');
    };

    socket.onclose = () => {
      console.log('Connection Closed');
    };

    socket.onmessage = (event) => {
      console.log('Recieved message: ', event.data);
      let tmp = JSON.parse(event.data);

      setVal((prevVal) => {
        return {
          ...prevVal,
          [tmp.id]: tmp,
        };
      });
    };

    const updateSensorConnection = (data) => {
      console.log('Command sent ---> ', data);
      socket.send(data);
    };

    fnRef.current = updateSensorConnection;

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      {val ? (
        React.cloneElement(children, {
          sensorValue: val,
          updateConnection: fnRef.current,
        })
      ) : (
        <NotFound />
      )}
    </div>
  );
}
