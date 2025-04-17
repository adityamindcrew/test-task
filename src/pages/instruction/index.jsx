import React, { useState } from 'react';

export const Instruction = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { id: 1, title: "Identify the type of HIPAA/ACA complaint" },
        { id: 2, title: "Provide your contact information" },
        { id: 3, title: "Identify the Filed Against Entity" },
        { id: 4, title: "Describe the HIPAA/ACA violation" },
        { id: 5, title: "Review and Submit" }
    ];

    const handleNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Header */}
            <header className="bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <img src="/api/placeholder/100/40" alt="CMS Logo" className="h-8" />
                        </div>
                        <button className="md:hidden p-2 rounded border border-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <nav className="hidden md:flex space-x-6">
                            <a href="#" className="text-white hover:text-gray-200">Home</a>
                            <a href="#" className="text-white hover:text-gray-200">About ASETT</a>
                            <a href="#" className="text-white hover:text-gray-200">Contact Us</a>
                            <div className="relative group">
                                <button className="text-white hover:text-gray-200 flex items-center">
                                    Support
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                            <a href="#" className="text-white hover:text-gray-200 flex items-center">
                                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                                Registerjdhbfghjbgkf
                            </a>
                            <a href="#" className="text-white hover:text-gray-200 flex items-center">
                                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                Login
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className="md:hidden bg-blue-700 text-white">
                <nav className="container mx-auto px-4 py-2 flex flex-col">
                    <a href="#" className="py-2">Home</a>
                    <a href="#" className="py-2">About ASETT</a>
                    <a href="#" className="py-2">Contact Us</a>
                    <a href="#" className="py-2">Support</a>
                    <a href="#" className="py-2 flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        Register
                    </a>
                    <a href="#" className="py-2 flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        Login
                    </a>
                </nav>
            </div>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-6">
                <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
                    Administrative Simplification Enforcement and Testing Tool (ASETT)
                </h1>

                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="text-red-600 mb-4">
                        <p className="font-medium">Disclaimer: If you file a complaint without registration, you will not be able to view your complaints, upload supporting documents, correspond electronically, or test transactions.</p>
                    </div>

                    <div className="mb-6">
                        <p className="mb-4">The following is the list of steps you will take in order to file a complaint regarding HIPAA Transactions and Code Sets, Unique Identifiers, and/or Operating Rules. If you wish to file a Health Insurance Privacy complaint, please visit the <a href="#" className="text-blue-600 hover:underline">Office for Civil Rights (OCR)</a> website.</p>
                    </div>

                    {/* Progress Steps */}
                    <div className="mb-8">
                        <div className="hidden md:block">
                            <div className="flex items-center">
                                {steps.map((step, index) => (
                                    <React.Fragment key={step.id}>
                                        <div className={`flex items-center ${index <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}>
                                            <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${index <= currentStep ? 'border-blue-600 bg-blue-100' : 'border-gray-300'}`}>
                                                {index < currentStep ? (
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                ) : (
                                                    <span>{step.id}</span>
                                                )}
                                            </div>
                                            <span className="ml-2 font-medium">{step.title}</span>
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className={`flex-grow mx-4 h-0.5 ${index < currentStep ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Steps */}
                        <div className="md:hidden">
                            <div className="flex justify-between mb-4">
                                {steps.map((step, index) => (
                                    <div
                                        key={step.id}
                                        className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${index <= currentStep ? 'border-blue-600 bg-blue-100 text-blue-600' : 'border-gray-300 text-gray-400'}`}
                                    >
                                        {index < currentStep ? (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <span>{step.id}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <p className={`text-blue-600 font-medium`}>
                                Step {currentStep + 1}: {steps[currentStep].title}
                            </p>
                        </div>
                    </div>

                    {/* Form Content */}
                    <div className="mb-8">
                        {currentStep === 0 && (
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Identify the type of HIPAA/ACA complaint</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <input type="radio" id="type1" name="complaintType" className="mr-2" />
                                        <label htmlFor="type1">Transaction and Code Set</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="radio" id="type2" name="complaintType" className="mr-2" />
                                        <label htmlFor="type2">Unique Identifiers</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="radio" id="type3" name="complaintType" className="mr-2" />
                                        <label htmlFor="type3">Operating Rules</label>
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 1 && (
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Provide your contact information</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block mb-1">Full Name</label>
                                        <input type="text" id="name" className="w-full p-2 border rounded" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-1">Email Address</label>
                                        <input type="email" id="email" className="w-full p-2 border rounded" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block mb-1">Phone Number</label>
                                        <input type="tel" id="phone" className="w-full p-2 border rounded" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Identify the Filed Against Entity</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="entityName" className="block mb-1">Entity Name</label>
                                        <input type="text" id="entityName" className="w-full p-2 border rounded" />
                                    </div>
                                    <div>
                                        <label htmlFor="entityType" className="block mb-1">Entity Type</label>
                                        <select id="entityType" className="w-full p-2 border rounded">
                                            <option value="">Select Entity Type</option>
                                            <option value="provider">Healthcare Provider</option>
                                            <option value="payer">Health Plan/Payer</option>
                                            <option value="clearinghouse">Clearinghouse</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="entityAddress" className="block mb-1">Entity Address</label>
                                        <textarea id="entityAddress" className="w-full p-2 border rounded" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Describe the HIPAA/ACA violation</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="violationDate" className="block mb-1">Date of Violation</label>
                                        <input type="date" id="violationDate" className="w-full p-2 border rounded" />
                                    </div>
                                    <div>
                                        <label htmlFor="violationDescription" className="block mb-1">Description of Violation</label>
                                        <textarea id="violationDescription" className="w-full p-2 border rounded" rows="5"></textarea>
                                    </div>
                                    <div>
                                        <p className="mb-2">Have you attempted to resolve this issue with the entity?</p>
                                        <div className="flex space-x-4">
                                            <div className="flex items-center">
                                                <input type="radio" id="attempted-yes" name="attemptedResolution" className="mr-2" />
                                                <label htmlFor="attempted-yes">Yes</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="radio" id="attempted-no" name="attemptedResolution" className="mr-2" />
                                                <label htmlFor="attempted-no">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 4 && (
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Review and Submit</h3>
                                <div className="bg-gray-50 p-4 rounded mb-4">
                                    <p className="mb-4">You can review all information entered before submitting your complaint to CMS. Once the complaint is submitted, CMS will review all information and respond to your complaint.</p>
                                </div>
                                <div className="rounded border p-4">
                                    <h4 className="font-medium mb-2">Complaint Summary</h4>
                                    <div className="space-y-2">
                                        <p><strong>Complaint Type:</strong> Transaction and Code Set</p>
                                        <p><strong>Your Name:</strong> [Name from form]</p>
                                        <p><strong>Filed Against:</strong> [Entity from form]</p>
                                        <p><strong>Violation Date:</strong> [Date from form]</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between">
                        <button
                            onClick={handlePrevStep}
                            className={`px-6 py-2 rounded ${currentStep === 0 ? 'bg-gray-300' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                            disabled={currentStep === 0}
                        >
                            Back
                        </button>
                        <button
                            onClick={handleNextStep}
                            className={`px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 ${currentStep === steps.length - 1 ? 'hidden' : ''}`}
                        >
                            Next
                        </button>
                        {currentStep === steps.length - 1 && (
                            <button className="px-6 py-2 rounded bg-green-600 text-white hover:bg-green-700">
                                Submit Complaint
                            </button>
                        )}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-200 py-4">
                <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
                    <p>&copy; 2025 Centers for Medicare & Medicaid Services. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};
