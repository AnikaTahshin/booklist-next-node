
import React from 'react'
const BookDetails = async({params}:any) => {

  const res = await fetch(`http://localhost:8081/books/${params.id}`, {
    cache: "force-cache",
  });
  const data = await res.json();
  const booklist = data.data[0];

  
  return (
    <div>

      <h1>{booklist?.name}</h1>
      <p>{booklist?.description}</p>
    </div>
  )
}

export default BookDetails