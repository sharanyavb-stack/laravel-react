# News Aggregator Project Using (React, Laravel)

This project is a starter template for running a Laravel, MySQL, and React project using Docker.

## Prerequisites

### Before you start, make sure you have the following tools installed:

-   Docker Engine (latest)

-   Docker Compose (latest)

## Getting Started

1. Clone this repository to your local machine:

```
git clone https://github.com/sharanyavb-stack/laravel-react.git
```

2. Go to the project directory:

```
cd laravel-react
```

3. Build and start the Docker containers:

```
docker-compose up --build

if frontend throws error then run seperately

 step 1: docker build -t frontend  .
 step 2: docker run -p 3000:3000 frontend

```


This command will start the following Docker containers:<br>

`backend`: the Laravel application server running on port 8000<br>

`mariadb`: the MySQL database server running on port 3306<br>

`frontend`: the React development server running on port 3000<br>

4. Migrate the database:

-   Run the following command to connect to the laravel-app container:

```
docker-compose exec backend sh
```

Then, run the following command to migrate the database:

```
php artisan migrate
```

To Insert news 

```
php artisan insert-news
```


Access the Laravel backend application: `http://localhost:8000`

Access the React frontend application: `http://localhost:3000`


## Stopping the Containers

To stop the Docker containers, press `Ctrl+C` in the terminal window where you started the containers. Alternatively, you can run the following command in the project directory:

```
docker-compose down
```

This command will stop and remove the containers, as well as the network and volumes created by-

```
docker-compose up
```


## Application user manual

1. After successfully running both backend and frontend you will get a dashboard with `News Feed, Sign In & Sign Up with default Search & Filters` panel.

2. Since you have no user account, at first click `Sign Up` button to make a user account.

3. After successfully creating account you'll be redirected to `home` page. On the top you can `Personalize Your Feed` button.

4. If you click `Personalize Your Feed` button, you are navigated to `personalise` page to customise your feed.

4. User can search news from the search bar or filter news by date, category, source.

5. If you click on `logout` you'll be logged out and redirected to `login` panel.

# Video Walkthrough: 
   I have also included a video walkthrough of the project to provide a detailed explanation of the implementation. You can view the video via the following link: 
   <a href="https://drive.google.com/file/d/1OonXmlndt6DzQhW3mWSfbE2if-b-eDkb/view?usp=drive_link"> Video Walkthrough LINK </a>

# laravel-react screenshots

<img width="200" alt="Image" src="https://github.com/user-attachments/assets/7d67617e-da3f-40b1-a21f-8e720301828b" />

<img width="200" alt="Image" src="https://github.com/user-attachments/assets/81a3e555-2166-4818-aa39-46e67494148e" />

<img width="200" alt="Image" src="https://github.com/user-attachments/assets/f6cf0c6d-9f01-487a-a42c-292aa1e3ea57" />

<img width="200" alt="Image" src="https://github.com/user-attachments/assets/9daa1e93-4434-4513-a787-c19fcef69945" />

<img width="200" alt="Image" src="https://github.com/user-attachments/assets/56658000-8c19-4dfd-800d-a93b26602568" />
