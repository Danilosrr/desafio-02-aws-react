import React, { createContext, ReactNode } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FaCheck } from "react-icons/fa";

interface ToastContextType {
  notify: (message: string, success: boolean) => void;
}

export const ToastContext = createContext<ToastContextType | null>(null);

interface ToastContextProps {
  children: ReactNode;
}

const ToastProvider: React.FC<ToastContextProps> = ({ children }) => {
  const notify = (message: string, success: boolean) => {
    console.log(message);
    if (success) toast.success(message,{icon: <FaCheck  color="#FF8100"/>});
    else toast.error(message);
  };

  return (
    <ToastContext.Provider
      value={{
        notify,
      }}
    >
      <ToastContainer progressStyle={{background: "#FF8100"}} position="bottom-right" autoClose={3000} />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
