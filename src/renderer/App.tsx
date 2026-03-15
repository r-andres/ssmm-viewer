import React, { useState } from "react";
import DirectoryTree from "../components/DirectoryTree";
import SnapshotTimeline from "../components/SnapshotTimeline";
import { Snapshot, SnapshotDiff } from "../types/models";
import { getMockFilesystem, getMockSnapshots } from "../api/mock";
import AppLayout from "../layout/AppLayout";
import { diffSnapshots } from "../utils/diff"
import DiffViewer from "../components/DiffViewer";


export default function App() {
  const mockSnapshots: Snapshot[] = getMockSnapshots();
  const [currentSnapshot, setCurrentSnapshot] = useState<string | null>(mockSnapshots[0].timestamp);
  const [diffs, setDiffs] = useState<SnapshotDiff>([])
  function handleSnapshotSelect(timestamp: string) {

    const fileStatusSnapshots = mockSnapshots.filter(s => s.event === "file_status");

    const index = fileStatusSnapshots.indexOf(fileStatusSnapshots.find(s => s.timestamp === timestamp)!)

    if (index > 0) {
      const oldFs = getMockFilesystem(fileStatusSnapshots[index - 1].timestamp)
      const newFs = getMockFilesystem(timestamp)
      const newDiff = diffSnapshots(oldFs, newFs)
      setDiffs(newDiff)
    } else {
      setDiffs([])
    }

    setCurrentSnapshot(timestamp)
  }

  return (
    <AppLayout

      timeline={
        <SnapshotTimeline
           snapshots={mockSnapshots}
          currentSnapshot={currentSnapshot}
          onSelect={(snap) => handleSnapshotSelect(snap.timestamp)}
        />
      }

      sidebar={
       <DiffViewer diffs={diffs} />
      }

      content={
       <DirectoryTree currentSnapshot={currentSnapshot} />
      }

    />
  ) 
}