import { DirectoryInfo } from "../types/models";
import { styles } from "./styles";

interface Props {
  directory: DirectoryInfo;
  onClick: () => void;
}

export default function DirectoryCard({ directory, onClick }: Props) {
  return (
    <div style={(directory.state === "DISABLED") ? styles.card_disabled : styles.card} onClick={onClick} >
      <h2>{directory.directory_id}</h2>
      <p>{directory.rf_band} ({directory.priority})</p>
    </div>
  );
}
