# Difference between JPA, Hibernate and Spring Data JPA

## Java Persistence API (JPA)

- JPA stands for Java Persistence API.
- It is a Java specification (JSR 338) for Object Relational Mapping (ORM).
- JPA defines standard annotations such as:
  - `@Entity`
  - `@Table`
  - `@Id`
  - `@Column`
- JPA itself does not provide an implementation.
- It requires an implementation such as Hibernate.

---

## Hibernate

- Hibernate is an ORM framework.
- Hibernate is one of the implementations of JPA.
- It maps Java objects to database tables.
- Hibernate provides:
  - Automatic SQL generation
  - HQL (Hibernate Query Language)
  - Caching
  - Transaction Management
  - Lazy Loading

Example:

```java
Session session = factory.openSession();
Transaction tx = session.beginTransaction();

session.save(employee);

tx.commit();
session.close();
```

---

## Spring Data JPA

- Spring Data JPA is built on top of JPA.
- It removes boilerplate code.
- It provides predefined CRUD methods through `JpaRepository`.
- It automatically implements repository methods.
- It integrates seamlessly with Spring Boot.

Example Repository

```java
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
```

Example Service

```java
@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }

}
```

---

# Comparison

| JPA | Hibernate | Spring Data JPA |
|-----|-----------|-----------------|
| Specification | ORM Framework | Spring Module |
| No implementation | Implements JPA | Uses JPA implementation |
| Defines standards | Executes ORM operations | Simplifies database access |
| Database independent | Supports HQL | Supports Repository pattern |
| Requires implementation | Complete ORM solution | Less boilerplate code |

---

# Conclusion

- **JPA** is a specification.
- **Hibernate** is an implementation of JPA.
- **Spring Data JPA** is built on top of JPA and Hibernate to reduce boilerplate code and simplify database operations.