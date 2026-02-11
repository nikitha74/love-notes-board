💌 Love Notes Board - Full Stack Application
A Valentine's Day themed full-stack web application for sharing love notes anonymously or with your name.

🎯 Features
❤️ Post love notes (anonymous or named)
✏️ Edit your notes
🗑️ Delete notes
💕 Beautiful Valentine's themed UI
🐳 Fully containerized with Docker
📱 Responsive design
🛠️ Tech Stack
Backend
Framework: Spring Boot 4.0.2
Language: Java 21
Database: MySQL 8.0
ORM: Hibernate/JPA
Build Tool: Maven
Containerization: Docker
Frontend
Framework: Angular 18+
Language: TypeScript
Styling: Custom CSS
HTTP Client: Angular HttpClient
📁 Project Structure
lovenotes/
├── lovenotes/              # Spring Boot Backend
│   ├── src/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── pom.xml
│
└── lovenotes-frontend/     # Angular Frontend
    ├── src/
    ├── package.json
    └── angular.json
🚀 Quick Start
Prerequisites
Java 21
Node.js 18+
Docker & Docker Compose
Maven (optional, wrapper included)
Running with Docker (Recommended)
Clone the repository
   git clone https://github.com/YOUR_USERNAME/lovenotes-app.git
   cd lovenotes-app
Update passwords in lovenotes/docker-compose.yml
   MYSQL_ROOT_PASSWORD: your_password_here
   DB_PASSWORD: your_password_here
Start backend with Docker
   cd lovenotes
   docker-compose up --build
Backend will run on: http://localhost:8080

Start frontend
   cd lovenotes-frontend
   npm install
   ng serve
Frontend will run on: http://localhost:4200

Running Locally (Without Docker)
Backend
cd lovenotes

# Update src/main/resources/application.properties with your MySQL credentials
# Make sure MySQL is running on localhost:3306


./mvnw spring-boot:run
Frontend
cd lovenotes-frontend
npm install
ng serve
📡 API Endpoints
GET /api/lovenotes - Get all love notes
GET /api/lovenotes/{id} - Get single love note
POST /api/lovenotes - Create new love note
PUT /api/lovenotes/{id} - Update love note
DELETE /api/lovenotes/{id} - Delete love note
🐳 Docker Commands
# Start containers
docker-compose up --build

# Stop containers
docker-compose down

# Remove volumes (fresh database)
docker-compose down -v

# View logs
docker-compose logs -f

# View running containers
docker ps
📸 Screenshots
[Add screenshots of your app here]

🔒 Security Notes
⚠️ Important: The passwords in docker-compose.yml and application.properties are placeholders.

Before running:

Change passwords in docker-compose.yml
Change password in application.properties (if running locally)
Never commit real passwords to Git
🤝 Contributing
This is a personal project, but feel free to fork and customize!

📝 License
This project is open source and available under the MIT License.

💝 Author
Built with ❤️ for Valentine's Day 2026

Happy Valentine's Day! Spread the love! 💕
