# ARQA Mini Analytics

Мини-приложение аналитики для заказов и клиентов. Позволяет просматривать ключевые метрики, фильтровать данные, экспортировать CSV и управлять заказами и клиентами. Поддерживает переключение темы (light/dark) и языка (RU/EN).

---

## 🎯 Цели проекта

- 📊 Дашборд с ключевыми метриками
- 📋 Таблицы заказов с поиском, сортировкой и диалогами
- 👥 Справочник клиентов с фильтрами и экспортом CSV
- 🌍 Поддержка локализации (RU/EN) и темы (light/dark)
- ✅ Покрытие критических компонентов тестами
- 📱 Адаптивность и доступность

---

## 🛠 Технологии

- ⚛️ React 18 + TypeScript
- ▲ Next.js 14 (App Router)
- 🎨 Tailwind CSS + shadcn/ui
- 🔄 React Query (TanStack Query)
- 📈 Recharts (графики)
- 🌐 react-i18next (i18n)
- 🌓 Next Themes (light/dark)
- 🧪 Jest + React Testing Library
- 🔔 Sonner (toasts)
- 🧹 ESLint + Prettier

---

## 🖥 Основной функционал

### 📊 Dashboard
- Метрики: **Revenue, Orders, AOV, Conversion Rate**
- Линейный график **Revenue по дням**
- Фильтры по периоду, каналу и городу
- Экспорт агрегатов в CSV

**Пример CSV Dashboard:**
```csv
metric,value
Revenue,527000
Orders,12
AOV,43916.67
Conversion Rate,5.3%
```

---

### 📋 Orders
- Таблица заказов с колонками: *Order ID, Date, Customer, City, Channel, Status, Total*
- Сортировка, поиск, пагинация
- Диалог с деталями заказа
- Смена статуса
- Экспорт CSV

**Пример CSV Orders:**
```csv
id,date,customerId,city,channel,status,total
ORD-1001,2025-08-01,CUS-001,Алматы,Web,New,52700
ORD-1002,2025-08-02,CUS-002,Астана,Mobile,Processing,45000
```

---

### 👥 Customers
- Карточки клиентов
- Поиск и фильтры по городу
- Диалог с историей заказов
- Экспорт CSV

**Пример CSV Customers:**
```csv
id,name,email,city,ltv,ordersCount
CUS-001,Aigerim K.,aigerim@example.com,Алматы,245000,6
CUS-002,Daniyar T.,daniyar@example.com,Астана,190000,4
```

---

### ⚙️ Settings
- Переключение темы (light/dark)
- Переключение языка (RU/EN)
- Сохранение в localStorage

---

## 🚀 Запуск проекта

```bash
npm install
npm run dev
# открыть в браузере: http://localhost:3000

# для production:
npm run build
npm start
```

### 📦 Скрипты

| Скрипт         | Описание |
|----------------|----------|
| `npm run dev` | Запуск dev-сервера |
| `npm run build` | Сборка проекта |
| `npm start` | Production-сервер |
| `npm run lint` | Проверка ESLint |
| `npm run format` | Форматирование Prettier |
| `npm test` | Запуск юнит-тестов |

---

## ✅ Тесты

- `useDashboardAggregates` — проверка Revenue, Orders, AOV, Conversion Rate
- `useCsvExport` — проверка экспорта данных в CSV
- Фильтры **CustomersPage**
- Таблица **OrdersPage**: поиск и сортировка

---

## 🌐 UX / Адаптивность

- 📱 Адаптивная сетка для мобильных и десктопов
- 💬 Диалоги и карточки интерактивные
- 🎛 Состояния кнопок через shadcn/ui
- 🌓 Переключение темы и языка с сохранением
- ♿ Доступность: фокус-стили, aria-* атрибуты
