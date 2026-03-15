// src/api/mock.ts
import fileStatus from "../assets/filestatus.json";
import passes from "../assets/passes.json";

import { FileSystem, Pass, Snapshot } from "../types/models";

export function getMockSnapshots(): Snapshot[] {
  const snapshots =  [];
  snapshots.push(...fileStatus.map((s: any) => ({
    timestamp: s.timestamp,
    event: "file_status"
  })));

  passes.forEach((p) => {
    snapshots.push({
      timestamp: p.time_start,
      event: "start_pass"
    });
    snapshots.push({
      timestamp: p.time_end,
      event: "end_pass"
    });
  });

  snapshots.sort((s1, s2) => {
    return s1.timestamp.localeCompare(s2.timestamp);
  });

  return snapshots
}

export function getMockFilesystem(snapshotTimestamp: string | null): FileSystem {
  if (!snapshotTimestamp) return [];


  const snapshotFs = fileStatus.find((s: any) => s.timestamp === snapshotTimestamp)?.data;
  if (!snapshotFs) return [];

  const fsArray: FileSystem = [];
  for (const [dirId, filesObj] of Object.entries(snapshotFs)) {
    const files = Object.values((filesObj as any)).map((f: any) => ({
      file_id: f.file_id,
      size: f.file_size,
      address: f.file_address,
      type: f.file_type,
      protect_status: f.file_protect_status,
      mode: f.file_mode,
      creation_time: f.creation_time
    }));
    fsArray.push({ directory_id: dirId, files });
  }
  return fsArray;
}