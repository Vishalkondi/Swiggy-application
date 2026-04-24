# Use Node.js
FROM node:16

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build React app
RUN npm run build

# Install lightweight server
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Run production build
CMD ["serve", "-s", "build"]