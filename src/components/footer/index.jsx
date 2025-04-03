import React from 'react';
export const Footer = () => {
    return (
        <div className="border-t border-gray-300 py-4">
            <div className="flex justify-between text-blue-600 text-md underline">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Security Policy</a>
            </div>
        </div>
    );
}
