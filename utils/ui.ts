import { darkTheme } from "../daisy/dark"
import { lightTheme } from "../daisy/light"

export const NAVHEIGHT = 96
export const FOOTERHEIGHT = 76

export const appendRichTextClassFromNode = (node: ChildNode) => {
    console.log("node.nodeName: ", node.nodeName)
    if (node.nodeName === "A") {
        /// @ts-ignore
        node.classList.add("link")
    }
    for (var i = 0; i < node.childNodes.length; i++) {
        const item = node.childNodes[i]
        appendRichTextClassFromNode(item)
    }
}

export const setRichTextChildClasses = (parent: React.RefObject<HTMLDivElement>) => {
    if (!parent) return
    const children = parent.current?.childNodes
    if (!children) return
    for (var i = 0; i < children.length; i++) {
        const item = children[i]
        appendRichTextClassFromNode(item)
    }
}


// TODO: Remove this entirely if you turn out not to use it. Going with just using my own scss for now.
export const updateRichTextString = (s: string) => {
    let val = s.replace('target="_blank"', "")
    val = val.replace("<h1", "<h1 class='text-lg block'")
    val = val.replace("<h2", "<h1 class='font-semibold block'")
    val = val.replace("<blockquote", "<blockquote class='richTextItalic'")
    return val
}


export const themes = [darkTheme, lightTheme]
export const dataThemeDark = (val: string | string[]) => {
    if (typeof val == "string") {
        val = [val]
    }
    let s = ""
    val.forEach((j) => s += `data-[theme=${darkTheme}]:${j} `)
    return s
}

export const dataThemeLight = (val: string | string[]) => {
    if (typeof val == "string") {
        val = [val]
    }
    let s = ""
    val.forEach((j) => s += `data-[theme=${lightTheme}]:${j} `)
    return s
}
