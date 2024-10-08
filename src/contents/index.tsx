import cssText from "data-text:~style.css"
import { toJpeg } from "html-to-image"
import type { PlasmoCSConfig } from "plasmo"
import React, { useCallback, useEffect, useRef, useState } from "react"

import { useMessage } from "@plasmohq/messaging/hook"

import { downloadImage, serializeElement } from "~utils"

export const config: PlasmoCSConfig = {
  matches: ["https://*/"],
  all_frames: true
}

// Create a container for the overlay
const OverlayContainer = () => {
  const [shouldOutline, setShouldOutline] = useState(false)
  let element1: HTMLElement
  const htmlElem = document.querySelector("html")

  // useCallback to prevent the function from being recreated on every render
  const mouseOutHandler = useCallback((e) => {
    const el = e.target as HTMLElement
    el.classList.remove("outline-red")
  }, [])

  const mouseOverHandler = useCallback((e) => {
    const el = e.target as HTMLElement
    element1 = el
    el.addEventListener("click", (e) => e.preventDefault())
    el.classList.add("outline-red")
  }, [])

  const mouseDownHandler = useCallback(
    (e) => {
      // check to see if the element clicked is the same as the element hovered
      if (true) {
        const data = serializeElement(element1)

        //check the size of the data
        const size =
          new TextEncoder().encode(JSON.stringify(data)).length / 1024
        console.log(data)
      }
    },
    [element1]
  )

  if (shouldOutline) {
    console.log("turning on outlines")
  }
  const { data } = useMessage(async (req, res) => {
    res.send("success")
  })

  useEffect(() => {
    if (data === "turnOn") {
      setShouldOutline(true)
      console.log("turning on outline")
    } else if (data === "turnOff") {
      setShouldOutline(false)
      console.log("turning off outline")
    }
  }, [data])

  useEffect(() => {
    if (!shouldOutline) return

    const style = document.createElement("style")
    style.textContent = `.outline-red{outline: 1px solid red;}`
    document.head.appendChild(style)

    // create eventlistener on html elements
    htmlElem.addEventListener("mouseover", mouseOverHandler)
    htmlElem.addEventListener("mouseout", mouseOutHandler)
    htmlElem.addEventListener("mousedown", mouseDownHandler)

    return () => {
      htmlElem.removeEventListener("mouseover", mouseOverHandler)
      htmlElem.removeEventListener("mouseout", mouseOutHandler)
      htmlElem.removeEventListener("mousedown", mouseDownHandler)
      document.head.removeChild(style)
    }
  }, [mouseOverHandler, mouseOutHandler, mouseDownHandler, shouldOutline])

  return (
    <div className="p-z-10 p-fixed p-top-0 p-left-0 p-w-36 p-h-36 p-bg-red-600"></div>
  )
}

export default OverlayContainer
