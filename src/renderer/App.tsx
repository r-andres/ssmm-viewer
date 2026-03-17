import { useEffect, useState } from "react";
import DirectoryTree from "../components/DirectoryTree";
import SnapshotTimeline from "../components/SnapshotTimeline";
import { Snapshot, SnapshotDiff, FileSystem, DirectoryMap } from "../types/models";
import { getFilesystem, getSnapshots, getDirectoryInfo} from "../api/client";
import AppLayout from "../layout/AppLayout";
import { diffSnapshots, mergeDirectoryMaps } from "../utils/diff"
import DiffViewer from "../components/DiffViewer";
import DirectoryGrid from "../components/DirectoryGrid";


export default function App() {
  
  const [currentSnapshot, setCurrentSnapshot] = useState<string | null>(null);
  const [currentFS, setCurrentFilesystem] = useState<FileSystem | null>(null);
  const [currentDirectoryMap, setCurrentDirectoryMap] = useState<DirectoryMap | null>(null);
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

    const directoryDownlink = await getDirectoryInfo(timestamp, "DirectoryDownlink")
    const directorySetup = await getDirectoryInfo(timestamp, "DirectorySetup")
    if (!directoryDownlink && !directorySetup) {
      return
    }

    const directoryMap = mergeDirectoryMaps(directoryDownlink, directorySetup)
    console.log(directoryMap)
    setCurrentDirectoryMap(directoryMap)
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

      footer={
        <DirectoryGrid currentDirectories={currentDirectoryMap} />
      }

    />
  ) 
}