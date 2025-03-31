# Builder stage: install dependencies and build the app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json  ./
RUN npm install

# Copy all source files
COPY . .

# Build and export the app (make sure your package.json has these scripts)
RUN npm run build
# Runner stage: serve the static files
FROM node:18-alpine AS runner

WORKDIR /app

# Copy the generated output from the builder stage
COPY --from=builder /app/out ./out

# Install a lightweight static file server (e.g., serve)
RUN npm install -g serve

# Expose the port and start the server
EXPOSE 8080
CMD ["serve", "-s", "out", "-l", "8080"]
