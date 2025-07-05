"use client"
// import 
import { Button } from '@/components/ui/button'
import { useState } from 'react'

function title(){
    const[editTitle, setEditTitle]=useState(false)
}
const Header = () => {
  return (
      <div className="w-full pr-8 flex flex-col overflow-hidden">
      {/* Header (auto height) */}
      <div className="flex w-full p-1 justify-between">
        <div></div>
        <div className="flex justify-around"> 
            <h1 className="text-3xl ">Title</h1>
            <Button className=''></Button></div>
        <Button className="bg-background text-foreground hover:bg-background border-1 ">
          update
        </Button>
    </div>
    </div>
  )
}

export default Header
