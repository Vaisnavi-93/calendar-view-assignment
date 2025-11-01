import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-white p-4 rounded-md shadow-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-sm">✕</button>
        {children}
      </div>
    </div>
  );
};
