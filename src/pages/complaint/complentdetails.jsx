import React from 'react';

export const ComplainantDetailsForm = ({
    formData,
    setFormData,
    handlePrivious,
    handleNext,
    handleCancel
}) => {
    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle radio button changes for anonymous selection
    const handleAnonymousChange = (value) => {
        setFormData(prevState => ({
            ...prevState,
            isAnonymous: value
        }));
    };

   

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Complainant Details</h1>

            {/* Anonymous selection section */}
            <div className="bg-gray-100 p-4 rounded mb-4">
                <div className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                        <label className="font-medium">Do you want to remain anonymous during this process?<span className="text-red-500">*</span></label>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="anonymousYes"
                                    name="isAnonymous"
                                    className="mr-2 cursor-pointer"
                                    checked={formData.isAnonymous === true}
                                    onChange={() => handleAnonymousChange(true)}
                                />
                                <label htmlFor="anonymousYes">Yes</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="anonymousNo"
                                    name="isAnonymous"
                                    className="mr-2 cursor-pointer"
                                    checked={formData.isAnonymous === false}
                                    onChange={() => handleAnonymousChange(false)}
                                />
                                <label htmlFor="anonymousNo">No</label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="font-medium">Disclaimer:</p>
                        <p className="text-sm">
                            If you select yes, CMS will not share your information with the Filed Against
                            Entity (FAE) during the investigation process. However, information provided
                            in this complaint is subject to rules and policies under the Freedom of
                            Information Act (FOIA).
                        </p>
                    </div>
                </div>
            </div>

            {/* Form fields with alternating background */}
            <div className="w-full max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 bg-gray-100 p-2">
                    <div className="flex items-center">
                        <label className="font-medium">
                            Complainant Organization Name<span className="text-red-500">*</span>
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="complainantOrgName"
                            value={formData.complainantOrgName}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded bg-white"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-2">
                    <div className="flex items-center">
                        <label className="font-medium">
                            Complainant Organization Type
                        </label>
                    </div>
                    <div>
                        <select
                            name="complainantOrgType"
                            value={formData.complainantOrgType}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded bg-white"
                        >
                            <option value="--None--">--None--</option>
                            <option value="Hospital">Hospital</option>
                            <option value="Covered Health Care Provider">Covered Health Care Provider</option>
                            <option value="Insurance">Insurance</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 bg-gray-100 p-2">
                    <div className="flex items-center">
                        <label className="font-medium">
                            Complainant Organization Type (Other)
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="complainantOrgTypeOther"
                            value={formData.complainantOrgTypeOther}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded bg-white"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-2">
                    <div className="flex items-center">
                        <label className="font-medium">
                            Complainant Organization Role
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="complainantOrgRole"
                            value={formData.complainantOrgRole}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded bg-white"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 bg-gray-100 p-2">
                    <div className="flex items-center">
                        <label className="font-medium">
                            Complainant Organization Phone Number<span className="text-red-500">*</span>
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="complainantOrgPhone"
                            value={formData.complainantOrgPhone}
                            onChange={handleInputChange}
                            placeholder="() -"
                            className="w-full p-2 border border-gray-300 rounded bg-white"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-2">
                    <div className="flex items-center">
                        <label className="font-medium">
                            Complainant Title<span className="text-red-500">*</span>
                        </label>
                    </div>
                    <div>
                        <select
                            name="complainantTitle"
                            value={formData.complainantTitle}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded bg-white"
                        >
                            <option value="--None--">--None--</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Mrs.">Mrs.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Dr.">Dr.</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 bg-gray-100 p-2">
                    <div className="flex items-center">
                        <label className="font-medium">
                            Complainant First Name<span className="text-red-500">*</span>
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="complainantFirstName"
                            value={formData.complainantFirstName}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded bg-white"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-2">
                    <div className="flex items-center">
                        <label className="font-medium">
                            Complainant MI
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="complainantMI"
                            value={formData.complainantMI}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded bg-white"
                        />
                    </div>
                </div>

                {/* Added Address Line 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 bg-gray-100 p-2">
                    <div className="flex items-center">
                        <label className="font-medium">
                            Complainant Address Line 1<span className="text-red-500">*</span>
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="complainantAddressLine1"
                            value={formData.complainantAddressLine1 || ''}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded bg-white"
                        />
                    </div>
                </div>

                {/* Added Address Line 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-2">
                    <div className="flex items-center">
                        <label className="font-medium">
                            Complainant Address Line 2
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="complainantAddressLine2"
                            value={formData.complainantAddressLine2 || ''}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded bg-white"
                        />
                    </div>
                </div>

                {/* Added City/Town */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 bg-gray-100 p-2">
                    <div className="flex items-center">
                        <label className="font-medium">
                            Complainant City/Town<span className="text-red-500">*</span>
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="complainantCity"
                            value={formData.complainantCity || ''}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded bg-white"
                        />
                    </div>
                </div>

                {/* Added State/Territory as dropdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-2">
                    <div className="flex items-center">
                        <label className="font-medium">
                            Complainant State/Territory<span className="text-red-500">*</span>
                        </label>
                    </div>
                    <div>
                        <select
                            name="complainantState"
                            value={formData.complainantState || ''}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded bg-white"
                        >
                            <option value="">Select a country</option>
                            <option value="USA">United States</option>
                            <option value="CAN">Canada</option>
                            <option value="UK">United Kingdom</option>
                            <option value="AUS">Australia</option>
                            <option value="DEU">Germany</option>
                            <option value="FRA">France</option>
                            <option value="ITA">Italy</option>
                            <option value="ESP">Spain</option>
                            <option value="IND">India</option>
                            <option value="CHN">China</option>
                            <option value="JPN">Japan</option>
                            <option value="BRA">Brazil</option>
                            <option value="MEX">Mexico</option>
                            <option value="RUS">Russia</option>
                            <option value="ZAF">South Africa</option>
                            <option value="ARG">Argentina</option>
                            <option value="NLD">Netherlands</option>
                            <option value="SWE">Sweden</option>
                            <option value="CHE">Switzerland</option>
                            <option value="BEL">Belgium</option>
                            <option value="AUT">Austria</option>
                            <option value="NZL">New Zealand</option>
                            <option value="SGP">Singapore</option>
                            <option value="KOR">South Korea</option>
                            <option value="TUR">Turkey</option>
                            <option value="SAU">Saudi Arabia</option>
                            <option value="IDN">Indonesia</option>
                            <option value="THA">Thailand</option>
                            <option value="VNM">Vietnam</option>
                            <option value="EGY">Egypt</option>
                            <option value="NGA">Nigeria</option>
                            <option value="POL">Poland</option>
                            <option value="PHL">Philippines</option>
                            <option value="NOR">Norway</option>
                            <option value="DNK">Denmark</option>
                            <option value="FIN">Finland</option>
                            <option value="ISR">Israel</option>
                            <option value="IRL">Ireland</option>
                            <option value="CHL">Chile</option>
                            <option value="COL">Colombia</option>
                            <option value="PER">Peru</option>
                            <option value="PAK">Pakistan</option>
                            <option value="GRC">Greece</option>
                            <option value="HUN">Hungary</option>
                            <option value="CZE">Czech Republic</option>
                            <option value="POR">Portugal</option>
                            <option value="ROU">Romania</option>
                            <option value="BGD">Bangladesh</option>
                            <option value="UKR">Ukraine</option>
                            <option value="KAZ">Kazakhstan</option>
                            <option value="IRQ">Iraq</option>
                            <option value="VEN">Venezuela</option>
                            <option value="ARE">United Arab Emirates</option>
                            <option value="QAT">Qatar</option>
                            <option value="KWT">Kuwait</option>
                        </select>

                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 bg-gray-100 p-2">
                    <div className="flex items-center">
                        <label className="font-medium">
                            Complainant Zip Code<span className="text-red-500">*</span>
                        </label>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <input
                            type="text"
                            name="complainantZipCode"
                            value={formData.complainantZipCode}
                            onChange={handleInputChange}
                            placeholder="55555"
                            className="p-2 border border-gray-300 rounded w-full"
                        />
                        <div className="flex items-center">
                            <span className="mr-2 whitespace-nowrap">Ext.</span>
                            <input
                                type="text"
                                name="complainantZipExt"
                                value={formData.complainantZipExt}
                                onChange={handleInputChange}
                                className="p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-2">
                    <div className="flex items-center">
                        <label className="font-medium">
                            Complainant Email Address<span className="text-red-500">*</span>
                        </label>
                    </div>
                    <div>
                        <input
                            type="email"
                            name="complainantEmail"
                            value={formData.complainantEmail}
                            onChange={handleInputChange}
                            placeholder="example@demo.com"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 bg-gray-100 p-2">
                    <div className="flex items-center">
                        <label className="font-medium">
                            Complainant Contact Phone Number<span className="text-red-500">*</span>
                        </label>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-2">
                            <input
                                type="text"
                                name="complainantContactPhone"
                                value={formData.complainantContactPhone}
                                onChange={handleInputChange}
                                placeholder="(xxx) xxx-xxxx"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2 whitespace-nowrap">Ext.</span>
                            <input
                                type="text"
                                name="complainantContactPhoneExt"
                                value={formData.complainantContactPhoneExt}
                                onChange={handleInputChange}
                                className="p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-2">
                    <div className="flex items-center">
                        <label className="font-medium">
                            Complainant Cell Phone Number
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="complainantCellPhone"
                            value={formData.complainantCellPhone}
                            onChange={handleInputChange}
                            placeholder="(xxx) xxx-xxxx"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-6 space-y-4 md:space-y-0 md:space-x-4">
                <button
                    onClick={handlePrivious}
                    className="bg-[#2e6da4] hover:bg-yellow-400 text-white py-2 px-6 transition duration-200 border border-gray-500 cursor-pointer rounded"
                >
                    &lt; Specify complaint type
                </button>

                <button
                    onClick={handleCancel}
                    className="bg-[#2e6da4] hover:bg-yellow-400 text-white py-2 px-6 transition duration-200 border border-gray-500 cursor-pointer rounded"
                >
                    Cancel
                </button>

                <button
                    onClick={handleNext}
                    className="bg-[#2e6da4] hover:bg-yellow-400 text-white py-2 px-6 transition duration-200 border border-gray-500 cursor-pointer rounded"
                >
                    Filed Against Entity Information page &gt;
                </button>
            </div>

        </div>
    );
};