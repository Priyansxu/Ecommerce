"use client"
import { Quote } from "lucide-react"

export default function QuoteCard({ quote, author }) {
  return (
    <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-zinc-700 transition-transform duration-200 hover:scale-[1.02]">
      <Quote className="h-6 w-6 text-zinc-400 mb-4" />
      <p className="text-lg font-light italic mb-4">{quote}</p>
      <p className="text-sm text-zinc-400 text-right">— {author}</p>
    </div>
  )
}