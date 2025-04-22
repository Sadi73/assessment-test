import { StepProps } from "./FirstStep";

const FinalStep: React.FC<StepProps> = ({ formData, setCurrentPage }) => {

    return (
        <div className="flex flex-col justify-center items-center space-y-3">
            <div className="grid grid-cols-3 border w-1/2 gap-5">
                <label className="text-end">Name: </label>
                <p className="col-span-2">{formData?.name}</p>
            </div>
            <div className="grid grid-cols-3 border w-1/2 gap-5">
                <label className="text-end">Email: </label>
                <p className="col-span-2">{formData?.email}</p>
            </div>
            <div className="grid grid-cols-3 border w-1/2 gap-5">
                <label className="text-end">Address: </label>
                <p className="col-span-2">{formData?.address}</p>
            </div>
            <div className="grid grid-cols-3 border w-1/2 gap-5">
                <label className="text-end">Phone Number: </label>
                <p className="col-span-2">{formData?.phoneNumber}</p>
            </div>
            <div className="grid grid-cols-3 border w-1/2 gap-5">
                <label className="text-end">Expertise: </label>
                <p className="col-span-2">{formData?.expertise}</p>
            </div>

            <div className="w-1/2 flex justify-end gap-5">
                <button
                    className="border px-5"
                    onClick={() => setCurrentPage('third')}
                >Update</button>
                <button className="border px-5">Submit</button>
            </div>
        </div>
    );
};

export default FinalStep;