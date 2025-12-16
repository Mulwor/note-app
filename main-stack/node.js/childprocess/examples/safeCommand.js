const { spawn } = require('child_process');
const util = require('util');

async function safeExec(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: ['pipe', 'pipe', 'pipe'],
      ...options
    });
    
    let stdout = '';
    let stderr = '';
    
    child.stdout.on('data', (data) => {
      stdout += data.toString();
    });
    
    child.stderr.on('data', (data) => {
      stderr += data.toString();
    });
    
    child.on('error', (error) => {
      reject(new Error(`Ошибка запуска процесса: ${error.message}`));
    });
    
    child.on('close', (code) => {
      if (code === 0) {
        resolve({ stdout, stderr });
      } else {
        reject(new Error(`Процесс завершился с кодом ${code}: ${stderr}`));
      }
    });
    
    // Автоматическое завершение через 30 секунд
    setTimeout(() => {
      if (child.exitCode === null) {
        child.kill('SIGTERM');
        reject(new Error('Таймаут выполнения команды'));
      }
    }, 30000);
  });
}

// Использование
async function main() {
  try {
    const result = await safeExec('ls', ['-la']);
    console.log(result.stdout);
  } catch (error) {
    console.error(error.message);
  }
}