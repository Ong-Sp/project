import Image from "next/image";


export default function Home() {
  return (
    <>
    <header>
      <nav>
        menu1 | memu2
      </nav>
    </header>

    <main 
    className="h-[85vh]">
    <h1 className="text-4xl text-yellow-800">
      hello
    </h1>
      <p 
      className="bg-blue-200 shadow-xl
      mt-4 p-4 rounded-lg border-2 border-blue-900">
        Lorem ipsum dolor, sit amet consec tetur adipisicing elit. Incidunt voluptate quasi alias culpa eligendi, quisquam vel vero earum? Impedit architecto et facere. Sunt corrupti incidunt quas, id vel dolorum atque.
      </p>

      
      <Image
      src="https://computing.psu.ac.th/th/wp-content/uploads/2023/09/PSU-CoC-ENG_01_x49.png" width={300} height={300} alt="next.js logo" />

      <p 
      className="bg-blue-200 shadow-xl
      mt-4 p-4 rounded-lg border-2 border-blue-900">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt voluptate quasi alias culpa eligendi, quisquam vel vero earum? Impedit architecto et facere. Sunt corrupti incidunt quas, id vel dolorum atque.
      </p>
    </main>
   
    </>
  );
}
