import { Modal } from "../Modal"

interface CommandDetailProps {
  title: string
  description: string
}

export const CommandDetails = ({ title, description }: CommandDetailProps) => {
  return (
    <Modal className="items-start px-5">
      <p className="text-lg">{title}</p>
      <p className="text-modal-desc">{description}</p>
    </Modal>
  )
}
