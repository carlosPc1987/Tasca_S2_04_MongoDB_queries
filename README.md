# S2.04 - Práctica de Consultas en MongoDB

##  Carlos — Backend Developer & Explorador de IA Full-Stack Developer.
 
   ## Hi there 👋
 
---

<p align="center">
  <b>Crafted with "LOVE" by Carlos and approved by 🦆</b>
</p>

---
## Objetivos

- Aprender a consultar una base de datos NoSQL de manera efectiva.
- Practicar la escritura de varios tipos de consultas en MongoDB.
- Comprender el filtrado, la proyección y los operadores basados en documentos.
- Dominar consultas avanzadas utilizando arrays y condiciones complejas.

---

## Colección de Restaurantes

### Descripción

Se trabaja con una colección de documentos que representan restaurantes ubicados en la ciudad de Nueva York. La estructura incluye los siguientes campos:

- `restaurant_id`
- `name`
- `borough`
- `cuisine`
- `address` (incluye coordenadas)
- `grades` (con puntuación, calificación y fecha)

---

## Consultas Básicas (01–10)

1. Mostrar todos los documentos de la colección `restaurants`.
2. Mostrar `restaurant_id`, `name`, `borough` y `cuisine` para todos los documentos.
3. Mostrar `restaurant_id`, `name`, `borough` y `cuisine`, excluyendo `_id`.
4. Mostrar `restaurant_id`, `name`, `borough` y `zipcode`, excluyendo `_id`.
5. Mostrar todos los restaurantes ubicados en el Bronx.
6. Mostrar los primeros 5 restaurantes del Bronx.
7. Mostrar los siguientes 5 restaurantes después de omitir los primeros 5 en el Bronx.
8. Encontrar restaurantes con una puntuación superior a 90.
9. Encontrar restaurantes con una puntuación mayor a 80 pero menor a 100.
10. Encontrar restaurantes con latitud menor a -95.754168.

---

## Consultas Intermedias (11–25)

11. Restaurantes que no sirvan cocina "americana", con puntuación > 70 y longitud < -65.754168.
12. Igual que la consulta 11, pero sin utilizar el operador `$and`.
13. Restaurantes que no sirvan comida estadounidense, con calificación "A", fuera de Brooklyn; ordenados por `cuisine` descendente.
14. Restaurantes cuyos nombres comienzan con "Wil".
15. Restaurantes cuyos nombres terminan con "ces".
16. Restaurantes cuyos nombres contienen "Reg".
17. Restaurantes en el Bronx que sirvan cocina "americana" o "china".
18. Restaurantes en Staten Island, Queens, Bronx o Brooklyn.
19. Restaurantes que no estén en Staten Island, Queens, Bronx o Brooklyn.
20. Restaurantes donde la puntuación no sea mayor que 10.
21. Restaurantes donde la cocina no sea "americana" o "china", o el nombre comience con "Wil".
22. Restaurantes con calificación "A", puntuación 11 y fecha `ISODate("2014-08-11T00:00:00Z")`.
23. Restaurantes donde el segundo elemento de `grades` tiene calificación "A", puntuación 9 y fecha `ISODate("2014-08-11T00:00:00Z")`.
24. Restaurantes donde el segundo valor de la coordenada esté entre 42 y 52.
25. Ordenar los nombres de los restaurantes en orden ascendente con todas las columnas.

---

## Consultas Avanzadas (26–33)

26. Ordenar los nombres de los restaurantes en orden descendente con todas las columnas.
27. Ordenar `cuisine` de forma ascendente y, dentro de cada tipo, `borough` de forma descendente.
28. Direcciones que no contienen el campo `street`.
29. Documentos donde el valor de `coord` sea de tipo `Double`.
30. Restaurantes donde la puntuación módulo 7 sea igual a 0.
31. Restaurantes cuyos nombres contienen "mon", mostrando `name`, `borough`, `longitude`, `latitude` y `cuisine`.
32. Restaurantes cuyos nombres comienzan con "Mad", mostrando los mismos campos que en la consulta anterior.

---

## Niveles de Logro

### Nivel 1 (Básico)

- Al menos 17 consultas correctas completadas.
- Cubre proyecciones fundamentales, filtros y condicionales.

### Nivel 2 (Intermedio)

- Entre 17 y 25 consultas completadas.
- Combina filtros, condiciones de rango, ordenación y lógica.

### Nivel 3 (Avanzado)

- Más de 25 consultas correctas completadas.
- Incluye arrays complejos, condiciones basadas en fechas, coincidencia de tipos y lógica personalizada.

> Todos los niveles requieren sintaxis válida de MongoDB y resultados correctos.

---

## Tecnologías Utilizadas

- MongoDB  
- Studio 3T para MongoDB  


---

## Instalación y Ejecución

### Requisitos

- Servidor MongoDB Community Edition.
- MongoDB Compass o cualquier otro cliente compatible.
- Base de datos de muestra con la colección de restaurantes de Nueva York.

### Configuración

- Descargar el conjunto de datos (por ejemplo, `restaurants.json`).
- Importar los datos utilizando Studio 3T o MongoDB Compass.

### Ejecución

Ejecutar consultas desde Mongo Shell o MongoDB Compass. Ejemplo:

```javascript
db.restaurants.find({ borough: "Bronx" }).limit(5);
