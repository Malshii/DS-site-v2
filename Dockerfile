# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the necessary port (3000 by default for Next.js)
EXPOSE 3000

# Set the command to run the application
CMD ["npm", "run", "start"]