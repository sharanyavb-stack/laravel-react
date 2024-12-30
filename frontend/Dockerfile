FROM node:18-alpine
WORKDIR /app/frontend
# Step 3: Copy package.json and package-lock.json (if any) to the container
COPY package.json ./
RUN npm install --legacy-peer-deps
RUN npm install -g react-scripts
# RUN npm install react@16.13.0
# RUN npm install webpack-dev-server@latest ws@latest

# react-dom
COPY . .
EXPOSE 3000
CMD ["npm", "start"]