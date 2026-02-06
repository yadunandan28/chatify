import React from 'react'
import {LoaderIcon} from "lucide-react";

function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen">
        <LoaderIcon className="size-10 animate-spin h-10 w-10 text-white" />
    </div>
  )
}

export default PageLoader