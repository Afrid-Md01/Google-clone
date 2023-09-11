import React, { useContext, useEffect, useState } from 'react'
import SearchResultsHeader from './header/SearchResultsHeader'
import HomeFooter from '../home/Footer/HomeFooter'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { ContextApi } from '../Context/ContextApi';
import {fetchDataFromApi} from '../../utils/Api';
import SearchedItemTemplate from './SearchedItemTemplate';
import SearchedImageTemplate from './SearchedImageTemplate';
import Pagination from './Pagination';

function SearchResults() {
  const [result, setResult] = useState();
  const {query, startIndex} = useParams();
  const {imageSearch} = useContext(ContextApi);
  

  useEffect(()=>{
    fetchSearchResults();
  },[query,imageSearch,startIndex])

  const fetchSearchResults =()=>{
    let payload = {q:query, start: startIndex};
    if(imageSearch){
      payload.searchType = 'image';
    }
    fetchDataFromApi(payload).then((res) => {
      console.log(res);
      setResult(res);
    })
  }


  if(!result) return;

  const{items,queries, searchInformation} = result;


  return (
    <div className='flex flex-col min-h-[100vh] dark:bg-slate-900'>
      <SearchResultsHeader/>
      <main className='grow p-[12px] pb-0 md:pr-5 md:pl-20'>
        <div className='flex text-sm text-[#70757a] mb-3'>
          {`About ${searchInformation.formattedTotalResults} results in ${searchInformation.formattedSearchTime}`}
        </div>
        {!imageSearch ? (<>
          {items.map((item) =>(
            <SearchedItemTemplate key={Math.random()} data={item}/>
          ))}
        </>) :(
          <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4'>
            {items.map((item) =>(
            <SearchedImageTemplate key={Math.random()} data={item}/>
          ))}
          </div>
        )}
        <Pagination queries={queries}/>
      </main>
      <footer>
        <HomeFooter/>
      </footer>
    </div>
  )
}

export default SearchResults
