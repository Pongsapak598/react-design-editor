// import Navbar from "./components/Navbar"
import Panels from "./components/Panels"
import Canvas from "./components/Canvas"
// import Footer from "./components/Footer"
// import Toolbox from "./components/Toolbox"
import EditorContainer from "./components/EditorContainer"
// import ContextMenu from "./components/ContextMenu"

const GraphicEditor = () => {
  return (
    <EditorContainer>
      {/* <Navbar /> */}
      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ display: "flex", flex: 1 }}>
          {/* <Toolbox /> */}
            <Canvas />
            <Panels />
        </div>
      </div>
    </EditorContainer>
  )
}

export default GraphicEditor
