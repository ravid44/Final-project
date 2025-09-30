import React from 'react'

export default function ListCategories({page, getCategory}) {
  
  return <button onClick={getCategory} className='px-3 py-5 mb-5 ml-[1rem] bg-teal-100 text-teal-700 rounded-md hover:bg-teal-200 cursor-pointer'>{page}</button>
}
