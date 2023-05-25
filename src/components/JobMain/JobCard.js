import React,{useEffect,useState} from 'react';
import JobBoardComponent2 from './JobBoardComponent2'
import data from '../../assests/data.json';

function App(){
  const[jobs,setJobs]=useState([]);
  const[filters,setFilters]=useState([]);
  useEffect(()=>setJobs(data),[]);

  const filterFunc=({role,level,tools,languages}) => {
  if(filters.length === 0) {
  return true;
}
 const tags = [role,level];

if (tools){
    tags.push(...tools);
}
if(languages){
    tags.push(...languages);
}

    return tags.some((tag)=>filters.includes(tag));
  };

  const handleTagClick=(tag)=>{
    if(filters.includes(tag)) return;

    setFilters([...filters,tag]);
  };

  const handleFilterClick=(passedFilter)=>{
    setFilters(filters.filter((f) =>f !==
      passedFilter));
  };

  const clearFilters =()=>{
setFilters([]);
  };
 
const filteredJobs=jobs.filter(filterFunc);
   

  return(
    
    
    <div className='App'>

    
    


    {filters.length > 0 && (
      <div className={`flex bg-white shadow-md
       my-16 mx-10 p-6 rounded`}>
          {filters.map( (filter)=> (
                <span 
                className='cursor-pointer
                 mr-4 mb-4 rounded font-bold 
                 text-pink-500 bg-pink-100 p-2
                 sm:mb-0'
                 onClick={()=>
                handleFilterClick(filter)}>
                  x{filter}
                  </span>
                   ))}
                   <button onClick={clearFilters}
                   className='font-bold text-gray-700
                   ml-auto'>Clear</button>
       </div>
       )}
    {jobs.length ===0 ? (
      <p>jobs r fetching...</p>
    ) : (
      filteredJobs.map((job)=> (
        <JobBoardComponent2
      job={job} 
      key={job.id}
      handleTagClick={handleTagClick}
       />
       ))
    )}
    </div>
  
  
  );
}
export default App;