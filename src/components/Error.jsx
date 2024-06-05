import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Oops❗❗</h1>
      <span>{err.status}</span>: <span>{err.statusText}</span>
      <h1>{err.data}</h1>
      <h2 className="2xl font-semibold">Something went Wrong</h2>
    </div>
  );
};

export default Error;
