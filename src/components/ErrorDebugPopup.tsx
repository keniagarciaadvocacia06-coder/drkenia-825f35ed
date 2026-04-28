import { useEffect, useState } from "react";

interface CapturedError {
  timestamp: number;
  message: string;
  stack?: string;
  source?: string;
}

const DEBUG_TOGGLE_KEY = "t";

const ErrorDebugPopup = () => {
  const [visible, setVisible] = useState(false);
  const [errors, setErrors] = useState<CapturedError[]>([]);

  useEffect(() => {
    const onError = (e: ErrorEvent) => {
      setErrors((prev) => [
        ...prev,
        {
          timestamp: Date.now(),
          message: e.message,
          stack: e.error?.stack,
          source: `${e.filename}:${e.lineno}:${e.colno}`,
        },
      ]);
    };
    const onRejection = (e: PromiseRejectionEvent) => {
      setErrors((prev) => [
        ...prev,
        {
          timestamp: Date.now(),
          message: String(e.reason?.message ?? e.reason),
          stack: e.reason?.stack,
        },
      ]);
    };
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (!e.ctrlKey && !e.metaKey && !e.altKey && e.key.toLowerCase() === DEBUG_TOGGLE_KEY) {
        setVisible((v) => !v);
      }
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 9999,
        width: 380,
        maxHeight: "60vh",
        overflow: "auto",
        background: "rgba(0,0,0,0.9)",
        color: "#fff",
        border: "1px solid #444",
        borderRadius: 8,
        padding: 12,
        fontSize: 12,
        fontFamily: "monospace",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <strong>Debug ({errors.length})</strong>
        <button onClick={() => setErrors([])} style={{ color: "#fff", background: "transparent", border: "1px solid #666", padding: "2px 6px", cursor: "pointer" }}>
          Clear
        </button>
      </div>
      <div style={{ marginBottom: 8, opacity: 0.7 }}>Tecla "T" para abrir/fechar</div>
      {errors.length === 0 ? (
        <div style={{ opacity: 0.6 }}>Nenhum erro capturado.</div>
      ) : (
        errors.map((err, i) => (
          <div key={i} style={{ borderTop: "1px solid #333", paddingTop: 6, marginTop: 6 }}>
            <div style={{ color: "#ff6b6b" }}>{err.message}</div>
            {err.source && <div style={{ opacity: 0.7 }}>{err.source}</div>}
            {err.stack && <pre style={{ whiteSpace: "pre-wrap", opacity: 0.7 }}>{err.stack}</pre>}
          </div>
        ))
      )}
    </div>
  );
};

export default ErrorDebugPopup;
