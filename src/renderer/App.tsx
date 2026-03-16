import React, { useEffect, useState } from "react";
import DirectoryTree from "../components/DirectoryTree";
import SnapshotTimeline from "../components/SnapshotTimeline";
import { Snapshot, SnapshotDiff, FileSystem } from "../types/models";
import { getMockFilesystem, getMockSnapshots } from "../api/mock";
import { getFilesystem, getSnapshots} from "../api/client";
import AppLayout from "../layout/AppLayout";
import { diffSnapshots } from "../utils/diff"
import DiffViewer from "../components/DiffViewer";


export default function App() {
  
  const mockSnapshots: Snapshot[] = getMockSnapshots();
  const [currentSnapshot, setCurrentSnapshot] = useState<string | null>(null);
  const [currentFS, setCurrentFilesystem] = useState<FileSystem | null>(null);
  const [diffs, setDiffs] = useState<SnapshotDiff>([])
  const [snapshots, setSnapshots] = useState<Snapshot[]>([])
  
  useEffect(() => {

    async function loadSnapshots() {

      const data = await getSnapshots()

      setSnapshots(data)
      setCurrentSnapshot(data[0].timestamp)

    }

    loadSnapshots()

  }, [])


  async function handleSnapshotSelect(timestamp: string) {

    const fileStatusSnapshots = snapshots.filter(s => s.event === "FileStatus");

    const index = fileStatusSnapshots.indexOf(fileStatusSnapshots.find(s => s.timestamp === timestamp)!)
    const newFs = await getFilesystem(timestamp)

    if (index > 0) {
      const oldFs = await getFilesystem(fileStatusSnapshots[index - 1].timestamp)
      const newDiff = diffSnapshots(oldFs, newFs)
      setDiffs(newDiff)
    } else {
      setDiffs([])
    }

    setCurrentSnapshot(timestamp)
    setCurrentFilesystem(newFs)
  }

  return (
    <AppLayout

      timeline={
        <SnapshotTimeline
           snapshots={snapshots}
          currentSnapshot={currentSnapshot}
          onSelect={(snap) => handleSnapshotSelect(snap.timestamp)}
        />
      }

      sidebar={
       <DiffViewer diffs={diffs} />
      }

      content={
       <DirectoryTree currentFilesystem={currentFS} />
      }

    />
  ) 
}