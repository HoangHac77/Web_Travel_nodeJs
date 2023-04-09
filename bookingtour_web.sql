-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 09, 2023 at 11:00 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookingtour_web`
--

-- --------------------------------------------------------

--
-- Table structure for table `bills`
--

CREATE TABLE `bills` (
  `id` int(11) NOT NULL,
  `DatePayment` varchar(255) DEFAULT NULL,
  `TimePayment` varchar(255) DEFAULT NULL,
  `codeGenerate` varchar(255) DEFAULT NULL,
  `Status` tinyint(1) DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL,
  `idBooking` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `Adult` int(11) DEFAULT NULL,
  `Children` int(11) DEFAULT NULL,
  `Status` enum('NotConfirm','Confirm') DEFAULT NULL,
  `StartedDay` varchar(255) DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL,
  `idTourInfo` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `totalCost` int(11) DEFAULT NULL,
  `totalGuest` int(11) DEFAULT NULL,
  `AdultTotalCost` int(11) DEFAULT NULL,
  `ChildrenTotalCost` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `Adult`, `Children`, `Status`, `StartedDay`, `idUser`, `idTourInfo`, `createdAt`, `updatedAt`, `totalCost`, `totalGuest`, `AdultTotalCost`, `ChildrenTotalCost`) VALUES
(16, 5, 6, 'NotConfirm', NULL, 1, 1, '2023-04-09 08:33:17', '2023-04-09 08:33:17', 490, 11, 250, 240);

-- --------------------------------------------------------

--
-- Table structure for table `cantreviews`
--

CREATE TABLE `cantreviews` (
  `id` int(11) NOT NULL,
  `Status` tinyint(1) DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL,
  `idTourInfo` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` int(11) NOT NULL,
  `Status` tinyint(1) DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL,
  `idTourInfo` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`id`, `Status`, `idUser`, `idTourInfo`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, 1, '2022-12-08 04:04:12', '2022-12-08 04:04:12');

-- --------------------------------------------------------

--
-- Table structure for table `hotels`
--

CREATE TABLE `hotels` (
  `id` int(11) NOT NULL,
  `NameHotel` varchar(255) DEFAULT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hotels`
--

INSERT INTO `hotels` (`id`, `NameHotel`, `images`, `createdAt`, `updatedAt`) VALUES
(1, 'Hotel 5 star', '[\"src/assets/images/1670471153566.jpg\",\"\"]', '2022-12-08 03:45:53', '2022-12-08 03:45:53'),
(2, 'Hotel 4 star', '[\"src/assets/images/1670471173950.jpg\",\"\"]', '2022-12-08 03:46:13', '2022-12-08 03:46:13'),
(3, 'Hotel 5 star', '[\"src/assets/images/1670471153566.jpg\",\"\"]', '2022-12-08 03:45:53', '2022-12-08 03:45:53'),
(4, 'Hotel 5 star', '[\"src/assets/images/1670471153566.jpg\",\"\"]', '2022-12-08 03:45:53', '2022-12-08 03:45:53'),
(7, 'hotel 6 start', NULL, '2023-04-06 08:27:17', '2023-04-06 08:27:17'),
(8, 'hotel 10 start', NULL, '2023-04-06 08:36:02', '2023-04-06 08:40:39');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `country` varchar(255) DEFAULT NULL,
  `placeName` varchar(255) DEFAULT NULL,
  `descLocation` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id`, `country`, `placeName`, `descLocation`, `createdAt`, `updatedAt`) VALUES
(1, 'Italy', 'Capri & Sorrento', 'Coastal area within Liguria, in the northwest of Italy', '2022-12-08 03:47:13', '2022-12-08 03:47:13'),
(2, 'Malaysia', 'Gunung Mulu National Park', 'Miri Division, Sarawak, Malaysia', '2022-12-08 03:55:15', '2022-12-08 03:55:15'),
(3, 'ThaiLand', 'Wat Pho', '2 Saman Chai Road Phra Nakhon, Bangkok', '2022-12-08 03:59:05', '2022-12-08 03:59:05'),
(8, 'Italy', 'Capri & Sorrento', ' coastal area within Liguria, in the northwest of Italy\n', '2023-04-09 07:43:06', '2023-04-09 07:43:06'),
(9, 'VietNamese', 'Dao Phu Quoc', 'Phu Quoc and nearby islands, along with the distant Thổ Chu Islands, are part of Kiên Giang Province as Phu Quoc City.', '2023-04-09 08:51:09', '2023-04-09 08:51:09');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `Comment` varchar(255) DEFAULT NULL,
  `Rating` float DEFAULT NULL,
  `Status` tinyint(1) DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL,
  `idTourInfo` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('migration-create-bill.js'),
