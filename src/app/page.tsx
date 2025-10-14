'use client';

import { useState, useEffect, useRef } from 'react';
import QuoteDocument from '@/components/QuoteDocument';
import EditableList from '@/components/EditableList';
import LoginForm from '@/components/LoginForm';
import { exportToCSV, importFromCSV, QuoteState } from '@/utils/csvUtils';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [quoteData, setQuoteData] = useState({
    documentNumber: '7019',
    date: '10/5/2025',
    clientName: 'Ηλία & Κέλλυ',
    weddingDate: '10 Μαΐου 2025',
    location: 'Σπάρτη',
    church: 'Αγ. Σπιρύδων',
    hall: 'Vasilikos hall events',
    servicesCost: '',
    provisionsCost: '',
    nextDayCost: '',
    cinematicCost: '',
    additionalHourCost: '',
    secondTeamCost: ''
  });

  const [greetingText, setGreetingText] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [quoteDate, setQuoteDate] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [provisions, setProvisions] = useState<string[]>([]);
  const [notes, setNotes] = useState('');


  // Check authentication on component mount
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  const handlePrint = () => {
    // Update page title temporarily for PDF export
    const originalTitle = document.title;
    document.title = `DTombros Quote ${documentNumber || 'Document'} - ${quoteDate || 'Date'}`;
    
    window.print();
    
    // Restore original title
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  const handleExportCSV = () => {
    const currentState: QuoteState = {
      quoteData,
      greetingText,
      documentNumber,
      quoteDate,
      services,
      provisions,
      notes
    };
    exportToCSV(currentState);
  };

  const handleImportCSV = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        console.log('Starting CSV import for file:', file.name, 'Size:', file.size);
        const importedData = await importFromCSV(file);
        console.log('Imported data:', importedData);
        
        // Update state with imported data
        if (importedData.documentNumber) setDocumentNumber(importedData.documentNumber);
        if (importedData.quoteDate) setQuoteDate(importedData.quoteDate);
        if (importedData.greetingText) {
          console.log('Setting greeting text:', importedData.greetingText);
          setGreetingText(importedData.greetingText);
        }
        if (importedData.notes) {
          console.log('Setting notes:', importedData.notes);
          setNotes(importedData.notes);
        }
        if (importedData.services) setServices(importedData.services);
        if (importedData.provisions) setProvisions(importedData.provisions);
        if (importedData.quoteData) setQuoteData(prev => ({ ...prev, ...importedData.quoteData }));
        
        alert('Data imported successfully!');
      } catch (error) {
        console.error('Import error:', error);
        alert(`Error importing CSV file: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }
  };

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 md:py-8">
      <div className="max-w-4xl mx-auto px-2 md:px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-3 md:p-6 print-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">DTombros Quoting App</h1>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition-colors text-sm md:text-base"
              >
                Logout
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Document Number:
                </label>
                <input
                  type="text"
                  value={documentNumber}
                  onChange={(e) => setDocumentNumber(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black text-gray-800"
                  placeholder="Enter document number..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quote Date:
                </label>
                <input
                  type="date"
                  value={quoteDate}
                  onChange={(e) => setQuoteDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black text-gray-800"
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={handlePrint}
                  className="w-full bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm md:text-base"
                >
                  Export PDF
                </button>
              </div>
            </div>
            
            {/* CSV Export/Import Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4">
              <button
                onClick={handleExportCSV}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm md:text-base"
              >
                📊 Export to CSV
              </button>
              <button
                onClick={handleImportCSV}
                className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors text-sm md:text-base"
              >
                📥 Import from CSV
              </button>
            </div>
            
            {/* Hidden file input for CSV import */}
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Greeting Text:
                </label>
                <textarea
                  value={greetingText}
                  onChange={(e) => setGreetingText(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black text-gray-800"
                  rows={3}
                  placeholder="Enter greeting text..."
                />
              </div>
              
              <EditableList
                title="Services (ΥΠΗΡΕΣΙΕΣ)"
                items={services}
                onItemsChange={setServices}
                placeholder="Enter service description..."
              />
              
              <EditableList
                title="Provisions (ΠΑΡΟΧΕΣ)"
                items={provisions}
                onItemsChange={setProvisions}
                placeholder="Enter provision description..."
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes (ΣΗΜΕΙΩΣΕΙΣ):
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black placeholder:text-[10px] text-gray-800 text-[12px]"
                  rows={8}
                  placeholder="Enter notes..."
                />
              </div>
            </div>
          </div>
          <div className="p-6">
            <QuoteDocument 
              quoteData={quoteData} 
              greetingText={greetingText} 
              documentNumber={documentNumber} 
              quoteDate={quoteDate}
              services={services}
              provisions={provisions}
              notes={notes}
            />
          </div>
        </div>
      </div>
    </div>
  );
}