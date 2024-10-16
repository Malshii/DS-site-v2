// components/Modal.js
export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center">
        {/* Background Overlay */}
        <div
          className="fixed inset-0"
          onClick={onClose}  // Close the modal when clicking on the overlay
        />
  
        {/* Modal Container */}
        <div className="bg-white p-12 rounded-lg shadow-lg z-50 w-full max-w-5xl mx-4 relative">
          <button
            className="absolute top-4 right-4 text-gray-600 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  }
  