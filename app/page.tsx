
import HomeView from "@/views/Home";


const Home = async () => {

  
  const res = await fetch("http://localhost:8081/books");
  const data = await res.json();
  const booklist = data.data;

  return (
      <HomeView booklist={booklist} />
  );
};

export default Home;
