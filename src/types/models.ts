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
  event: string;
};


export type Pass = {
  id: string;
  antenna: string;
  aocs_mode: string;
  call_eng: string;
  encoding: string;
  owlt: string;
  pass_number: string;
  planner: string;
  station: string;
  sym_rate: string;
  time_end: string;
  time_start: string;
  tm_rate: string;
}

export type Snapshots = Snapshot[];


export type FileDiff = {
  directory_id: string
  file_id: string
  type: "added" | "deleted" | "modified"
  oldSize?: number
  newSize?: number
}

export type SnapshotDiff = {
  originalTimestamp: string,
  newTimestamp: string,
  diffs: FileDiff[]
}


export type DirectoryInfo = {
  directory_id: string
  max_dir_size?: number  
  max_file_size?: number
  max_wrt_timeout?: number  
  max_wrt_speed?: number 
  state?: string
  priority?: number
  rf_band?: string
}

export type DirectoryMap = Record<string, DirectoryInfo>;