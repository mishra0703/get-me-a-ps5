# Get Me A PS5

## Overview

Get Me A PS5 is a crowdfunding platform designed to help gamers and enthusiasts raise funds for purchasing gaming equipment, particularly the PlayStation 5. Our platform allows users to create personalized fundraising campaigns and receive support from friends, family, and the gaming community. With secure payment processing and user-friendly design, we make it easy to turn your gaming dreams into reality.

## Features

- **User Authentication**: Secure login with Google and GitHub OAuth
- **Personalized Campaigns**: Create custom fundraising pages with your story and goals
- **Secure Payments**: Razorpay integration for safe and reliable transactions
- **User Profiles**: Manage your campaigns and track progress
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Updates**: Track donations and campaign progress instantly

## Technologies Used

- **Frontend & Backend**: Next.js (JavaScript)
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **Authentication**: NextAuth.js
- **Payments**: Razorpay integration
- **Hosting**: Vercel

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.22.x or later)
- MongoDB Atlas account
- Razorpay account for payment processing

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/mishra0703/get-me-a-ps5.git
   cd get-me-a-ps5
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add the necessary environment variables:

   ```sh
   MONGO_DB_URI=your_mongodb_connection_string
   
   GITHUB_ID=your_github_oauth_client_id
   GITHUB_SECRET=your_github_oauth_client_secret

   GOOGLE_CLIENT_ID=your_google_oauth_client_id
   GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret

   NEXT_PUBLIC_URL=http://localhost:3000
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret_key

   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

4. **Run the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

   You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Environment Variables Setup

### OAuth Setup:

1. **GitHub OAuth:**
   - Go to GitHub Settings → Developer settings → OAuth Apps
   - Create new OAuth app with callback URL: `http://localhost:3000/api/auth/callback/github`

2. **Google OAuth:**
   - Go to Google Cloud Console → APIs & Services → Credentials
   - Create OAuth 2.0 client with callback URL: `http://localhost:3000/api/auth/callback/google`

3. **MongoDB:**
   - Create a MongoDB Atlas cluster
   - Get your connection string and add to `MONGO_DB_URI`

4. **Razorpay:**
   - Create a Razorpay account
   - Get your API keys from the dashboard

## Deployment

The application is deployed on Vercel. For your own deployment:

1. **Deploy to Vercel:**
   - Connect your GitHub repository to Vercel
   - Add all environment variables in Vercel dashboard
   - Update OAuth callback URLs to your production domain

2. **Update Environment Variables for Production:**
   ```sh
   NEXT_PUBLIC_URL=https://your-app.vercel.app
   NEXTAUTH_URL=https://your-app.vercel.app
   # Update OAuth callback URLs in respective platforms
   ```

## Live Demo

Check out the live application: [Get Me A PS5](https://get-me-a-ps5.vercel.app/)

## Feedback and Contributions

We welcome feedback and contributions to improve the platform! Whether you want to add new features, fix bugs, or enhance the user experience, your contributions are valuable.

### How to Contribute

1. **Fork the repository:**
   Click on the "Fork" button at the top right of this page to create a copy of this repository under your GitHub account.

2. **Clone the forked repository:**
   ```sh
   git clone https://github.com/your-username/get-me-a-ps5.git
   cd get-me-a-ps5
   ```

3. **Create a new branch:**
   ```sh
   git checkout -b feature-branch-name
   ```

4. **Make your changes and commit them:**
   ```sh
   git add .
   git commit -m 'Add new feature: description of changes'
   ```

5. **Push to the branch:**
   ```sh
   git push origin feature-branch-name
   ```

6. **Open a Pull Request:**
   Go to the repository on GitHub and click on the "Compare & pull request" button. Provide a clear description of your changes and submit the pull request.

## Contribution Guidelines

- Ensure your code follows the project's coding standards
- Include relevant documentation and update existing documentation if needed
- Write clear and descriptive commit messages
- Test your changes thoroughly before submitting a pull request
- Follow the existing file structure and naming conventions

## Project Structure

```
get-me-a-ps5/
├── app/                    # Next.js app directory
├── components/             # Reusable React components
├── lib/                   # Utility functions and database connections
├── models/                # MongoDB/Mongoose models
├── pages/api/             # API routes
├── public/                # Static assets
└── styles/                # Global styles
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions, feedback, or support, please reach out:
- **Email**: premmishra874478@gmail.com
- **GitHub**: [@mishra0703](https://github.com/mishra0703)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

### 🎮 If you found this project helpful, consider [supporting the creator](https://get-me-a-ps5.vercel.app/) 🕹️

---

## Acknowledgments

- Thanks to the Next.js team for the amazing framework
- Razorpay for secure payment processing
- MongoDB for reliable database services
- Vercel for seamless deployment platform
