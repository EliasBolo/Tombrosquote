interface QuoteData {
  documentNumber: string;
  date: string;
  clientName: string;
  weddingDate: string;
  location: string;
  church: string;
  hall: string;
  servicesCost: string;
  provisionsCost: string;
  nextDayCost: string;
  cinematicCost: string;
  additionalHourCost: string;
  secondTeamCost: string;
}

interface QuoteFormProps {
  quoteData: QuoteData;
  onQuoteChange: (data: Partial<QuoteData>) => void;
}

export default function QuoteForm({ quoteData, onQuoteChange }: QuoteFormProps) {
  const handleInputChange = (field: keyof QuoteData, value: string) => {
    onQuoteChange({ [field]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Document Number
        </label>
        <input
          type="text"
          value={quoteData.documentNumber}
          onChange={(e) => handleInputChange('documentNumber', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date
        </label>
        <input
          type="text"
          value={quoteData.date}
          onChange={(e) => handleInputChange('date', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Client Name
        </label>
        <input
          type="text"
          value={quoteData.clientName}
          onChange={(e) => handleInputChange('clientName', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Wedding Date
        </label>
        <input
          type="text"
          value={quoteData.weddingDate}
          onChange={(e) => handleInputChange('weddingDate', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <input
          type="text"
          value={quoteData.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Church
        </label>
        <input
          type="text"
          value={quoteData.church}
          onChange={(e) => handleInputChange('church', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Hall
        </label>
        <input
          type="text"
          value={quoteData.hall}
          onChange={(e) => handleInputChange('hall', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Services Cost
        </label>
        <input
          type="text"
          value={quoteData.servicesCost}
          onChange={(e) => handleInputChange('servicesCost', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Provisions Cost
        </label>
        <input
          type="text"
          value={quoteData.provisionsCost}
          onChange={(e) => handleInputChange('provisionsCost', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Next Day Cost
        </label>
        <input
          type="text"
          value={quoteData.nextDayCost}
          onChange={(e) => handleInputChange('nextDayCost', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Cinematic Cost
        </label>
        <input
          type="text"
          value={quoteData.cinematicCost}
          onChange={(e) => handleInputChange('cinematicCost', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Additional Hour Cost
        </label>
        <input
          type="text"
          value={quoteData.additionalHourCost}
          onChange={(e) => handleInputChange('additionalHourCost', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Second Team Cost
        </label>
        <input
          type="text"
          value={quoteData.secondTeamCost}
          onChange={(e) => handleInputChange('secondTeamCost', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
