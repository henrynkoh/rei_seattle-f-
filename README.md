# Pellego Seattle 🏙️ 

![GitHub License](https://img.shields.io/github/license/henrynkoh/rei_seattle-f-?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-99.3%25-blue?style=for-the-badge&logo=typescript)
![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🏢 Professional Real Estate Investment Analysis Platform

Pellego Seattle is a sophisticated real estate investment analysis platform meticulously crafted for real estate professionals, investors, and property developers focused on the Greater Seattle metropolitan area. The platform delivers comprehensive tools for property analysis, market research, and investment decision-making through an elegant, responsive interface designed to streamline the investment process from initial property discovery to portfolio management.

Developed with modern web technologies and backed by extensive real estate market data, Pellego Seattle enables users to make informed investment decisions based on accurate financial projections, comparative market analysis, and localized neighborhood insights that would typically require multiple tools and significant manual research to compile.

![Pellego Seattle Platform](https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070)

## ✨ Key Features

### 📊 Property Analysis
Conduct in-depth analysis of potential investment properties with detailed financial projections and market comparisons:
- **Financial modeling**: Calculate cap rates, cash-on-cash returns, internal rate of return (IRR), and net present value (NPV) with adjustable parameters
- **Expense tracking**: Accurately model property taxes, insurance, maintenance reserves, property management fees, utilities, and other operational expenses
- **Renovation ROI assessment**: Estimate renovation costs and calculate the potential impact on property value and rental income
- **Financing scenarios**: Compare different financing options, including conventional loans, portfolio financing, and private lending with adjustable down payments, interest rates, and terms
- **Tax impact modeling**: Estimate tax implications including depreciation benefits, property tax deductions, and capital gains considerations

### 📈 Market Reports
Access comprehensive market data for neighborhoods throughout the Greater Seattle area with dynamic filtering options:
- **Neighborhood-specific metrics**: View detailed trend analyses for 87 distinct neighborhoods in the Greater Seattle area
- **Historical appreciation rates**: Track property value trends going back 10 years with quarterly data points
- **Rental market analysis**: View rental rate trends, vacancy rates, and seasonal fluctuations by neighborhood
- **Supply and demand indicators**: Monitor inventory levels, days on market, and absorption rates
- **Investment opportunity scoring**: Proprietary neighborhood scoring system ranking areas by investment potential based on 15 different factors
- **Future growth projections**: Access forecasts for property values and rental rates based on historical data and current market indicators
- **Infrastructure impact analysis**: View how upcoming infrastructure projects might affect property values in specific areas

### 🔍 Investment Alerts
Receive customized notifications when properties matching your specific investment criteria become available:
- **Multi-parameter filtering**: Set alerts based on over 25 different property and financial criteria
- **Custom deal thresholds**: Define your own investment thresholds for metrics like cap rate, cash flow, and cash-on-cash return
- **Geographical targeting**: Target specific neighborhoods, zip codes, or custom-drawn map areas
- **Property characteristic matching**: Filter by property type, age, condition, lot size, and dozens of other attributes
- **Off-market opportunity alerts**: Access pocket listings and coming-soon properties through broker network integration
- **Notification preferences**: Choose between instant, daily, or weekly alert summaries via email, SMS, or mobile push notifications
- **One-click analysis**: Move directly from alert notification to full property analysis with a single click

### 📱 Portfolio Tracking
Monitor and optimize your real estate investment portfolio with comprehensive performance analytics:
- **Unified dashboard**: View all properties in a single interface with key performance metrics
- **Performance tracking**: Monitor cash flow, equity growth, and total returns over time
- **Expense categorization**: Track and categorize all property-related expenses for accounting and tax purposes
- **Document storage**: Securely store important property documents including deeds, insurance policies, and inspection reports
- **Maintenance scheduling**: Set and track regular maintenance tasks and capital improvement projects
- **Tenant management**: Track lease terms, payment history, and communications (for rental properties)
- **Performance benchmarking**: Compare your property performance against neighborhood averages
- **Tax preparation assistance**: Generate reports designed for easy tax preparation and maximum deduction identification

### 🔎 Comparable Sales Analysis
Find and analyze recent property sales to accurately value potential investments:
- **Advanced filtering**: Filter comparable properties based on over 20 different criteria including property attributes, sale date, and distance
- **Adjustable comparables**: Make value adjustments based on property differences with intuitive sliders and inputs
- **Visual comparison**: Side-by-side visual comparison of subject property with comparable properties
- **Pricing strategy tools**: Identify optimal listing or offer prices based on comparable analysis
- **Valuation confidence scoring**: Proprietary algorithm that scores the reliability of valuation estimates based on the quality and quantity of comparable data
- **Historic sale tracking**: View previous sales history for all comparable properties
- **Export capabilities**: Generate professional comparable reports in PDF format for lenders or partners

### 🧮 Financial Calculator
Analyze potential returns, cash flow projections, and other financial metrics with sophisticated calculation tools:
- **Cash flow projections**: Model monthly and annual cash flows with adjustable parameters
- **Down payment optimizer**: Find the optimal down payment amount based on cash flow and return goals
- **Debt service analysis**: Calculate and visualize the impact of different loan terms and interest rates
- **Break-even calculator**: Determine the exact parameters needed to achieve break-even cash flow
- **Refinance analyzer**: Model the impact of refinancing existing properties at different times and rates
- **1031 exchange planner**: Calculate potential tax savings and reinvestment requirements for 1031 exchanges
- **Renovation ROI calculator**: Estimate returns on specific renovation projects based on local market data
- **Hold period optimizer**: Determine the optimal hold period for maximum returns based on various market appreciation scenarios

## 🚀 Quick Start

### System Requirements
- Node.js 18.17.0 or later
- npm 9.6.0 or later
- MacOS, Windows, or Linux operating system

### Installation
1. Clone the repository
```bash
git clone git@github.com:henrynkoh/rei_seattle-f-.git
cd rei_seattle-f-
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env.local` file in the root directory with the following variables:
```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.pellego-seattle.com
NEXT_PUBLIC_API_KEY=your_api_key_here

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_here

# External Services
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### First-time Setup
Upon first launching the application, you'll be guided through a setup process:
1. Create an account or sign in
2. Complete your investor profile
3. Set your investment criteria
4. Configure notification preferences
5. Take the interactive tutorial

## 📚 Documentation

For detailed documentation, check out:

### User Resources
- [User Guide](docs/USER_GUIDE.md) - Comprehensive guide for platform users, covering all features and functionality in detail
- [Quick Start Guide](docs/QUICKSTART.md) - Get up and running quickly with the most essential features
- [Property Analysis Tutorial](docs/PROPERTY_ANALYSIS_TUTORIAL.md) - Learn how to use the property analysis feature with step-by-step instructions
- [Investment Strategy Guide](docs/INVESTMENT_STRATEGY.md) - Learn best practices for real estate investing in the Seattle market
- [Frequently Asked Questions](docs/FAQ.md) - Answers to common questions about the platform and its features

### Developer Resources
- [Developer Guide](docs/DEVELOPER_GUIDE.md) - Technical documentation for developers, including architecture overview and contribution guidelines
- [API Reference](docs/API_REFERENCE.md) - Complete documentation of available API endpoints
- [Component Library](docs/COMPONENT_LIBRARY.md) - Guide to the reusable UI components
- [Data Models](docs/DATA_MODELS.md) - Explanation of data structures and relationships
- [Testing Guide](docs/TESTING.md) - Instructions for running and writing tests

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15 - React framework with server-side rendering and static site generation capabilities
- **UI Library**: React 19 - Component-based library for building user interfaces
- **Styling**: Tailwind CSS - Utility-first CSS framework for rapid UI development
- **State Management**: React Query - Data-fetching and server state management library
- **Forms**: React Hook Form - Performant, flexible form validation
- **Charts**: Recharts - Responsive chart components built with D3
- **Maps**: Mapbox GL JS - Interactive, customizable maps

### Backend Integration
- **Authentication**: NextAuth.js - Flexible authentication solution for Next.js
- **API Management**: Axios - Promise-based HTTP client for API requests
- **Type Safety**: TypeScript - Strongly typed JavaScript for improved developer experience
- **Data Validation**: Zod - TypeScript-first schema validation

### External Integrations
- **MLS Data**: Northwest MLS API - Real-time property listing data
- **Public Records**: King County Assessor's Office API - Property tax and assessment data
- **Geospatial Data**: Google Maps / Mapbox APIs - Location-based services and visualization
- **Market Data**: HouseCanary / Zillow APIs - Market trends and property valuations

## 🔍 Project Structure

```
seattle-pellego/
├── src/
│   ├── app/                         # Next.js app directory with pages and layouts
│   │   ├── (auth)/                  # Authentication-related pages
│   │   ├── features/                # Feature pages (analysis, reports, etc.)
│   │   ├── api/                     # API route handlers
│   │   ├── layout.tsx               # Root layout with common elements
│   │   └── page.tsx                 # Homepage
│   ├── components/                  # Reusable React components
│   │   ├── ui/                      # Basic UI components (buttons, inputs, etc.)
│   │   ├── features/                # Feature-specific complex components
│   │   ├── layout/                  # Layout components (header, footer, etc.)
│   │   ├── charts/                  # Data visualization components
│   │   └── maps/                    # Mapping and location components
│   ├── hooks/                       # Custom React hooks for shared functionality
│   │   ├── usePropertySearch.ts     # Hook for property search functionality
│   │   ├── useInvestmentMetrics.ts  # Hook for calculating investment metrics
│   │   └── useComparables.ts        # Hook for comparable property analysis
│   ├── services/                    # API and service integration
│   │   ├── api.ts                   # Base API configuration
│   │   ├── propertyService.ts       # Property data services
│   │   ├── marketService.ts         # Market data services
│   │   └── authService.ts           # Authentication services
│   ├── types/                       # TypeScript type definitions
│   │   ├── property.ts              # Property-related types
│   │   ├── market.ts                # Market data types
│   │   ├── user.ts                  # User and authentication types
│   │   └── api.ts                   # API response types
│   └── utils/                       # Utility functions and helpers
│       ├── formatters.ts            # Data formatting utilities
│       ├── calculations.ts          # Financial calculation utilities
│       ├── validators.ts            # Data validation utilities
│       └── mappers.ts               # Data transformation utilities
├── public/                          # Static assets and resources
│   ├── images/                      # Images and graphics
│   ├── icons/                       # Icon assets
│   └── fonts/                       # Custom font files
├── docs/                            # Documentation files
│   ├── USER_GUIDE.md                # User documentation
│   ├── DEVELOPER_GUIDE.md           # Developer documentation
│   └── API_REFERENCE.md             # API documentation
├── marketing/                       # Marketing materials and content
│   ├── social_media.md              # Social media content
│   ├── email_templates/             # Email marketing templates
│   └── landing_pages/               # Landing page content
├── tests/                           # Test files
│   ├── unit/                        # Unit tests
│   ├── integration/                 # Integration tests
│   └── e2e/                         # End-to-end tests
├── scripts/                         # Build and utility scripts
│   ├── seed-data.js                 # Data seeding script
│   └── generate-sitemap.js          # Sitemap generation
├── .github/                         # GitHub-specific files
│   ├── workflows/                   # GitHub Actions workflows
│   └── ISSUE_TEMPLATE/              # Issue templates
├── .next/                           # Next.js build output (gitignored)
├── node_modules/                    # Node.js dependencies (gitignored)
├── .env.local                       # Local environment variables (gitignored)
├── next.config.js                   # Next.js configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # NPM dependencies and scripts
└── README.md                        # Project documentation
```

## 🌟 Feature Roadmap

### Upcoming Features (Q3 2025)
- **AI-Powered Investment Recommendations**: Personalized property recommendations based on user investment criteria and preferences
- **Mobile Applications**: Native iOS and Android apps for on-the-go property analysis
- **Advanced Portfolio Analytics**: More sophisticated portfolio analysis tools with scenario modeling
- **Integration with Property Management Software**: Direct connection with popular property management platforms
- **Custom Reporting Engine**: Fully customizable report generation for investment analyses

### Planned for Q4 2025
- **Predictive Market Analytics**: AI-driven predictions for neighborhood growth and investment potential
- **Collaboration Tools**: Enhanced sharing and collaboration features for investment teams
- **Deal Analyzer with Offer Generator**: Automated offer generation based on investment criteria
- **Seller Financing Calculator**: Specialized tools for analyzing seller financing opportunities
- **Short-Term Rental Analysis**: Dedicated tools for analyzing short-term rental investments

## 🤝 Contributing

Contributions are welcome and appreciated! Pellego Seattle is built by and for real estate investors, and we value your input and expertise.

### Ways to Contribute
- **Report bugs**: If you find a bug, please create an issue with detailed reproduction steps
- **Suggest features**: Have an idea for a new feature? Open an issue to suggest it
- **Improve documentation**: Help us make our documentation more comprehensive and clear
- **Submit pull requests**: Code contributions are welcome for open issues

### Contribution Process
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests to ensure quality (`npm run test`)
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

For more detailed guidance, please refer to our [Contribution Guidelines](CONTRIBUTING.md).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. The MIT License is a permissive license that allows for reuse with minimal restrictions, allowing you to:

- Use the software commercially
- Modify the software
- Distribute the software
- Use and modify the software privately

## 📞 Contact & Support

### General Inquiries
For questions or support, please contact us at:
- Email: support@pellego-seattle.com
- Website: [www.pellego-seattle.com](https://www.pellego-seattle.com)

### Technical Support
- Email: tech@pellego-seattle.com
- GitHub Issues: For bug reports and feature requests

### Business Development
- Email: partnerships@pellego-seattle.com
- Phone: (206) 555-1234

### Social Media
- Twitter: [@PellegoSeattle](https://twitter.com/PellegoSeattle)
- LinkedIn: [Pellego Seattle](https://linkedin.com/company/pellego-seattle)
- Instagram: [@pellego_seattle](https://instagram.com/pellego_seattle)

## 🙏 Acknowledgements

- Data provided by Northwest Multiple Listing Service (NWMLS)
- Property tax data from King County Assessor's Office
- Market trend data provided by Zillow Research
- Mapping services powered by Mapbox and Google Maps
- Icons provided by [Heroicons](https://heroicons.com)
- Photos courtesy of Unsplash contributors

---

© 2025 Pellego Seattle. All rights reserved.

*"Making data-driven real estate investment accessible to everyone."*
