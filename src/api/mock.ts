// src/api/mock.ts
import mockData from "../assets/mock_data.json";
import { FileSystem, Snapshot } from "../types/models";

export function getMockSnapshots(): Snapshot[] {
  return mockData.map((s: any) => ({
    timestamp: s.timestamp,
    description: ""
  }))
}

export function getMockFilesystem(snapshotTimestamp: string | null): FileSystem {
  if (!snapshotTimestamp) return [];


  const snapshotFs = mockData.find((s: any) => s.timestamp === snapshotTimestamp)?.data;
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