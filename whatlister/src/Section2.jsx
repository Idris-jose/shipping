import { Package, Truck, Globe,Phone,Lock,BadgeDollarSign } from 'lucide-react';
export default function Section2() {
    

    const features = [
        {
            number: "01",
            title: "FAST DELIVERY",
            description: "We ensure that your packages are delivered on time, every time.",
            icon: <Truck className="text-orange-400" size={24} />
        },
        {
            number: "02",
            title: "GLOBAL REACH",
            description: "We ship to over 200 countries worldwide.",
            icon: <Globe className="text-orange-400" size={24} />
        },
        {
            number: "03",
            title: "24/7 SUPPORT",
            description: "Our customer support team is available around the clock to assist you.",
            icon: <Phone className="text-orange-400" size={24} />
        },
        {
            number: "04",
            title: "SECURE SHIPPING",
            description: "We prioritize the safety and security of your packages.",
            icon:<Lock className="text-orange-400" size={24} />
        },
        {
            number: "05",
            title: "AFFORDABLE RATES",
            description: "We offer competitive pricing without compromising on quality.",
            icon: <BadgeDollarSign className="text-orange-400" size={24} />
        },
        {
            number: "06",
            title: "EASY TRACKING",
            description: "Track your shipments in real-time with our user-friendly interface.",
            icon: <Package className="text-orange-400" size={24} />
        }
    ]
    return (
        <>
            <section className="min-h-screen flex flex-col p-8 bg-[#181818] relative">
                     {/* Top curvy separator */}
                      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0" style={{ transform: "translateY(-98%)" }}>
                        <svg 
                          data-name="Layer 1" 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 1200 120" 
                          preserveAspectRatio="none" 
                          className="relative block w-full h-16"
                          style={{ fill: "#181818" }}
                        >
                          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C-0.56,53.93,35.57,83.47,71.16,97.67,148.76,128.16,246.32,78.35,321.39,56.44Z"></path>
                        </svg>
                      </div>

                <h4 className="text-orange-200">About us</h4>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg mt-4">
                    Why choose <span className="underline decoration-wavy text-orange-600">us.</span>
                </h1>
                <h3 className="text-lg md:text-light font-light text-gray-200 mt-6 mb-4">
                    We are a team of dedicated professionals committed to providing the best shipping solutions for your needs.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-center mt-10 w-full">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg flex flex-col items-start gap-4 w-full min-w-[260px] max-w-[400px] h-full hover:bg-orange-600 hover:scale-105 duration-300 transition-all ease-in-out" 
                        >
                            <h2 className="text-5xl font-black text-orange-400">{feature.number}</h2>
                            <h3 className="text-xl font-medium uppercase text-white">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                            <span className="text-5xl">{feature.icon}</span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}