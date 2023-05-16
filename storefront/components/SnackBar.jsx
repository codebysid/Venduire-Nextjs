import { useEffect } from "react";

const SnackBar = ({ msg, setMsg, error }) => {
  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, 3000);
  }, []);
  return (
    <>
      {msg && (
        <p className={`p-2 rounded ${error ? "bg-red-500" : "bg-green-500"}`}>
          {msg}
        </p>
      )}
    </>
  );
};

export default SnackBar;
