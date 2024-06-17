import React from 'react'

export const ExampleTemplate = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <section className='w-[95dvw] p-4 h-full border border-primary/30 rounded-lg relative'>
      {children}
    </section>
  )
}
