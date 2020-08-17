CREATE DATABASE IF NOT EXISTS `smartshopper_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `smartshopper_db`;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users`
(`id` int(11) NOT NULL,
`firstName` varchar(45) DEFAULT NULL,
  `surname` varchar(45) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(156) DEFAULT NULL,
  `img` varchar(45) DEFAULT NULL,
  `document` varchar(45) DEFAULT NULL,
  `createdAt` timestamp(1) NULL DEFAULT NULL,
  `updatedAt` timestamp(1) NULL DEFAULT NULL,
  `deletedAt` timestamp(1) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



INSERT INTO `users` (`id`,`firstName`, `surname`, `email`, `password`, `img`, `document`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'test', 'test', 'test@gmail.com', '$2a$10$wyMXORK.DcL/8.q7WYvIWe08f8D5XuygUPiqYd0VZkC1Z3Bs8u4li', 'user-1597463129095-307.png', '12312312', '2020-08-15 03:45:29.0', '2020-08-15 03:45:29.0', NULL),
(2, 'test', 'test', 'test@gmail.com', '$2a$10$3vTbdJEAkar7nV5txlX/ou3ec3w020OmjQEUWEQAZyDtar9fpbAme', 'user-1597488143135-8537.png', '12312312', '2020-08-15 10:42:23.0', '2020-08-15 10:42:23.0', NULL),
(3, 'test', 'test', 'test@gmail.com', '$2a$10$5WtleSWs3h.0mUWbf3Uh3u6nEw8qMetcn2XJrl.sT5PBda/GH5GjG', 'user-1597488533589-948.png', '12312312', '2020-08-15 10:48:53.0', '2020-08-15 10:48:53.0', NULL),
(4, 'test', 'test', 'test123@gmail.com', '$2a$10$r7dj3VsuDrBbJQZ4K9lG2eUrO8K6SY/eetBOSNQUXmc8Kn09pJCAS', 'user-1597490694421-5446.png', '12345678', '2020-08-15 11:24:54.0', '2020-08-15 11:24:54.0', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
ADD PRIMARY KEY(`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int
(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;
