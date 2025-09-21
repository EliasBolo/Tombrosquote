export interface QuoteData {
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

export interface QuoteState {
  quoteData: QuoteData;
  greetingText: string;
  documentNumber: string;
  quoteDate: string;
  services: string[];
  provisions: string[];
  notes: string;
}

export const exportToCSV = (data: QuoteState): void => {
  const csvData = [
    // Header row
    ['Field', 'Value'],
    // Basic quote data
    ['Document Number', data.documentNumber],
    ['Quote Date', data.quoteDate],
    ['Greeting Text', data.greetingText],
    ['Notes', data.notes],
    // Services
    ...data.services.map((service, index) => [`Service ${index + 1}`, service]),
    // Provisions
    ...data.provisions.map((provision, index) => [`Provision ${index + 1}`, provision]),
    // Additional quote data
    ['Client Name', data.quoteData.clientName],
    ['Wedding Date', data.quoteData.weddingDate],
    ['Location', data.quoteData.location],
    ['Church', data.quoteData.church],
    ['Hall', data.quoteData.hall],
    ['Services Cost', data.quoteData.servicesCost],
    ['Provisions Cost', data.quoteData.provisionsCost],
    ['Next Day Cost', data.quoteData.nextDayCost],
    ['Cinematic Cost', data.quoteData.cinematicCost],
    ['Additional Hour Cost', data.quoteData.additionalHourCost],
    ['Second Team Cost', data.quoteData.secondTeamCost],
  ];

  const csvContent = csvData.map(row => 
    row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(',')
  ).join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `DTombros_Quote_${data.documentNumber || 'Backup'}_${data.quoteDate || 'Data'}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const importFromCSV = (file: File): Promise<{
  documentNumber?: string;
  quoteDate?: string;
  greetingText?: string;
  notes?: string;
  services?: string[];
  provisions?: string[];
  quoteData?: Partial<QuoteData>;
}> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const lines = text.split('\n');
        const data: {
          documentNumber?: string;
          quoteDate?: string;
          greetingText?: string;
          notes?: string;
          services?: string[];
          provisions?: string[];
          quoteData?: Partial<QuoteData>;
        } = {};
        
        // Parse CSV data
        for (let i = 1; i < lines.length; i++) { // Skip header row
          const line = lines[i].trim();
          if (!line) continue;
          
          const [field, ...valueParts] = line.split(',');
          const value = valueParts.join(',').replace(/^"|"$/g, '').replace(/""/g, '"');
          
          if (field && value) {
            const cleanField = field.replace(/^"|"$/g, '');
            
            // Handle services and provisions arrays
            if (cleanField.startsWith('Service ')) {
              if (!data.services) data.services = [];
              data.services.push(value);
            } else if (cleanField.startsWith('Provision ')) {
              if (!data.provisions) data.provisions = [];
              data.provisions.push(value);
            } else {
              // Map field names to state properties
              switch (cleanField) {
                case 'Document Number':
                  data.documentNumber = value;
                  break;
                case 'Quote Date':
                  data.quoteDate = value;
                  break;
                case 'Greeting Text':
                  data.greetingText = value;
                  break;
                case 'Notes':
                  data.notes = value;
                  break;
                case 'Client Name':
                  data.quoteData = { ...data.quoteData, clientName: value };
                  break;
                case 'Wedding Date':
                  data.quoteData = { ...data.quoteData, weddingDate: value };
                  break;
                case 'Location':
                  data.quoteData = { ...data.quoteData, location: value };
                  break;
                case 'Church':
                  data.quoteData = { ...data.quoteData, church: value };
                  break;
                case 'Hall':
                  data.quoteData = { ...data.quoteData, hall: value };
                  break;
                case 'Services Cost':
                  data.quoteData = { ...data.quoteData, servicesCost: value };
                  break;
                case 'Provisions Cost':
                  data.quoteData = { ...data.quoteData, provisionsCost: value };
                  break;
                case 'Next Day Cost':
                  data.quoteData = { ...data.quoteData, nextDayCost: value };
                  break;
                case 'Cinematic Cost':
                  data.quoteData = { ...data.quoteData, cinematicCost: value };
                  break;
                case 'Additional Hour Cost':
                  data.quoteData = { ...data.quoteData, additionalHourCost: value };
                  break;
                case 'Second Team Cost':
                  data.quoteData = { ...data.quoteData, secondTeamCost: value };
                  break;
              }
            }
          }
        }
        
        resolve(data);
      } catch {
        reject(new Error('Failed to parse CSV file'));
      }
    };
    
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsText(file);
  });
};
