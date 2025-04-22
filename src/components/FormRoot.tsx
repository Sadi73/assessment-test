// components/FormRoot.tsx
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
        <div className="container py-12 px-4 sm:px-6">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
                    Nimble Form Wizard
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A multi-step form that validates your inputs as you go, saves your progress,
                    and keeps a record of all your submissions.
                </p>
            </header>

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
        </div>
    );
};

export default FormRoot;
