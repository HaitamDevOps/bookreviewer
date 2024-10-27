# BookReviewer

**Bookreviewer** is a mini-blog application built using Django for the backend and React (Next.js) for the frontend. This project is designed to be a simple and easy-to-use platform for posting and managing book reviews. The primary goal of BookReviewer is to provide a free and open-source blog application that can be used for general purposes, such as training in DevOps, programming, security, and other technical skills.

## Features

- **User Authentication** **:** Secure login and registration system using Django's built-in authentication.
- **CRUD Operations** **:** Users can create, read, update, and delete their book reviews.
- **Responsive Design** **:** Fully responsive UI built with React and Next.js, ensuring compatibility across devices.
- **Comment System** **:** Users can comment on reviews, encouraging interaction and discussion.
- **Admin Panel** **:** Django's admin panel allows easy management of reviews and users.
- **SEO-Friendly** **:** Optimized for search engines using Next.js features.

## Installation

### Prerequisites

* Python 3.11
* Node.js 22.6.0
* Django 5.0
* PostgreSQL (or any preferred database)

### Backend setup (Django)

To setup the backend, you can chose between these two option:

1. **Run as a Docker Container**  (*recommended*) : Utilize Dockerfile to run the backend as a containerized application.
2. **Run On-Premise** : Set up and run the backend on your local machine.

#### Option 1 : Run as a Docker Container

1. Clone the repository :

```shell
git clone https://github.com/HaitamDevOps/bookreviewer
```

3. Build the Docker :

```shell
docker build -t bookreviewer-backend .
```

3. Run the Docker Container :

```shell
docker run -d -p 8000:8000 --name bookreviewer-backend bookreviewer-backend
```

4. Access the backend :

Open your browser and navigate to `http://localhost:8000` to access the Django backend. You can verify that the backend is running correctly by checking the display of JSON data at `http://localhost:8000/api/book`. This endpoint should return a list of books in JSON format.

#### Option 2 : Run On-Premise
