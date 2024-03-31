"use client"
import Link from 'next/link';

const CarNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">The requested car could not be found.</p>
            <Link href="/search">
                <p className="text-blue-500 hover:underline">Go back to car list</p>
            </Link>
        </div>
    );
};

export default CarNotFound;