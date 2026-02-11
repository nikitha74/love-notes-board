## 🔧 Configuration

### Database Setup

1. **Update Database Password**
   
   Edit `src/main/resources/application.properties`:
```properties
   spring.datasource.password=YOUR_MYSQL_PASSWORD
```

2. **Update Docker Passwords**
   
   Edit `docker-compose.yml`:
```yaml
   environment:
     MYSQL_ROOT_PASSWORD: YOUR_PASSWORD
     DB_PASSWORD: YOUR_PASSWORD
```

### Running Locally

**Without Docker:**
```bash
# Make sure MySQL is running on localhost:3306
# Update application.properties with your credentials
./mvnw spring-boot:run
```

**With Docker:**
```bash
# Update docker-compose.yml with your passwords first!
docker-compose up --build
```

⚠️ **Note**: The passwords in this repo are placeholders. You must replace them with your own before running!