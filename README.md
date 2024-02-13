# Donation Campaign Management System

Welcome to the Donation Campaign Management System! This system is designed to facilitate the management of donation campaigns, allowing users to view, donate, and manage donation posts effectively.

## Live URL

You can access the live version of the application at [Live Demo](https://donation-campaign-three.vercel.app).

### for testing you can login by this creditials

- **User**: user@gmail.com , pass: 123456,
- **Admin**: admin@gmail.com , pass: 123456

## Features

### User Features

- **View Donation Posts**: Users can view available donation posts.
- **Donate**: Users can make donations to the posted campaigns.
- **View Donation History**: Users can see which donation posts they have contributed to, which is displayed in their user dashboard.

### Admin Features

- **Create/Update/Delete Donation Posts**: Admins have full control over donation posts, including creating, updating, and deleting them.
- **View Donation Statistics**: Admins can view detailed statistics for each donation post, including target amount, raised amount, and percentage achieved.
- **Create Other Admins**: Admins have the authority to create additional administrators for the system.
- **Pie Chart**: The system calculates and visually displays the percentage of the target amount achieved for each donation post in a pie chart.

- **Fetch All Donations**: Users and admins can access all donation posts available in the system.
- **Fetch a Single Donation by ID**: Users can retrieve specific donation posts by their unique IDs.
- **Create New Donations**: Admins can create new donation posts for fundraising campaigns.
- **Update Donation Details**: Admins can update the details of existing donation posts.
- **Retrieve User Donations**: Users can retrieve their donation history, including all donations they have made.

## Technologies Used

- **Frontend**: Next.js, React.js, Ant Design, Recharts, Tailwind.css
- **Backend**: Node.js,Express,Mongoose, MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Getting Started

To get started with the Donation Campaign Management System:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Configure your MongoDB database and update environment variables.
4. Run the backend server using `npm run dev`.
5. Run the frontend application using `npm run dev`.
