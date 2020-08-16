CREATE DATABASE  IF NOT EXISTS `smartshopper` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `smartshopper`;

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



INSERT INTO `categories` (`id`, `name`) VALUES
(6, 'Celulares'),
(1, 'Computacion'),
(4, 'Cuidado Personal'),
(2, 'Electrodomesticos'),
(3, 'Fitness'),
(10, 'Hogar, Muebles y Jardin'),
(5, 'Juguetes'),
(7, 'Telefonos');

ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

LOCK TABLES `categories` WRITE;


UNLOCK TABLES;
