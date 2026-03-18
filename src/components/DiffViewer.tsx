import { SnapshotDiff } from "../types/models"

type Props = {
  comparison: SnapshotDiff
}

export default function DiffViewer({ comparison }: Props) {

  return (
    <div style={{
      fontFamily: "arial"}}>
    <p>From: {comparison.originalTimestamp} <br></br>
      To: {comparison.newTimestamp}</p>
    <div style={{ 
      height: 400,
      overflowY: "auto",        // only vertical scroll
      padding: 15,
      fontFamily: "monospace"

     }}>
      {comparison.diffs.map((d, i) => {

        const color =
          d.type === "added" ? "#4CAF50" :
            d.type === "deleted" ? "#F44336" :
              "#FFC107"

        const symbol =
          d.type === "added" ? "+" :
            d.type === "deleted" ? "-" :
              "~"

        return (
          <div key={i} style={{ color }}>

            {symbol} {d.directory_id}/{d.file_id}

            {d.type === "modified" && (
              <span> {d.oldSize} → {d.newSize}</span>
            )}

          </div>
        )
      })}

    </div>
    </div>
  )
}