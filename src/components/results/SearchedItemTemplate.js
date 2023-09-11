import React from 'react'

function SearchedItemTemplate({data}) {

    function createMarkup(html) {
        return {__html: html};
      }

  return (
    <div className='flex flex-col py-3 mx-w-[700px]'>
      <div className='group cursor-pointer' onClick={()=>window.open(data.link)}>
        <div className='text-sm truncate text-[#202124] dark:text-white/[0.8]'>
            {data.formattedUrl}
        </div>
        <div className='group-hover:underline text-xl text-blue-800 pt-2 dark:text-blue-500'>
            {data.title}
        </div>
      </div>
      <div className='text-sm text-[#4d5156] leading-6 pt-1' dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)} />
    </div>
  )
}

export default SearchedItemTemplate
