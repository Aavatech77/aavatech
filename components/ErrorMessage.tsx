import React from "react";

const ErrorMessage = ({ msg }: { msg: string | undefined }) => {
  if (!msg) return null;
  return <p className="text-sm text-red-500">{msg}</p>;
};

export default ErrorMessage;
