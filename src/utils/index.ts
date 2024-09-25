
type ComputedStyles = {
  tag: string
  html: string
  computedStyles: Record<string, string>
  children: ComputedStyles[]
}



export const serializeElement = (element: Element) => {
  const styles = getComputedStyle(element)
  const children = Array.from(element.children).map((child) =>
    serializeElement(child)
  )

  return {
    tag: element.tagName,
    html: element.outerHTML,

    styles: Object.fromEntries(
      Array.from(styles).map((style) => [
        style,
        styles.getPropertyValue(style)
      ])
    ),
    children: children
  }
}
export const getComputedCSS = (element: HTMLElement): Record<string, string> => {
  const computedStyles = window.getComputedStyle(element)
  const styles: Record<string, string> = {}

  for (let i = 0; i < computedStyles.length; i++) {
    const property = computedStyles[i]
    styles[property] = computedStyles.getPropertyValue(property)
  }

  return styles
}


export const downloadImage = (dataUri: string) => {
  const a = document.createElement("a") as HTMLAnchorElement
  a.href = dataUri
  a.download = "image.jpg"
  a.click()
}