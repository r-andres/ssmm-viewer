import {
  Panel,
  Group,
  Separator
} from "react-resizable-panels"

type Props = {
  timeline: React.ReactNode
  sidebar: React.ReactNode
  content: React.ReactNode
}


export default function AppLayout({ timeline, sidebar, content }: Props ) {

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>

      {/* TOP TIMELINE */}
      <div style={{
        height: "80px"
      }}>
        {timeline}
      </div>

      {/* MAIN AREA */}
      <Group orientation="horizontal">

        <Panel defaultSize={25} minSize={15}>
          <div style={{
            height: "100%",
            padding: "20px",
            borderRight: "1px solid #333"
          }}>
           {sidebar}
          </div>
        </Panel>

        <Separator></Separator>

        <Panel defaultSize={75}>
          <div style={{
            height: "100%",
            padding: "10px"
          }}>
            {content}
          </div>
        </Panel>

      </Group>

    </div>
  )
}

const resizeStyle = {
  width: "4px",
  background: "#444",
  cursor: "col-resize"
}