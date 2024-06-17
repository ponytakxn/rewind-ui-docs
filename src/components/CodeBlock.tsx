import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from 'rewind-uikit'

type CodeBlockProps = {
  content: string
  width: number
  height: number
  children: React.ReactNode
}

export const CodeBlock = ({
  content,
  width,
  height,
  children,
}: CodeBlockProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent
        className={`w-[${width}px] h-[${height}px] relative border-2 border-success rounded-md`}
      >
        <pre className={`w-full h-full overflow-auto bg-primary text-success`}>
          {content}
        </pre>
      </HoverCardContent>
    </HoverCard>
  )
}
