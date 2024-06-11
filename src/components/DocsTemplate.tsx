import { Tabs, TabsList, TabTrigger, TabContent } from 'rewind-uikit'
import React from 'react'

interface Props {
  preview: React.ReactNode
  children: React.ReactNode
}

export const DocsTemplate = ({ preview, children }: Props) => {
  return (
    <div className='w-full h-full border relative border-primary bg-primary/5 rounded-xl flex justify-center p-10'>
      <Tabs defaultValue='preview' className='w-full'>
        <TabsList>
          <TabTrigger value='preview'>Preview</TabTrigger>
          <TabTrigger value='code'>Code</TabTrigger>
        </TabsList>
        <TabContent value='preview'>{preview}</TabContent>
        <TabContent value='code' className='justify-start'>
          {children}
        </TabContent>
      </Tabs>
    </div>
  )
}
