import React from 'react';
import './base.css';

export type PopupDialogProps = {
  isOpen: boolean;
  onClose: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const PopupDialog: React.FC<PopupDialogProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default PopupDialog;