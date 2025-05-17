import { useState } from 'react';

export default function Section1() {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [destination, setDestination] = useState('');

    const handleTrackSubmit = (e) => {
        e.preventDefault();
        // Placeholder for tracking logic
        console.log('Tracking:', trackingNumber, 'Destination:', destination);
    };

    return (
        <section className="min-h-screen flex flex-col p-4 sm:p-8 bg-[#111112]">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center mt-10 max-w-7xl mx-auto">
                <div className="flex-1 flex flex-col items-start">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
                        WE WILL <span className="text-orange-500 animate-pulse">DELIVER</span> YOUR PACKAGE <br />
                        ALL OVER THE <span className="text-orange-500 underline decoration-wavy">WORLD</span>
                    </h1>
                    <h3 className="text-base sm:text-lg md:text-2xl font-light text-gray-200 mt-6 mb-4">
                        The <span className="text-orange-400 font-semibold">fastest</span>,{' '}
                        <span className="text-orange-400 font-semibold">easiest</span> way to book and manage your international shipping.
                    </h3>
                    <button
                        className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 rounded-2xl px-6 sm:px-8 py-3 mt-4 text-white font-bold shadow-lg transition-all duration-200 hover:scale-105"
                        aria-label="Learn more about our shipping services"
                    >
                        Learn more
                    </button>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-md flex flex-col bg-[#111112] p-6 rounded-2xl text-white gap-4 shadow-2xl border border-orange-600/30">
                        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-orange-400 tracking-wide">Ship Anywhere</h2>
                        <form
                            className="flex flex-col bg-[#1a1a1a] rounded-xl justify-between p-5 gap-3 shadow-inner"
                            onSubmit={handleTrackSubmit}
                        >
                            <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">Track Your Shipment</h3>
                            <input
                                type="text"
                                placeholder="Tracking number"
                                value={trackingNumber}
                                onChange={(e) => setTrackingNumber(e.target.value)}
                                className="p-3 bg-[#181818] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-white placeholder-gray-400"
                                aria-label="Enter tracking number"
                            />
                            <input
                                type="text"
                                placeholder="Destination country"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                className="p-3 bg-[#181818] mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-white placeholder-gray-400"
                                aria-label="Enter destination country"
                            />
                            <button
                                type="submit"
                                className="bg-orange-600 mt-4 p-3 rounded-md text-white font-semibold hover:bg-orange-700 transition"
                                aria-label="Start tracking shipment"
                            >
                                Get Started
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}