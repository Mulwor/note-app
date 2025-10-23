// есть s1 s1, нужно проверить, омжно ли полуичть s1 из s2 исправлением\удал\добавл одной буквы
function correctStr(s1, s2) {
  let k = 1;
  let i = 0;
  let j = 0;
  if (s1.length === s2.length) {
    while (i < s1.length) {
      if (s1[i] !== s2[j]) {
        if (k === 0) return false;
        k--;
      }
      i++;
      j++;
    }
  } else if (s1.length === s2.length + 1) {
    while (i < s1.length) {
      if (s1[i] !== s2[j]) {
        if (k === 0) return false;
        k--;
        i++;
      } else {
        i++;
        j++;
      }
    }
  } else if (s1.length === s2.length - 1) {
    while (i < s1.length) {
      if (s1[i] !== s2[j]) {
        if (k === 0) return false;
        k--;
        i++;
      } else {
        i++;
        j++;
      }
    }
  } else {
    return false;
  }
  return true;
}
