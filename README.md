# Tombros Quote Generator

A Next.js application for creating professional photography and cinematography quotes, designed to match the exact layout and styling of the original Tombros quote document.

## Features

- **Exact Design Match**: Replicates the original Greek quote document design with precise styling
- **Interactive Form**: Edit all quote details including client information, costs, and services
- **Print Functionality**: Clean print layout that hides form elements and shows only the quote
- **Responsive Design**: Works on desktop and mobile devices
- **Greek Text Support**: Full support for Greek characters and text

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Tombrosquote
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Edit Quote Details**: Use the form at the top to modify:
   - Document number and date
   - Client name and wedding details
   - Location, church, and hall information
   - All cost fields for services and provisions

2. **Preview Quote**: The quote document updates in real-time as you type

3. **Print Quote**: Click the "Print Quote" button to print a clean version of the document

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles including print styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page with form and quote display
└── components/
    ├── QuoteDocument.tsx    # Quote document component matching original design
    └── QuoteForm.tsx        # Form component for editing quote data
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hooks** - State management

## Design Features

- **Logo**: Stylized "D" with camera aperture design
- **Typography**: Arial font family matching original
- **Layout**: Single-column layout with proper spacing
- **Background**: Subtle geometric pattern watermark
- **Sections**: Services, Provisions, and Notes with proper Greek formatting
- **Footer**: Contact information and website

## Print Styles

The application includes custom print styles that:
- Hide form elements and controls
- Remove shadows and borders
- Optimize spacing for print
- Maintain document formatting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for internal use by Tombros Photography.