import React, { useState } from "react";
import DirectoryTree from "../components/DirectoryTree";
import SnapshotTimeline from "../components/SnapshotTimeline";
import { Snapshot } from "../types/models";
import { getMockSnapshots } from "../api/mock";
import AppLayout from "../layout/AppLayout";


export default function App() {
  const mockSnapshots: Snapshot[] = getMockSnapshots();
  const [currentSnapshot, setCurrentSnapshot] = useState<string | null>(mockSnapshots[0].timestamp);

  // return (
  //   <div style={{ display: "flex", height: "100vh" }}>
  //     <div style={{
  //       width: 300,
  //       borderRight: "1px solid #333",
  //       overflow: "auto"
  //     }}>
  //       {/* Pass the current snapshot to the tree */}
  //       <DirectoryTree currentSnapshot={currentSnapshot} />
  //     </div>

  //     <div style={{ flex: 1, padding: 20 }}>
  //       <SnapshotTimeline
  //         snapshots={mockSnapshots}
  //         currentSnapshot={currentSnapshot}
  //         onSelect={(snap) => setCurrentSnapshot(snap.timestamp)}
  //       />
  //     </div>
  //   </div>
  // );


  return (
    <AppLayout

      timeline={
        <SnapshotTimeline
           snapshots={mockSnapshots}
          currentSnapshot={currentSnapshot}
          onSelect={(snap) => setCurrentSnapshot(snap.timestamp)}
        />
      }

      sidebar={
       <DirectoryTree currentSnapshot={currentSnapshot} />
      }

      content={
        <h3>Hola</h3>
      }

    />
  ) 
}