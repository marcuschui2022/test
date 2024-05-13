# Use an official Node runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Install serve globally in the docker image
RUN npm install -g serve

# Copy package.json and package-lock.json to the workdir
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Serve the app
CMD ["serve", "-s", "dist", "-l", "5000"]

#docker build -t first-react-app .
#docker run -p 8080:5000 first-react-app
#docker run -d -p 8080:5000 first-react-app