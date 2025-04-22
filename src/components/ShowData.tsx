import { SavedDataItem } from "../App";

type ShowDataProps = {
    allSavedData: SavedDataItem[] | undefined
}


const ShowData: React.FC<ShowDataProps> = ({ allSavedData }) => {

    return (
        <div className="w-3/4 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
            {allSavedData?.map((data, index) => (
                <div key={index} className="border p-4 rounded-md">
                    <h3 className="font-semibold text-lg mb-2">Submission #{index + 1}</h3>
                    <div>
                        <span className="font-medium">Name:</span> {data.name}
                    </div>
                    <div>
                        <span className="font-medium">Email:</span> {data.email}
                    </div>
                    <div>
                        <span className="font-medium">Address:</span> {data.address}
                    </div>
                    <div>
                        <span className="font-medium">Phone:</span> {data.phoneNumber}
                    </div>
                    <div className="md:col-span-2">
                        <span className="font-medium">Expertise:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {data.expertise.map((item, idx) => (
                                <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShowData;