import React, { useEffect, useState } from "react";
import { getFilesystem } from "../api/client";
import { FileSystem } from "../types/models";

import { getMockFilesystem } from "../api/mock";


type Props = {
  currentSnapshot: string | null;
};

export default function DirectoryTree({ currentSnapshot }: Props) {
  const [fs, setFs] = useState<FileSystem>([]);
  const [expandedDirs, setExpandedDirs] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // In real app, fetch snapshot based on timestamp
    // getFilesystem(currentSnapshot).then(setFs);
    setFs(getMockFilesystem(currentSnapshot));
  }, [currentSnapshot]);

  const toggleDir = (dirId: string) => {
    setExpandedDirs(prev => ({
      ...prev,
      [dirId]: !prev[dirId]
    }));
  }

  return (
    <div style={{ padding: 10, fontSize: 12, fontFamily: 'Arial', color: '#0b0a0ad2' }}>
      <h3 style={{ marginBottom: '15px', color: '#000000' }}>SSMM {fs.length}</h3>
      {fs.map(dir => {
        const isExpanded = !!expandedDirs[dir.directory_id];
        return (
          <div key={dir.directory_id} style={{ marginBottom: '8px' }}>
            <div
              onClick={() => toggleDir(dir.directory_id)}
              style={{
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '4px 6px',
                borderRadius: '4px',
                // backgroundColor: isExpanded ? '#333333' : 'transparent',
                transition: 'background 0.2s',
              }}
            >
              <span style={{ marginRight: '6px' }}>{isExpanded ? '📂' : '📁'}</span>
              <span>{dir.directory_id}</span>
            </div>

            {isExpanded && (
              <ul style={{ marginLeft: '22px', listStyle: 'none', paddingLeft: 0, marginTop: '4px' }}>
                {dir.files.map(file => (
                  <li key={file.file_id} style={{ display: 'flex', alignItems: 'center', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', fontSize: '13px' }} title={`Size: ${file.size.toLocaleString()} bytes`}>
                    <span style={{ marginRight: '6px', color: '#9cdcfe' }}>📄</span>
                    <span
                      style={{
                        color: file.mode === 'OPEN' ? "orange" : "gray"
                      }}
                    >
                      {file.file_id}
                    </span>
                    <span style={{ marginLeft: 'auto', color: '#c586c0' }}>{file.size.toLocaleString()} B</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}
    </div>
  )
}