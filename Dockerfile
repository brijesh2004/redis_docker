# Use official Node.js image
FROM node

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app code
COPY . .

# Expose the port your app runs on (e.g., 3000)
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]