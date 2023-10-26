import React, { useEffect, useState } from "react";

const ErrorService = () => {
  const [totalErrors, setTotalErrors] = useState(0);
  useEffect(() => {
    const eventListener = () => {
      setTotalErrors(totalErrors + 1);
    };
    document.addEventListener("error", eventListener);
    return () => document.removeEventListener("error", eventListener);
  }, [totalErrors]);
  return (
    <div className="errorService">
      Common Error Service{" "}
      {totalErrors && <p> Total {totalErrors} error received</p>}
    </div>
  );
};

export default ErrorService;
