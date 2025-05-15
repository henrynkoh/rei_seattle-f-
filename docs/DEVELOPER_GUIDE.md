# Pellego Seattle Developer Guide

This guide provides information for developers who want to work with or extend the Pellego Seattle platform. It includes setup instructions, architecture overview, and best practices.

## Table of Contents

1. [Development Environment Setup](#development-environment-setup)
2. [Architecture Overview](#architecture-overview)
3. [Project Structure](#project-structure)
4. [Component Library](#component-library)
5. [State Management](#state-management)
6. [API Integration](#api-integration)
7. [Testing](#testing)
8. [Deployment](#deployment)
9. [Contributing Guidelines](#contributing-guidelines)
10. [Resources](#resources)

## Development Environment Setup

### Prerequisites

- Node.js (v18.17.0 or later)
- npm (v9.6.0 or later)
- Git

### Clone and Install

```bash
# Clone the repository
git clone https://github.com/yourusername/seattle-pellego.git

# Navigate to the project directory
cd seattle-pellego

# Install dependencies
npm install
```

### Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.pellego-seattle.com
NEXT_PUBLIC_NWMLS_API_KEY=your_api_key_here

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_here

# Other Services
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
```

### Running Locally

```bash
# Start the development server
npm run dev

# Run with test data (no API calls)
npm run dev:mock
```

## Architecture Overview

Pellego Seattle is built using a modern tech stack:

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State Management**: React Context API & Hooks
- **Data Fetching**: React Query
- **Authentication**: NextAuth.js

### Key Design Principles

1. **Component-Based Architecture**: Independent, reusable components
2. **Server Components**: Leveraging Next.js server components for optimal performance
3. **Progressive Enhancement**: Core functionality works without JavaScript
4. **Mobile-First Design**: Responsive design for all screen sizes
5. **Accessibility**: WCAG 2.1 AA compliance

## Project Structure

```
seattle-pellego/
├── src/
│   ├── app/                    # Next.js app directory (pages and layouts)
│   │   ├── (auth)/             # Authentication-related pages
│   │   ├── features/           # Feature pages (analysis, reports, etc.)
│   │   ├── api/                # API routes
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   ├── components/             # Reusable components
│   │   ├── ui/                 # Basic UI components
│   │   ├── features/           # Feature-specific components
│   │   └── layout/             # Layout components
│   ├── hooks/                  # Custom React hooks
│   ├── services/               # API and third-party service integrations
│   ├── types/                  # TypeScript type definitions
│   └── utils/                  # Utility functions
├── public/                     # Static assets
├── docs/                       # Documentation
├── tests/                      # Test files
│   ├── unit/                   # Unit tests
│   ├── integration/            # Integration tests
│   └── e2e/                    # End-to-end tests
└── scripts/                    # Build and utility scripts
```

## Component Library

Our component library follows an atomic design methodology.

### Core Components

- **Atoms**: Buttons, inputs, icons, etc.
- **Molecules**: Form fields, cards, tabs, etc.
- **Organisms**: Forms, data tables, property cards, etc.
- **Templates**: Page layouts, section layouts
- **Pages**: Complete page components

### Component Documentation

Each component should include:

- JSDoc comments
- Props interface
- Usage examples
- Stories (Storybook)

Example component structure:

```tsx
// Button.tsx
import React from 'react';
import clsx from 'clsx';

export interface ButtonProps {
  /** Button text content */
  children: React.ReactNode;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
}

/**
 * Primary button component
 * @example
 * <Button variant="primary">Click Me</Button>
 */
export const Button = ({
  children,
  variant = 'primary',
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded font-medium transition-colors',
        {
          'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
          'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
          'border border-blue-600 text-blue-600 hover:bg-blue-50': variant === 'outline',
        },
        disabled && 'opacity-50 cursor-not-allowed'
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

## State Management

We use a combination of:

1. **React Context**: For global app state
2. **React Query**: For server state
3. **useState/useReducer**: For component-level state

### Context Example

```tsx
// AuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@/types/auth';
import { authService } from '@/services/auth';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    authService.getCurrentUser()
      .then(user => setUser(user))
      .finally(() => setIsLoading(false));
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const user = await authService.login(email, password);
      setUser(user);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await authService.logout();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

## API Integration

We use React Query for data fetching and caching:

```tsx
// propertyService.ts
import { Property, PropertyAnalysis } from '@/types/property';
import { apiClient } from '@/services/apiClient';

export const propertyService = {
  async getPropertyByAddress(address: string): Promise<Property> {
    const response = await apiClient.get(`/properties/search?address=${encodeURIComponent(address)}`);
    return response.data;
  },

  async getPropertyAnalysis(propertyId: string): Promise<PropertyAnalysis> {
    const response = await apiClient.get(`/properties/${propertyId}/analysis`);
    return response.data;
  },
};

// usePropertyAnalysis.ts
import { useQuery } from '@tanstack/react-query';
import { propertyService } from '@/services/propertyService';

export const usePropertyAnalysis = (propertyId: string) => {
  return useQuery({
    queryKey: ['propertyAnalysis', propertyId],
    queryFn: () => propertyService.getPropertyAnalysis(propertyId),
    enabled: !!propertyId,
  });
};
```

## Testing

### Unit Testing

We use Jest for unit testing:

```bash
# Run all unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

Example unit test:

```tsx
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  it('renders the button with text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders as disabled when disabled prop is true', () => {
    render(<Button disabled>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeDisabled();
  });
});
```

### Integration Testing

We use React Testing Library for integration tests:

```tsx
// PropertySearch.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PropertySearch } from './PropertySearch';
import { propertyService } from '@/services/propertyService';

// Mock the property service
jest.mock('@/services/propertyService', () => ({
  propertyService: {
    searchProperties: jest.fn(),
  },
}));

describe('PropertySearch component', () => {
  it('searches for properties and displays results', async () => {
    // Setup mock response
    (propertyService.searchProperties as jest.Mock).mockResolvedValue([
      { id: '1', address: '123 Main St', city: 'Seattle', price: 500000 },
    ]);

    render(<PropertySearch />);
    
    // Enter search query
    fireEvent.change(screen.getByPlaceholderText('Enter an address'), {
      target: { value: '123 Main' },
    });
    
    // Submit the form
    fireEvent.click(screen.getByText('Search'));
    
    // Verify loading state
    expect(screen.getByText('Searching...')).toBeInTheDocument();
    
    // Verify results are displayed
    await waitFor(() => {
      expect(screen.getByText('123 Main St')).toBeInTheDocument();
      expect(screen.getByText('$500,000')).toBeInTheDocument();
    });
  });
});
```

### E2E Testing

We use Playwright for end-to-end testing:

```bash
# Run e2e tests
npm run test:e2e

# Run e2e tests with UI
npm run test:e2e:ui
```

## Deployment

### Build Process

```bash
# Build the application
npm run build

# Analyze the bundle size
npm run analyze
```

### Deployment Environments

- **Development**: Vercel Preview Deployments
- **Staging**: Vercel Staging Environment
- **Production**: Vercel Production Environment

### CI/CD Pipeline

We use GitHub Actions for continuous integration and deployment:

1. **Pull Request**: Runs tests and creates preview deployment
2. **Merge to main**: Deploys to staging environment
3. **Release Tag**: Deploys to production environment

## Contributing Guidelines

### Code Style

We follow a consistent code style enforced by ESLint and Prettier:

```bash
# Check for linting issues
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format
```

### Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`npm run test && npm run lint`)
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Commit Message Format

We follow the Conventional Commits specification:

```
feat(property-analysis): add rental comparison feature
fix(auth): resolve login error with email addresses
docs(readme): update installation instructions
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

For questions or support, please contact the development team at dev@pellego-seattle.com. 