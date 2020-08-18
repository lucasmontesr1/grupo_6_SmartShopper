-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 17-08-2020 a las 19:25:24
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `smartshopper_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(6, 'Celulares'),
(1, 'Computacion'),
(4, 'Cuidado Personal'),
(2, 'Electrodomesticos'),
(3, 'Fitness'),
(10, 'Hogar, Muebles y Jardin'),
(5, 'Juguetes'),
(7, 'Telefonos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  `price` decimal(10,3) DEFAULT NULL,
  `img` varchar(45) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `createdAt` timestamp(1) NULL DEFAULT NULL,
  `deletedAt` timestamp(1) NULL DEFAULT NULL,
  `updatedAt` timestamp(1) NULL DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `img`, `color`, `createdAt`, `deletedAt`, `updatedAt`, `categoryId`) VALUES
(2, 'nuevo gato por dos', 'segunda descrip del gato', '6969.000', 'item-1597539100523-3669.png', NULL, '2020-08-15 13:55:22.0', NULL, '2020-08-16 00:53:04.0', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
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

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstName`, `surname`, `email`, `password`, `img`, `document`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'test', 'test', 'test@gmail.com', '$2a$10$wyMXORK.DcL/8.q7WYvIWe08f8D5XuygUPiqYd0VZkC1Z3Bs8u4li', 'user-1597463129095-307.png', '12312312', '2020-08-15 03:45:29.0', '2020-08-15 03:45:29.0', NULL),
(2, 'test', 'test', 'test@gmail.com', '$2a$10$3vTbdJEAkar7nV5txlX/ou3ec3w020OmjQEUWEQAZyDtar9fpbAme', 'user-1597488143135-8537.png', '12312312', '2020-08-15 10:42:23.0', '2020-08-15 10:42:23.0', NULL),
(3, 'test', 'test', 'test@gmail.com', '$2a$10$5WtleSWs3h.0mUWbf3Uh3u6nEw8qMetcn2XJrl.sT5PBda/GH5GjG', 'user-1597488533589-948.png', '12312312', '2020-08-15 10:48:53.0', '2020-08-15 10:48:53.0', NULL),
(4, 'test', 'test', 'test123@gmail.com', '$2a$10$r7dj3VsuDrBbJQZ4K9lG2eUrO8K6SY/eetBOSNQUXmc8Kn09pJCAS', 'user-1597490694421-5446.png', '12345678', '2020-08-15 11:24:54.0', '2020-08-15 11:24:54.0', NULL),
(5, 'test', 'test', 'javi@gmail.com', '$2a$10$EIpTq6y7E0qB2qeXahzhcuCKi73Uq.W73puWUZil0zQ61LrpSoAMm', 'user-1597603099693-3932.png', '123456789', '2020-08-16 18:38:19.0', '2020-08-16 18:38:19.0', NULL),
(6, 'test', 'test', 'nuevotestdos2@gmail.com', '$2a$10$CdPuGSK/yzCOErlIPg.Eh.Z3.FzZQDqQtUZtPewrYUtMEH1sTAnhi', 'user-1597611984156-5991.png', '111223344', '2020-08-16 21:06:24.0', '2020-08-16 21:06:24.0', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
