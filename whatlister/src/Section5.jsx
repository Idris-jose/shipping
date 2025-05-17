import { ArrowUpRight } from 'lucide-react';
export default function Section5() {
    return(
     <>
     <section className="min-h-screen flex flex-col justify-center items-center p-6 sm:p-8">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center text-white font-black leading-tight">
          Let us deliver<br/> your package to its <br/>
          <span className="decoration-wavy text-orange-600 underline">destination </span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8 w-full max-w-md">
            <button className='w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded hover:bg-orange-700 transition'>
                Learn more <ArrowUpRight />
            </button>
            <button className='w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white text-orange-600 rounded border border-orange-600 hover:bg-orange-50 transition'>
                Download App
            </button>
        </div>
      </section>
     </>
    )
}