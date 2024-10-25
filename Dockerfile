# Base image
FROM node:18-alpine

# Update Alpine and install curl and bash
RUN apk update && apk add --no-cache curl bash

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js app
RUN npm run build

# Expose necessary port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
