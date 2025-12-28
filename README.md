# Subscription Manager

Менеджер подписок для отслеживания расходов на подписки.

## Технологии

-   React 19
-   Vite
-   TypeScript
-   TailwindCSS

### UI

-   Shadcn/ui
-   TailwindCSS
-   Storybook

### Документация

-   [React](https://react.dev/)
-   [Vite](https://vite.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Shadcn/ui](https://ui.shadcn.com/)
-   [Storybook](https://storybook.js.org/)
-   [Feature-Sliced Design](https://feature-sliced.design/)

## Архитектура проекта

Проект использует методологию **Feature-Sliced Design (FSD)** для организации кода.

### Структура директорий

```
src/
├── app/              # Инициализация приложения, провайдеры, роутинг
├── pages/            # Страницы приложения
├── widgets/          # Сложные составные компоненты с бизнес-логикой
├── features/         # Фичи приложения (бизнес-логика)
├── components/       # Переиспользуемые UI компоненты
│   ├── ui/           # Shadcn/ui компоненты
├── hooks/            # Кастомные React хуки
├── shared/           # Общие ресурсы
│   ├── lib/          # Общие утилиты
│   └── model/        # Бизнес-модели и типы
├── lib/              # Утилиты и вспомогательные функции
└── assets/           # Статические ресурсы
```

## Скрипты

-   `npm run dev` - Запуск dev-сервера
-   `npm run build` - Сборка проекта
-   `npm run lint` - Проверка кода линтером
-   `npm run preview` - Предпросмотр production сборки
-   `npm run storybook` - Запуск Storybook
-   `npm run build-storybook` - Сборка Storybook
