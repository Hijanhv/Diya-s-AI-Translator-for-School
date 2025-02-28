# AI Translator

A modern translation application built with Next.js, TypeScript, and OpenAI's GPT-4 API. This app provides seamless translation between multiple languages with a beautiful, responsive user interface.

![AI Translator Screenshot](screenshot.png)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

1. **Node.js** (version 18.17 or higher)

   - Download and install from [Node.js official website](https://nodejs.org/)
   - Verify installation by running:
     ```bash
     node --version
     npm --version
     ```

2. **Git** (optional, for cloning the repository)
   - Download and install from [Git official website](https://git-scm.com/)
   - Verify installation by running:
     ```bash
     git --version
     ```

## Setup Instructions

1. **Clone the Repository** (or download the ZIP file)

   ```bash
   git clone <repository-url>
   cd modern_translation_app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables Setup**

   - Create a `.env.local` file in the root directory
   - Add your OpenAI API key:
     ```
     OPENAI_API_KEY=your_api_key_here
     ```
   - To get an API key:
     1. Go to [OpenAI's platform](https://platform.openai.com/)
     2. Sign up or log in
     3. Navigate to API keys section
     4. Create a new secret key
     5. Copy and paste it into your `.env.local` file

4. **Start the Development Server**

   ```bash
   npm run dev
   ```

5. **Access the Application**
   - Open your browser and navigate to [http://localhost:3000](http://localhost:3000)
   - The application should now be running and ready to use

## Features

- Support for 12 languages including Arabic, Chinese, English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Sanskrit, and Spanish
- Real-time translation powered by GPT-4
- Modern, responsive UI with beautiful gradients and animations
- Dark mode support
- Swap languages functionality
- Character count display
- Loading states and error handling

## Tech Stack

- **Frontend Framework**: Next.js 15.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: OpenAI GPT-4
- **UI Components**: Custom components with modern design principles

## Development

To contribute to the project:

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## Troubleshooting

1. **API Key Issues**

   - Ensure your OpenAI API key is valid
   - Check if the `.env.local` file is in the root directory
   - Verify the environment variable name is exactly `OPENAI_API_KEY`

2. **Build Errors**

   - Clear the `.next` folder: `rm -rf .next`
   - Delete `node_modules`: `rm -rf node_modules`
   - Reinstall dependencies: `npm install`

3. **Translation Errors**
   - Check your internet connection
   - Verify your OpenAI API key has sufficient credits
   - Ensure the text length is within reasonable limits

## License

MIT License - feel free to use this project for personal or commercial purposes.
