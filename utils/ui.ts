import { DOMElement } from "react"

export const appendRichTextClassFromNode = (node: ChildNode) => {
    console.log("node.nodeName: ", node.nodeName)
    if (node.nodeName === "A") {
        console.log("Here?")
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
