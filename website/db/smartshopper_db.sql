-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-08-2020 a las 04:07:34
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.7

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
CREATE DATABASE IF NOT EXISTS `smartshopper_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `smartshopper_db`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cartproduct`
--

CREATE TABLE `cartproduct` (
  `id (PK)` int(11) NOT NULL,
  `salePrice` varchar(45) DEFAULT NULL,
  `quantity` varchar(45) DEFAULT NULL,
  `subTotal` varchar(100) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `productId` varchar(45) DEFAULT NULL,
  `userId` varchar(45) DEFAULT NULL,
  `cartId` varchar(45) DEFAULT NULL,
  `createdAt` timestamp(1) NULL DEFAULT NULL,
  `updatedAt` timestamp(1) NULL DEFAULT NULL,
  `deletedAt` timestamp(1) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

CREATE TABLE `carts` (
  `id (PK)` int(11) NOT NULL,
  `orderNumber` varchar(45) DEFAULT NULL,
  `total` varchar(100) DEFAULT NULL,
  `userId` varchar(45) DEFAULT NULL,
  `productId` varchar(45) DEFAULT NULL,
  `payingMethods` varchar(45) DEFAULT NULL,
  `createdAt` timestamp(1) NULL DEFAULT NULL,
  `updatedAt` timestamp(1) NULL DEFAULT NULL,
  `deletedAt` timestamp(1) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `admin` boolean DEFAULT FALSE,
  `createdAt` timestamp(1) NULL DEFAULT NULL,
  `deletedAt` timestamp(1) NULL DEFAULT NULL,
  `updatedAt` timestamp(1) NULL DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `img`, `color`, `createdAt`, `deletedAt`, `updatedAt`, `categoryId`) VALUES
(4, 'Cama ', 'Sommier, 2 plazas base de madera', '27.000', 'item-1597793353875-8533.png', NULL, '2020-08-18 22:17:35.0', NULL, '2020-08-18 23:30:18.0', 10),
(5, 'Escritorio', 'Requiere ensamblado, cuenta con 3 cajones, cómodo y amplio. Negro con detalles en blanco.', '26.000', 'item-1597793667924-2030.jpg', NULL, '2020-08-18 22:20:09.0', NULL, '2020-08-18 23:34:27.0', 10),
(7, 'Tazas', 'Tazas grandes de porcelana.', '125.000', 'item-1597793770125-9270.jpg', NULL, '2020-08-18 22:22:27.0', NULL, '2020-08-18 23:36:10.0', 10),
(8, 'Biblioteca', 'Biblioteca Blanca con varios estantes', '15000.000', 'item-1597793903789-2415.jpg', NULL, '2020-08-18 23:38:23.0', NULL, '2020-08-18 23:38:23.0', 10),
(9, 'Cuadro', 'Cuadro minimalista con flores', '1500.000', 'item-1597793942058-5270.jpg', NULL, '2020-08-18 23:39:02.0', NULL, '2020-08-18 23:39:02.0', 10),
(10, 'Maceta', 'Maceta', '250.000', 'item-1597793966038-1365.jpg', NULL, '2020-08-18 23:39:26.0', NULL, '2020-08-18 23:39:26.0', 10),
(11, 'Manguera', 'Manguera verde', '3500.000', 'item-1597794002300-7448.jpg', NULL, '2020-08-18 23:40:02.0', NULL, '2020-08-18 23:40:02.0', 10),
(12, 'Mesa Ratona Industrial', 'Forma rectangular, no requiere ensamblado, base de hierro y tablero de madera.', '4500.000', 'item-1597794048681-1607.jpg', NULL, '2020-08-18 23:40:48.0', NULL, '2020-08-18 23:40:48.0', 10),
(13, 'Regadera', 'Regadera Verde', '250.000', 'item-1597794076170-8965.jpg', NULL, '2020-08-18 23:41:16.0', NULL, '2020-08-18 23:41:16.0', 10),
(14, 'Silla', 'Silla ejecutiva negra', '5000.000', 'item-1597794101999-9308.jpg', NULL, '2020-08-18 23:41:42.0', NULL, '2020-08-18 23:41:42.0', 10),
(15, 'Iphone 11', 'Original, 1 año de Garantia ', '150000.000', 'item-1597794194427-9293.jpg', NULL, '2020-08-18 23:43:14.0', NULL, '2020-08-18 23:43:14.0', 6),
(16, 'Iphone x', 'Original, 1 año de Garantia ', '140000.000', 'item-1597794241929-9208.jpg', NULL, '2020-08-18 23:44:01.0', NULL, '2020-08-18 23:44:01.0', 6),
(17, 'Iphone XR', 'Original, 1 año de Garantia ', '160000.000', 'item-1597794264214-1970.jpg', NULL, '2020-08-18 23:44:24.0', NULL, '2020-08-18 23:44:24.0', 6),
(18, 'Samsung S20', 'Original, 1 año de Garantia, Variedad de colores.', '150000.000', 'item-1597794296465-6460.jpg', NULL, '2020-08-18 23:44:56.0', NULL, '2020-08-18 23:44:56.0', 6),
(19, 'Xiaomi', 'Original, 1 año de Garantia ', '30000.000', 'item-1597794319624-8644.jpg', NULL, '2020-08-18 23:45:19.0', NULL, '2020-08-18 23:45:19.0', 6),
(20, 'Auriculares Razer Rosa', 'Original, 1 año de Garantia ', '25000.000', 'item-1597794359313-5063.jpg', NULL, '2020-08-18 23:45:59.0', NULL, '2020-08-18 23:45:59.0', 1),
(21, 'Gabinete Sentey Z20', 'Original, 1 año de Garantia ', '240000.000', 'item-1597794389593-1607.jpg', NULL, '2020-08-18 23:46:29.0', NULL, '2020-08-18 23:46:29.0', 1),
(22, 'Mouse Razer Rosa Atheris', 'Original, 1 año de Garantia ', '150000.000', 'item-1597794415664-6536.jpg', NULL, '2020-08-18 23:46:55.0', NULL, '2020-08-18 23:46:55.0', 1),
(23, 'Mouse Logitech G Pro', 'Original, 1 año de Garantia ', '10000.000', 'item-1597794437708-3001.jpg', NULL, '2020-08-18 23:47:17.0', NULL, '2020-08-18 23:47:17.0', 1),
(24, 'Notebook Lenovo', 'Procesador: Amd Ryzen 7 4700U\r\nRam: 12 GB\r\nIncluye Windows 10', '150000.000', 'item-1597794500014-5902.jpg', NULL, '2020-08-18 23:48:20.0', NULL, '2020-08-18 23:48:20.0', 1),
(25, 'Placa de Video Msi RTX 2080TI', 'Original, 1 año de Garantia ', '100.000', 'item-1597794558316-738.jpg', NULL, '2020-08-18 23:49:10.0', NULL, '2020-08-18 23:49:49.0', 1),
(26, 'Procesador Ryzen Threadripper', 'Original,1 año de Garantia', '160000.000', 'item-1597794732855-8341.jpg', NULL, '2020-08-18 23:52:12.0', NULL, '2020-08-18 23:52:12.0', 1),
(27, 'Desodorante Dove', 'Fragancia Pepino', '100.000', 'item-1597794785944-8577.jpg', NULL, '2020-08-18 23:53:05.0', NULL, '2020-08-18 23:53:05.0', 4),
(28, 'Crema Vital Just', 'Crema Facial Hidratante', '500.000', 'item-1597794833372-2916.jpg', NULL, '2020-08-18 23:53:53.0', NULL, '2020-08-18 23:53:53.0', 4),
(29, 'Mascarilla ', 'Mascarilla Facial Negra', '150.000', 'item-1597794861356-3980.jpg', NULL, '2020-08-18 23:54:21.0', NULL, '2020-08-18 23:54:21.0', 4),
(30, 'Perfume Carolina Herrera Good Girl', '100Ml', '5000.000', 'item-1597794904848-3827.jpg', NULL, '2020-08-18 23:55:04.0', NULL, '2020-08-18 23:55:04.0', 4),
(31, 'Body Splash Victoria Secret', '250Ml Fragancia Love Spell', '2600.000', 'item-1597794957288-3656.jpg', NULL, '2020-08-18 23:55:57.0', NULL, '2020-08-18 23:55:57.0', 4),
(32, 'Botella Deportiva', '75 Ml', '250.000', 'item-1597795101248-7316.jpg', NULL, '2020-08-18 23:58:21.0', NULL, '2020-08-18 23:58:21.0', 3),
(33, 'Mat Yoga', 'Mat de Yoga. Muy comodo', '450.000', 'item-1597795136700-5354.jpg', NULL, '2020-08-18 23:58:56.0', NULL, '2020-08-18 23:58:56.0', 3),
(34, 'Pesas', '2,5Kg', '350.000', 'item-1597795157964-6632.jpg', NULL, '2020-08-18 23:59:17.0', NULL, '2020-08-18 23:59:17.0', 3),
(35, 'Tobilleras Gym', '2,5KG', '150.000', 'item-1597795184837-1180.jpg', NULL, '2020-08-18 23:59:44.0', NULL, '2020-08-18 23:59:44.0', 3),
(36, 'Batalla Naval', 'Juego de Mesa para Disfrutar en Familia.', '1500.000', 'item-1597795230869-226.jpg', NULL, '2020-08-19 00:00:30.0', NULL, '2020-08-19 00:00:30.0', 5),
(37, 'Life', 'Juego de Mesa para Disfrutar en Familia.', '1550.000', 'item-1597795268323-7257.jpg', NULL, '2020-08-19 00:01:08.0', NULL, '2020-08-19 00:01:08.0', 5),
(38, 'Simon', 'Juego de Mesa para Disfrutar en Familia.', '1200.000', 'item-1597795287383-2200.jpg', NULL, '2020-08-19 00:01:27.0', NULL, '2020-08-19 00:01:27.0', 5),
(39, 'UNO', 'Juego de Mesa para Disfrutar en Familia.', '980.000', 'item-1597795306181-7302.jpg', NULL, '2020-08-19 00:01:46.0', NULL, '2020-08-19 00:01:46.0', 5),
(41, 'Telefono de Linea', 'Posee 1 auricular.\r\nCon identificador de llamadas.\r\nHasta 7 horas de conversación.\r\nFácil de usar.', '450.000', 'item-1597795441709-2703.jpg', NULL, '2020-08-19 00:04:01.0', NULL, '2020-08-19 00:04:01.0', 7),
(42, 'Telefono Inalambrico', 'Posee 1 auricular.\r\nCon identificador de llamadas.\r\nIncluye reloj indicador de fecha y hora.\r\nPantalla led.\r\nHasta 7 horas de conversación.\r\nDisfrutá de llamadas sin molestos cables.\r\nFácil de usar.', '3500.000', 'item-1597795475521-4319.jpg', NULL, '2020-08-19 00:04:35.0', NULL, '2020-08-19 00:04:35.0', 7),
(43, 'Telefono Antiguo', 'Todavia Funciona', '2000.000', 'item-1597795509761-6762.jpg', NULL, '2020-08-19 00:05:09.0', NULL, '2020-08-19 00:05:09.0', 7),
(44, 'Aspiradora', 'Facil de Usar, Rosa, Limpieza Rapida.', '2670.000', 'item-1597795619071-5691.jpg', NULL, '2020-08-19 00:06:59.0', NULL, '2020-08-19 00:06:59.0', 2),
(45, 'Cafetera', 'Es programable, hay que seguir unos simples pasos y podrás disfrutar de un aromático, de acero inoxidable', '6000.000', 'item-1597795700375-6324.jpg', NULL, '2020-08-19 00:08:20.0', NULL, '2020-08-19 00:08:20.0', 2),
(46, 'Heladera', 'Heladera moderna Plateada', '78000.000', 'item-1597795763946-6607.jpg', NULL, '2020-08-19 00:09:23.0', NULL, '2020-08-19 00:09:23.0', 2),
(47, 'Microondas', 'Es programable, hay que seguir unos simples pasos , de acero inoxidable', '7000.000', 'item-1597795824088-1017.jpg', NULL, '2020-08-19 00:10:24.0', NULL, '2020-08-19 00:10:24.0', 2),
(48, 'Tostadora', 'Cuenta con 7 ajustes de tostado, tiene capacidad para dos rebanadas de pan, múltiples funciones y ranuras grandes y anchas', '6000.000', 'item-1597795850139-3241.jpg', NULL, '2020-08-19 00:10:50.0', NULL, '2020-08-19 00:10:50.0', 2);

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
  `admin` boolean DEFAULT FALSE,
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
(6, 'test', 'test', 'nuevotestdos2@gmail.com', '$2a$10$CdPuGSK/yzCOErlIPg.Eh.Z3.FzZQDqQtUZtPewrYUtMEH1sTAnhi', 'user-1597611984156-5991.png', '111223344', '2020-08-16 21:06:24.0', '2020-08-16 21:06:24.0', NULL),
(7, 'lucas', 'montes', 'lucasmontesr@gmail.com', '$2a$10$xemgvt8IztLLzXr2e51p9OYiq2zpedjf8hIsTv4RgGYmh6v1im1Am', 'no-image', '41823580', '2020-08-18 02:45:39.0', '2020-08-18 02:45:39.0', NULL),
(8, 'lucas', 'montes', 'lucasmontes@gmail.com', '$2a$10$HJAEc9aHM3S1F8l.PVPgeO6fbLRluCCJh.PGlkYX20svei4LOGafq', 'no-image', '41823456', '2020-08-18 22:03:25.0', '2020-08-18 22:03:25.0', NULL);


CREATE TABLE `orders` (
  `id` int(20) AUTO_INCREMENT NOT NULL,
  `userId` int(45) DEFAULT NULL,
  `amount` varchar(156) DEFAULT NULL,
  `payment` int(20) DEFAULT NULL,
  `hasCheckedOut` bool DEFAULT FALSE,
  `status` varchar(30), 
  `createdAt` timestamp(1) NULL DEFAULT NULL,
  `updatedAt` timestamp(1) NULL DEFAULT NULL,
  `deletedAt` timestamp(1) NULL DEFAULT NULL,
  primary key (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cartproduct`
--
ALTER TABLE `cartproduct`
  ADD PRIMARY KEY (`id (PK)`);

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id (PK)`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
