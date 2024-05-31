import { Tabs, TabsList, TabTrigger, TabContent } from 'rewind-uikit'
import React from 'react'

interface Props {
  preview: React.ReactNode
  children: React.ReactNode
}

export const DocsTemplate = ({ preview, children }: Props) => {
  return (
    <Tabs defaultValue='preview'>
      <TabsList>
        <TabTrigger value='preview'>Preview</TabTrigger>
        <TabTrigger value='code'>Code</TabTrigger>
      </TabsList>
      <TabContent value='preview'>{preview}</TabContent>
      <TabContent value='code'>{children}</TabContent>
    </Tabs>
  )
}
