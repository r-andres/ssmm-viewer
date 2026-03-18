import { styles } from "./styles";
import { useEffect, useState } from "react";
import { DirectoryMap, DirectoryInfo } from "../types/models";
import  DirectoryCard from "./DirectoryCard";


type Props = {
  currentDirectories: DirectoryMap | null;
};

export default function DirectoryGrid({ currentDirectories }: Props) {
  const [directories, setDirectories] = useState<DirectoryInfo[]>([]);


  useEffect(() => {
    if (currentDirectories) {
      setDirectories(Object.values(currentDirectories));
    }
  }, [currentDirectories]);


  if (!currentDirectories) {
    return <div style={{
      fontFamily: "arial",
      padding: "5px"
    }}>Directory information not available</div>;
  } 


  return (
    <div style={styles.grid}>
        {directories.map(directory => (
          <DirectoryCard
            key={directory.directory_id}
            directory={directory}
            onClick={() => {console.log(directory)}}
          />
        ))}
      </div>
  )
}