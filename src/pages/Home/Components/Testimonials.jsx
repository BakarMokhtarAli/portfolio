import React from 'react'

export const Testimonials = () => {
  return (
    <>
    <h1 className="text-5xl text-slate-900 dark:text-white text-center mb-8 mt-4">My Happy Clients</h1>
    <div className="w-3/4 my-4 m-auto grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="h-fit w-full md:w-80 p-4 flex flex-col shadow-sm rounded border border-gray-300 dark:border-slate-500 bg-white dark:bg-slate-900">
            <div className='flex flex-row items-center gap-2'>
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="rounded-full w-7 h-7" />
            <h1 className="text-xs dark:text-slate-600 text-gray-500 ml-1">David Osten</h1>
            </div>
            <span className='text-lg dark:text-gray-300 text-slate-500 mt-2'>I was having trouble with my order, but <span className="dark:text-yellow-400 text-slate-900">Bakar Mokhtar Ali </span> was so helpful and patient. He went above and beyond to make sure I was satisfied.</span>
        </div>
        <div className="h-fit w-full md:w-80 p-4 flex flex-col shadow-sm rounded border border-gray-300 dark:border-slate-500 bg-white dark:bg-slate-900">
            <div className='flex flex-row items-center gap-2'>
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="rounded-full w-7 h-7" />
            <h1 className="text-xs dark:text-slate-600 text-gray-500 ml-1">Sara Smith</h1>
            </div>
            <span className='text-lg dark:text-gray-300 text-slate-500 mt-2'>I had a question about the product, and <span className="dark:text-yellow-400 text-slate-900">Bakar Mokhtar </span> answered it in a clear and concise way. I felt like He really understood my needs.</span>
        </div>
        <div className="h-fit w-full md:w-80 p-4 flex flex-col shadow-sm rounded border border-gray-300 dark:border-slate-500 bg-white dark:bg-slate-900">
            <div className='flex flex-row items-center gap-2'>
            <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="rounded-full w-7 h-7" />
            <h1 className="text-xs dark:text-slate-600 text-gray-500 ml-1">Sara Smith</h1>
            </div>
            <span className='text-lg dark:text-gray-300 text-slate-500 mt-2'><span className="dark:text-yellow-400 text-slate-900">Bakar Mokhtar Ali </span> went out of His way to help me with my problem. I'm so grateful for His excellent customer service.</span>
        </div>
        <div className="h-fit w-full md:w-80 p-4 flex flex-col shadow-sm rounded border border-gray-300 dark:border-slate-500 bg-white dark:bg-slate-900">
            <div className='flex flex-row items-center gap-2'>
            <img src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="rounded-full w-7 h-7" />
            <h1 className="text-xs dark:text-slate-600 text-gray-500 ml-1">Max Mouse</h1>
            </div>
            <span className='text-lg dark:text-gray-300 text-slate-500 mt-2'>I've never had a bad experience with <span className="dark:text-yellow-400 text-slate-900">Bakar Mokhtar Ali </span> He always willing to help, and He always go the extra mile.</span>
        </div>
    </div>
    </>
  )
}
