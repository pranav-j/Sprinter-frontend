FROM node:20.11.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

# Set the environment variable with a default value
# ENV NEXT_PUBLIC_BASE_URL=http://localhost:3030
# ENV NEXT_PUBLIC_BASE_URL=http://ec2-65-2-63-42.ap-south-1.compute.amazonaws.com:3030

CMD ["npm", "start"]