const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' }
]
const filterSheep = (obj, firts, second, color) => {
  const filter = obj.filter(oveja => {
    oveja.name = oveja.name.toLowerCase();
    if (oveja.name.includes(firts)
      && oveja.name.includes(second)
      && oveja.color.includes(color)) {
      return oveja;
    }
  })
  return filter;
}
console.log(filterSheep(ovejas, 'n', 'a', 'rojo'));