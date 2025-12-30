// ! Пример №1 => Получение имени файла из полного пути
const fullPath = '/home/user/projects/src/components/Button.jsx';

const fileName = path.basename(fullPath);
console.log(fileName); // 'Button.jsx'

// Получаем имя файла без расширения
const nameWithoutExt = path.basename(fullPath, '.jsx');
console.log(nameWithoutExt); // 'Button'

// Или так (динамически)
const baseName = path.basename(fullPath, path.extname(fullPath));
console.log(baseName); // 'Button'

// * ==========================================================================

// ! Пример №2 => Создание копий файлов с сохранением имени
function backupFile(filePath) {
    const fileName = path.basename(filePath);
    const backupName = `${fileName}.backup`;
    const backupPath = path.join('backups', backupName);
    
    // Копируем файл
    fs.copyFileSync(filePath, backupPath);
}

// * ==========================================================================

// ! Пример №3 => Создание уникальных имен файлов
function createUniqueName(originalPath, suffix = '_copy') {
  const ext = path.extname(originalPath);
  const baseName = path.basename(originalPath, ext);
  const timestamp = Date.now();
    
  return `${baseName}${suffix}_${timestamp}${ext}`;
}

// Пример: 'document.pdf' → 'document_copy_1648735200000.pdf'

// * ==========================================================================
// ! Пример №4 => Валидация файлов 

function isAllowedFile(filePath, allowedExtensions) {
  const ext = path.extname(filePath).toLowerCase();
  const fileName = path.basename(filePath);
    
  // Проверяем расширение
  if (!allowedExtensions.includes(ext)) {
    return false;
  }
    
  // Проверяем имя файла (например, не должно начинаться с точки)
  if (fileName.startsWith('.')) {
    return false;
  }
    
  return true;
}