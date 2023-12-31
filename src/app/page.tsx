/* eslint-disable jsx-a11y/alt-text */
import {Home as HomeIcon, Search, Library, ChevronRight, ChevronLeft, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList } from 'lucide-react'

import Image from 'next/image'

export default function Home() {
  return (
  <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-72 bg-zinc-950 p-6">
      <div className='flex items-center gap-2'>
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>


        <nav className='space-y-5 mt-10'>
         <a href="#" className='flex items-center gap-2 text-sm font-semibold text-zinc-100'>
          <HomeIcon/>
          Home
         </a>
          <a href="#" className='flex items-center gap-2 text-sm font-semibold text-zinc-100'>
          <Search/>
          Search
          </a>
         <a href="#" className='flex items-center gap-2 text-sm font-semibold text-zinc-100'>
          <Library/>
          Your Library
         </a>
        </nav>

        <nav className='flex flex-col gap-3  mt-6 pt-6 border-t border-zinc-800'>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>System of a down 1</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Bk - Caminhos  2</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>Baco exu do Blues 3</a>
          <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>FROID 4</a>
        
        </nav>

      </aside>

      <main className="flex-1 p-6">
        <div className='flex items-center gap-4'>
          <button className=' rounded-full bg-black/20 p-1' >
            <ChevronLeft/>
          </button>
          <button className=' rounded-full bg-black/20 p-1 '>
            <ChevronRight/>
          </button>
        </div>

        <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

        <div className="grid grid-cols-3 gap-4 mt-2 " >
          
          <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image width={104} height={104} src='/album.jpg' alt='Capa do album' />
            <strong>Toxicity</strong>
            
            <button className='w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible  group-hover:visible '>
              <Play/>
            </button>

           </a>
           <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image width={104} height={104} src='/album.jpg' alt='Capa do album' />
            <strong>Toxicity</strong>
            
            <button className='w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible  group-hover:visible '>
              <Play/>
            </button>

           </a>
           <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image width={104} height={104} src='/album.jpg' alt='Capa do album' />
            <strong>Toxicity</strong>
            
            <button className='w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible  group-hover:visible '>
              <Play/>
            </button>

           </a>
           <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image width={104} height={104} src='/album.jpg' alt='Capa do album' />
            <strong>Toxicity</strong>
            
            <button className='w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible  group-hover:visible '>
              <Play/>
            </button>

           </a>
           <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image width={104} height={104} src='/album.jpg' alt='Capa do album' />
            <strong>Toxicity</strong>
            
            <button className='w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible  group-hover:visible '>
              <Play/>
            </button>

           </a>
           <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image width={104} height={104} src='/album.jpg' alt='Capa do album' />
            <strong>Toxicity</strong>
            
            <button className='w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible  group-hover:visible '>
              <Play/>
            </button>

           </a>
         

        </div>

        <h2 className='font-semibold text-3xl mt-10'>Good Afternoon</h2>

        <div className="grid grid-cols-8 gap-4 mt-4">
          <a href='' className="bg-whith/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 ">
            <Image className='w-full' width={120} height={120} src="/album.jpg" alt={'Toxicity'}/>
            <strong className='font-semibold' >Daili Mix </strong>
            <span className='text-sm text-zinc-500'>Wallow Coin , girls red azul</span>
          </a>

          <a href='' className="bg-whith/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 ">
            <Image className='w-full' width={120} height={120} src="/album.jpg" alt={'Toxicity'}/>
            <strong className='font-semibold' >Daili Mix </strong>
            <span className='text-sm text-zinc-500'>Wallow Coin , girls red azul</span>
          </a>

          <a href='' className="bg-whith/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 ">
            <Image className='w-full' width={120} height={120} src="/album.jpg" alt={'Toxicity'}/>
            <strong className='font-semibold' >Daili Mix </strong>
            <span className='text-sm text-zinc-500'>Wallow Coin , girls red azul</span>
          </a>

          <a href='' className="bg-whith/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 ">
            <Image className='w-full' width={120} height={120} src="/album.jpg" alt={'Toxicity'}/>
            <strong className='font-semibold' >Daili Mix </strong>
            <span className='text-sm text-zinc-500'>Wallow Coin , girls red azul</span>
          </a>

          <a href='' className="bg-whith/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 ">
            <Image className='w-full' width={120} height={120} src="/album.jpg" alt={'Toxicity'}/>
            <strong className='font-semibold' >Daili Mix </strong>
            <span className='text-sm text-zinc-500'>Wallow Coin , girls red azul</span>
          </a>
        </div>


        </main>
    </div>


    <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
    <div className='flex items-center gap-3'>
      <Image  width={56} height={56} src="/album.jpg" alt={'Toxicity'}/>
        <div className='flex flex-col '>
          <strong className='font-normal'>(Prison song)</strong>
          <span className='text-xs text-zinc-400'>System</span>
        </div>
     </div>

      <div className='flex flex-col items-center gap-2 '>
        <div className='flex items-center gap-6'>
            <Shuffle size={20}  className='text-zinc-200' />
            <SkipBack  size={20} className='text-zinc-200' />
            
             <button className='w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-white text-black '> 
                  <Play/>          
              </button>

            <SkipForward size={20} className='text-zinc-200'/> 
            <Repeat size={20} className='text-zinc-200'/>
        </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-500' >0.31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1'></div>
            </div>
            <span className='text-xs text-zinc-500' >2.14</span>

      </div>
      </div>

      <div className='flex items-center gap-2'>
        <Mic2 size={20} />
        <LayoutList size={20}/>

      </div>


      
    </footer>
  </div>
  )
}