('migration-create-booking.js'),
('migration-create-cantReview.js'),
('migration-create-Favorites.js'),
('migration-create-hotel.js'),
('migration-create-location.js'),
('migration-create-review.js'),
('migration-create-TourInfo.js'),
('migration-create-TypeOfTransport.js'),
('migration-create-user.js'),
('update-model-column-Booking-status.js'),
('update-model-column-Booking.js'),
('update-model-column-Tour-Favourite.js');

-- --------------------------------------------------------

--
-- Table structure for table `tourinfos`
--

CREATE TABLE `tourinfos` (
  `id` int(11) NOT NULL,
  `NameTour` varchar(255) DEFAULT NULL,
  `abbreviation` varchar(255) DEFAULT NULL,
  `totalTime` varchar(255) DEFAULT NULL,
  `Departureday` datetime DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `PricePerson` int(11) DEFAULT NULL,
  `maxGroupSize` int(11) NOT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`images`)),
  `idTypesOfTransport` int(11) NOT NULL,
  `idHotel` int(11) NOT NULL,
  `idLocation` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Favorite` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tourinfos`
--

INSERT INTO `tourinfos` (`id`, `NameTour`, `abbreviation`, `totalTime`, `Departureday`, `Description`, `PricePerson`, `maxGroupSize`, `images`, `idTypesOfTransport`, `idHotel`, `idLocation`, `createdAt`, `updatedAt`, `Favorite`) VALUES
(1, 'Exploring the jaw-dropping US east coast by foot and by boat', 'ETHSCS', '5 Days', NULL, 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 50, 0, '[\"src/assets/images/1681027851299.jpg \",\"src/assets/images/1681027851309.jpg \",\"src/assets/images/1681027851317.jpg \",\"src/assets/images/1681027851322.jpg \",\"src/assets/images/1681027851330.jpg \",\"src/assets/images/1681027851343.jpg \"]', 1, 4, 1, '2023-04-09 08:10:51', '2023-04-09 08:10:51', NULL),
(2, 'Breathtaking hike through the Canadian Banff National Park', 'BHTHE', '7 Days', NULL, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 100, 0, '[\"src/assets/images/1681027925199.jpg \",\"src/assets/images/1681027925205.jpg \",\"src/assets/images/1681027925216.jpg \",\"src/assets/images/1681027925226.jpg \",\"src/assets/images/1681027925233.jpg \",\"src/assets/images/1681027925239.jpg \"]', 2, 7, 3, '2023-04-09 08:12:05', '2023-04-09 08:12:05', NULL),
(3, 'Exciting adventure in the snow with snowboarding and skiing', 'EAYTNS', '8 Days', NULL, 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!', 80, 0, '[\"src/assets/images/1681027979305.jpg \",\"src/assets/images/1681027979308.jpg \",\"src/assets/images/1681027979310.jpg \",\"src/assets/images/1681027979319.jpg \",\"src/assets/images/1681027979322.jpg \",\"src/assets/images/1681027979332.jpg \"]', 3, 2, 3, '2023-04-09 08:12:59', '2023-04-09 08:12:59', NULL),
(4, 'Breathing in Nature in America\'s most spectacular National Parks', 'BINNAM', '10 Days', NULL, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!', 150, 0, '[\"src/assets/images/1681028047608.jpg \",\"src/assets/images/1681028047613.jpg \",\"src/assets/images/1681028047618.jpg \",\"src/assets/images/1681028047621.jpg \",\"src/assets/images/1681028047633.jpg \",\"src/assets/images/1681028047630.jpg \"]', 4, 2, 8, '2023-04-09 08:14:07', '2023-04-09 08:14:07', NULL),
(5, 'Living the life of Wanderlust in the US\' most beatiful cities', 'LTVAIN', '15 Days', NULL, 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat lorem ipsum dolor sit amet.\\nConsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat!', 40, 0, '[\"src/assets/images/1681028219661.jpg \",\"src/assets/images/1681028219663.jpg \",\"src/assets/images/1681028219666.jpg \",\"src/assets/images/1681028219674.jpg \",\"src/assets/images/1681028219678.jpg \",\"src/assets/images/1681028219681.jpg \"]', 4, 7, 3, '2023-04-09 08:16:59', '2023-04-09 08:16:59', NULL),
(6, 'Surfing, skating, parajumping, rock climbing and more, all in one tour', 'SSRCK', '3 Days', NULL, 'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\nVoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur!', 90, 0, '[\"src/assets/images/1681028450535.jpg \",\"src/assets/images/1681028450538.jpg \",\"src/assets/images/1681028450549.jpg \",\"src/assets/images/1681028450558.jpg \",\"src/assets/images/1681028450555.jpg \",\"src/assets/images/1681028450562.jpg \"]', 1, 2, 3, '2023-04-09 08:20:50', '2023-04-09 08:20:50', NULL),
(7, 'The most remote and stunningly beautiful places for seeing the night sky', 'TMESFF', '6 Days', NULL, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 50, 0, '[\"src/assets/images/1681028506242.jpg \",\"src/assets/images/1681028506248.jpg \",\"src/assets/images/1681028506255.jpg \",\"src/assets/images/1681028506260.jpg \",\"src/assets/images/1681028506264.jpg \",\"src/assets/images/1681028506268.jpg \"]', 2, 2, 2, '2023-04-09 08:21:46', '2023-04-09 08:21:46', NULL),
(8, 'Enjoy the Northern Lights in one of the best places in the world', 'ETNOWD', '9 Days', NULL, 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!', 110, 0, '[\"src/assets/images/1681028569664.jpg \",\"src/assets/images/1681028569668.jpg \",\"src/assets/images/1681028569670.jpg \",\"src/assets/images/1681028569673.jpg \",\"src/assets/images/1681028569676.jpg \",\"src/assets/images/1681028569680.jpg \"]', 3, 2, 8, '2023-04-09 08:22:49', '2023-04-09 08:22:49', NULL),
(9, 'Exquisite wines, scenic views, exclusive barrel tastings,  and much more', 'ADHWI', '13 Days', NULL, 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 55, 0, '[\"src/assets/images/1681028821644.jpg \",\"src/assets/images/1681028821647.jpg \",\"src/assets/images/1681028821653.jpg \",\"src/assets/images/1681028821656.jpg \",\"src/assets/images/1681028821660.jpg \",\"src/assets/images/1681028821664.jpg \"]', 4, 3, 2, '2023-04-09 08:27:01', '2023-04-09 08:27:01', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `typeoftransports`
--

CREATE TABLE `typeoftransports` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `nameTransport` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `typeoftransports`
--

INSERT INTO `typeoftransports` (`id`, `image`, `nameTransport`, `createdAt`, `updatedAt`) VALUES
(1, 'src/assets/images/1670471073022.jpg', 'Airplane', '2022-12-08 03:44:33', '2022-12-08 03:44:33'),
(2, 'src/assets/images/1670471093538.jpg', 'Train', '2022-12-08 03:44:53', '2022-12-08 03:44:53'),
(3, 'src/assets/images/1670471107523.jpg', 'Bus', '2022-12-08 03:45:07', '2022-12-08 03:45:07'),
(4, 'src/assets/images/1670471128697.jpg', 'Yoat', '2022-12-08 03:45:28', '2022-12-08 03:45:28');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `CantReview` tinyint(1) DEFAULT NULL,
  `roleName` enum('Admin','User') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `phone`, `image`, `CantReview`, `roleName`, `createdAt`, `updatedAt`) VALUES
(1, 'hoanghac@gmail.com', '$2a$10$HuRHl6eVRVR04JmhBOHOTuj.de0/vEmVsAcA1eVlTWtKHg/mdtvEO', 'Hoang Hac', '0948309423', 'src/assets/images/1680684406838.png', NULL, 'Admin', '2022-12-08 03:39:19', '2022-12-08 03:39:19'),
(2, 'quocdung@gmail.com', '$2a$10$O2Q27QwVxGFyCu0bbEnos.UTmUkZzevW6WfdxIv8KGpS7MFjtrWEu', 'Quoc Dung', '0948309428', 'src/assets/images/1680684406838.png', NULL, 'User', '2022-12-08 03:57:08', '2022-12-08 04:03:56'),
(3, 'honghanh@gmail.com', '$2a$10$9l5bRWrcC5NqWROi.PfFMe/8.op9bZ/X2y8ntRYRtG275ZR9QDMim', 'Hong Hanh', '0948309428', 'src/assets/images/1680684406838.png', NULL, 'User', '2022-12-08 03:57:31', '2022-12-08 03:57:31'),
(5, 'hoanghac2@gmail.com', '$2a$10$U6a8D3ztMQwF0OWWaSgi6u6p7BfyWamYqyYunDaz9H16YN.AFBulq', 'Hoang Huy', '989696797', 'src/assets/images/1680684406838.png', NULL, 'User', '2023-04-06 03:28:03', '2023-04-06 04:15:05'),
(9, 'xuanhien@gmail.com', '$2a$10$FoFPHmSmMnCU5wO/tzWUIejr.SzKw1ke6K222xzbgjhDmrbIJThVG', 'xuan hien', NULL, NULL, NULL, 'User', '2023-04-08 04:04:10', '2023-04-08 04:04:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cantreviews`
--
ALTER TABLE `cantreviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `tourinfos`
--
ALTER TABLE `tourinfos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `typeoftransports`
--
ALTER TABLE `typeoftransports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bills`
--
ALTER TABLE `bills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `cantreviews`
--
ALTER TABLE `cantreviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tourinfos`
--
ALTER TABLE `tourinfos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `typeoftransports`
--
ALTER TABLE `typeoftransports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
