import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="mx-auto my-2">
            <h1 className="text-xl text-center md:text-2xl font-bold text-blue-500 mb-4">
                Administrative Simplification Enforcement and Testing Tool (ASETT)
            </h1>

            <div className="border-t border-gray-300 my-4"></div>

            <div className="bg-red-50 border border-red-300 rounded-md p-4 mb-6">
                <p className="text-red-600 text-sm md:text-base">
                    <span className="font-bold">Disclaimer:</span> If you file a complaint without registration, you will not be able to view your
                    complaints, upload supporting documents, correspond electronically, or test transactions.
                </p>
            </div>

            <div className="mb-6">
                <p className="text-gray-800 mb-4">
                    The following is the list of steps you will take in order to file a complaint regarding HIPAA Transactions
                    and Code Sets, Unique Identifiers, and/or Operating Rules. If you wish to file a Health Insurance Privacy
                    complaint, please visit the <a href="#" className="text-blue-600 hover:underline">Office for Civil Rights (OCR) website</a>.
                </p>

                <div className="space-y-3 my-6">
                    <div className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 font-medium rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                            1
                        </div>
                        <p className="ml-3 text-gray-800">Identify the type of HIPAA/ACA complaint</p>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 font-medium rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                            2
                        </div>
                        <p className="ml-3 text-gray-800">Provide your contact information</p>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 font-medium rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                            3
                        </div>
                        <p className="ml-3 text-gray-800">Identify the Filed Against Entity</p>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 font-medium rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                            4
                        </div>
                        <p className="ml-3 text-gray-800">Describe the HIPAA/ACA violation</p>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 font-medium rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                            5
                        </div>
                        <p className="ml-3 text-gray-800">Review and Submit</p>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <p className="text-gray-800">
                    You can review all information entered before submitting your complaint to CMS. Once the
                    <span className="font-semibold"> complaint is submitted</span>, CMS will review all information and respond to your complaint.
                </p>
            </div>

            <p className="mb-6 text-gray-800">
                Click the Complaint Type button below to begin filing your complaint.
            </p>

            <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
                <button className="bg-[#2e6da4] hover:bg-yellow-400 text-white py-2 px-6  transition duration-200 border-2 border-gray-500 cursor-pointer">
                    Cancel
                </button>
                <button
                    onClick={() => navigate('/complaint')}
                    className="bg-[#2e6da4] hover:bg-yellow-400 text-white py-2 px-6  transition duration-200 border-2 border-gray-500 cursor-pointer">
                    Complaint Type &gt;
                </button>
            </div>
        </div>
    );
};