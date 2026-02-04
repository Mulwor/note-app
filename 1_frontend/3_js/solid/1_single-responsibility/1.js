// ! Bad Practice - слишком много ответственности
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // ? Сохранение пользователя в БД
  saveToDatabase() {
    console.log(`Пользователь ${this.name} сохранен в БД`);
  }

  // ? Отправка email
  sendEmail(subject, message) {
    console.log(`Email отправлен на ${this.email}: ${subject}`);
  }

  // ? Валидация email
  validateEmail() {
    return /\S+@\S+\.\S+/.test(this.email);
  }

  // ? Генерация отчета
  generateReport() {
    return `Отчет для ${this.name}`;
  }
}




// ! =======================================================
// ! Good practice -  разделение ответственности, где ClassUser отвечает
// ! только за данные пользователя
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// ! UserValidator - Отвечает только за валидацию
class UserValidator {
  static validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  static validateName(name) {
    return name.length > 0;
  }
}

// ! Отвечает только за сохранение в БД
class UserRepository {
  save(user) {
    console.log(`Пользователь ${user.name} сохранен в БД`);
  }
}

// ! Отвечает только за отправку email
class EmailService {
  send(email, subject, message) {
    console.log(`Email отправлен на ${email}: ${subject}`);
  }
}

// ! Отвечает только за генерацию отчетов
class ReportGenerator {
  generateUserReport(user) {
    return `Отчет для ${user.name}`;
  }
}


const user = new User("Иван", "ivan@example.com");
if (UserValidator.validateEmail(user.email)) {
  const repository = new UserRepository();
  repository.save(user);
  
  const emailService = new EmailService();
  emailService.send(user.email, "Добро пожаловать", "Привет!");
}
