//делиться ли множество точек на две симметричные части вертикальной линией

function isVert(arr) {
  if (arr.length < 2) return true;

  let min = Infinity;
  let max = -Infinity;
  const map = new Map();

  arr.forEach((element) => {
    const k = element[0] + '' + element[1];
    map.set(k, map.get(k) ? map.get(k) + 1 : 1);
    if (element[0] > max) max = element[0];
    if (element[0] < min) min = element[0];
  });

  const mid = (min + max) / 2;

  if (mid % 1 !== 0) return false;

  arr.forEach((el) => {
    let key;
    if (el[0] > mid) {
      key = mid - (el[0] - mid) + '' + el[1];
    } else if (el[0] < mid) {
      key = mid + (mid - el[0]) + '' + el[1];
    } else {
      key = el[0] + '' + el[1];
    }

    if (map.get(key) > 1) {
      map.set(key, map.get(key) - 1);
    } else {
      map.delete(key);
    }
  });

  return map.size === 0;
}

//если точки отсортированы
function isVer(points) {
  if (points.length < 2) {
    console.log(true);
    return true;
  }
  const mid = (points[0][0] + points[points.length - 1][0]) / 2;

  for (let i = 0; i < points.length / 2; i++) {
    if (
      !(
        mid - points[i][0] === points[points.length - 1 - i][0] - mid &&
        points[i][1] === points[points.length - 1 - i][1]
      )
    ) {
      console.log('false');
      return false;
    }
  }
  console.log('true');
  return true;
}
