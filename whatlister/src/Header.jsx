export default function Header() {
 return (
   <>
   <div className=" text-white p-8">
        <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl text-orange-600 font-bold">Treek</h1>
        <nav >
            <ul className="flex items-center space-x-4">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Service</a></li>
            <li><a href="#" className="hover:text-gray-400">office</a></li>
            <button className="bg-orange-600 p-3 rounded ">Get in touch</button>
            </ul>
        </nav>
        </div>
    </div>
   </>

 )
}