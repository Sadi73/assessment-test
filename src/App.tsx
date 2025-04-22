import { useEffect, useState } from 'react'
import FormRoot from './components/FormRoot'
import { getSavedDataFromLocalStorage } from './utils/utils'
import ShowData from './components/ShowData';

export interface SavedDataItem {
  name: string;
  email: string;
  address: string;
  phoneNumber: number;
  expertise: string[];
}

function App() {
  const [allSavedData, setAllSavedData] = useState<SavedDataItem[] | undefined>(undefined);

  const loadSavedData = () => {
    const savedData = getSavedDataFromLocalStorage();
    setAllSavedData(savedData);
  };

  useEffect(() => {
    loadSavedData();
    
    return () => {
      localStorage.removeItem('formData');
    };
  }, []);

  return (
    <div className=''>
      <header className="text-center my-12">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
          Assessment Test
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A multi-step form that validates your inputs as you go, saves your progress,
          and keeps a record of all your submissions.
        </p>
      </header>

      <FormRoot
        onDataSaved={loadSavedData}
      />

      <ShowData
        allSavedData={allSavedData}
      />

    </div>
  )
}

export default App
