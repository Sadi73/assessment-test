import { getSavedDataFromLocalStorage, setDataIntoLocalStorage } from "../../utils/utils";
import { initialValues } from "../FormRoot";
import { StepProps } from "./FirstStep";

interface FinalStepProps extends StepProps {
    onDataSaved: () => void;
}

const FinalStep: React.FC<FinalStepProps> = ({ formData, setFormData, setCurrentStep, onDataSaved }) => {

    const handleFinalSubmit = () => {
        const savedData = getSavedDataFromLocalStorage();
        const newData = [...savedData, formData];
        setDataIntoLocalStorage(newData);
        setFormData(initialValues);
        localStorage.removeItem('formData');
        setCurrentStep(1);
        onDataSaved();
    };

    return (
        <div className="flex flex-col grow h-full justify-between">
            <div className="space-y-5">
                <div className="grid grid-cols-3 border-b pb-3 w-full gap-5">
                    <label className="text-end">Name: </label>
                    <p className="col-span-2">{formData?.name}</p>
                </div>
                <div className="grid grid-cols-3 border-b pb-3 w-full gap-5">
                    <label className="text-end">Email: </label>
                    <p className="col-span-2">{formData?.email}</p>
                </div>
                <div className="grid grid-cols-3 border-b pb-3 w-full gap-5">
                    <label className="text-end">Address: </label>
                    <p className="col-span-2">{formData?.address}</p>
                </div>
                <div className="grid grid-cols-3 border-b pb-3 w-full gap-5">
                    <label className="text-end">Phone Number: </label>
                    <p className="col-span-2">{formData?.phoneNumber}</p>
                </div>
                <div className="grid grid-cols-3 border-b pb-3 w-full gap-5">
                    <label className="text-end">Expertise: </label>
                    <div className="col-span-2 flex flex-wrap gap-2">
                        {formData?.expertise?.map((item: string, idx: number) => (
                            <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-5 mt-auto pt-5">
                <button
                    className="border px-5 py-1 rounded"
                    onClick={() => setCurrentStep(3)}
                >Back</button>
                <button
                    className="border px-5 py-1 rounded"
                    onClick={handleFinalSubmit}
                >Submit</button>
            </div>
        </div>
    );
};

export default FinalStep;