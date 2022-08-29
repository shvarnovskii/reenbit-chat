# Коротка інформація

Демо версія доступна [за посиланням](https://zelios.studio/api/reenbit-chat/).

## Було використано наступні технології

### `PHP + MySQL`

Було розроблено просте API (яке знаходиться у директорії API, разом із дампом БД) для наступних взаємодій:

#### `Вибірка списку чатів`

Для взаємодії не потрібно вказувати ніяких параметрів - [Link](https://zelios.studio/api/selectUsers.php)

#### `Вибірка повідомлень для потрібного чату`

Для взаємодії вказується 2 ID через кому (Ваш та Вашого співрозмовника) - [Example](https://zelios.studio/api/selectMessages.php?usersIds=1,58)

#### `Добавлення нових повыдомлень`

Тільки для методів POST, приймає в себе обєкт нового повідомлення - [Link](https://zelios.studio/api/insertMessage.php)
Приклад обєкту повідомлення:

```
{
	id: uniqueKey,
	message: text,
	created: varchar,
	author: int,
	receiver: int,
}
```

### `Gravatar`

Для формування аватарок використовується сервіс [gravatar.com](https://gravatar.com)
Для генерації автарок потрібен лише Email.
