import re
import mysql.connector
from getpass import getpass

def split_sql_statements(sql):
    # This regex splits on semicolons not enclosed in single or double quotes.
    statements = re.split(r';(?=(?:[^\'"]|\'[^\']*\'|"[^"]*")*$)', sql)
    return [stmt.strip() for stmt in statements if stmt.strip()]

def run_sql_file(filename, user, password):
    # Read the entire SQL file
    with open(filename, 'r') as file:
        sql_file = file.read()

    # Connect to MySQL
    connection = mysql.connector.connect(
        host="localhost",
        user=user,       # your MySQL username
        password=password    # your MySQL password
    )
    cursor = connection.cursor()

    # Split the SQL file into individual statements
    statements = split_sql_statements(sql_file)
    for stmt in statements:
        try:
            cursor.execute(stmt)
        except Exception as e:
            print(f"Error executing statement:\n{stmt}\n{e}")

    connection.commit()
    cursor.close()
    connection.close()
    print("Database populated using schema.sql successfully.")

if __name__ == "__main__":
    user = input("Enter MySQL username: ")
    password = getpass("Enter MySQL password: ")
    run_sql_file("schema.sql", user, password)