import {
  Panel,
  Group,
  Separator
} from "react-resizable-panels"

type Props = {
  timeline: React.ReactNode
  sidebar: React.ReactNode
  content: React.ReactNode
  footer: React.ReactNode
}


export default function AppLayout({ timeline, sidebar, content, footer }: Props) {

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>

      {/* TOP TIMELINE */}
      <div style={{
        height: "100px",
        marginBottom: "10px"
      }}>
        {timeline}
      </div>

      {/* MAIN AREA */}
      <Group orientation="horizontal">

        <Panel defaultSize={25} minSize={15}>
          <div style={{
            height: "100%",
          }}>
            {sidebar}
          </div>
        </Panel>

        <Separator style={{backgroundColor: "red"}}></Separator>

        <Panel defaultSize={75}>
          <div style={{
            height: "100%",
            overflow: "auto",
            borderBottom: "1px solid #333",
            boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
            zIndex: 2
          }}>
            {content}
          </div>
        </Panel>

      </Group>

      <div style={{
        height: "400px",
        borderBottom: "1px solid #333",
        boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
        zIndex: 2
      }}>
        {footer}
      </div>
    </div>
  )
}

const resizeStyle = {
  width: "4px",
  background: "#444",
  cursor: "col-resize"
}