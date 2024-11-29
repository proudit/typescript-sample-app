# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and tsconfig.json
COPY package.json tsconfig.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY src ./src

# Expose port
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]

