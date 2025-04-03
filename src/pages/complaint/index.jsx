import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ComplainantDetailsForm } from './complentdetails';
import { ComplainantTypeStep } from './complaintType';

export const Complaint = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        complaintType: '',
        isAnonymous: null,
        complainantOrgName: '',
        complainantOrgType: '--None--',
        complainantOrgTypeOther: '',
        complainantOrgRole: '',
        complainantOrgPhone: '',
        complainantTitle: '--None--',
        complainantFirstName: '',
        complainantMI: '',
        complainantLastName: '',
        complainantAddressLine1: '',
        complainantAddressLine2: '',
        complainantCity: '',
        complainantState: '--None--',
        complainantZipCode: '',
        complainantZipExt: '',
        complainantEmail: '',
        complainantContactPhone: '',
        complainantContactPhoneExt: '',
        complainantCellPhone: ''
    });
    const [error, setError] = useState('');

    const handleComplaintTypeChange = (type) => {
        setFormData({ ...formData, complaintType: type });
        setError('');
    };


    const handleNext = () => {
        if (currentStep === 1 && !formData.complaintType) {
            setError('Please select a complaint type to continue.');
            return;
        } else if (currentStep === 2) {
            window.alert('Form subbmitted successfully.');
        }
        setCurrentStep(currentStep + 1);
    };

    const handlePrivious = () => {
        if (currentStep === 1) {
            navigate('/')
        } else {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleCancel = () => {
        // Cancel form submission
        console.log("Form submission cancelled");
        navigate('/')
    };


    const renderNavigationBar = () => {
        const steps = [
            { name: 'Complaint Type', active: currentStep === 1, completed: currentStep > 1 },
            { name: 'Complainant Details', active: currentStep === 2, completed: currentStep > 2 },
            { name: 'FAE Details', active: currentStep === 3, completed: currentStep > 3 },
            { name: 'Complaint Details', active: currentStep === 4, completed: currentStep > 4 },
            { name: 'Review Complaint', active: currentStep === 5, completed: currentStep > 5 },
            { name: 'Submitted', active: currentStep === 6, completed: currentStep > 6 }
        ];

        return (
            <div className="flex w-full rounded-t overflow-hidden mb-6">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`py-1 px-1 text-center flex-1 text-sm ${step.active
                            ? 'bg-yellow-400 text-white'
                            : step.completed
                                ? 'bg-green-500 text-white'
                                : index+1 === currentStep
                                    ? 'bg-yellow-400 text-black'
                                    : 'bg-gray-500 text-white'
                            }`}
                    >
                        {step.name}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            {renderNavigationBar()}
            {currentStep === 1 && <ComplainantTypeStep
                error={error}
                formData={formData}
                handleComplaintTypeChange={handleComplaintTypeChange}
                handleNext={handleNext}
                handleCancel={handleCancel}
                handlePrivious={handlePrivious}

            />}
            {currentStep === 2 && <ComplainantDetailsForm
                formData={formData}
                setFormData={setFormData}
                handlePrivious={handlePrivious}
                handleCancel={handleCancel}
                handleNext={handleNext}
            />}
            {currentStep === 3 && <div>FAE Details</div>}
            {currentStep === 4 && <div>Complaint Details</div>}
            {currentStep === 5 && <div>Review Complaint</div>}
            {currentStep === 6 && <div>Submitted</div>}
        </div>
    );
};