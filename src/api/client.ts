const API = "http://localhost:8000"
import { FileSystem, Directory, FileNode } from "../types/models"

export async function getSnapshots() {
  const res = await fetch(API + "/snapshots")
  return res.json()
}

export async function getEvents() {
  const res = await fetch(API + "/events")
  return res.json()
}

const data = {
      "A15F": {
        "0x01": {
          "file_id": "0x01",
          "file_address": 0,
          "file_size": 15603665,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 0,
          "creation_time_cuc": "2025-11-01T17:15:00.643Z"
        },
        "0x02": {
          "file_id": "0x02",
          "file_address": 0,
          "file_size": 0,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 0,
          "creation_time_cuc": "2026-01-27T12:26:56.236Z"
        },
        "0x03": {
          "file_id": "0x03",
          "file_address": 0,
          "file_size": 10838205,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 1,
          "creation_time_cuc": "2026-02-17T21:01:34.860Z"
        }
      },
      "A26F": {
        "0x01": {
          "file_id": "0x01",
          "file_address": 0,
          "file_size": 15603665,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 0,
          "creation_time_cuc": "2025-11-01T17:15:01.645Z"
        },
        "0x02": {
          "file_id": "0x02",
          "file_address": 0,
          "file_size": 0,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 0,
          "creation_time_cuc": "2026-01-27T12:26:57.241Z"
        },
        "0x03": {
          "file_id": "0x03",
          "file_address": 0,
          "file_size": 10838205,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 1,
          "creation_time_cuc": "2026-02-17T21:01:34.859Z"
        }
      },
      "MAJ3": {
        "0x59000023": {
          "file_id": "0x59000023",
          "file_address": 0,
          "file_size": 24754400,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 1,
          "creation_time_cuc": "2026-02-23T00:50:59.004Z"
        },
        "0x59000024": {
          "file_id": "0x59000024",
          "file_address": 0,
          "file_size": 24754400,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 1,
          "creation_time_cuc": "2026-02-23T00:52:17.316Z"
        },
        "0x5900002f": {
          "file_id": "0x5900002f",
          "file_address": 0,
          "file_size": 81205404,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 1,
          "creation_time_cuc": "2026-02-27T00:52:07.182Z"
        },
        "0x59000030": {
          "file_id": "0x59000030",
          "file_address": 0,
          "file_size": 79968648,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 1,
          "creation_time_cuc": "2026-02-27T01:35:48.417Z"
        },
        "0x59000031": {
          "file_id": "0x59000031",
          "file_address": 0,
          "file_size": 79360664,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 0,
          "creation_time_cuc": "2026-02-27T03:34:47.304Z"
        },
        "0x59000032": {
          "file_id": "0x59000032",
          "file_address": 0,
          "file_size": 0,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 0,
          "creation_time_cuc": "2026-02-27T05:32:47.960Z"
        },
        "0x59000033": {
          "file_id": "0x59000033",
          "file_address": 0,
          "file_size": 20551680,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 0,
          "creation_time_cuc": "2026-02-27T22:52:30.623Z"
        },
        "0x59000034": {
          "file_id": "0x59000034",
          "file_address": 0,
          "file_size": 6953216,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 0,
          "creation_time_cuc": "2026-02-27T22:56:31.568Z"
        },
        "0x59000035": {
          "file_id": "0x59000035",
          "file_address": 0,
          "file_size": 20551680,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 0,
          "creation_time_cuc": "2026-02-27T23:03:07.114Z"
        },
        "0x59000036": {
          "file_id": "0x59000036",
          "file_address": 0,
          "file_size": 4032224,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 0,
          "creation_time_cuc": "2026-02-27T23:07:35.160Z"
        },
        "0x59000037": {
          "file_id": "0x59000037",
          "file_address": 0,
          "file_size": 0,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 0,
          "creation_time_cuc": "2026-02-27T23:11:10.000Z"
        },
        "0x59000038": {
          "file_id": "0x59000038",
          "file_address": 0,
          "file_size": 20551680,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 0,
          "creation_time_cuc": "2026-02-27T23:54:30.156Z"
        },
        "0x59000039": {
          "file_id": "0x59000039",
          "file_address": 0,
          "file_size": 6953216,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 0,
          "creation_time_cuc": "2026-02-27T23:58:51.175Z"
        },
        "0x5900003a": {
          "file_id": "0x5900003a",
          "file_address": 0,
          "file_size": 246620160,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 0,
          "creation_time_cuc": "2026-02-28T00:05:17.684Z"
        },
        "0x5900003b": {
          "file_id": "0x5900003b",
          "file_address": 0,
          "file_size": 4147736,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 0,
          "creation_time_cuc": "2026-02-28T00:11:35.157Z"
        },
        "0x5900003c": {
          "file_id": "0x5900003c",
          "file_address": 0,
          "file_size": 0,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 0,
          "creation_time_cuc": "2026-02-28T00:15:09.999Z"
        }
      },
      "PEL1": {
        "0x36000013": {
          "file_id": "0x36000013",
          "file_address": 0,
          "file_size": 189,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 1,
          "creation_time_cuc": "2026-03-04T09:25:19.840Z"
        }
      },
      "PEL2": {
        "0x46000027": {
          "file_id": "0x46000027",
          "file_address": 0,
          "file_size": 1177994,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 1,
          "creation_time_cuc": "2026-03-04T09:25:19.839Z"
        }
      },
      "PEL3": {
        "0x56000016": {
          "file_id": "0x56000016",
          "file_address": 0,
          "file_size": 0,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 1,
          "creation_time_cuc": "2026-03-04T09:25:19.840Z"
        }
      },
      "PEL4": {
        "0x6600000d": {
          "file_id": "0x6600000d",
          "file_address": 0,
          "file_size": 0,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 1,
          "creation_time_cuc": "2026-03-04T09:25:19.841Z"
        }
      },
      "PEL5": {
        "0x3b00000d": {
          "file_id": "0x3b00000d",
          "file_address": 0,
          "file_size": 0,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 1,
          "creation_time_cuc": "2026-03-04T09:25:19.841Z"
        }
      },
      "PEL6": {
        "0x4b00000d": {
          "file_id": "0x4b00000d",
          "file_address": 0,
          "file_size": 0,
          "file_type": 42,
          "file_protect_status": 0,
          "file_mode": 1,
          "creation_time_cuc": "2026-03-04T09:25:19.840Z"
        }
      }
    }


export async function getFilesystem(snapshot: string | null): Promise<FileSystem> {
  const fsArray: FileSystem = []

  for (const [dirId, filesObj] of Object.entries(data)) {
    const files: FileNode[] = Object.values(filesObj).map(f => ({
      file_id: f.file_id,
      size: f.file_size,
      address: f.file_address,
      type: f.file_type,
      protect_status: f.file_protect_status.toString(),
      mode: f.file_mode.toString(),
      creation_time: f.creation_time_cuc      
    }))

    fsArray.push({
      directory_id: dirId,
      files
    })
  }

  return fsArray
}