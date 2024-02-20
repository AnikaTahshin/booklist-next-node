
import DetailsView from '@/views/DetailsView';
import React from 'react'
const BookDetails = async({params}:any) => {

  const res = await fetch(`http://localhost:8081/books/${params.id}`);
  const data = await res.json();
  const booklist = data.data[0];

  return (
    <DetailsView booklist={booklist} />
  )
}

export default BookDetails