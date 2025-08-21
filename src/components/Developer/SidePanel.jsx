import React, { useEffect, useState } from "react";
import "./Developer.css";

// prettier-ignore
const SidePanel = ({ item, onClose }) => {
  const [open, setOpen] = useState(false);

  // open/close + Esc handler
  useEffect(() => {
    setOpen(!!item);

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="sp-overlay" onClick={onClose}>
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        className={`sp-panel ${open ? "sp-panel--open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sp-header">
          <h2 className="sp-title">{item.title}</h2>
          <button className="sp-close" onClick={onClose}>Close</button>
        </div>

        {item.description && <p className="sp-description">{item.description}</p>}

        {item.links?.length > 0 && (
          <>
            <h3 className="sp-subtitle">Links</h3>
            <ul className="sp-links">
              {item.links.map((l) => (
                <li key={l.href} className="sp-linkItem">
                  <a href={l.href} target="_blank" rel="noreferrer" className="sp-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </aside>
    </div>
  );
};

export default SidePanel;
