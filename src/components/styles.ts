export const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
    gap: "16px",
    padding: "5px",
    fontSize: "10px",
    fontFamily: "monospace"
  } as const,

  card: {
    cursor: "pointer",
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "8px",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  } as const,

  card_disabled: {
    cursor: "not-allowed",
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "8px",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    opacity: 0.3
  } as const,

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } as const,

  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    width: "400px",
    maxWidth: "90%"
  } as const,

  button: {
    marginTop: "12px",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer"
  } as const
};