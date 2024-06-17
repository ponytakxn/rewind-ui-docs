import React, { useRef, useState } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  ProgressBar,
} from 'rewind-uikit'
import { NavMenu, NavMenuList, NavMenuItem } from 'rewind-uikit'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from 'rewind-uikit'
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTitle,
} from 'rewind-uikit'
import { Separator, Label } from 'rewind-uikit'
import { CodeBlock } from '../CodeBlock'

export const DashboradExample = () => {
  const collapsibleRef = useRef(null)
  const [isClosed, setIsClosed] = useState(false)

  const handleClickCollapsible = () => {
    const displayValue = getComputedStyle(collapsibleRef.current).display
    displayValue === 'block' ? setIsClosed(false) : setIsClosed(true)
  }

  const htmlDropdownContent: string = `<Card className="grow-0">
  <CardHeader>
    <DropdownMenu orientation="bottom" className="w-full">
      <DropdownMenuTrigger className="w-full text-start">
        Customers (this month)
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white z-20">
      <DropdownMenuGroup>
        <DropdownMenuItem disabled>
          Last month
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          Last 3 months
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          Last 6 months
        </DropdownMenuItem>
      </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </CardHeader>
</Card>`

  const htmlCollapsibleContent: string = `<Collapsible>
  <CollapsibleContent className="font-semibold text-2xl">
    $<span className="text-5xl">781</span>
  </CollapsibleContent>
  <CollapsibleTrigger className="p-2 flex justify-between hover:bg-primary/80 hover:text-white hover:fill-white">
    <span>LTV</span>
    <div style={{ transform: 'scale(.75)' }} >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        style={{ transform: 'rotate(270deg)' }}
      >
        <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
      </svg>
    </div>
  </CollapsibleTrigger>
</Collapsible>`

  const htmlCardContent: string = `<Card className="grow w-full">
  <CardHeader className="flex flex-col text-6xl pt-4">
    8,178
    <span className="text-md">Brand mentions (social)</span>
  </CardHeader>
  <CardContent className="text-md"><span className="text-success font-semibold">
    +693</span> vs last month
  </CardContent>
</Card>`

  const htmlProgressbarContent: string = `<div>
  <ProgressBar bgColor="primary" color="success" progress={42} />
  <div className="flex justify-between">
      <span className="text-success">42%</span>
      <span>$300K</span>
  </div>
</div>`

  const htmlNavmenuContent = `<NavMenu className="h-max">
  <NavMenuList className="gap-4">
    <DropdownMenu orientation="bottom">
      <DropdownMenuTrigger className="py-2 px-4 flex justify-between border border-primary/30 rounded-md w-[200px]">
        <div>John Doe</div>
        <div style={{ transform: 'scale(.75)' }} >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            style={{ transform: 'rotate(90deg)' }}
            className="transition ease-out duration-40"
          >
            <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
          </svg>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-20 rounded-md">
        <DropdownMenuTitle>Profile</DropdownMenuTitle>
        <Separator />
        <DropdownMenuGroup>
          <DropdownMenuTitle className="text-sm">Personal Account</DropdownMenuTitle>
          <DropdownMenuItem>John Doe</DropdownMenuItem>
        </DropdownMenuGroup>
        <Separator />
        <DropdownMenuGroup>
          <DropdownMenuTitle className="text-sm">Teams</DropdownMenuTitle>
          <DropdownMenuItem>The Lab</DropdownMenuItem>
          <DropdownMenuItem>Marketing</DropdownMenuItem>
        </DropdownMenuGroup>
        <Separator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="justify-end font-semibold p-2">Sign out</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    <NavMenuItem>Overview</NavMenuItem>
    <NavMenuItem>Brand</NavMenuItem>
    <NavMenuItem>Customers</NavMenuItem>
    <NavMenuItem>Campaigns</NavMenuItem>
  </NavMenuList>
</NavMenu>`

  return (
    <div className='w-full'>
      <NavMenu className='h-max'>
        <NavMenuList className='gap-4'>
          <DropdownMenu orientation='bottom'>
            <DropdownMenuTrigger className='py-2 px-4 flex justify-between border border-primary/30 rounded-md w-[200px]'>
              <div>John Doe</div>
              <div style={{ transform: 'scale(.75)' }}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  style={{
                    transform: `${isClosed ? 'rotate(270deg)' : 'rotate(90deg)'}`,
                  }}
                  className='transition ease-out duration-40'
                >
                  <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
                </svg>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='z-20 rounded-md'>
              <DropdownMenuTitle>Profile</DropdownMenuTitle>
              <Separator />
              <DropdownMenuGroup>
                <DropdownMenuTitle className='text-sm'>
                  Personal Account
                </DropdownMenuTitle>
                <DropdownMenuItem>John Doe</DropdownMenuItem>
              </DropdownMenuGroup>
              <Separator />
              <DropdownMenuGroup>
                <DropdownMenuTitle className='text-sm'>Teams</DropdownMenuTitle>
                <DropdownMenuItem>The Lab</DropdownMenuItem>
                <DropdownMenuItem>Marketing</DropdownMenuItem>
              </DropdownMenuGroup>
              <Separator />
              <DropdownMenuGroup>
                <DropdownMenuItem className='justify-end font-semibold p-2'>
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <CodeBlock content={htmlNavmenuContent} width={700} height={300}>
            <div className='flex gap-4'>
              <NavMenuItem className='font-semibold'>Overview</NavMenuItem>
              <NavMenuItem className='font-semibold'>Brand</NavMenuItem>
              <NavMenuItem className='font-semibold'>Customers</NavMenuItem>
              <NavMenuItem className='font-semibold'>Campaigns</NavMenuItem>
            </div>
          </CodeBlock>
        </NavMenuList>
      </NavMenu>

      <Separator className='my-4' />

      <div className='flex gap-3 relative justify-center'>
        <div className='grow max-w-[18dvw]'>
          <div className='flex flex-col h-full max-w-full gap-3'>
            <Card className='grow-0'>
              <CardHeader>
                <DropdownMenu orientation='bottom' className='w-full'>
                  <DropdownMenuTrigger className='w-full text-start'>
                    Brand (this month)
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='bg-white z-20'>
                    <DropdownMenuGroup>
                      <DropdownMenuItem disabled>Last month</DropdownMenuItem>
                      <DropdownMenuItem disabled>
                        Last 3 months
                      </DropdownMenuItem>
                      <DropdownMenuItem disabled>
                        Last 6 months
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
            </Card>

            <Card className='grow-[2] w-full'>
              <CardHeader className='flex flex-col text-5xl'>
                <span className='text-lg mb-2'>Branded sarch</span>
                5,540
                <span className='text-sm'>Searches</span>
              </CardHeader>
              <CardContent className='mt-4 flex flex-col gap-4'>
                <Label className='text-lg'>This year</Label>
                <Collapsible
                  className='border border-primary/30 rounded-md w-full p-2'
                  onClick={handleClickCollapsible}
                >
                  <CollapsibleTrigger className='p-2 flex justify-between hover:bg-primary/80 hover:text-white hover:fill-white'>
                    <span>{isClosed ? 'Close details' : 'Show details'}</span>
                    <div style={{ transform: 'scale(.75)' }}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        style={{
                          transform: `${isClosed ? 'rotate(270deg)' : 'rotate(90deg)'}`,
                        }}
                        className='transition ease-out duration-40'
                      >
                        <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
                      </svg>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent ref={collapsibleRef}>
                    <Separator display='horizontal' className='w-full my-xs' />
                    <div className='flex justify-between'>
                      <span>Jan-Apr</span>
                      <span>3,230</span>
                    </div>
                    <Separator display='horizontal' className='w-full my-xs' />
                    <div className='flex justify-between'>
                      <span>May-Aug</span>
                      <span>2,490</span>
                    </div>
                    <Separator display='horizontal' className='w-full my-xs' />
                    <div className='flex justify-between'>
                      <span>Sep-Dec</span>
                      <span>6,240</span>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
              <CardFooter>
                <img
                  src='https://cdn.statcdn.com/Infographic/images/normal/28018.jpeg'
                  alt=''
                  className='w-full h-auto'
                />
              </CardFooter>
            </Card>

            <CodeBlock content={htmlCardContent} width={400} height={300}>
              <Card className='grow w-full'>
                <CardHeader className='flex flex-col text-6xl pt-4'>
                  8,178
                  <span className='text-md'>Brand mentions (social)</span>
                </CardHeader>
                <CardContent className='text-md'>
                  <span className='text-success font-semibold'>+693</span> vs
                  last month
                </CardContent>
              </Card>
            </CodeBlock>
          </div>
        </div>

        <div className='grow-[2] max-w-[36dvw]'>
          <div className='flex flex-col h-full gap-3'>
            <CodeBlock content={htmlDropdownContent} width={600} height={300}>
              <Card className='grow-0'>
                <CardHeader>
                  <DropdownMenu orientation='bottom' className='w-full'>
                    <DropdownMenuTrigger className='w-full text-start'>
                      Customers (this month)
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='bg-white z-20'>
                      <DropdownMenuGroup>
                        <DropdownMenuItem disabled>Last month</DropdownMenuItem>
                        <DropdownMenuItem disabled>
                          Last 3 months
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled>
                          Last 6 months
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
              </Card>
            </CodeBlock>
            <Card className='grow max-h-[30dvh]'>
              <CardHeader className='text-lg'>Total number</CardHeader>
              <CardContent className='flex gap-2 max-h-min mt-10'>
                <div className='grow text-5xl font-semibold flex flex-col gap-2'>
                  10,289
                  <span className='text-sm font-normal'>this month</span>
                  <span className='text-sm font-normal'>
                    <span className='text-success font-semibold'>+178</span> vs
                    last month
                  </span>
                </div>
                <div className='grow-[2]'>
                  <img
                    src='https://adalysis.com/wp-content/uploads/2019/04/image.png'
                    alt=''
                    className='h-[150px] w-full'
                  />
                </div>
              </CardContent>
            </Card>

            <div className='grow-[2]'>
              <div className='flex flex-row h-full gap-3 w-full'>
                <Card className='w-2/5'>
                  <CardHeader className='text-lg'>Customer value</CardHeader>
                  <CardContent className='flex gap-6 max-h-min flex-col'>
                    <CodeBlock
                      content={htmlCollapsibleContent}
                      width={500}
                      height={300}
                    >
                      <Collapsible>
                        <CollapsibleContent className='font-semibold text-2xl'>
                          $<span className='text-5xl'>781</span>
                        </CollapsibleContent>
                        <CollapsibleTrigger className='p-2 flex justify-between hover:bg-primary/80 hover:text-white hover:fill-white'>
                          <span>LTV</span>
                          <div style={{ transform: 'scale(.75)' }}>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              style={{ transform: 'rotate(270deg)' }}
                            >
                              <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
                            </svg>
                          </div>
                        </CollapsibleTrigger>
                      </Collapsible>
                    </CodeBlock>

                    <Collapsible>
                      <CollapsibleContent className='font-semibold text-2xl'>
                        $<span className='text-5xl'>343</span>
                      </CollapsibleContent>
                      <CollapsibleTrigger className='p-2 flex justify-between hover:bg-primary/80 hover:text-white hover:fill-white'>
                        <span>CAC</span>
                        <div style={{ transform: 'scale(.75)' }}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            style={{ transform: 'rotate(270deg)' }}
                          >
                            <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
                          </svg>
                        </div>
                      </CollapsibleTrigger>
                    </Collapsible>

                    <Collapsible>
                      <CollapsibleContent className='font-semibold text-2xl'>
                        <span className='text-5xl'>17</span>mth
                      </CollapsibleContent>
                      <CollapsibleTrigger className='p-2 flex justify-between hover:bg-primary/80 hover:text-white hover:fill-white'>
                        <span>Aug. lifetime</span>
                        <div style={{ transform: 'scale(.75)' }}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            style={{ transform: 'rotate(270deg)' }}
                          >
                            <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
                          </svg>
                        </div>
                      </CollapsibleTrigger>
                    </Collapsible>
                    <Collapsible>
                      <CollapsibleContent className='font-semibold text-2xl'>
                        x<span className='text-5xl'>2.28</span>
                      </CollapsibleContent>
                      <CollapsibleTrigger className='p-2 flex justify-between hover:bg-primary/80 hover:text-white hover:fill-white'>
                        <span>LTV/CAC ratio</span>
                        <div style={{ transform: 'scale(.75)' }}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            style={{ transform: 'rotate(270deg)' }}
                          >
                            <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
                          </svg>
                        </div>
                      </CollapsibleTrigger>
                    </Collapsible>
                  </CardContent>
                </Card>

                <Card className='w-3/5'>
                  <CardHeader className='text-lg'>
                    Demographic breakdown
                  </CardHeader>
                  <CardContent className='flex flex-col gap-8 mt-8'>
                    <div>
                      <div className='flex justify-between text-sm'>
                        <Label>United States</Label>
                        6589
                      </div>
                      <ProgressBar
                        bgColor='success'
                        color='primary'
                        progress={97}
                      />
                    </div>

                    <div>
                      <div className='flex justify-between text-sm'>
                        <Label>Germany</Label>
                        1456
                      </div>
                      <ProgressBar
                        bgColor='success'
                        color='primary'
                        progress={30}
                      />
                    </div>

                    <div>
                      <div className='flex justify-between text-sm'>
                        <Label>UK</Label>
                        1345
                      </div>
                      <ProgressBar
                        bgColor='success'
                        color='primary'
                        progress={27}
                      />
                    </div>

                    <div>
                      <div className='flex justify-between text-sm'>
                        <Label>Canada</Label>
                        451
                      </div>
                      <ProgressBar
                        bgColor='success'
                        color='primary'
                        progress={10}
                      />
                    </div>

                    <div>
                      <div className='flex justify-between text-sm'>
                        <Label>Australia</Label>
                        345
                      </div>
                      <ProgressBar
                        bgColor='success'
                        color='primary'
                        progress={8}
                      />
                    </div>

                    <div>
                      <div className='flex justify-between text-sm'>
                        <Label>Ireland</Label>
                        103
                      </div>
                      <ProgressBar
                        bgColor='success'
                        color='primary'
                        progress={2}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className='grow-[2] max-w-[36dvw]'>
          <div className='flex flex-col h-full gap-3'>
            <Card className='grow-0'>
              <CardHeader>
                <DropdownMenu orientation='bottom' className='w-full'>
                  <DropdownMenuTrigger className='w-full text-start'>
                    Campaigns (this month)
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='bg-white z-20'>
                    <DropdownMenuGroup>
                      <DropdownMenuItem disabled>Last month</DropdownMenuItem>
                      <DropdownMenuItem disabled>
                        Last 3 months
                      </DropdownMenuItem>
                      <DropdownMenuItem disabled>
                        Last 6 months
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
            </Card>

            <Card className='grow-0 max-h-[50dvh]'>
              <CardHeader className='text-lg'>
                Advertising - total budget utilization
              </CardHeader>
              <CardContent className='flex mt-16 mb-5 gap-6 flex-col xl:flex-row'>
                <div className='grow flex flex-col gap-10'>
                  <div className='text-7xl font-semibold '>
                    <span className='text-5xl'>$</span>128.2
                    <span className='text-5xl'>K</span>
                  </div>
                  <CodeBlock
                    content={htmlProgressbarContent}
                    width={500}
                    height={210}
                  >
                    <div>
                      <ProgressBar
                        bgColor='primary'
                        color='success'
                        progress={42}
                      />
                      <div className='flex justify-between'>
                        <span className='text-success'>42%</span>
                        <span>$300K</span>
                      </div>
                    </div>
                  </CodeBlock>
                </div>

                <div className='grow-[2] flex flex-col gap-2'>
                  <div className='flex justify-between'>
                    <span>Display/PPC</span>
                    <span>$59.1K</span>
                  </div>
                  <Separator />
                  <div className='flex justify-between'>
                    <span>Social</span>
                    <span>$35.1K</span>
                  </div>
                  <Separator />
                  <div className='flex justify-between'>
                    <span>Sponsorship</span>
                    <span>$24K</span>
                  </div>
                  <Separator />
                  <div className='flex justify-between'>
                    <span>Outdoor/Transit</span>
                    <span>$10K</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className='grow'>
              <div className='flex flex-row h-full w-full gap-3'>
                <Card className='w-3/5'>
                  <CardHeader className='text-lg'>Digital</CardHeader>
                  <CardContent>
                    <div className='flex flex-col gap-2 text-md mt-10'>
                      <div className='flex flex-row justify-between'>
                        <div className='invisible w-2/5'>a</div>
                        <div className='w-[30%] text-end'>Spend</div>
                        <div className='w-[30%] text-end'>CPL</div>
                      </div>
                      <Separator />
                      <div className='flex flex-row justify-between'>
                        <div className='w-2/5'>Linkedin</div>
                        <div className='w-[30%] text-end'>$28.6K</div>
                        <div className='w-[30%] text-end'>$103.5</div>
                      </div>
                      <Separator />
                      <div className='flex flex-row justify-between'>
                        <div className='w-2/5'>Twitter</div>
                        <div className='w-[30%] text-end'>$6.5K</div>
                        <div className='w-[30%] text-end'>$80.5</div>
                      </div>
                      <Separator />
                      <div className='flex flex-row justify-between'>
                        <div className='w-2/5'>Diplay</div>
                        <div className='w-[30%] text-end'>$15.6K</div>
                        <div className='w-[30%] text-end'>$90.3</div>
                      </div>
                      <Separator />
                      <div className='flex flex-row justify-between'>
                        <div className='w-2/5'>Google Ads</div>
                        <div className='w-[30%] text-end'>$43.5K</div>
                        <div className='w-[30%] text-end'>$75.5</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className='w-2/5'>
                  <CardHeader>Web conv. rate</CardHeader>
                  <CardContent>
                    <div>
                      <span className='text-6xl font-semibold'>3.59</span>
                      <span className='text-4xl'>%</span>
                    </div>
                    <span className='text-md'>this month</span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
