import { useContext } from "react";
import { ToastContext } from "../Contexts/ToastContext";

function useToastContext() {
  const context = useContext(ToastContext);
  if (context === null) {
    throw new Error(
      "useToastContext deve ser usado dentro de um ToastProvider"
    );
  }
  return context;
}

export default useToastContext;
