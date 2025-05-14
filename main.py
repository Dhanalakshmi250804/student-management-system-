from db_config import connect_db

def create_table():
    db = connect_db()
    cursor = db.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100),
            grade VARCHAR(10)
        )
    """)
    db.commit()
    db.close()

def add_student(name, grade):
    db = connect_db()
    cursor = db.cursor()
    cursor.execute("INSERT INTO students (name, grade) VALUES (%s, %s)", (name, grade))
    db.commit()
    db.close()

def view_students():
    db = connect_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM students")
    for student in cursor.fetchall():
        print(student)
    db.close()

def main():
    create_table()
    while True:
        print("\n1. Add Student\n2. View Students\n3. Exit")
        choice = input("Enter choice: ")
        if choice == '1':
            name = input("Name: ")
            grade = input("Grade: ")
            add_student(name, grade)
        elif choice == '2':
            view_students()
        elif choice == '3':
            break
        else:
            print("Invalid input.")

if __name__ == "__main__":
    main()
