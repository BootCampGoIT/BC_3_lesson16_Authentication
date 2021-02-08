import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const token = useSelector((state) => state.auth.idToken);
  const localId = useSelector((state) => state.auth.localId);

  const sendRequest = () => {
    // axios.defaults.headers.common["Authorization"] = token;
    // axios.post(`${process.env.REACT_APP_BASE_URL}/users.json?auth=${token}`, {
    //   data: "hello",
    // });
    axios.post(
      `${process.env.REACT_APP_BASE_URL}/history/${localId}.json?auth=${token}`,
      {
        data: "11111111111111",
      }
    );
  };

  const getRequest = () => {
    axios.get(
      `${process.env.REACT_APP_BASE_URL}/history/${localId}.json?auth=${token}`
    );
  };
  return (
    <div>
      <button onClick={sendRequest}>Send</button>
      <button onClick={getRequest}>Get</button>
    </div>
  );
};

export default Test;
