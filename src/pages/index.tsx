import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { Button } from 'rewind-uikit'
import React, { useState } from 'react'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  const [showTooltip, setShowTooltip] = useState(false)

  const handleClickCopyToClipboard = () => {
    navigator.clipboard.writeText('npm install rewind-uikit')
    setShowTooltip(true)

    setTimeout(() => {
      setShowTooltip(false)
    }, 1500)
  }

  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <main className='flex flex-col my-8 items-center gap-8'>
        <img
          src='img/rw-logo.svg'
          alt='ReWind-Logo'
          className='h-[50vh] w-[500px] '
        />
        <div>
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

          <div className='group relative flex mt-4 justify-center'>
            <div
              className='px-6 py-4 bg-primary text-white rounded-md flex gap-6 cursor-pointer relative'
              onClick={handleClickCopyToClipboard}
            >
              <span>$ npm install rewind-uikit</span>
              <svg
                width='24'
                height='24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
              >
                <path d='M8 16c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8m-8 8h4c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12V8m-8 8c-1.886 0-2.828 0-3.414-.586C4 14.828 4 13.886 4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4c1.886 0 2.828 0 3.414.586C16 5.172 16 6.114 16 8'></path>
              </svg>
            </div>
            {showTooltip && (
              <span className='absolute top-12 border border-primary rounded bg-white p-2 text-sm text-primary transition-all duration-500'>
                Copied to clipboard!
              </span>
            )}
          </div>
        </div>
      </main>
    </Layout>
  )
}
