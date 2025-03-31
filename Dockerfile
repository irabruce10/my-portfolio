# FROM node:lts-alpine AS builder
# # Install necessary tools
# RUN apk add --no-cache libc6-compat yq --repository=https://dl-cdn.alpinelinux.org/alpine/edge/community
# # Install pnpm
# RUN corepack enable && corepack prepare pnpm@latest --activate
# WORKDIR /app
# # Copy the content of the project to the machine
# COPY . .
# RUN yq --inplace --output-format=json '(.devDependencies = (.devDependencies | to_entries | map(select(.key | test("^(@jest/globals|@playwright/test|@ts-safeql/eslint-plugin|jest|jest-environment-jsdom|libpg-query|prettier|prettier-plugin-embed|prettier-plugin-sql|stylelint|stylelint-config-upleveled)$") | not)) | from_entries))' package.json
# RUN pnpm install
# RUN pnpm build

# # Multi-stage builds: runner stage
# FROM node:lts-alpine AS runner
# ENV NODE_ENV production
# # Install necessary tools
# RUN apk add bash postgresql
# RUN corepack enable && corepack prepare pnpm@latest --activate
# WORKDIR /app

# # Copy built app
# COPY --from=builder /app/.next ./.next

# # Copy only necessary files to run the app (minimize production app size, improve performance)
# COPY --from=builder /app/node_modules ./node_modules

# COPY --from=builder /app/public ./public
# COPY --from=builder /app/package.json ./
# COPY --from=builder /app/next.config.mjs ./


# # Use a minimal Node.js image
# FROM node:18-alpine

# WORKDIR /app

# # Copy the static files (make sure you’ve run `next export` so that out/ exists)
# COPY out/ .

# # Install a static file server globally (serve is one option)
# RUN npm install -g serve

# # Expose the port that your app will listen on
# EXPOSE 8080

# # Start the static server on port 8080, serving the current directory
# CMD ["serve", "-s", ".", "-l", "8080"]
# FROM node:18-alpine AS builder

# WORKDIR /app

# # Install dependencies
# COPY package.json ./
# RUN npm install

# # Copy all files and build
# COPY . .
# RUN npm run build

# FROM node:18-alpine AS runner
# WORKDIR /app

# # Copy the build output from the builder stage (adjust the path if needed)
# COPY --from=builder /app/out ./out

# CMD ["npm", "start"]


# Builder stage: install dependencies and build the app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json  ./
RUN npm install

# Copy all source files
COPY . .

# Build and export the app (make sure your package.json has these scripts)
RUN npm run build && npm run export

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
