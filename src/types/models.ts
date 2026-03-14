export type FileEvent = {
  timestamp: string
  event_type: string
  directory_id: string
  file_id: string
  file_size: number
  file_address: number
  file_type: number
  file_protect_status: string
  file_mode: string
  creation_time: string
}


export type FileNode = {
  file_id: string
  size: number
  address: number
  type: number
  protect_status: string
  mode: string
  creation_time: string
}

export type Directory = {
  directory_id: string
  files: FileNode[]
}

export type FileSystem = Directory[]

export type Snapshot = {
  timestamp: string; // ISO string
  description?: string; // Optional, e.g., "Full snapshot"
};

export type Snapshots = Snapshot[];