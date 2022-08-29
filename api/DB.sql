-- phpMyAdmin SQL Dump
-- version 5.1.4
-- https://www.phpmyadmin.net/
--
-- Хост: ze452735.mysql.ukraine.com.ua
-- Время создания: Авг 29 2022 г., 15:44
-- Версия сервера: 5.7.33-36-log
-- Версия PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `ze452735_reenbitchat`
--

-- --------------------------------------------------------

--
-- Структура таблицы `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `message` text NOT NULL,
  `created` varchar(100) NOT NULL,
  `author` int(30) NOT NULL,
  `receiver` int(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `messages`
--

INSERT INTO `messages` (`id`, `message`, `created`, `author`, `receiver`) VALUES
(667, 'Hi Chuck', '1661765765026', 1, 59),
(668, 'Chuck Norris solved the Riemann hypothesis on an abacus.', '1661765770396', 59, 1),
(669, 'Vader tell me joke about Chuck Norris', '1661766006441', 1, 58),
(670, 'When Chuck Norris drives through a ghetto neighbourhood, he can make his Chevrolet truck appear much more \"hip\" than usual by pressing the \"Swag\" button on the dashboard.', '1661766011877', 58, 1),
(671, 'Thanos, you like Chuck norris?', '1661766154895', 1, 65),
(672, 'MR T pity\'s the fool. Chuck Norris pities Mr T', '1661766160275', 65, 1),
(753, 'Chuck, please, tell me joke', '1661771337475', 1, 59),
(754, 'Chuck Norris uses wasabi as toothpaste.', '1661771342732', 59, 1),
(755, 'Amazing, more please', '1661771391698', 1, 59),
(756, 'As I said before, Chuck Norris was born in the March of 1940. Well, guess what? I found evidence of 5 semi-famous and famous deaths that occurred the next month. Amazing.', '1661771397104', 59, 1),
(757, 'Ha-ha-ha, thanks', '1661771418618', 1, 59),
(758, 'Late at night, Chuck Norris was once walking back home alone after watching a Chuck Norris movie. A mugger approached him from the back, tapped on his shoulder and said \"Hey, gimme your money!\". Chuck Norris slowly turned around, paused for a while and gave the mugger a sarcastic smile. He then proceeded to rape the mugger anally, crush his skull, break his spine and killed him in a fraction of a second. Chuck Norris then brought the mugger back to life and then broke each of his limbs, eviscerated the mugger\'s gut, ate the mugger\'s still beating heart and infected him with AIDS, killing the unfortunate mugger once again. Chuck Norris then brough the mugger to life yet again for the second time, only to give the mugger a final fatal roundhous kick to his face killing the man and his soul at the same time. Chuck Norris then threw his packed wallet at the remains of his victim and said \"Do not tap on my shoulders ever again\", and continued to walk home slowly.', '1661771423811', 59, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fullname` varchar(11255) NOT NULL,
  `online` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `fullname`, `online`) VALUES
(1, 'shvarnovskii@gmail.com', 'ReenbitMen', 1),
(58, 'onlinebuisnes@gmail.com', 'Darth Vader', 1),
(59, 'endry.davidko666@gmail.com', 'Chuck Norris', 0),
(60, 'elizavetavoronets@gmail.com', 'Elizaveta Voronets', 1),
(61, 'anakin@gmail.com', 'Anakin Skywalker', 0),
(65, 'Thanos@gmail.com', 'Thanos', 0),
(62, 'rembo@gmail.com', 'John Rembo', 1),
(63, 'indiana@gmail.com', 'Indiana Jones', 1),
(64, 'Grinch@gmail.com', 'Grinch', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=775;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
