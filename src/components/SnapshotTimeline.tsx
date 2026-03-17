import React, { useEffect, useState } from "react";
import { Snapshot } from "../types/models";

type Props = {
  snapshots: Snapshot[];
  currentSnapshot: string | null;
  onSelect: (snapshot: Snapshot) => void;
};

export default function SnapshotTimeline({ snapshots, currentSnapshot, onSelect }: Props) {

  function getIcon(event: string) {
    switch (event) {
      case "DirectorySetup":
        return "⚙️";
      case "DirectoryDownlink":
        return "📡";
      default:
        return "";
    }
  }

  const leftButton: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "10px",
  background: "#333",
  border: "none",
  color: "white",
  padding: "8px 10px",
  borderRadius: "6px",
  cursor: "pointer"
}

const rightButton: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  right: "10px",
  background: "#333",
  border: "none",
  color: "white",
  padding: "8px 10px",
  borderRadius: "6px",
  cursor: "pointer"
}

  const currentIndex = snapshots.findIndex(s => s.timestamp === currentSnapshot)


  const goPrev = () => {
    if (currentIndex > 0) {
      onSelect(snapshots[currentIndex - 1])
    }
  }

  const goNext = () => {
    if (currentIndex < snapshots.length - 1) {
      onSelect(snapshots[currentIndex + 1])
    }
  }

  useEffect(() => {

  const handler = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") goPrev()
    if (e.key === "ArrowRight") goNext()
  }

  window.addEventListener("keydown", handler)

  return () => window.removeEventListener("keydown", handler)

}, [currentIndex])

  const radius = "13px";
  return (
    <div style={{
      height: "100%",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      color: "#d4d4d4",
      overflowX: "auto"
    }}>

      <div style={{
        display: "flex",
        gap: "20px",
        overflowX: "scroll",
        padding: "10px 0",
        alignItems: "center",
        fontFamily: "arial",
        fontSize: "10px"

      }}>
 <button style={leftButton} onClick={goPrev} disabled={currentIndex <= 0}>
        ◀
      </button>


        {snapshots.map((snap, idx) => {
          const isSelected = snap.timestamp === currentSnapshot;
          const isFileStatus = snap.event === "FileStatus";


          if (isFileStatus) {
            return (
              <div
                key={idx}
                style={{ textAlign: "center", cursor: "pointer" }}
                onClick={() => onSelect(snap)}
              >
                {/* Circle */}
                <div style={{
                  width: radius,
                  height: radius,
                  borderRadius: "50%",
                  backgroundColor: isSelected ? "rgb(231, 96, 123)" : "#000000",
                  margin: "0 auto",
                  marginBottom: "4px",
                  transition: "all 0.2s",
                }} title={snap.timestamp} />

                {/* Date */}
                <div style={{
                  whiteSpace: "nowrap",
                  color: isSelected ? "#d84343" : "#0e587f",
                }}>
                  {new Date(snap.timestamp).toISOString().slice(0, 10)}<br />
                  {new Date(snap.timestamp).toISOString().slice(11, 19)}
                </div>

              </div>
            );
          } else {
            return (
              <div
                key={idx}
                style={{ textAlign: "center" }}
              >
                
                <span style={{ fontSize: "25px" }}>{getIcon(snap.event)}</span>

                {/* Date */}
                <div style={{
                  whiteSpace: "nowrap",
                  color: isSelected ? "#d84343" : "#0e587f",
                }}>
                  {new Date(snap.timestamp).toISOString().slice(0, 10)}<br />
                  {new Date(snap.timestamp).toISOString().slice(11, 19)}
                </div>

              </div>
            );

          }



        })}
        <button
        style={rightButton}
        onClick={goNext}
        disabled={currentIndex === snapshots.length - 1}
      >
        ▶
      </button>
      </div>
    </div>
  );
}