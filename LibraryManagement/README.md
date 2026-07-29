# ORM Learn - Spring Data JPA

A Spring Boot application demonstrating Spring Data JPA, CRUD operations, Query Methods, and Object-Relational Mapping (ORM) using MySQL. This project was developed as part of the *Digital Nurture 5.0* learning program.

## 🚀 Technologies Used

- Java 21
- Spring Boot 3.x
- Spring Data JPA
- Hibernate
- MySQL 8
- Maven
- REST APIs
- STS / Eclipse

---

## 📂 Project Structure


src
├── main
│   ├── java
│   │   └── com.example.demo
│   │       ├── controller
│   │       ├── entity
│   │       ├── exception
│   │       ├── repository
│   │       ├── service
│   │       └── LibraryManagementApplication.java
│   └── resources
│       └── application.properties


---

## ✨ Features

### Country Module

- View all countries
- View country by code
- Add a new country
- Update country details
- Delete a country

### Spring Data JPA Query Methods

- Search countries by containing text
- Search countries with ascending sorting
- Search countries by starting alphabet

### Database

- MySQL Integration
- Hibernate ORM
- Spring Data JPA Repositories
- Automatic schema update

---

## 🌐 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /countries | Get all countries |
| GET | /countries/{code} | Get country by code |
| POST | /countries | Add a country |
| PUT | /countries/{code} | Update a country |
| DELETE | /countries/{code} | Delete a country |
| GET | /countries/search/{text} | Search countries containing text |
| GET | /countries/searchsorted/{text} | Search countries sorted by name |
| GET | /countries/startswith/{alphabet} | Search countries starting with a letter |

---

## 🔍 Spring Data JPA Query Methods

java
findByNameContaining()

findByNameContainingOrderByNameAsc()

findByNameStartingWith()


---

## ⚙️ Database Configuration

properties
spring.datasource.url=jdbc:mysql://localhost:3306/ormlearn
spring.datasource.username=root
spring.datasource.password=*****
spring.jpa.hibernate.ddl-auto=update


---

## 📚 Concepts Covered

- Spring Boot
- Spring Data JPA
- Hibernate ORM
- CRUD Operations
- RESTful APIs
- Dependency Injection
- Service Layer
- Repository Pattern
- Query Methods
- Exception Handling
- MySQL Integration

---

## 📈 Future Enhancements

- Stock Query Methods
- Employee-Department Mapping
- One-to-Many Relationship
- Many-to-One Relationship
- Many-to-Many Relationship
- Payroll Management Module

---

## 👨‍💻 Author

*Ashwin S*

Computer Science Student

*GitHub:* https://github.com/ASHWINs-HUB

---

## 📌 Project Status

- ✅ Spring Boot Setup
- ✅ MySQL Configuration
- ✅ Country CRUD Operations
- ✅ Spring Data JPA Query Methods
- 🚧 Stock Query Methods
- 🚧 ORM Relationship Mapping (One-to-Many, Many-to-One, Many-to-Many)

---

## ⭐ If you found this project useful, consider giving it a star on GitHub
