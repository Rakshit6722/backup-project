// app/page.js
import Image from "next/image";

export default function Home() {
  return (
    // Removed min-h-screen since layout already handles full height
    // Adjusted padding to account for sidebar space
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-full p-8 pb-20 gap-16 sm:p-12">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-4xl mx-auto">
          
      </main>
    </div>
  );
}