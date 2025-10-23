async function fetchFlights(from) {
  // Здесь должен быть ваш код, который возвращает варианты перелетов из точки 'from'
  // Возвращаем просто массив для примера
  return graph[from] || [];
}

async function findPath(current, destination, fetchFlights) {
  if (current === destination) {
    return [current];
  }

  const flightOptions = await fetchFlights(current);

  for (const nextDestination of flightOptions) {
    try {
      const path = await findPath(nextDestination, destination, fetchFlights);
      if (path.length > 0) {
        return [current, ...path];
      }
    } catch (error) {
      // Пропускаем ошибку, если нет пути через текущий пункт назначения
    }
  }

  throw new Error('No way');
}

const graph = {
  A: ['B', 'D'],
  B: ['C', 'N', 'Z'],
  D: ['E', 'F'],
  F: ['S'],
};

// Пример использования
findPath('A', 'N', fetchFlights)
  .then(path => console.log(path)) // ['A', 'B', 'N']
  .catch(error => console.error(error.message));

findPath('A', 'S', fetchFlights)
  .then(path => console.log(path)) // ['A', 'D', 'F', 'S']
  .catch(error => console.error(error.message));

findPath('B', 'S', fetchFlights)
  .then(path => console.log(path)) // Error: No way
  .catch(error => console.error(error.message));
