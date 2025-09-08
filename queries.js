// 1. Mostrar tots els documents
db.restaurants.find({})

// 2. Mostrar restaurant_id, name, borough i cuisine
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 3. Igual que abans, però excloent _id
db.restaurants.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 4. Mostrar restaurant_id, name, borough i zip code, excloent _id
db.restaurants.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1 })

// 5. Restaurants al Bronx
db.restaurants.find({ borough: "Bronx" })

// 6. Primers 5 restaurants al Bronx
db.restaurants.find({ borough: "Bronx" }).limit(5)

// 7. Saltar els primers 5 i mostrar els següents 5
db.Restaurants.find({ borough: "Bronx" }).skip(5).limit(5)

// 8. Restaurants amb score > 90
db.Restaurants.find({ "grades.score": { $gt: 90 } })

// 9. Score > 80 i < 100
db.Restaurants.find({ "grades.score": { $gt: 80, $lt: 100 } })

// 10. Latitud < -95.754168
db.Restaurants.find({ "address.coord.1": { $lt: -95.754168 } })

// 11. No cuisine 'American', score > 70, longitud < -65.754168
db.Restaurants.find({
  cuisine: { $ne: "American" },
  "grades.score": { $gt: 70 },
  "address.coord.0": { $lt: -65.754168 }
})

// 12. Mateixa consulta sense $and
db.Restaurants.find({
  cuisine: { $ne: "American" },
  "grades.score": { $gt: 70 },
  "address.coord.0": { $lt: -65.754168 }
})

// 13. No 'American', grau 'A', no Brooklyn, ordenat per cuisine descendent
db.Restaurants.find({
  cuisine: { $ne: "American" },
  "grades.grade": "A",
  borough: { $ne: "Brooklyn" }
}).sort({ cuisine: -1 })

// 14. Nom comença amb 'Wil'
db.Restaurants.find({
  name: /^Wil/
}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 15. Nom acaba amb 'ces'
db.Restaurants.find({
  name: /ces$/
}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 16. Nom conté 'Reg'
db.Restaurants.find({
  name: /Reg/
}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 17. Bronx amb cuisine 'American' o 'Chinese'
db.Restaurants.find({
  borough: "Bronx",
  cuisine: { $in: ["American", "Chinese"] }
})

// 18. Pertany a Staten Island, Queens, Bronx o Brooklyn
db.Restaurants.find({
  borough: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] }
}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 19. No pertany a Staten Island, Queens, Bronx o Brooklyn
db.Restaurants.find({
  borough: { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] }
}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 20. Score ≤ 10
db.Restaurants.find({
  "grades.score": { $lte: 10 }
}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 21. Cuisine peix excepte 'American' i 'Chinees' o nom comença amb 'Wil'
db.Restaurants.find({
  $or: [
    { name: /^Wil/ },
    {
      cuisine: { $nin: ["American", "Chinees"] },
      cuisine: /fish/i
    }
  ]
}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// 22. Grau "A", score 11, data "2014-08-11"
db.Restaurants.find({
  grades: {
    $elemMatch: {
      grade: "A",
      score: 11,
      date: ISODate("2014-08-11T00:00:00Z")
    }
  }
}, { restaurant_id: 1, name: 1, grades: 1 })

// 23. 2n element de grades amb grau "A", score 9, data "2014-08-11"
db.Restaurants.find({
  "grades.1.grade": "A",
  "grades.1.score": 9,
  "grades.1.date": ISODate("2014-08-11T00:00:00Z")
}, { restaurant_id: 1, name: 1, grades: 1 })

// 24. 2n element de coord entre 42 i 52
db.Restaurants.find({
  "address.coord.1": { $gt: 42, $lte: 52 }
}, { restaurant_id: 1, name: 1, address: 1, "address.coord": 1 })

// 25. Ordenar noms ascendent
db.Restaurants.find({}).sort({ name: 1 })

// 26. Ordenar noms descendent
db.Restaurants.find({}).sort({ name: -1 })

// 27. Ordenar cuisine ascendent i borough descendent
db.Restaurants.find({}).sort({ cuisine: 1, borough: -1 })

// 28. Direccions que no contenen carrer
db.Restaurants.find({
  "address.street": { $exists: false }
})

// 29. Coord és Double
db.Restaurants.find({
  "address.coord": { $type: "double" }
})

// 30. Score % 7 === 0
db.Restaurants.find({
  "grades.score": { $mod: [7, 0] }
}, { restaurant_id: 1, name: 1, grades: 1 })

// 31. Nom conté 'mon', mostrar longitud, altitud i cuisine
db.Restaurants.find({
  name: /mon/i
}, {
  name: 1,
  borough: 1,
  "address.coord.0": 1,
  "address.coord.1": 1,
  cuisine: 1
})

// 32. Nom comença amb 'Mad', mostrar longitud, latitud i cuisine
db.Restaurants.find({
  name: /^Mad/
}, {
  name: 1,
  borough: 1,
  "address.coord.0": 1,
  "address.coord.1": 1,
  cuisine: 1
})