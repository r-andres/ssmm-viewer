import { SnapshotDiff } from "../types/models"

type Props = {
  diffs: SnapshotDiff
}

export default function DiffViewer({ diffs }: Props) {

  return (
    <div style={{ padding: 20, fontFamily: "monospace" }}>

      <h3>Snapshot Diff</h3>

      {diffs.map((d, i) => {

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
  )
}