# О проекте 💬

**Выполнил:** Игорь Петров

Проект представляет собой реализацию простого веб-приложения для тренировки использования методов REST API. Честно говоря, я не очень разобрался в `vercel` и `Express`, поэтому развертывание сервера решил реализовать через [json-server](https://github.com/typicode/json-server) – очень удобная штука, не требующая сильных познаний в TypeScript / JavaScript коде. 

# Реализованные методы 🛠️

- `GET` для получения случайной цитаты из внешнего API – [Quotable](https://github.com/lukePeavey/quotable)
- `POST` для добавления новых цитат в базу данных на развернутом сервере
- Снова `GET`, но уже для возвращения данных из БД на клиент (возвращает последнюю цитату которую добавил пользователь)

P.S. Полученные с сервера данные динамически обновляются на странице (вроде бы)

# Запуск 🤖

```
npx json-server --watch db.json --port 3000
```
Если не хочется запускать локально, то можно глянуть короткую видео-демонстрацию – [Google Drive](link)
