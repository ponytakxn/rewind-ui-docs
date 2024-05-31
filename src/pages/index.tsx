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
      <main className='flex flex-col my-8 items-center gap-8'>
        <img
          src='img/rw-logo.svg'
          alt='ReWind-Logo'
          className='h-[500px] w-[500px] '
        />
        <div className='flex gap-4'>
          <a href='/docs/intro'>
            <Button
              variant='ghost'
              color='primary'
              size='lg'
              className='w-[224px]'
            >
              Docs
            </Button>
          </a>
          <a href='/blog'>
            <Button variant='ghost' color='primary' size='lg'>
              Examples
            </Button>
          </a>
        </div>
      </main>
    </Layout>
  )
}
