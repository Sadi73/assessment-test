import { useEffect, useState } from "react";
import FinalStep from "./steps/FinalStep";
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep";
import Progressbar from "./Progressbar";
import { getFormDataFromLocalStorage, saveFormDataToLocalStorage } from "../utils/utils";
import { Button } from "antd";

interface FormRootProps {
    onDataSaved: () => void;
}

export type FormDataType = {
    name: string;
    email: string;
    address: string;
    phoneNumber: string;
    expertise: string[];
};

export const initialValues: FormDataType = {
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
    expertise: [],
};

const FormRoot: React.FC<FormRootProps> = ({ onDataSaved }) => {
    const [formData, setFormData] = useState<FormDataType>(() => {
        const saved = getFormDataFromLocalStorage();
        return saved?.data || initialValues;
    });

    const [currentStep, setCurrentStep] = useState<number>(() => {
        const saved = getFormDataFromLocalStorage();
        return saved?.step || 1;
    });

    useEffect(() => {
        saveFormDataToLocalStorage(formData, currentStep);
    }, [formData]);

    return (
        <div className="min-h-[450px] max-w-2xl mx-auto shadow-xl rounded-md p-6 flex flex-col">

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
                    onDataSaved={onDataSaved}
                />
            )}

            <div>
                <Button onClick={() => {
                    localStorage.removeItem('formData');
                    setFormData(initialValues);
                    setCurrentStep(1);
                }}>Reset</Button>
            </div>
        </div>
    );
};

export default FormRoot;
