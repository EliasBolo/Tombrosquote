import Image from 'next/image';

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

interface QuoteDocumentProps {
  quoteData: QuoteData;
  greetingText: string;
  documentNumber: string;
  quoteDate: string;
  services: string[];
  provisions: string[];
  notes: string;
}

export default function QuoteDocument({ quoteData, greetingText, documentNumber, quoteDate, services, provisions, notes }: QuoteDocumentProps) {
  return (
    <div className="bg-white p-4 md:p-8 max-w-4xl mx-auto relative" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #ccc 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Logo */}
          <div className="flex items-center justify-center mb-2">
            <Image
              src="/logo.png"
              alt="Tombros Logo"
              width={64}
              height={64}
            />
          </div>
          
          {/* Divider */}
          <div className="border-b border-gray-300 mb-8"></div>
          
          {/* Document number */}
          <div className="text-right text-sm text-gray-500 mb-4">
            π.:{documentNumber}
          </div>
          
          {/* Main title */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-black">Οικονομική προσφορά</h1>
          </div>
        </div>

        {/* Greeting */}
        <div className="text-center mb-6">
          <div className="text-base text-gray-700 whitespace-pre-line">
            {greetingText}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">ΥΠΗΡΕΣΙΕΣ</h2>
          <ul className="space-y-2 text-black">
            {services.map((service, index) => (
              <li key={index}>
                {String.fromCharCode(945 + index)}) {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Provisions Section */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">ΠΑΡΟΧΕΣ</h2>
          <ul className="space-y-2 text-black">
            {provisions.map((provision, index) => (
              <li key={index}>
                {String.fromCharCode(945 + index)}) {provision}
              </li>
            ))}
          </ul>
        </div>

        {/* Notes Section */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">ΣΗΜΕΙΩΣΕΙΣ</h2>
          <div className="text-black whitespace-pre-line">
            {notes}
          </div>
        </div>

        {/* Dotted divider */}
        <div className="border-t border-dotted border-gray-400 mb-6"></div>
        
        {/* Closing remarks */}
        <div className="text-center mb-8">
          <p className="text-black mb-6 text-sm">
            Επίσης, σας ενημερώνω ότι μπορούμε να προβούμε και σε συμφωνία για την παροχή από πλευράς μας επιπρόσθετων υπηρεσιών με το αναγραφόμενο κατωτέρω σ' αυτές κόστος- αμοιβή. Για περαιτέρω πληροφορίες και επιπρόσθετες υπηρεσίες από τις ανωτέρω ενδεικτικά αναφερόμενες, είμαι στη διάθεση σας και αναμένω απάντηση σας.
          </p>
          <div className="text-center">
            <p className="text-black">Με εκτίμηση,</p>
            <div className="mt-4 flex justify-center">
              <Image
                src="/signature.png"
                alt="Signature"
                width={128}
                height={48}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end text-sm text-black">
          <div>
            <p>photography / cinematography</p>
            <p className="text-blue-600">K.Palaiologou 70 / Sparta - Greece</p>
            <p className="text-blue-600">ph: +30 27310 29777 / m: 6944 44 2333</p>
            <p className="text-blue-600">e:info@tombros.gr</p>
          </div>
          <div>
            <p>www.tombros.gr</p>
          </div>
        </div>
      </div>
    </div>
  );
}
