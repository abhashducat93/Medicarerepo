# Medicare

Medicare is a comprehensive healthcare management platform designed to simplify the process of booking appointments, managing patient records, and streamlining pharmacy and product management. 

This project leverages modern web technologies to create a responsive and user-friendly interface, offering features like appointment scheduling, a dynamic admin dashboard, and a seamless checkout system for medical products and services.

## What's New

Medicare is the composition of pharmacy management and the online health checking with the integration of the AI tools.## Table of Contents
- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## About

MedicareProject is a modern web-based healthcare management system aimed at improving the efficiency and accessibility of medical services. This platform is designed to cater to patients, healthcare providers, and administrators by providing:

- **Appointment Booking**: Effortlessly schedule in-shop or home consultations.
- **Pharmacy Management**: Explore and purchase medical products with ease.
- **Admin Dashboard**: Manage user details, products, and appointments seamlessly.
- **Checkout System**: A simple and secure payment process with dynamic discount calculations.

Built using the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS, MedicareProject provides a clean, intuitive, and responsive interface, ensuring accessibility across all devices. 
## Features

- **Appointment Scheduling**: Book and manage appointments for in-shop or home consultations.
- **Pharmacy Management**: Browse and purchase medical products with a seamless checkout process.
- **Admin Dashboard**: Add, edit, and manage users, products, and appointments dynamically.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Secure Payments**: Multiple payment options with real-time feedback on selection.
## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Vercel 
## Getting Started

Follow these steps to set up the project locally:

### Prerequisites
- **Node.js**: v14+ recommended
- **MongoDB**: Local or cloud-based instance (e.g., MongoDB Atlas)
- **Git**: Installed for version control

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/medicareproject.git
   cd medicareproject

2. 
**a. Backend**:
```bash
cd server
npm install
```

**b. Frontend**:

```bash
cd client
npm install
```
3. **Set up environment variables**:

```bash
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
CLOUDINARY_URL=<your-cloudinary-url> # if applicable
```
4. **Start the Application**:

```bash
cd client
npm run both
```

## Usage

1. **User Actions**:
   - Patients can book appointments for in-shop or at-home consultations.
   - Users can browse and purchase medical products with a secure checkout process.

2. **Admin Dashboard**:
   - Add, edit, and manage patient details, products, and appointments in real time.

3. **Interactive UI**:
   - Experience a fully responsive design optimized for both desktop and mobile devices.

4. **Payment System**:
   - Choose from multiple payment methods with real-time visual feedback on selections.


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/prince-368909285/)



## Screenshots

![Home](./client/src/assets/bg.jpg)

## Contributing

We welcome contributions to MedicareProject! If you'd like to contribute





Here's a Dockerfile for your React client application based on the project structure you've shared:

dockerfile
# Stage 1: Build the React application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY client/package.json client/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY client/ ./

# Build the application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the built app from the builder stage to Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx configuration if you have one
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
Notes:
This is a multi-stage Dockerfile that:

First builds your React application using Node.js

Then serves the built static files using Nginx

The Dockerfile assumes:

Your React app has a standard build script in package.json (npm run build)

You want to serve the production build on port 80

If you need to make adjustments:

If you're using a different Node version, change the node:18-alpine to your preferred version

If you have a custom Nginx configuration, uncomment and modify the relevant line

If your React app needs environment variables during build, you'll need to add them with ARG or ENV directives

To use this Dockerfile:

Place it in your project root (same level as the client directory)

Build with: docker build -t medicare-client .

Run with: docker run -p 3000:80 medicare-client
