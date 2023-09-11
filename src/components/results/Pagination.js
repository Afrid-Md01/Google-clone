import React, { useEffect, useState } from 'react';
import { pagination } from '../../utils/Constants';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Logo from '../../images/googlelogo_color_272x92dp.png';

function Pagination({queries}) {
    const {query} = useParams();
    const[page, setPage] = useState(pagination[0].startIndex);
    const history = useHistory();

    useEffect(()=>{
        setPage(pagination[0].startIndex);
    },[query]);

    const paginationClickHandler=(startIndex)=>{
        setPage(startIndex);
        history.push(`/${query}/${startIndex}`);
    }

  return (
    <div className='flex flex-col items-center py-14 max-w-[700px]'>
        <div className='relative text-[#4285f4]'>
            {queries.previousPage && (
                <div className='absolute left-[-30px] md:left-[-40px] top-[10px]' onClick={()=>paginationClickHandler(queries.previousPage[0].startIndex)}>
                    <FiChevronLeft size={20} className='cursor-pointer'/>
                    <div className='cursor-pointer absolute left-[-5px] top-[40px] hidden md:block'>
                        Prev
                    </div>
                </div>
            )}

            <img src={Logo} alt='google-logo' className='w-[250px]  md:w-[300px]'/>

            {queries.nextPage && (
                <div className='absolute right-[-30px] md:right-[-40px] top-[10px]' onClick={()=>paginationClickHandler(queries.nextPage[0].startIndex)}>
                    <FiChevronRight size={20} className='cursor-pointer'/>
                    <div className='cursor-pointer absolute left-[-5px] top-[40px] hidden md:block'>
                        Next
                    </div>
                </div>
            )}
        </div>  
        <div className='flex gap-3 text-black/[0.8]'>
            {pagination.map((p,index)=>(
                <span key={index} onClick={()=>paginationClickHandler(p.startIndex)}
                className={`cursor-pointer dark:text-white/[0.8] ${page === p.startIndex ? 'border border-gray px-1 rounded-md bg-[#f2f2f2] dark:bg-slate-700 dark:border-slate-600 font-bold text-blue-600 dark:text-blue-600':''} `}
                >{p.page}</span>
            ))}
        </div>
    </div>
  )
}

export default Pagination
