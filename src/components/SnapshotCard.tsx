import { Snapshot } from "../types/models";
import { styles } from "./styles";

interface Props {
  snapshot: Snapshot | null;
  onClick: () => void;
}


export default function SnapshotCard({ snapshot, onClick }: Props) {
  const cardStyle = {
    cursor: "pointer",
    border: "1px solid #ddd",
    borderRadius: "12px",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    opacity: 1,
    fontFamily: "arial"
  }

  if (!snapshot) {
    return null;
  }

  return (
    <div style={cardStyle} onClick={onClick} >
      <p>{snapshot.event}</p>
      <small>{snapshot.timestamp}</small>
      <p></p>
    </div>
  );
}
