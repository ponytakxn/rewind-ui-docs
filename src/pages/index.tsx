import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { Button } from 'rewind-uikit'
import React, { useState } from 'react'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  const [showTooltip, setShowTooltip] = useState(false)
  const [selectedOption, setSelectedOption] = useState('npm')

  const handleClickCopyToClipboard = () => {
    switch (selectedOption) {
      case 'npm':
        navigator.clipboard.writeText('npm install rewind-uikit')
        break
      case 'pnpm':
        navigator.clipboard.writeText('pnpm install rewind-uikit')
        break
      case 'yarn':
        navigator.clipboard.writeText('yarn install rewind-uikit')
        break
      default:
        navigator.clipboard.writeText('npm install rewind-uikit')
        break
    }

    setShowTooltip(true)

    setTimeout(() => {
      setShowTooltip(false)
    }, 1500)
  }

  const handleChangeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value)
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
            <a href='/docs/getting-started/installation'>
              <Button
                variant='ghost'
                color='primary'
                size='lg'
                className='w-[224px]'
              >
                Docs
              </Button>
            </a>
            <a href='/examples'>
              <Button variant='ghost' color='primary' size='lg'>
                Examples
              </Button>
            </a>
          </div>
        </div>

        <section className='flex gap-2 items-center'>
          <div className='group relative flex justify-center'>
            <div
              className='px-6 py-4 bg-primary text-white rounded-md flex gap-6 cursor-pointer relative'
              onClick={handleClickCopyToClipboard}
            >
              {selectedOption === 'npm' && (
                <span>$ npm install rewind-uikit</span>
              )}
              {selectedOption === 'pnpm' && (
                <span>$ pnpm install rewind-uikit</span>
              )}
              {selectedOption === 'yarn' && (
                <span>$ yarn install rewind-uikit</span>
              )}

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

          <select
            name='pkg-manager'
            id='pkg-manager'
            value={selectedOption}
            onChange={handleChangeOption}
            className='appearance-none h-fit p-2 border font-semibold border-primary text-primary rounded-lg text-center cursor-pointer row-start-1 col-start-1'
          >
            <option value='npm'>npm</option>
            <option value='pnpm'>pnpm</option>
            <option value='yarn'>yarn</option>
          </select>
        </section>
      </main>
    </Layout>
  )
}
