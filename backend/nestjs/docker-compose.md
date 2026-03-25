version: "3.9"

```js
services: postgres: container_name: postgres;
// образ который будем использовать - последняя версия
image: postgres: latest;
// контейнер перезапускается в случае какого-либо сбоя
restart: always;
// определяем переменные окружения
environment:
  - POSTGRES_USER=${POSTGRES_USER}
  - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
ports: 5433:5432
// Куда мы будем сохранять наши данные на локальном хосте, чтобы при каждой остановке контейнере наши данные не пропадали
volumes:
- postgres_data:/var/lib/postgresql/data
// Подключаем сервис к отдельной сети для внутренней связи
networks:
- nestjs-course


// Определяем volumes, который будут использоваться для хранения наших данных
volumes: postgres_data
networks: nestjs-course
```
