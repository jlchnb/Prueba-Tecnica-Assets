import psycopg2
import sqlite3

# Configuración de la conexión a PostgreSQL remoto
PG_HOST = 'dpg-cps5jml6l47c73e0c3hg-a.oregon-postgres.render.com'
PG_DATABASE = 'assets_backend_test'
PG_USER = 'assets_backend_test_user'
PG_PASSWORD = 'vQfLjm3NYbeRHWXZaSK2Xu440QHTzI2r'

# Configuración de la conexión a SQLite local
SQLITE_DB = 'local_db.sqlite3'  # Nombre de tu archivo de base de datos SQLite local

def extract_data_and_populate():
    try:
        # Conexión a PostgreSQL remoto
        pg_conn = psycopg2.connect(
            host=PG_HOST,
            database=PG_DATABASE,
            user=PG_USER,
            password=PG_PASSWORD
        )
        pg_cursor = pg_conn.cursor()

        # Conexión a SQLite local
        sqlite_conn = sqlite3.connect(SQLITE_DB)
        sqlite_cursor = sqlite_conn.cursor()

        # Extraer datos de la tabla_cubo en PostgreSQL
        pg_cursor.execute("SELECT CLIENTE, RUT, GESTOR, MONTO, F_PAGO, ABONOS FROM tabla_cubo")
        rows = pg_cursor.fetchall()

        # Poblar las tablas en SQLite local
        for row in rows:
            cliente_nombre = row[0]
            rut = row[1]
            gestor_nombre = row[2]
            monto = row[3]
            fecha_pago = row[4]
            abonos = row[5]

            # Insertar en la tabla Cliente
            sqlite_cursor.execute("INSERT INTO core_cliente (nombre) VALUES (?)", (cliente_nombre,))
            cliente_id = sqlite_cursor.lastrowid

            # Insertar en la tabla Gestor
            sqlite_cursor.execute("INSERT INTO core_gestor (nombre) VALUES (?)", (gestor_nombre,))
            gestor_id = sqlite_cursor.lastrowid

            # Insertar en la tabla Pago
            sqlite_cursor.execute("INSERT INTO core_pago (cliente_id, gestor_id, rut, monto, fecha_pago, abonos) VALUES (?, ?, ?, ?, ?, ?)",
                                  (cliente_id, gestor_id, rut, monto, fecha_pago, abonos))

        # Guardar cambios en la base de datos SQLite
        sqlite_conn.commit()

        print("Datos extraídos y poblados exitosamente en SQLite local.")

    except psycopg2.Error as e:
        print("Error al conectar o extraer datos de PostgreSQL:", e)

    finally:
        # Cerrar cursores y conexiones
        if pg_cursor:
            pg_cursor.close()
        if pg_conn:
            pg_conn.close()
        if sqlite_cursor:
            sqlite_cursor.close()
        if sqlite_conn:
            sqlite_conn.close()

if __name__ == "__main__":
    extract_data_and_populate()