import React from 'react'
import Layout from '@theme/Layout'
import { ExampleTemplate } from '../components/ExampleTemplate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { DashboradExample } from '../components/Examples/DashboradExample'

export default function ExamplePage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <main className='flex flex-col items-center justify-center p-8 gap-8'>
        <section className='w-1/3 text-pretty text-center my-10'>
          <h1 className='text-5xl font-bold'>Check this dashboard example</h1>
          <p className='text-xl'>
            All the elements have been created using ReWindUI components.
          </p>
          <p className='text-xl'>
            Hover some of the elements to see the code behind it.
          </p>
        </section>
        <ExampleTemplate>
          <DashboradExample />
        </ExampleTemplate>
      </main>
    </Layout>
  )
}
