import { useState } from "react";
import FinalStep from "./steps/FinalStep";
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep";

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
    const [currentPage, setCurrentPage] = useState<'first' | 'second' | 'third' | 'final'>('first');

    return (
        <div>
            {currentPage === 'first' && (
                <FirstStep
                    formData={formData}
                    setFormData={setFormData}
                    setCurrentPage={setCurrentPage}
                />
            )}
            {currentPage === 'second' && (
                <SecondStep
                    formData={formData}
                    setFormData={setFormData}
                    setCurrentPage={setCurrentPage}
                />
            )}
            {currentPage === 'third' && (
                <ThirdStep
                    formData={formData}
                    setFormData={setFormData}
                    setCurrentPage={setCurrentPage}
                />
            )}
            {currentPage === 'final' && (
                <FinalStep
                    formData={formData}
                    setFormData={setFormData}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </div>
    );
};

export default FormRoot;
