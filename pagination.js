 
//   const [itemsPerPages,setItemsPerPages] = useState(50)
//   const [currentPage,setCurrentPage] = useState(0)
//   const {count} = useLoaderData()

//   const numberOfPages = Math.ceil(count / itemsPerPages)

//   const pages = [...Array(numberOfPages).keys()]


// const handleItemsperpage = e =>{
       
//     const val = parseInt(e.target.value)
//     console.log(val);
//     setItemsPerPages(val)
//     console.log(itemsPerPages);
//     setCurrentPage(0)
    
// }

// const handlePrev = e =>{
//       if(currentPage > 0){
//          setCurrentPage(currentPage - 1)
//       }
// }

// const handleNext = ()=>{
//      if(currentPage <pages.length - 1){
//           setCurrentPage(currentPage + 1)
//      }
// }




// <div className='pagination'> 
// <p>Current Page: {currentPage} </p>
// <button className='btn' onClick={handlePrev} >Prev</button>
// {
   
//    pages.map(page => <button onClick={()=>setCurrentPage(page)} className={currentPage === page && 'selected' }>{page}</button> )
// }
// <button onClick={handleNext} className='btn'>Next</button>
// <select value={itemsPerPages} name="" id="" onChange={handleItemsperpage}>
//    <option value="5">5</option>
//    <option value="10">10</option>
//    <option value="20">20</option>
//    <option value="50">50</option>
// </select>
// </div>