import { DirectoryMap, FileSystem } from "../types/models"
import { SnapshotDiff } from "../types/models"

export function diffSnapshots(oldFs: FileSystem, newFs: FileSystem): SnapshotDiff {

  const diffs: SnapshotDiff = []

  const oldMap = new Map<string, number>()
  const newMap = new Map<string, number>()

  // build lookup tables
  for (const dir of oldFs) {
    for (const file of dir.files) {
      oldMap.set(`${dir.directory_id}/${file.file_id}`, file.size)
    }
  }

  for (const dir of newFs) {
    for (const file of dir.files) {
      newMap.set(`${dir.directory_id}/${file.file_id}`, file.size)
    }
  }

  // detect added + modified
  for (const [path, newSize] of newMap.entries()) {

    const oldSize = oldMap.get(path)
    const [dir, file] = path.split("/")

    if (oldSize === undefined) {
      diffs.push({
        directory_id: dir,
        file_id: file,
        type: "added",
        newSize
      })
    } 
    else if (oldSize !== newSize) {
      diffs.push({
        directory_id: dir,
        file_id: file,
        type: "modified",
        oldSize,
        newSize
      })
    }
  }

  // detect deleted
  for (const [path, oldSize] of oldMap.entries()) {

    if (!newMap.has(path)) {

      const [dir, file] = path.split("/")

      diffs.push({
        directory_id: dir,
        file_id: file,
        type: "deleted",
        oldSize
      })
    }
  }

  return diffs
}


export function mergeDirectoryMaps(
  a: DirectoryMap,
  b: DirectoryMap
): DirectoryMap {
  const result: DirectoryMap = {};

  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);

  keys.forEach((key) => {
    result[key] = {
      ...a[key],
      ...b[key],
    };
  });

  return result;
}