# Camper Essential Backend

## Introduction

The backend of Camper Essential provides the API for managing products, user authentication, and handling orders.

## Features

- **Product Management**: CRUD operations for products.
- **Payment Management**: Handle stripe for payment.

## Technology Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB**
- **Mongoose**
- **ImgBB API** (for image hosting)

## Installation Guideline

Follow these instructions to set up the Camper Shop backend locally.

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jakariamasum/Campher-Essential-Backend.git
   cd Campher-Essential-Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

### Configuration

1. **Create a `.env` file in the root directory of the backend:**

   ```bash
   touch .env
   ```

2. **Add necessary configuration variables in the `.env` file:**
   ```bash
   PORT=5000
   DB_URL=your_mongodb_connection_uri
   STRIPE_SECRET=your_stripe_secret_key
   ```

## Usage

1. **Start the backend server:**
   ```bash
   npm run start:dev
   # or
   yarn dev
   ```

### Example Endpoints

- **GET /api/v1/products**: Fetch all products.
- **POST /api/v1/products**: Add a new product.
- **PUT /api/v1/products/:id**: Update an existing product.
- **DELETE /api/v1/products/:id**: Delete a product.

## Contributing

We welcome contributions! Please read our contributing guidelines for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENCE file for details.
