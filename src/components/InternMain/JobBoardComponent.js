import React from 'react';
import Applyintern from './Applyintern';

const JobBoardComponent =({
    job:{
        company,
        logo,
        isNew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,

    },
    handleTagClick,


})=>{
const tags =[role,level];
if (tools){
    tags.push(...tools);
}
if(languages){
    tags.push(...languages);
}
return(
    <div 
    className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${
        featured && 'border-l-4 border-pink-500 border-solid'
        } sm:flex-row sm:my-4`}>
    <div>
     <img 
     className='-mt-16 mb-4 w-20 h-20 sm:h-24 sm:w-24 sm:my-0'
     src={logo}
      alt={company}

     />
        </div>
            <div className='flex flex-col
             justify-between ml-4'> 
            <h3 className='font-bold text-pink-600'>
            {company}
            {isNew && (
                <span className='bg-pink-500 text-pink-100 font-bold m-2 py-1 px-2 rounded-full uppercase
                text-sm
                '>
            New
            </span>)}
            {featured &&(

             <span className='bg-pink-500 text-pink-100 font-bold m-2 py-1 px-2
              rounded-full uppercase text-sm'> 
                Featured
            </span> )}  
            
            </h3>
            <h2 className='font-bold text-xl my-2'>{position}</h2>
            <p className='text-gray-700'>
                {postedAt} . {contract} . {
                location}
             </p>
             </div>
            <div className='flex flex-wrap items-center mt-4 mx-4 pt-4 border-t
             border-gray-500
             border-solid
            sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0'>
                {tags
                 ? tags.map((tag)=>(
                <span
                onClick={()=>
                handleTagClick(tag)}
                 className='cursor-pointer 
                 text-pink-600
                 bg-pink-200 font-bold
                  mr-4 mb-4 p-2 rounded
                  sm:mb-0'>
                {tag}
                </span> 
                ))
                : ''}
                
            </div>
            <div>
  <Applyintern/>
</div>
            
        
    </div>
)};
export default JobBoardComponent;