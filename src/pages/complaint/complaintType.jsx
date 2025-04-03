import React, { useState} from 'react';

export const ComplainantTypeStep = ({
    error,
    formData,
    handleNext,
    handleComplaintTypeChange,
    handleCancel,
    handlePrivious
}) => {
    return (
        <div className="p-6">
            <h1 className="text-[25px] font-bold mb-6">Complaint Type</h1>
            <p className="mb-4 font-bold text-xl">Make a selection below</p>

            {error && <div className="border border-red-500 bg-yellow-100 text-red-700 p-4 rounded-md flex items-start gap-2">
                <span className="text-red-500 text-xl">⚠️</span>
                <div>
                    <strong className="text-red-700 text-lg">Error:</strong>
                    <p>
                        {error}
                    </p>
                </div>
            </div>
            }

            <div className="space-y-6">
                <div className="flex items-start">
                    <input
                        type="radio"
                        id="transactions"
                        name="complaintType"
                        className="mt-1 mr-2"
                        checked={formData.complaintType === 'Transactions'}
                        onChange={() => handleComplaintTypeChange('Transactions')}
                    />
                    <div>
                        <label htmlFor="transactions" className="font-medium text-gray-600 text-xl">Transactions</label>
                        <p className="text-sm text-[black] mt-1 text-justify">
                            Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance
                            advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, coordination of
                            benefits and premium payment.
                        </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <input
                        type="radio"
                        id="codeSets"
                        name="complaintType"
                        className="mt-1 mr-2"
                        checked={formData.complaintType === 'Code Sets'}
                        onChange={() => handleComplaintTypeChange('Code Sets')}
                    />
                    <div>
                        <label htmlFor="codeSets" className="font-medium text-gray-600 text-xl">Code Sets</label>
                        <p className="text-sm text-[black] mt-1 text-justify">
                            Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians
                            Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and
                            NDC (National Drug Codes) codes with which providers and health plans are familiar. These are the adopted code sets for procedures,
                            diagnoses, and drugs.
                        </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <input
                        type="radio"
                        id="uniqueIdentifiers"
                        name="complaintType"
                        className="mt-1 mr-2"
                        checked={formData.complaintType === 'Unique Identifiers'}
                        onChange={() => handleComplaintTypeChange('Unique Identifiers')}
                    />
                    <div>
                        <label htmlFor="uniqueIdentifiers" className="font-medium text-gray-600 text-xl">Unique Identifiers</label>
                        <p className="text-sm text-[black] mt-1 text-justify">
                            Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification
                            Number (EIN).
                        </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <input
                        type="radio"
                        id="operatingRules"
                        name="complaintType"
                        className="mt-1 mr-2"
                        checked={formData.complaintType === 'Operating Rules'}
                        onChange={() => handleComplaintTypeChange('Operating Rules')}
                    />
                    <div>
                        <label htmlFor="operatingRules" className="font-medium text-gray-600 text-xl">Operating Rules</label>
                        <p className="text-sm text-[black] mt-1 text-justify">
                            Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules: Electronic Funds
                            Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim Status, and Eligibility for a Health Plan.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-12">
                <button
                    onClick={handlePrivious}
                    className="bg-[#2e6da4] hover:bg-yellow-400 text-white py-2 px-6  transition duration-200 border-1 border-gray-500 cursor-pointer rounded"
                >
                    &lt;Welcome
                </button>
                <button
                    onClick={handleCancel}
                    className="bg-[#2e6da4] hover:bg-yellow-400 text-white py-2 px-6  transition duration-200 border-1 border-gray-500 cursor-pointer rounded"
                >
                    Cancel
                </button>
                <button
                    onClick={handleNext}
                    className="bg-[#2e6da4] hover:bg-yellow-400 text-white py-2 px-6  transition duration-200 border-1 border-gray-500 cursor-pointer rounded"
                >
                    Complainant Information&gt;
                </button>
            </div>
        </div>
    );
}