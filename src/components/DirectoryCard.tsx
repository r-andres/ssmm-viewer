import { DirectoryInfo } from "../types/models";
import { styles } from "./styles";

interface Props {
  directory: DirectoryInfo;
  onClick: () => void;
}




export default function DirectoryCard({ directory, onClick }: Props) {
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
    opacity: 1
  }

  cardStyle["opacity"] = (directory.state === "DISABLED") ? 0.5 : 1
  cardStyle["background"] = (directory.rf_band === "x") ? "#ff00006c" : "#318fc58e"


  return (
    <div style={cardStyle} onClick={onClick} >
      <p>{directory.directory_id}</p>
      <p>({directory.priority})</p>
    </div>
  );
}
