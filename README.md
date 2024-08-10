# Customer-Dashboard
A customer dashboard implementation in react 

# 🏢 Customer Details Portal

## 📋 Overview

The Customer Details Portal is a React-based web application that displays a list of customers and their detailed information, including randomly generated photos. This project demonstrates modern React development practices, including the use of TypeScript, custom hooks, and Material-UI for styling.

## ✨ Features

- 📜 Display a list of 1000 mock customers
- 👤 View detailed information for each customer
- 🖼️ Display a grid of random photos for each customer
- 📱 Responsive design for various screen sizes
- 🔄 Auto-refresh of photos every 10 seconds

## 🛠️ Technologies Used

- ⚛️ React 18
- 📘 TypeScript
- 🎨 Material-UI (MUI)
- 🌐 Axios for API calls
- 📷 Unsplash API for random photos

## 📁 Project Structure


```
src/
├── components/
│   ├── CustomerCard.tsx
│   ├── CustomerDetails.tsx
│   ├── CustomerList.tsx
│   └── PhotoGrid.tsx
├── hooks/
│   ├── useCustomers.ts
│   └── usePhotos.ts
├── types/
│   ├── Customer.ts
│   └── Photo.ts
├── App.tsx
└── index.tsx
```
##  🚀 Setup and Installation

1. Clone the repository:
```git clone https://github.com/vineetgupta0/Customer-Dashboard.git```
2. Navigate to the project directory:
```cd Customer-Dashboard```
3. Install dependencies:
```npm install```

4. Create a `.env` file in the root directory and add your Unsplash API key:
```REACT_APP_UNSPLASH_ACCESS_KEY=your_unsplash_api_key_here```
5. Start the development server:
```npm start```
6. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.


## 🧩 Component Details

###  App (App.tsx)
The main component that orchestrates the entire application. It uses the `useCustomers` hook to fetch customer data and manages the state of the selected customer.

###  CustomerList (components/CustomerList.tsx)
Displays a scrollable list of customers. It receives the list of customers, the ID of the selected customer, and a function to handle customer selection as props.

###  CustomerCard (components/CustomerCard.tsx)
Represents an individual customer in the list. It uses MUI's `ListItemButton` for interactive list items and implements a selected state for visual feedback.

###  CustomerDetails (components/CustomerDetails.tsx)
Displays detailed information about a selected customer, including their name, title, address, and a grid of random photos.

###  PhotoGrid (components/PhotoGrid.tsx)
Displays a grid of photos using MUI's `Grid` component. It applies hover effects and rounded corners to images.

## 🎣 Custom Hooks

###  useCustomers (hooks/useCustomers.ts)
A custom hook for fetching and managing customer data. It generates a mock list of 1000 customers.

###  usePhotos (hooks/usePhotos.ts)
A custom hook for fetching random photos from the Unsplash API. It implements a polling mechanism to fetch new photos every 10 seconds.

## 🎨 Styling

The project uses Material-UI (MUI) for styling and layout. Custom styles are applied using MUI's `sx` prop for fine-tuned control. The application is responsive and adapts to different screen sizes using MUI's Grid system.

## 🚀 Performance Considerations

-  `React.memo` is used in the CustomerCard component to prevent unnecessary re-renders.
-  Custom hooks are implemented for efficient data fetching and state management.

## 🔮 Future Improvements

1.  Implement error handling, especially for API calls.
2.  Add pagination or virtualization for better performance with large customer lists.
3.  Implement state management solution (e.g., Redux) for more complex data flows.
4.  Add unit and integration tests.
5.  Enhance accessibility features.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.