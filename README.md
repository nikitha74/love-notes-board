# 💌 Love Notes Board - Full Stack Application

A Valentine's Day themed full-stack web application for sharing love notes anonymously or with your name.

![Love Notes Board](https://img.shields.io/badge/Made%20with-❤️-red)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.0.2-brightgreen)
![Angular](https://img.shields.io/badge/Angular-18+-red)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)

## 🎯 Features

- ❤️ Post love notes (anonymous or named)
- ✏️ Edit your notes
- 🗑️ Delete notes
- 💕 Beautiful Valentine's themed UI with floating hearts
- 🐳 Fully containerized with Docker
- 📱 Responsive design
- 💝 500 character limit with counter

## 🛠️ Tech Stack

### Backend
- **Framework**: Spring Boot 4.0.2
- **Language**: Java 21
- **Database**: MySQL 8.0
- **ORM**: Hibernate/JPA
- **Build Tool**: Maven
- **Containerization**: Docker & Docker Compose

### Frontend
- **Framework**: Angular 18+
- **Language**: TypeScript
- **Styling**: Custom CSS (Valentine's theme)
- **HTTP Client**: Angular HttpClient

## 📁 Project Structure
```
love-notes-board/
├── lovenotes/              # Spring Boot Backend
│   ├── src/
│   │   └── main/
│   │       ├── java/com/valentine/lovenotes/
│   │       │   ├── controller/
│   │       │   ├── model/
│   │       │   ├── repository/
│   │       │   └── service/
│   │       └── resources/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── pom.xml
│
└── lovenotes-frontend/     # Angular Frontend
    ├── src/
    │   └── app/
    │       ├── components/
    │       ├── models/
    │       └── services/
    ├── package.json
    └── angular.json
```

## 🚀 Quick Start

### Prerequisites
- Java 21
- Node.js 18+
- Docker & Docker Compose
- Maven (optional, wrapper included)
- MySQL 8.0 (if running locally without Docker)

### Option 1: Running with Docker (Recommended)

1. **Clone the repository**
```bash
   git clone https://github.com/nikitha74/love-notes-board.git
   cd love-notes-board
```

2. **Update passwords in `lovenotes/docker-compose.yml`**
```yaml
   environment:
     MYSQL_ROOT_PASSWORD: your_password_here
     DB_PASSWORD: your_password_here
```

3. **Start backend with Docker**
```bash
   cd lovenotes
   docker-compose up --build
```
   Backend API: `http://localhost:8080`

4. **Start frontend (in new terminal)**
```bash
   cd lovenotes-frontend
   npm install
   ng serve
```
   Frontend App: `http://localhost:4200`

### Option 2: Running Locally (Without Docker)

#### Backend
```bash
cd lovenotes

# Update src/main/resources/application.properties
# spring.datasource.password=YOUR_MYSQL_PASSWORD

# Make sure MySQL is running on localhost:3306
./mvnw spring-boot:run
```

#### Frontend
```bash
cd lovenotes-frontend
npm install
ng serve
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/lovenotes` | Get all love notes |
| GET | `/api/lovenotes/{id}` | Get single love note |
| POST | `/api/lovenotes` | Create new love note |
| PUT | `/api/lovenotes/{id}` | Update love note |
| DELETE | `/api/lovenotes/{id}` | Delete love note |

## 🐳 Docker Commands
```bash
# Start containers
cd lovenotes
docker-compose up --build

# Stop containers
docker-compose down

# Remove volumes (fresh database)
docker-compose down -v

# View logs
docker-compose logs -f backend
docker-compose logs -f mysql

# View running containers
docker ps
```

## 🔒 Security Notes

⚠️ **Important**: The passwords in this repository are **placeholders only**.

**Before running:**
1. Change `MYSQL_ROOT_PASSWORD` and `DB_PASSWORD` in `docker-compose.yml`
2. Change `spring.datasource.password` in `application.properties` (for local runs)
3. **Never commit real passwords to Git**

## 🎨 Features Showcase

- 💗 Beautiful pink/red gradient Valentine's theme
- ✨ Animated floating hearts
- 📝 Character counter (500 max)
- 🎭 Anonymous posting option
- 💌 Smooth hover animations on cards
- 📱 Responsive grid layout

## 🤝 Contributing

This is a personal project built for Valentine's Day 2026. Feel free to fork and customize for your own use!

## 📝 To-Do / Future Enhancements

- [ ] Deploy backend to AWS EC2
- [ ] Deploy frontend to AWS S3
- [ ] Add user authentication
- [ ] Add like/heart reactions to notes
- [ ] Add search and filter functionality
- [ ] Add pagination for large datasets

## 📄 License

This project is open source and available under the MIT License.

## 💝 Author

**Nikitha Reddy**

Built with ❤️ for Valentine's Day 2026

---

⭐ If you like this project, please give it a star on GitHub!

**Happy Valentine's Day! Spread the love! 💕**
