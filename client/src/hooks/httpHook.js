import { useState } from "react";
import history from "../history";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);

  const request = (url, method, test, next) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (test) {
        history.push(next);
      } else {
        history.push("/live_chat");
      }
    }, 1500);
  };

  return { request, loading };
};
