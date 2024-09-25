import { useEffect, useState } from "react"

import { CountButton } from "~features/count-button"

import "~style.css"

function IndexPopup() {
  const [message, setMessage] = useState("hello")
  const [show, setShow] = useState(false)
  const sendMessage = (message: string) => {
    alert("hello Worlds")
  }

  useEffect(() => {
    setMessage("Hello world!")
    console.log("hello")
    console.log(chrome)
  })
  return (
    <div className="p-flex p-items-center p-justify-center p-w-96 p-h-96 p-bg-red-300">
      Hello
    </div>
  )
}

export default IndexPopup
