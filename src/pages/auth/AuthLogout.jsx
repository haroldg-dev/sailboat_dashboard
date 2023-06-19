import { useCallback } from "react";
import { authStorageManager } from "../utils";

const AuthLogout = ({ children }) => {
  const onLogout = useCallback(() => {
    authStorageManager.clear();
    window.location.reload();
  }, []);

  return children({ onLogout });
};

export default AuthLogout;
