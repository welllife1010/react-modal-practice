import { useState } from "react"
import { CustomModal } from "./CustomModal"

function App() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsCustomModalOpen(true)}>
        Show Custom Modal
      </button>
      <CustomModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
      >
        <p>
          This is a <strong>CUSTOM</strong> modal
        </p>
        <button onClick={() => setIsCustomModalOpen(false)}>Close</button>
      </CustomModal>
    </>
  )
}

export default App
