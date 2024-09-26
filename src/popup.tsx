import { useEffect, useState } from "react"

import { sendToContentScript } from "@plasmohq/messaging"

import { CountButton } from "~features/count-button"

import "~style.css"

function IndexPopup() {
  const [message, setMessage] = useState("hello")
  const [show, setShow] = useState(false)

  useEffect(() => {
    setMessage("Hello world!")
    console.log("hello")
    console.log(chrome)
  })
  return (
    <div className="p-flex p-items-start p-justify-center p-w-96 p-h-96 p-bg-slate-200 p-flex-row p-gap-2 p-py-4 p-px-2">
      <button
        className="p-bg-slate-700 p-px-2 p-py-1 p-text-white p-rounded-md"
        onClick={async () => {
          const csResponse = await sendToContentScript({
            name: "turnOnHover",
            body: "turnOn"
          })
          if (csResponse == "success") {
            setShow(true)
          }
        }}>
        Turn On Outline
      </button>
      <button
        className="p-bg-slate-700 p-px-2 p-py-1 p-text-white p-rounded-md"
        onClick={async () => {
          const csResponse = await sendToContentScript({
            name: "turnOnHover",
            body: "turnOff"
          })
        }}>
        Turn Off Outline
      </button>
    </div>
  )
}

export default IndexPopup
