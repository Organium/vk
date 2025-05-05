# Simple Login Site

Простой сайт с формой входа и страницей успешного входа.

## Структура проекта

```
├── public/
│   ├── images/
│   │   └── success.gif
│   ├── sounds/
│   │   └── success.mp3
│   ├── index.html
│   ├── success.html
│   └── styles.css
├── server.js
├── package.json
└── README.md
```

## Установка

1. Клонируйте репозиторий
2. Установите зависимости:
```bash
npm install
```

## Запуск

Для локального запуска:
```bash
npm start
```

## Деплой на Render.com

1. Создайте новый Web Service на Render.com
2. Подключите ваш GitHub репозиторий
3. Настройте следующие параметры:
   - Build Command: `npm install`
   - Start Command: `node server.js`
4. Добавьте переменные окружения:
   - `PORT`: 3000

## Медиафайлы

Поместите ваши медиафайлы в соответствующие папки:
- GIF-анимации: `public/images/`
- Звуковые файлы: `public/sounds/` 