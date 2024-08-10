// src/sqlCommands.js
const sqlCommands = [
    {
        command: "SELECT",
        meaning: "Retrieves data from one or more tables.",
        example: "SELECT * FROM Customers;"
    },
    {
        command: "SELECT DISTINCT",
        meaning: "Retrieves unique data from a table.",
        example: "SELECT DISTINCT Country FROM Customers;"
    },
    {
        command: "WHERE",
        meaning: "Filters records based on a specified condition.",
        example: "SELECT * FROM Customers WHERE Country = 'USA';"
    },
    {
        command: "ORDER BY",
        meaning: "Sorts the result set in ascending or descending order.",
        example: "SELECT * FROM Customers ORDER BY CustomerName ASC;"
    },
    {
        command: "AND",
        meaning: "Combines multiple conditions in a WHERE clause.",
        example: "SELECT * FROM Customers WHERE Country = 'USA' AND Age > 30;"
    },
    {
        command: "OR",
        meaning: "Combines multiple conditions in a WHERE clause.",
        example: "SELECT * FROM Customers WHERE Country = 'USA' OR Country = 'Canada';"
    },
    {
        command: "NOT",
        meaning: "Negates a condition in a WHERE clause.",
        example: "SELECT * FROM Customers WHERE NOT Country = 'USA';"
    },
    {
        command: "INSERT INTO",
        meaning: "Inserts new records into a table.",
        example: "INSERT INTO Customers (CustomerName, ContactName) VALUES ('Cardinal', 'Tom B. Erichsen');"
    },
    {
        command: "NULL",
        meaning: "Represents a missing or undefined value.",
        example: "SELECT * FROM Customers WHERE Email IS NULL;"
    },
    {
        command: "UPDATE",
        meaning: "Updates existing records in a table.",
        example: "UPDATE Customers SET ContactName = 'Alfred Schmidt' WHERE CustomerID = 1;"
    },
    {
        command: "DELETE",
        meaning: "Deletes records from a table.",
        example: "DELETE FROM Customers WHERE CustomerName = 'Alfreds Futterkiste';"
    },
    {
        command: "SELECT TOP",
        meaning: "Limits the number of rows returned by a query.",
        example: "SELECT TOP 5 * FROM Customers ORDER BY Age DESC;"
    },
    {
        command: "MIN()",
        meaning: "Returns the minimum value of a column.",
        example: "SELECT MIN(Age) FROM Customers;"
    },
    {
        command: "MAX()",
        meaning: "Returns the maximum value of a column.",
        example: "SELECT MAX(Age) FROM Customers;"
    },
    {
        command: "COUNT()",
        meaning: "Returns the number of rows.",
        example: "SELECT COUNT(*) FROM Customers;"
    },
    {
        command: "SUM()",
        meaning: "Returns the sum of a numeric column.",
        example: "SELECT SUM(OrderAmount) FROM Orders;"
    },
    {
        command: "AVG()",
        meaning: "Returns the average value of a numeric column.",
        example: "SELECT AVG(Age) FROM Customers;"
    },
    {
        command: "LIKE",
        meaning: "Searches for a specified pattern in a column.",
        example: "SELECT * FROM Customers WHERE CustomerName LIKE 'A%';"
    },
    {
        command: "IN",
        meaning: "Checks if a value is within a set of values.",
        example: "SELECT * FROM Customers WHERE Country IN ('USA', 'Canada');"
    },
    {
        command: "BETWEEN",
        meaning: "Filters data within a range.",
        example: "SELECT * FROM Customers WHERE Age BETWEEN 25 AND 30;"
    },
    {
        command: "ALIAS",
        meaning: "Renames a column or table for the duration of a query.",
        example: "SELECT CustomerName AS Name FROM Customers;"
    },
    {
        command: "INNER JOIN",
        meaning: "Combines rows from two tables based on a related column.",
        example: "SELECT Orders.OrderID, Customers.CustomerName FROM Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;"
    },
    {
        command: "LEFT JOIN",
        meaning: "Returns all rows from the left table and matched rows from the right table.",
        example: "SELECT Orders.OrderID, Customers.CustomerName FROM Orders LEFT JOIN Customers ON Orders.CustomerID = Customers.CustomerID;"
    },
    {
        command: "RIGHT JOIN",
        meaning: "Returns all rows from the right table and matched rows from the left table.",
        example: "SELECT Orders.OrderID, Customers.CustomerName FROM Orders RIGHT JOIN Customers ON Orders.CustomerID = Customers.CustomerID;"
    },
    {
        command: "FULL JOIN",
        meaning: "Returns all rows when there is a match in one of the tables.",
        example: "SELECT Orders.OrderID, Customers.CustomerName FROM Orders FULL JOIN Customers ON Orders.CustomerID = Customers.CustomerID;"
    },
    {
        command: "SELF JOIN",
        meaning: "Joins a table with itself.",
        example: "SELECT A.EmployeeName, B.EmployeeName AS ManagerName FROM Employees A INNER JOIN Employees B ON A.ManagerID = B.EmployeeID;"
    },
    {
        command: "UNION",
        meaning: "Combines the result sets of two or more SELECT statements.",
        example: "SELECT City FROM Customers UNION SELECT City FROM Suppliers;"
    },
    {
        command: "GROUP BY",
        meaning: "Groups rows that have the same values into summary rows.",
        example: "SELECT COUNT(*), Country FROM Customers GROUP BY Country;"
    },
    {
        command: "HAVING",
        meaning: "Sets a condition on groups created by the GROUP BY clause.",
        example: "SELECT COUNT(*), Country FROM Customers GROUP BY Country HAVING COUNT(*) > 5;"
    },
    {
        command: "EXISTS",
        meaning: "Checks if a subquery returns any rows.",
        example: "SELECT * FROM Customers WHERE EXISTS (SELECT * FROM Orders WHERE Orders.CustomerID = Customers.CustomerID);"
    },
    {
        command: "ANY",
        meaning: "Compares a value to any value in a set of values.",
        example: "SELECT * FROM Customers WHERE Age = ANY (SELECT Age FROM Employees WHERE Department = 'Sales');"
    },
    {
        command: "ALL",
        meaning: "Compares a value to all values in a set of values.",
        example: "SELECT * FROM Customers WHERE Age > ALL (SELECT Age FROM Employees WHERE Department = 'Sales');"
    },
    {
        command: "SELECT INTO",
        meaning: "Creates a new table and inserts the result set of a query into it.",
        example: "SELECT * INTO NewCustomers FROM Customers WHERE Country = 'USA';"
    },
    {
        command: "INSERT INTO SELECT",
        meaning: "Inserts data from a SELECT query into a table.",
        example: "INSERT INTO ArchivedOrders SELECT * FROM Orders WHERE OrderDate < '2024-01-01';"
    },
    {
        command: "CASE",
        meaning: "Provides conditional logic in SQL queries.",
        example: "SELECT CustomerName, CASE WHEN Country = 'USA' THEN 'Domestic' ELSE 'International' END AS CustomerType FROM Customers;"
    },
    {
        command: "NULLIF",
        meaning: "Returns NULL if two expressions are equal.",
        example: "SELECT NULLIF(Revenue, 0) FROM Sales;"
    },
    {
        command: "ISNULL",
        meaning: "Replaces NULL with a specified value.",
        example: "SELECT ISNULL(Revenue, 0) FROM Sales;"
    },
    {
        command: "COALESCE",
        meaning: "Returns the first non-null expression among its arguments.",
        example: "SELECT COALESCE(Phone, 'Not Provided') FROM Customers;"
    },
    {
        command: "ALTER TABLE",
        meaning: "Modifies an existing table structure.",
        example: "ALTER TABLE Customers ADD Email varchar(255);"
    },
    {
        command: "DROP TABLE",
        meaning: "Deletes a table and all its data.",
        example: "DROP TABLE Customers;"
    },
    {
        command: "TRUNCATE TABLE",
        meaning: "Removes all rows from a table but keeps the table structure.",
        example: "TRUNCATE TABLE Customers;"
    },
    {
        command: "CREATE INDEX",
        meaning: "Creates an index to improve query performance.",
        example: "CREATE INDEX idx_customer_name ON Customers (CustomerName);"
    },
    {
        command: "DROP INDEX",
        meaning: "Deletes an index.",
        example: "DROP INDEX idx_customer_name ON Customers;"
    },
    {
        command: "BEGIN TRANSACTION",
        meaning: "Starts a transaction.",
        example: "BEGIN TRANSACTION; INSERT INTO Customers (CustomerName) VALUES ('New Customer'); COMMIT;"
    },
    {
        command: "COMMIT",
        meaning: "Saves changes made during the current transaction.",
        example: "COMMIT;"
    },
    {
        command: "ROLLBACK",
        meaning: "Undoes changes made during the current transaction.",
        example: "ROLLBACK;"
    },
    {
        command: "COMMENTS",
        meaning: "Adds comments to SQL code for documentation purposes.",
        example: "-- This is a single-line comment\n/* This is a multi-line comment */"
    },
    {
        command: "OPERATORS",
        meaning: "Symbols used to perform operations on data in SQL queries.",
        example: `
            Arithmetic Operators: 
                + (Addition)
                - (Subtraction)
                * (Multiplication)
                / (Division)

            Comparison Operators: 
                = (Equal)
                <> (Not Equal)
                < (Less Than)
                > (Greater Than)
                <= (Less Than or Equal To)
                >= (Greater Than or Equal To)

            Logical Operators: 
                AND (Combines multiple conditions)
                OR (At least one condition must be true)
                NOT (Negates a condition)
        `
    },
    {
        command: "ALTER",
        meaning: "Modifies an existing table's structure, such as adding or dropping columns, or changing column data types.",
        example: `
            -- Adding a new column to the table
            ALTER TABLE Customers ADD Email varchar(255);
    
            -- Dropping an existing column from the table
            ALTER TABLE Customers DROP COLUMN Email;
    
            -- Modifying an existing column's data type
            ALTER TABLE Customers ALTER COLUMN Age int;
        `
    }
];

export default sqlCommands;
