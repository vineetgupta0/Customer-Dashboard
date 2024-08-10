

# Project Overview

This React project is a Customer Details Portal, designed to display a list of customers and their detailed information, including random photos. The application uses TypeScript, React hooks, Material-UI (MUI) for styling, and Axios for API calls.
Component Analysis:

## App (src/App.tsx):
---
- Main component that orchestrates the entire application.
- Uses the useCustomers hook to fetch customer data.
- Manages the state of the selected customer using useState.
- Renders the main layout using MUI's Container, Grid, and Typography components.
- Implements a responsive design with a two-column layout for larger screens.


## Components
---
### CustomerList (src/components/CustomerList.tsx):

- Displays a scrollable list of customers.
- Receives customers, selectedCustomerId, and onSelectCustomer as props.
- Renders each customer using the CustomerCard component.
- Wrapped in a MUI Paper component for elevation and styling.


### CustomerCard (src/components/CustomerCard.tsx):

- Represents an individual customer in the list.
- Uses MUI's ListItemButton for interactive list items.
- Displays the customer's name and title.
- Implements a selected state for visual feedback.
- Uses React.memo for performance optimization.


### CustomerDetails (src/components/CustomerDetails.tsx):

- Displays detailed information about a selected customer.
- Shows a placeholder message when no customer is selected.
- Renders customer information including name, title, address, and details.
- Incorporates the PhotoGrid component to display random photos.
- Uses the usePhotos hook to fetch and display photos.


### PhotoGrid (src/components/PhotoGrid.tsx):

- Displays a grid of photos.
- Uses MUI's Grid component for responsive layout.
- Applies hover effects and rounded corners to images.



## Hook Analysis
---
### useCustomers (src/hooks/useCustomers.ts):

- Custom hook for fetching and managing customer data.
- Generates a mock list of 1000 customers.
- Uses useState to manage customers and loading state.
- Simulates an API call using useEffect.


### usePhotos (src/hooks/usePhotos.ts):

- Custom hook for fetching random photos from the Unsplash API.
- Uses Axios to make API requests.
- Implements a polling mechanism to fetch new photos every 10 seconds.
- Manages photo state using useState.



## Type Definitions
---
### Customer (src/types/Customer.ts):

- Defines the structure of a customer object.
- Includes id, name, title, address, and details.


### Photo (src/types/Photo.ts):

- Defines the structure of a photo object.
- Includes id and url.



## Key Features and Observations:
---
### Performance Optimization:

- Use of React.memo in CustomerCard to prevent unnecessary re-renders.
- Implementation of custom hooks for data fetching and state management.


### Responsive Design:

- Utilizes MUI's Grid system for a responsive layout.
- Adapts to different screen sizes (xs and md breakpoints used).


### Styling:

- Consistent use of MUI components for a cohesive look.
- Custom styling applied using MUI's sx prop for fine-tuned control.


### State Management:

- Uses React's built-in useState hook for local state management.
- Lifts state up to the App component for sharing between child components.


### API Integration:

- Demonstrates API integration with the Unsplash API for fetching random photos.
- Uses Axios for making HTTP requests.


### Mock Data:

- Generates mock customer data for demonstration purposes.


### TypeScript Integration:

- Utilizes TypeScript for type checking and improved developer experience.
- Defines clear interfaces for props and data structures.


### Code Organization

- Follows a clear structure with separate directories for components, hooks, and types.
- Each component and hook is defined in its own file for better maintainability.



## Areas for Potential Improvement:
---
- Error handling could be enhanced, especially in the usePhotos hook.
Pagination or virtualization could be implemented for better performance with large customer lists.
- The Unsplash API key is hardcoded, which is not ideal for security. It should be managed through environment variables.

- This project demonstrates a well-structured React application using modern practices and libraries. It showcases component composition, custom hooks, API integration, and responsive design principles.