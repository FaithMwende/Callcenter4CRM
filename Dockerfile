# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install app dependencies
RUN npm install --production

# Make port 80 available to the world outside this container
EXPOSE 3000
RUN  npm install -g nodemon
RUN nodemon -v


# Define environment variable
ENV NODE_ENV production

# Start the app
CMD ["npm", "start"]
