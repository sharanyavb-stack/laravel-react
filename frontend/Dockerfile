FROM node:18-alpine
WORKDIR /app/frontend
# Step 3: Copy package.json and package-lock.json (if any) to the container
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g react-scripts
RUN npm install react@18.2.0
RUN npm install webpack-dev-server@latest ws@latest

# react-dom
COPY . .
EXPOSE 3000
CMD ["npm", "start"]