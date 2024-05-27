import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { Button } from 'rewind-uikit'
import React from 'react'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <main className='flex flex-col mt-4 items-center'>
        <img
          src='img/rw-logo.svg'
          alt='ReWind-Logo'
          className='h-[500px] w-[500px] '
        />
        <div>
          <Button variant='outline' color='primary' size='lg'>
            Document
          </Button>
          <Button variant='outline' color='primary' size='lg'>
            Example
          </Button>
        </div>
      </main>
    </Layout>
  )
}
