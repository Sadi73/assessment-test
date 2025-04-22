import { useState } from "react";
import FinalStep from "./steps/FinalStep";
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep";
import Progressbar from "./Progressbar";

export type FormDataType = {
    name: string;
    email: string;
    address: string;
    phoneNumber: string;
    expertise: string;
};

const initialValues: FormDataType = {
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
    expertise: '',
};

const FormRoot = () => {
    const [formData, setFormData] = useState<FormDataType>(initialValues);
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <div className="min-h-[500px] max-w-2xl mx-auto shadow-xl rounded-md">

            <Progressbar
                currentStep={currentStep}
            />

            {currentStep === 1 && (
                <FirstStep
                    formData={formData}
                    setFormData={setFormData}
                    setCurrentStep={setCurrentStep}
                />
            )}
            {currentStep === 2 && (
                <SecondStep
                    formData={formData}
                    setFormData={setFormData}
                    setCurrentStep={setCurrentStep}
                />
            )}
            {currentStep === 3 && (
                <ThirdStep
                    formData={formData}
                    setFormData={setFormData}
                    setCurrentStep={setCurrentStep}
                />
            )}
            {currentStep === 4 && (
                <FinalStep
                    formData={formData}
                    setFormData={setFormData}
                    setCurrentStep={setCurrentStep}
                />
            )}
        </div>
    );
};

export default FormRoot;
