import React, { useEffect, useState } from "react";
import { Snapshot } from "../types/models";

type Props = {
  snapshots: Snapshot[];
  currentSnapshot: string | null;
  onSelect: (snapshot: Snapshot) => void;
};

export default function SnapshotTimeline({ snapshots, currentSnapshot, onSelect }: Props) {
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

      }}>
        {snapshots.map((snap, idx) => {
          const isSelected = snap.timestamp === currentSnapshot;
          return (
            <div
              key={idx}
              style={{ textAlign: "center", cursor: "pointer" }}
              onClick={() => onSelect(snap)}
            >
              {/* Circle */}
              <div style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: isSelected ? "#030303" : "#3a3d41",
                margin: "0 auto",
                marginBottom: "4px",
                border: isSelected ? "2px solid #8bc94a" : "2px solid transparent",
                transition: "all 0.2s",
              }} title={snap.description || snap.timestamp} />

              {/* Date */}
              <div style={{
                fontSize: "12px",
                whiteSpace: "nowrap",
                color: isSelected ? "#1bb243" : "#0e587f",
              }}>
                {new Date(snap.timestamp).toISOString().slice(0,10)}<br/>
                {new Date(snap.timestamp).toISOString().slice(11, 19)}
              </div>

              {/* Connector line */}
              {idx < snapshots.length - 1 && (
                <div style={{
                  position: "absolute",
                  top: "8px",
                  left: "20px",
                  width: "50px",
                  height: "2px",
                  backgroundColor: "#3a3d41",
                  zIndex: 0
                }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}