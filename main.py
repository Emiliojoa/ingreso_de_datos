# Función para ingresar los datos de las personas
def ingresar_datos():
    personas = []
    cantidad = int(input("¿Cuántas personas desea registrar? "))
    
    for i in range(cantidad):
        nombre = input(f"Ingrese el nombre de la persona {i + 1}: ")
        edad = int(input(f"Ingrese la edad de {nombre}: "))
        nota = float(input(f"Ingrese la nota de {nombre}: "))
        
        personas.append([nombre, edad, nota])
    
    return personas

# Función para mostrar los datos tal como fueron ingresados
def mostrar_datos(personas):
    print("\nListado de personas ingresadas:")
    for persona in personas:
        print(f"Nombre: {persona[0]}, Edad: {persona[1]}, Nota: {persona[2]}")

# Función para ordenar las personas por nota de mayor a menor
def ordenar_por_nota(personas):
    return sorted(personas, key=lambda x: x[2], reverse=True)

# Función principal
def main():
    personas = ingresar_datos()
    mostrar_datos(personas)
    
    personas_ordenadas = ordenar_por_nota(personas)
    print("\nListado de personas ordenadas por nota (de mayor a menor):")
    mostrar_datos(personas_ordenadas)

if __name__ == "__main__":
    main()
