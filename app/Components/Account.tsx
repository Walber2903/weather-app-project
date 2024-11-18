import React from "react";

const LoginButton: React.FC = () => {
  return (
    <button
      className="flex items-center w-[292px] h-[62px] rounded-[40px] bg-green-500 text-white font-bold text-lg shadow-lg hover:bg-green-600 transition-all duration-200 px-4"
      aria-label="Login Button"
    >
      {/* Ícono de la persona */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6 mr-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 15.75a4.5 4.5 0 01-7.5 0M12 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
        />
      </svg>
      {/* Texto alineado a la izquierda */}
      Login
    </button>
  );
};

export default LoginButton;
