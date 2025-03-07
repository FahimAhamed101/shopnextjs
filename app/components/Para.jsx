import React,{useEffect,useRef, useState} from 'react'
import {EditorContent, useEditor} from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import TextEditor from './TextEditor'



const Para = ({setDescription,description}) => {
    const [focus, setFocus] = useState(false)
    const editor = useEditor({
        extensions: [
          StarterKit,
        ],
        editorProps:{
            attributes:{
                class: "prose w-full focus:outline-none leading-5 prose-a:text-pink-600 prose-a:font-semibold prose-a:no-underline"
            }
        },
        
        content: description,
      })

      const html = editor?.getHTML()

      useEffect(() => {
        setDescription(html)
        console.log(html)
      },[html])

      const menuRef = useRef(null)

      useEffect(() => {
        const handler = (e) => {
            if(!menuRef.current?.contains(e.target)){
                setFocus(false)
            }
        }
        document.addEventListener('mousedown',handler)
      },[])
  return (
    <div className={`mx-auto border-[1px] mt-4 rounded-xl ${focus ? "border-pink-500 border-[2px] ml-0":""}`} ref = {menuRef}>
        {/* <TextEditor editor={editor} /> */}
        <EditorContent editor={editor} style={{padding:'18px'}} onClick={() => setFocus(true)} />
    </div>
  )
}

export default Para