'use client';

import { useState } from 'react';
import QuoteDocument from '@/components/QuoteDocument';
import QuoteForm from '@/components/QuoteForm';
import EditableList from '@/components/EditableList';

export default function Home() {
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
  const [services, setServices] = useState([]);
  const [provisions, setProvisions] = useState([]);
  const [notes, setNotes] = useState('');

  const handleQuoteChange = (newData: any) => {
    setQuoteData(prev => ({ ...prev, ...newData }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 print-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
                  type="text"
                  value={quoteDate}
                  onChange={(e) => setQuoteDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black text-gray-800"
                  placeholder="Enter date..."
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={handlePrint}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Print Quote
                </button>
              </div>
            </div>
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black text-gray-800"
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