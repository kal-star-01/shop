import { createPortal } from 'react-dom';

// Rendered through a portal to <body> so `position:fixed` escapes transformed
// swiper / owl-carousel ancestors.
export default function Modal({ show, onClose, centered = true, className = '', children }) {
  if (!show) return null;
  return createPortal(
    <div className={`modal fade show d-block ${className}`.trim()} role="dialog" tabIndex="-1" aria-modal="true">
      <div className={`modal-dialog ${centered ? 'modal-dialog-centered' : ''}`} role="document">
        <div className="modal-content" style={{ display: 'block' }}>
          <button type="button" className="close" aria-label="Close" onClick={onClose} style={{ position: 'absolute', right: '1rem', top: '1rem', border: 'none', background: 'transparent', fontSize: '1.6rem', zIndex: 5 }}>
            <span aria-hidden="true">×</span>
          </button>
          <div className="modal-body" style={{ padding: '1.5rem' }}>
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
