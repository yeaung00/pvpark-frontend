// import { useState } from "react"

export default function Badges({ tags, bgColor }) {
  if (!tags) {
    return
  }
  return (
    <div className="flex flex-wrap gap-1">
      {tags.map(tag => (
        <span key={tag} className={`${bgColor} text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full`}>{tag}</span>
      ))}
    </div>
  )
}
