# Stage 1: Build the React application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY client/package.json client/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY client/ ./

# Build the application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the built app from the builder stage to Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx configuration if you have one
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
