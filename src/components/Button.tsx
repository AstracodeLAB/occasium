import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-500 transition-all"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
