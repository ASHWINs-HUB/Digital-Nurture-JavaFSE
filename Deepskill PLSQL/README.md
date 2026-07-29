# 🏦 PL/SQL Banking System Exercises

A collection of Oracle PL/SQL programs developed to practice core database programming concepts through a banking management scenario.

## 📚 Overview

This repository contains solutions for common Oracle PL/SQL exercises, covering:

* Control Structures
* Exception Handling
* Stored Procedures
* Functions
* Triggers
* Cursors
* Packages

The project uses a simple banking database consisting of customers, accounts, loans, employees, and transactions to demonstrate real-world PL/SQL programming.

---

## 🛠 Technologies Used

* Oracle Database
* Oracle SQL Developer
* PL/SQL

---

## 📂 Project Structure

```
PLSQL-Banking-System/
│
├── schema.sql
├── sample_data.sql
│
├── Exercise1_ControlStructures.sql
├── Exercise2_ErrorHandling.sql
├── Exercise3_StoredProcedures.sql
├── Exercise4_Functions.sql
├── Exercise5_Triggers.sql
├── Exercise6_Cursors.sql
├── Exercise7_Packages.sql
│
└── README.md
```

---

## 📖 Exercises Included

### Exercise 1 – Control Structures

* Apply loan interest discounts for senior citizens
* Mark customers as VIP based on account balance
* Generate loan due reminder messages

### Exercise 2 – Exception Handling

* Safe fund transfer with rollback support
* Employee salary update with exception handling
* Prevent duplicate customer insertion

### Exercise 3 – Stored Procedures

* Process monthly savings interest
* Update employee bonus
* Transfer funds between accounts

### Exercise 4 – Functions

* Calculate customer age
* Calculate monthly loan installment (EMI)
* Verify sufficient account balance

### Exercise 5 – Triggers

* Automatically update customer modification date
* Maintain transaction audit logs
* Validate deposits and withdrawals

### Exercise 6 – Cursors

* Generate monthly customer statements
* Apply annual maintenance fees
* Update loan interest rates

### Exercise 7 – Packages

* Customer Management Package
* Employee Management Package
* Account Operations Package

---

## 🗄 Database Schema

The project includes the following tables:

* Customers
* Accounts
* Transactions
* Loans
* Employees

Sample data is provided to test all PL/SQL programs.

---

## 🚀 Getting Started

### 1. Create the Database

Execute:

```
schema.sql
```

### 2. Insert Sample Data

Execute:

```
sample_data.sql
```

### 3. Run the Exercises

Execute each exercise file individually in Oracle SQL Developer.

Example:

```
Exercise1_ControlStructures.sql
```

---

## 🎯 Learning Objectives

This project demonstrates:

* Variables and PL/SQL Blocks
* Conditional Statements
* Loops
* Explicit Cursors
* Stored Procedures
* Functions
* Exception Handling
* Triggers
* Packages
* Transaction Management (COMMIT / ROLLBACK)

---

## 📸 Sample Output

```
Senior citizen loan discount applied successfully.

VIP status updated.

Reminder:
Customer John Doe
Loan Due Date: 15-Aug-2026
```

---

## 👨‍💻 Author

**Ashwin S**

Computer Science Student

GitHub: https://github.com/ASHWINs-HUB

---

## ⭐ Repository Purpose

This repository was created for learning Oracle PL/SQL programming through practical banking management scenarios. It serves as a reference for students, beginners, and developers who want hands-on experience with Oracle database programming.
