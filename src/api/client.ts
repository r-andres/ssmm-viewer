const API = "http://localhost:5000"
import { FileSystem, Directory, FileNode, Snapshot } from "../types/models"

export async function getSnapshots(): Promise<Snapshot[]> {
  const res = await fetch(API + "/snapshot/times")
  return res.json()
}


export async function getFilesystem(snapshot: string | null): Promise<FileSystem> {

  
  const timestamp = snapshot?.replace("T", "").replace("Z", "").replaceAll(":", "").replaceAll("-", "")
  console.log(timestamp)
  const res = await fetch(API + "/snapshot/FileStatus/" + timestamp)
  const response = await res.json()
  const snapshotFs = response.data;

  if (!snapshotFs) return [];

  const fsArray: FileSystem = [];
  for (const [dirId, filesObj] of Object.entries(snapshotFs)) {
    console.log(dirId)
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