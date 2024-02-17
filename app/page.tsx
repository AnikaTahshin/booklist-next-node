

import BookList from "@/components/BookList";

const Home = async () => {
  const res = await fetch("http://localhost:8081/books", {
    cache: "force-cache",
  });
  const data = await res.json();
  const booklist = data.data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-6 grid-flow-row w-screen h-screen ">
      {booklist.map((item: any) => (
        <div
          key={item.id}
          className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <BookList key={item.id} data={item} />
        </div>
      ))}
    </div>
  );
};

export default Home;
