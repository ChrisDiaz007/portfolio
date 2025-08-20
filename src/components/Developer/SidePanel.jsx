import React, { useEffect, useState } from "react";

// prettier-ignore
const SidePanel = ({ item, onClose }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (item) {
      setOpen(true);
    } else {
      setOpen(false);
    }

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        zIndex: 100,
      }}
    >
      <aside
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 360,
          height: "100vh",
          background: "#ffffff",
          borderLeft: "1px solid #e5e7eb",
          boxShadow: "0 0 20px rgba(0,0,0,0.08)",
          padding: 20,
          overflowY: "auto",
          zIndex: 101,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 220ms ease",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 20 }}>{item.title}</h2>
          <button
            onClick={onClose}
            style={{
              fontSize: 14,
              border: "1px solid #ddd",
              padding: "4px 8px",
              borderRadius: 6,
              background: "#fff",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>

        {item.description && (
          <p style={{ lineHeight: 1.5 }}>{item.description}</p>
        )}

        {item.links?.length > 0 && (
          <>
            <h3 style={{ fontSize: 16, marginTop: 20 }}>Links</h3>
            <ul style={{ paddingLeft: 18 }}>
              {item.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noreferrer">
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
