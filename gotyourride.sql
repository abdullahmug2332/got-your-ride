-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 12, 2025 at 04:54 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gotyourride`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `posterTitle` text NOT NULL,
  `posterNumber` int(11) NOT NULL,
  `text1` text DEFAULT NULL,
  `text2` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `title`, `content`, `posterTitle`, `posterNumber`, `text1`, `text2`) VALUES
(1, 'We Make Your Travel More <br>Enjoyable', 'At GotYourRide, we are dedicated to providing affordable and comfortable transportation services across Japan. Our goal is to offer you the freedom and flexibility to explore the country at your own pace. Whether you\'re experiencing the vibrant energy of the cities or enjoying the tranquility of the countryside, our private charter service ensures a relaxing and enjoyable journey.\n<br><br>\nWith a focus on comfort, convenience, and personalized service, we allow you to choose your destinations and the duration of your ride, ensuring that your travel experience is tailored to your needs. Let us be a part of your journey through Japan, where relaxation and adventure meet\n', 'YEARS OF EXPERIENCE', 20, 'A Trusted Leader in <br>Transportation Services', 'Your Ultimate Ride <br> for Every Journey');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `uid` varchar(10) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `street` varchar(100) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `zip_code` varchar(10) DEFAULT NULL,
  `booking_title` varchar(255) DEFAULT NULL,
  `booking_date` datetime DEFAULT NULL,
  `adults` int(11) DEFAULT NULL,
  `place_number` int(11) DEFAULT NULL,
  `total_price` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `is_paid` tinyint(1) DEFAULT 0,
  `state` varchar(255) DEFAULT NULL,
  `termsAccepted` tinyint(1) DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `uid`, `first_name`, `last_name`, `email`, `phone`, `street`, `city`, `zip_code`, `booking_title`, `booking_date`, `adults`, `place_number`, `total_price`, `created_at`, `is_paid`, `state`, `termsAccepted`) VALUES
(113, NULL, 'Rehan', 'Ali', 'rehan.nov4@gmail.com', '9999', 'Street 34', 'Lahore', '54000', 'outing', '2025-11-21 18:30:00', 3, 1, 270.00, '2025-05-20 09:45:00', 1, NULL, 0),
(114, NULL, 'Zara', 'Ahmed', 'zara.nov5@gmail.com', '1010', 'Street 35', 'Lahore', '54000', 'outing', '2025-11-28 09:10:00', 2, 2, 190.00, '2025-05-20 09:50:00', 0, NULL, 0),
(112, NULL, 'Fatima', 'Malik', 'fatima.nov3@gmail.com', '8888', 'Street 33', 'Lahore', '54000', 'outing', '2025-11-15 10:20:00', 4, 4, 400.00, '2025-05-20 09:40:00', 1, NULL, 0),
(111, NULL, 'Usman', 'Tariq', 'usman.nov2@gmail.com', '7777', 'Street 32', 'Lahore', '54000', 'outing', '2025-11-09 15:45:00', 1, 3, 150.00, '2025-05-20 09:35:00', 0, NULL, 0),
(110, NULL, 'Sana', 'Iqbal', 'sana.nov1@gmail.com', '6666', 'Street 31', 'Lahore', '54000', 'outing', '2025-11-02 13:00:00', 2, 2, 220.00, '2025-05-20 09:30:00', 1, NULL, 0),
(109, NULL, 'Ali', 'Hamza', 'ali.feb5@gmail.com', '5555', 'Street 25', 'Lahore', '54000', 'outing', '2025-02-27 10:15:00', 2, 1, 170.00, '2025-05-20 09:20:00', 0, NULL, 0),
(108, NULL, 'Noor', 'Zainab', 'noor.feb4@gmail.com', '4444', 'Street 24', 'Lahore', '54000', 'outing', '2025-02-18 12:45:00', 4, 4, 320.00, '2025-05-20 09:15:00', 1, NULL, 0),
(107, NULL, 'Talal', 'Ahmed', 'talal.feb3@gmail.com', '3333', 'Street 23', 'Lahore', '54000', 'outing', '2025-02-13 16:00:00', 1, 3, 130.00, '2025-05-20 09:10:00', 1, NULL, 0),
(5, NULL, 'Areeba', 'Khan', 'areeba.feb2@gmail.com', '2222', 'Street 22', 'Lahore', '54000', 'outing', '2025-02-07 11:30:00', 3, 2, 240.00, '2025-05-20 09:05:00', 0, NULL, 0),
(3, NULL, 'Hassan', 'Raza', 'hassan.feb1@gmail.com', '1111', 'Street 21', 'Lahore', '54000', 'outing', '2025-02-03 14:00:00', 2, 1, 180.00, '2025-05-20 09:00:00', 1, NULL, 0),
(104, NULL, 'Waleed', 'Asif', 'waleed1@gmail.com', '2020', 'Street 20', 'Lahore', '54000', 'trip', '2025-10-20 10:00:00', 5, 4, 530.00, '2025-05-20 05:00:00', 1, NULL, 0),
(103, NULL, 'Kiran', 'Shah', 'kiran1@gmail.com', '1919', 'Street 19', 'Lahore', '54000', 'trip', '2025-10-05 10:00:00', 3, 3, 490.00, '2025-05-20 05:00:00', 0, NULL, 0),
(102, NULL, 'Rizwan', 'Ahmed', 'rizwan1@gmail.com', '1818', 'Street 18', 'Lahore', '54000', 'trip', '2025-09-25 10:00:00', 4, 2, 460.00, '2025-05-20 05:00:00', 1, NULL, 0),
(101, NULL, 'Neha', 'Malik', 'neha1@gmail.com', '1717', 'Street 17', 'Lahore', '54000', 'trip', '2025-09-10 10:00:00', 2, 1, 370.00, '2025-05-20 05:00:00', 1, NULL, 0),
(100, NULL, 'Junaid', 'Iqbal', 'junaid1@gmail.com', '1616', 'Street 16', 'Lahore', '54000', 'trip', '2025-08-20 10:00:00', 3, 4, 310.00, '2025-05-20 05:00:00', 0, NULL, 0),
(99, NULL, 'Mehwish', 'Kiran', 'mehwish1@gmail.com', '1515', 'Street 15', 'Lahore', '54000', 'trip', '2025-08-05 10:00:00', 6, 3, 290.00, '2025-05-20 05:00:00', 1, NULL, 0),
(98, NULL, 'Faisal', 'Javed', 'faisal1@gmail.com', '1414', 'Street 14', 'Lahore', '54000', 'trip', '2025-07-25 10:00:00', 2, 2, 410.00, '2025-05-20 05:00:00', 1, NULL, 0),
(97, NULL, 'Hina', 'Nisar', 'hina1@gmail.com', '1313', 'Street 13', 'Lahore', '54000', 'trip', '2025-07-10 10:00:00', 3, 1, 330.00, '2025-05-20 05:00:00', 0, NULL, 0),
(96, NULL, 'Laiba', 'Rashid', 'laiba1@gmail.com', '1212', 'Street 12', 'Lahore', '54000', 'trip', '2025-06-25 10:00:00', 4, 4, 220.00, '2025-05-20 05:00:00', 1, NULL, 0),
(95, NULL, 'Ahmed', 'Sami', 'ahmed1@gmail.com', '1112', 'Street 11', 'Lahore', '54000', 'trip', '2025-06-05 10:00:00', 2, 3, 120.00, '2025-05-20 05:00:00', 0, NULL, 0),
(82, NULL, 'Abdul ', 'Rehman', 'ar@gmail.com', '345', 'street no 7', 'lahore', '5430', 'outing', '2025-05-22 18:12:57', 3, 2, 33.00, '2025-05-20 13:14:19', 1, NULL, 0),
(83, NULL, 'shazaib', 'waheed', 'sh@gmail.com', '777', 'steet not 8', 'lahore', '5430', 'outing', '2025-05-23 18:14:22', 6, 3, 455.00, '2025-05-20 13:15:27', 0, NULL, 0),
(84, NULL, 'bilal', 'naeem', 'bl@gmail.com', '777', 'steet no 9', 'lahore', '5430', 'outing', '2025-05-24 18:15:30', 8, 4, 333.00, '2025-05-20 13:16:58', 1, NULL, 0),
(1, '1001', 'Ali', 'Raza', 'ali1@gmail.com', '1111', 'Street 1', 'Lahore', '54000', 'trip', '2025-01-05 10:00:00', 2, 1, 100.00, '2025-05-20 05:00:00', 1, NULL, 0),
(2, NULL, 'Sara', 'Khan', 'sara1@gmail.com', '2222', 'Street 2', 'Lahore', '54000', 'trip', '2025-01-25 10:00:00', 3, 2, 150.00, '2025-05-20 05:00:00', 1, NULL, 0),
(4, NULL, 'Hassan', 'Ali', 'hassan1@gmail.com', '3333', 'Street 3', 'Lahore', '54000', 'trip', '2025-02-05 10:00:00', 4, 3, 200.00, '2025-05-20 05:00:00', 0, NULL, 0),
(88, NULL, 'Ayesha', 'Noor', 'ayesha1@gmail.com', '4444', 'Street 4', 'Lahore', '54000', 'trip', '2025-02-20 10:00:00', 1, 4, 250.00, '2025-05-20 05:00:00', 1, NULL, 0),
(89, NULL, 'Umar', 'Farooq', 'umar1@gmail.com', '5555', 'Street 5', 'Lahore', '54000', 'trip', '2025-03-10 10:00:00', 2, 1, 300.00, '2025-05-20 05:00:00', 0, NULL, 0),
(90, NULL, 'Fatima', 'Zahra', 'fatima1@gmail.com', '6666', 'Street 6', 'Lahore', '54000', 'trip', '2025-03-25 10:00:00', 3, 2, 350.00, '2025-05-20 05:00:00', 1, NULL, 0),
(91, NULL, 'Talha', 'Yasir', 'talha1@gmail.com', '7777', 'Street 7', 'Lahore', '54000', 'trip', '2025-04-05 10:00:00', 2, 3, 120.00, '2025-05-20 05:00:00', 1, NULL, 0),
(92, NULL, 'Noor', 'Amin', 'noor1@gmail.com', '8888', 'Street 8', 'Lahore', '54000', 'trip', '2025-04-20 10:00:00', 4, 4, 500.00, '2025-05-20 05:00:00', 0, NULL, 0),
(93, NULL, 'Zain', 'Ali', 'zain1@gmail.com', '9999', 'Street 9', 'Lahore', '54000', 'trip', '2025-05-01 10:00:00', 3, 1, 430.00, '2025-05-20 05:00:00', 1, NULL, 0),
(94, NULL, 'Iqra', 'Naveed', 'iqra1@gmail.com', '1010', 'Street 10', 'Lahore', '54000', 'trip', '2025-05-15 10:00:00', 5, 2, 600.00, '2025-05-20 05:00:00', 1, NULL, 0),
(81, NULL, 'Abdullah', 'Sajjad', 'ab@gmail.com', '2233', 'street no 6', 'lahore', '5430', 'outing', '2025-05-21 18:10:25', 2, 1, 444.00, '2025-05-13 13:11:55', 1, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `contactcards`
--

CREATE TABLE `contactcards` (
  `id` int(11) NOT NULL,
  `category` text NOT NULL,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contactcards`
--

INSERT INTO `contactcards` (`id`, `category`, `title`, `content`, `link`) VALUES
(1, 'address', 'Address', '2-chrome-3-5 Wakaba Shinjuku City, Tokyo 160-0011', 'https://www.google.com/maps/search/2-chrome-3-5+Wakaba+Shinjuku+City,+Tokyo+160-0011/@35.6848042,139.712919,16z/data=!3m1!4b1!4m2!2m1!6e1?entry=ttu&g_ep=EgoyMDI1MDYwMi4wIKXMDSoASAFQAw%3D%3D'),
(2, 'phone', 'Phone Number', '+81 80-4061-4722', 'https://wa.me/818040614722'),
(3, 'email', 'Email Address', 'info@gotyourride.com', 'mailto:info@gotyourride.com');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `message`, `created_at`) VALUES
(1, 'Colin Hooper', 'tuwitub@mailinator.com', 'Eaque sequi tenetur ', '2025-04-16 16:14:10'),
(2, 'Zephr Blankenship', 'befoluso@mailinator.com', 'Doloribus recusandae', '2025-04-16 16:24:43');

-- --------------------------------------------------------

--
-- Table structure for table `destination`
--

CREATE TABLE `destination` (
  `id` int(11) NOT NULL,
  `json` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `destination`
--

INSERT INTO `destination` (`id`, `json`) VALUES
(1, '{\"id\":1,\"bookingData\":{\"title\":\"Tokyo City Tour\",\"subtitle\":\"Tokyo is Japan’s buzzing capital—where ancient temples meet futuristic skyscrapers.\",\"location\":\"Tokyo City Tour\",\"reviews\":\"(Reviews)\",\"images\":[{\"src\":\"tokyo1\",\"classes\":\"col-span-1 md:col-span-2 row-span-1 md:row-span-2 w-full h-full\"},{\"src\":\"tokyo2\",\"classes\":\"col-span-1 md:col-span-2 row-span-1 w-full h-full\"},{\"src\":\"tokyo3\",\"classes\":\"col-span-1 w-full h-full\"},{\"src\":\"tokyo4\",\"classes\":\"col-span-1 w-full h-full\"}],\"details\":[{\"icon\":\"i5\",\"label\":\"Duration\",\"value\":\"10 Hours\"},{\"icon\":\"i6\",\"label\":\"People\",\"value\":\"1-6\"},{\"icon\":\"i7\",\"label\":\"Language\",\"value\":\"English\"},{\"icon\":\"i8\",\"label\":\"Type\",\"value\":\"Adventure\"}],\"price\":{\"fromLabel\":\"From\",\"primary\":\"380\",\"secondary\":\"$500\",\"secondaryIcon\":\"i9\"}},\"tripData\":{\"description\":{\"title\":\"Description\",\"text\":\"Discover the magic of Tokyo with GotYourRide, your ultimate tour partner! Experience the bustling Shibuya Crossing, serene Meiji Shrine, and the historic Senso-ji Temple. Dive into the vibrant streets of Akihabara and savor fresh delicacies at Tsukiji Outer Market. Enjoy breathtaking views from Tokyo Tower and the futuristic attractions of Odaiba. Our customized tours and comfortable rides ensure an unforgettable journey through Japan’s dynamic capital. Book now and explore Tokyo like never before with GotYourRide!\"},\"tripHighlights\":{\"title\":\"Trip Highlights\",\"subTitle\":\"Must See Spots\"},\"includeExclude\":{\"title\":\"Include/Exclude\",\"includedItems\":[\"Meet and Greet\",\"English-Speaking Driver\",\"Air-Conditioned Vehicle\",\"With WiFi When Available\"],\"excludedItems\":[\"Market Purchase Expense\",\"Food and Drinks\",\"Tour Guide\",\"Any Sort of Entry Ticket\"]},\"booking\":{\"title\":\"Book Your Trip\",\"dropdownPlaceholder\":\"Select a date\",\"people\":{\"label\":\"People:\",\"category\":\"Adult\",\"subtext\":\"(18+ Years)\",\"selectPlaceholder\":\"When (Date)\",\"options\":[{\"value\":\"option1\",\"label\":\"0\"},{\"value\":\"option2\",\"label\":\"1\"},{\"value\":\"option3\",\"label\":\"2\"}]},\"tripInfo\":[{\"label\":\"Location\",\"value\":\"Tokyo City Tour\"},{\"label\":\"Service\",\"value\":\"transport + driver\"},{\"label\":\"Duration\",\"value\":\"10 Hours\"},{\"label\":\"People\",\"value\":\"1-6\"}],\"buttonText\":\"Book Now\"}},\"itineraryData\":[{\"type\":\"in-transit\",\"icon\":\"caricon\",\"title\":\"Starting Location:\",\"subtitle\":\"You Will Get Picked Up\"},{\"type\":\"in-transit\",\"icon\":\"caricon\",\"title\":\"Car\",\"subtitle\":\"\"},{\"type\":\"in-activity\",\"icon\":\"caricon\",\"title\":\"Tsukiji Outer Market\",\"subtitle\":\"Visit, Sightseeing, Walk, Scenic Views On The Way\"},{\"type\":\"in-activity\",\"icon\":\"caricon\",\"title\":\"Sensoji Temple\",\"subtitle\":\"Visit, Sightseeing\"},{\"type\":\"in-activity\",\"icon\":\"caricon\",\"title\":\"Imperial Palace\",\"subtitle\":\"Visit, Sightseeing, Walk, Scenic Views On The Way\"},{\"type\":\"in-activity\",\"icon\":\"caricon\",\"title\":\"Tokyo Skytree\",\"subtitle\":\"Visit, Sightseeing, Scenic Views\"},{\"type\":\"in-activity\",\"icon\":\"caricon\",\"title\":\"Ginza\",\"subtitle\":\"Shopping, Sightseeing, Free Time\"},{\"type\":\"in-activity\",\"icon\":\"caricon\",\"title\":\"Hakuhinkan Toy Park\",\"subtitle\":\"Visit, Entertainment, Shopping\"},{\"type\":\"in-transit\",\"icon\":\"caricon\",\"title\":\"You Will Return To The Starting Point\",\"subtitle\":\"End of the tour\"}],\"options\":[{\"id\":\"a\",\"label\":\"Tsukiji Outer Market\"},{\"id\":\"b\",\"label\":\"Sensoji Temple\"},{\"id\":\"c\",\"label\":\"Tokyo Skytree\"},{\"id\":\"d\",\"label\":\"Tokyo Tower\"},{\"id\":\"e\",\"label\":\"Ginza\"}]}'),
(2, '  {\n  \"id\": 2,\n  \"bookingData\": {\n    \"title\": \"Mount Fuji\",\n    \"subtitle\": \"Tokyo to Mount Fuji with cultural sights and stunning views.\",\n    \"location\": \"Mount Fuji\",\n    \"reviews\": \"(Reviews)\",\n    \"images\": [\n      {\n        \"src\": \"i1\",\n        \"classes\": \"col-span-1 md:col-span-2 row-span-1 md:row-span-2 w-full h-full\"\n      },\n      {\n        \"src\": \"i2\",\n        \"classes\": \"col-span-1 md:col-span-2 row-span-1 w-full h-full\"\n      },\n      {\n        \"src\": \"i3\",\n        \"classes\": \"col-span-1 w-full h-full\"\n      },\n      {\n        \"src\": \"i4\",\n        \"classes\": \"col-span-1 w-full h-full\"\n      }\n    ],\n    \"details\": [\n      { \"icon\": \"i5\", \"label\": \"Duration\", \"value\": \"10 Hours\" },\n      { \"icon\": \"i6\", \"label\": \"People\", \"value\": \"1-6\" },\n      { \"icon\": \"i7\", \"label\": \"Language\", \"value\": \"English\" },\n      { \"icon\": \"i8\", \"label\": \"Type\", \"value\": \"Adventure\" }\n    ],\n    \"price\": {\n      \"fromLabel\": \"From\",\n      \"primary\": \"408\",\n      \"secondary\": \"$533\",\n      \"secondaryIcon\": \"i9\"\n    }\n  },\n  \"tripData\": {\n    \"description\": {\n      \"title\": \"Description\",\n      \"text\": \"Embark on a private day trip with Mount Fuji Discoveries, where you’ll explore the breathtaking beauty and cultural richness surrounding Japan’s iconic peak. Begin with panoramic views at Chureito Pagoda, followed by a visit to the serene village of Oshino Hakkai, home to crystal-clear ponds and traditional thatched-roof houses. Continue to the sacred Kitaguchi Hongu Fuji Sengen Shrine nestled in a tranquil cedar forest, and enjoy the stunning reflections of Mount Fuji at Lake Kawaguchi. For those seeking more adventure, optional activities include the Hakone Ropeway for aerial views of volcanic landscapes or a Lake Ashi cruise to glide across its calm waters. This customizable journey offers a perfect blend of nature, culture, and excitement, tailored to your preferences.\"\n    },\n    \"tripHighlights\": {\n      \"title\": \"Trip Highlights\",\n      \"subTitle\": \"Places covered\"\n    },\n    \"includeExclude\": {\n      \"title\": \"Include/Exclude\",\n      \"includedItems\": [\n        \"Hotel pickup and drop-off\",\n        \"Air-conditioned transportation\",\n        \"Driver\",\n        \"Guide\"\n      ],\n      \"excludedItems\": [\n        \"Mount Fuji entry ticket\",\n        \"Food and drinks\",\n        \"Ropeway or motorboat ticket\"\n      ]\n    },\n    \"booking\": {\n      \"title\": \"Book Your Trip\",\n      \"dropdownPlaceholder\": \"Select a date\",\n      \"people\": {\n        \"label\": \"People:\",\n        \"category\": \"Adult\",\n        \"subtext\": \"(14+ Years)\",\n        \"selectPlaceholder\": \"When (Date)\",\n        \"options\": [\n          { \"value\": \"option1\", \"label\": \"0\" },\n          { \"value\": \"option2\", \"label\": \"1\" },\n          { \"value\": \"option3\", \"label\": \"2\" }\n        ]\n      },\n      \"tripInfo\": [\n        { \"label\": \"Location\", \"value\": \"Mount Fuji\" },\n        { \"label\": \"Service\", \"value\": \"transport + driver\" },\n        { \"label\": \"Duration\", \"value\": \"10 Hours\" },\n        { \"label\": \"People\", \"value\": \"1-6\" }\n      ],\n      \"buttonText\": \"Book Now\"\n    }\n  },\n  \"itineraryData\": [\n    {\n      \"type\": \"in-transit\",\n      \"icon\": \"caricon\",\n      \"title\": \"13 Pickup Location Options:\",\n      \"subtitle\": \"Bunkyo City, Fujikawaguchi, Itabashi\"\n    },\n    {\n      \"type\": \"in-activity\",\n      \"icon\": \"caricon\",\n      \"title\": \"Chureito Pagoda\",\n      \"subtitle\": \"Visit, Sightseeing, Walk, Scenic Views On The Way\",\n      \"meta\": \"Optional, Extra fee\"\n    },\n    {\n      \"type\": \"in-activity\",\n      \"icon\": \"caricon\",\n      \"title\": \"Oshino Hakkai\",\n      \"subtitle\": \"Visit, Sightseeing, Safety Briefing\"\n    },\n    {\n      \"type\": \"in-activity\",\n      \"icon\": \"caricon\",\n      \"title\": \"Kitaguchi-Hongu Fuji Sengen Shrine\",\n      \"subtitle\": \"Break Time, Photo Stop, Cable Car Ride, Scenic Views On The Way\"\n    },\n    {\n      \"type\": \"in-activity\",\n      \"icon\": \"caricon\",\n      \"title\": \"Lake Kawaguchi\",\n      \"subtitle\": \"Visit, Sightseeing, Safety Briefing\"\n    },\n    {\n      \"type\": \"in-activity\",\n      \"icon\": \"caricon\",\n      \"title\": \"Mt. Kachi Kachi Ropeway\",\n      \"subtitle\": \"Visit, Sightseeing, Walk, Scenic Drive, Scenic Views On The Way\"\n    },\n    {\n      \"type\": \"in-activity\",\n      \"icon\": \"caricon\",\n      \"title\": \"Oishi Park\",\n      \"subtitle\": \"Break Time, Photo Stop, Free Time\"\n    },\n    {\n      \"type\": \"no-line\",\n      \"icon\": \"caricon\",\n      \"title\": \"13 Drop-Off Locations:\",\n      \"subtitle\": \"Tokyo 23 wards, Ichikawa, Shinbashi, Sumida City\"\n    }\n  ],\n  \"options\": [\n    { \"id\": \"a\", \"label\": \"Chureito Pagoda\" },\n    { \"id\": \"b\", \"label\": \"Mount Fuji\" },\n    { \"id\": \"c\", \"label\": \"Oshino Hakkai\" },\n    { \"id\": \"d\", \"label\": \"Kitaguchi-hongu Fuji Sengen Shrine\" },\n    { \"id\": \"e\", \"label\": \"Lake Kawaguchi\" },\n    { \"id\": \"f\", \"label\": \"Mt. Kachi Kachi Ropeway\" },\n    { \"id\": \"g\", \"label\": \"Oishi Park\" },\n    { \"id\": \"h\", \"label\": \"Saiko Iyashi-no-Sato Nenba\" },\n    { \"id\": \"i\", \"label\": \"Lake Ashi (Optional)\" },\n    { \"id\": \"j\", \"label\": \"Hakone Ropeway (Optional)\" },\n    { \"id\": \"k\", \"label\": \"Aokigahara Forest (Optional)\" },\n    { \"id\": \"l\", \"label\": \"Lake Yamanaka (Optional)\" },\n    { \"id\": \"m\", \"label\": \"The Hakone Open-Air Museum (Optional)\" },\n    { \"id\": \"n\", \"label\": \"Fugaku Wind Cave (Optional)\" }\n  ]\n}'),
(3, '{\n  \"id\": 3,\n  \"bookingData\": {\n    \"title\": \"Nagano Tour\",\n    \"subtitle\": \"From Tokyo to Nagano: A journey from vibrant cityscapes to serene mountain escapes.\",\n    \"location\": \"Nagano Tour\",\n    \"reviews\": \"(Reviews)\",\n    \"images\": [\n      {\n        \"src\": \"nagano1\",\n        \"classes\": \"col-span-1 md:col-span-2 row-span-1 md:row-span-2 w-full h-full\"\n      },\n      {\n        \"src\": \"nagano2\",\n        \"classes\": \"col-span-1 md:col-span-2 row-span-1 w-full h-full\"\n      },\n      {\n        \"src\": \"nagano3\",\n        \"classes\": \"col-span-1 w-full h-full\"\n      },\n      {\n        \"src\": \"nagano4\",\n        \"classes\": \"col-span-1 w-full h-full\"\n      }\n    ],\n    \"details\": [\n      { \"icon\": \"i5\", \"label\": \"Duration\", \"value\": \"10 Hours\" },\n      { \"icon\": \"i6\", \"label\": \"People\", \"value\": \"1-6\" },\n      { \"icon\": \"i7\", \"label\": \"Language\", \"value\": \"English\" },\n      { \"icon\": \"i8\", \"label\": \"Type\", \"value\": \"Adventure\" }\n    ],\n    \"price\": {\n      \"fromLabel\": \"From\",\n      \"primary\": \"477\",\n      \"secondary\": \"$562\",\n      \"secondaryIcon\": \"i9\"\n    }\n  },\n  \"tripData\": {\n    \"description\": {\n      \"title\": \"Description\",\n      \"text\": \"On this full-day journey, see the great sights close to Nagano - a historic temple, a sake tasting, and snow monkeys. See the Snow Monkey Park to learn more about snow monkeys in their natural environment. Discover Zenko-ji, one of the oldest Buddhist temples in Japan. Taste a restaurant close to Nagano and have a typical Japanese meal.\"\n    },\n    \"tripHighlights\": {\n      \"title\": \"Trip Highlights\",\n      \"subTitle\": \"Places covered\"\n    },\n    \"includeExclude\": {\n      \"title\": \"Include/Exclude\",\n      \"includedItems\": [\n        \"Air-Conditioned Vehicle\",\n        \"English & Hindi Speaking Guide\",\n        \"Private Transportation\",\n        \"All Tolls & Taxes\",\n        \"Bottled Water\"\n      ],\n      \"excludedItems\": [\n        \"Lunch\",\n        \"Entry Tickets Less Than $10\",\n        \"Enter/Admission - Jigokudani Snow Monkey Park Less Than $10\"\n      ]\n    },\n    \"booking\": {\n      \"title\": \"Book Your Trip\",\n      \"dropdownPlaceholder\": \"Select a date\",\n      \"people\": {\n        \"label\": \"People:\",\n        \"category\": \"Adult\",\n        \"subtext\": \"(18+ Years)\",\n        \"selectPlaceholder\": \"When (Date)\",\n        \"options\": [\n          { \"value\": \"option1\", \"label\": \"0\" },\n          { \"value\": \"option2\", \"label\": \"1\" },\n          { \"value\": \"option3\", \"label\": \"2\" }\n        ]\n      },\n      \"tripInfo\": [\n        { \"label\": \"Location\", \"value\": \"Nagano Tour\" },\n        { \"label\": \"Service\", \"value\": \"transport + driver\" },\n        { \"label\": \"Duration\", \"value\": \"10 Hours\" },\n        { \"label\": \"People\", \"value\": \"1-6\" }\n      ],\n      \"buttonText\": \"Book Now\"\n    }\n  },\n  \"itineraryData\": [\n    {\n      \"type\": \"in-transit\",\n      \"icon\": \"caricon\",\n      \"title\": \"13 Pickup Location Options:\",\n      \"subtitle\": \"You Will Get Picked Up\"\n    },\n    {\n      \"type\": \"in-transit\",\n      \"icon\": \"caricon\",\n      \"title\": \"Car\",\n      \"subtitle\": \"Visit, Sightseeing\"\n    },\n    {\n      \"type\": \"in-activity\",\n      \"icon\": \"caricon\",\n      \"title\": \"Zenko Ji Temple\",\n      \"subtitle\": \"Visit, Sightseeing\"\n    },\n    {\n      \"type\": \"in-activity\",\n      \"icon\": \"caricon\",\n      \"title\": \"Nishimon Yoshinoya\",\n      \"subtitle\": \"Visit, Sightseeing\"\n    },\n    {\n      \"type\": \"in-activity\",\n      \"icon\": \"caricon\",\n      \"title\": \"Jigokudani Snow Monkey Park\",\n      \"subtitle\": \"Visit, Sightseeing\"\n    },\n    {\n      \"type\": \"in-activity\",\n      \"icon\": \"caricon\",\n      \"title\": \"Dazaifu Monzen Machi\",\n      \"subtitle\": \"Visit, Sightseeing\"\n    },\n    {\n      \"type\": \"in-activity\",\n      \"icon\": \"caricon\",\n      \"title\": \"Obuse Onsen Kannon-No-Yu\",\n      \"subtitle\": \"Visit, Sightseeing\"\n    },\n    {\n      \"type\": \"in-transit\",\n      \"icon\": \"caricon\",\n      \"title\": \"You Will Return To The Starting Point\",\n      \"subtitle\": \"End of the tour\"\n    }\n  ],\n  \"options\": [\n    { \"id\": \"f\", \"label\": \"Zenko-ji Temple (Nagano)\" },\n    { \"id\": \"g\", \"label\": \"Nishimon Yoshinoya (Nagano)\" },\n    { \"id\": \"h\", \"label\": \"Jigokudani Snow Monkey Park (Yamanouchi)\" },\n    { \"id\": \"i\", \"label\": \"Dazaifu Monzen Machi (Fukuoka)\" },\n    { \"id\": \"j\", \"label\": \"Obuse Onsen Kannon-no-yu (Nagano)\" },\n    { \"id\": \"k\", \"label\": \"Oshino Hakkai (Yamanashi)\" },\n    { \"id\": \"l\", \"label\": \"Kitaguchi-hongu Fuji Sengen Shrine (Yamanashi)\" }\n  ]\n}'),
(4, '{\n  \"id\": 4,\n  \"bookingData\": {\n    \"title\": \"Nikko Tour\",\n    \"subtitle\": \"Nikko blends spiritual heritage with breathtaking nature, just a few hours from Tokyo.\",\n    \"location\": \"Nikko Tour\",\n    \"reviews\": \"(Reviews)\",\n    \"images\": [\n      {\n        \"src\": \"nikko1\",\n        \"classes\": \"col-span-1 md:col-span-2 row-span-1 md:row-span-2 w-full h-full\"\n      },\n      {\n        \"src\": \"nikko2\",\n        \"classes\": \"col-span-1 md:col-span-2 row-span-1 w-full h-full\"\n      },\n      {\n        \"src\": \"nikko3\",\n        \"classes\": \"col-span-1 w-full h-full\"\n      },\n      {\n        \"src\": \"nikko4\",\n        \"classes\": \"col-span-1 w-full h-full\"\n      }\n    ],\n    \"details\": [\n      { \"icon\": \"i5\", \"label\": \"Duration\", \"value\": \"10 Hours\" },\n      { \"icon\": \"i6\", \"label\": \"People\", \"value\": \"1-6\" },\n      { \"icon\": \"i7\", \"label\": \"Language\", \"value\": \"English\" },\n      { \"icon\": \"i8\", \"label\": \"Type\", \"value\": \"Adventure\" }\n    ],\n    \"price\": {\n      \"fromLabel\": \"From\",\n      \"primary\": \"423\",\n      \"secondary\": \"$550\",\n      \"secondaryIcon\": \"i9\"\n    }\n  },\n  \"tripData\": {\n    \"description\": {\n      \"title\": \"Description\",\n      \"text\": \"Chat with your driver as you travel, and customize an itinerary focused on the Nikko sights you want to see. Tailor stops to suit your unique interests with this private experience. Start with pickup from your accommodation in the 23 Wards of Tokyo. Relax in a comfortable car as you journey through the picturesque Japanese countryside, with your private driver handling traffic and navigation. Stay connected with onboard Wi-Fi. Travel into the mountains north of Tokyo to the charming city of Nikko in Tochigi Prefecture. Enjoy free time to visit the Toshogu Shrine, exploring its 42 structures, including a stunning five-story pagoda. Experience why this area is considered a national treasure. Stop at a local restaurant where you can purchase a traditional lunch. Get recommendations on where to enjoy authentic yuba gozen (tofu skin set meal). Admire the beauty of Kegon Falls, where water cascades off a cliff into a lush landscape.\"\n    },\n    \"tripHighlights\": {\n      \"title\": \"Trip Highlights\",\n      \"subTitle\": \"Places covered\"\n    },\n    \"includeExclude\": {\n      \"title\": \"Include/Exclude\",\n      \"includedItems\": [\n        \"English-speaking driver\",\n        \"Airconditioned transportation\",\n        \"Wi-fi in the vehicle\"\n      ],\n      \"excludedItems\": [\n        \"Food and drinks\",\n        \"Guide\",\n        \"Toshogu shrine entry ticket\"\n      ]\n    },\n    \"booking\": {\n      \"title\": \"Book Your Trip\",\n      \"dropdownPlaceholder\": \"Select a date\",\n      \"people\": {\n        \"label\": \"People:\",\n        \"category\": \"Adult\",\n        \"subtext\": \"(18+ Years)\",\n        \"selectPlaceholder\": \"When (Date)\",\n        \"options\": [\n          { \"value\": \"option1\", \"label\": \"0\" },\n          { \"value\": \"option2\", \"label\": \"1\" },\n          { \"value\": \"option3\", \"label\": \"2\" }\n        ]\n      },\n      \"tripInfo\": [\n        { \"label\": \"Location\", \"value\": \"Nikko Tour\" },\n        { \"label\": \"Service\", \"value\": \"transport + driver\" },\n        { \"label\": \"Duration\", \"value\": \"10 Hours\" },\n        { \"label\": \"People\", \"value\": \"1-6\" }\n      ],\n      \"buttonText\": \"Book Now\"\n    }\n  },\n  \"itineraryData\": [\n    {\n      \"type\": \"in-transit\",\n      \"icon\": \"caricon\",\n      \"title\": \"2 pickup location options:\",\n      \"subtitle\": \"Tokyo, Kanagawa\"\n    },\n    {\n      \"type\": \"in-transit\",\n      \"icon\": \"caricon\",\n      \"title\": \"Car\",\n      \"subtitle\": \"\"\n    },\n    {\n      \"type\": \"in-activity\",\n      \"icon\": \"caricon\",\n      \"title\": \"Nikko Toshogu\",\n      \"subtitle\": \"Visit, Sightseeing\"\n    },\n    {\n      \"type\": \"in-activity\",\n      \"icon\": \"caricon\",\n      \"title\": \"Shinkyo Bridge\",\n      \"subtitle\": \"Visit, Sightseeing\"\n    },\n    {\n      \"type\": \"in-activity\",\n      \"icon\": \"caricon\",\n      \"title\": \"Kegon Falls\",\n      \"subtitle\": \"Visit, Sightseeing\"\n    },\n    {\n      \"type\": \"in-activity\",\n      \"icon\": \"caricon\",\n      \"title\": \"Nikko Futarasan jinja\",\n      \"subtitle\": \"Visit, Sightseeing, Walk\"\n    },\n    {\n      \"type\": \"in-activity\",\n      \"icon\": \"caricon\",\n      \"title\": \"Tobu World\",\n      \"subtitle\": \"Visit, Sightseeing, Relaxation\"\n    },\n    {\n      \"type\": \"in-activity\",\n      \"icon\": \"caricon\",\n      \"title\": \"2 drop-off locations:\",\n      \"subtitle\": \"Tokyo, Kanagawa\"\n    }\n  ],\n  \"options\": [\n    { \"id\": \"m\", \"label\": \"Nikko Toshogu\" },\n    { \"id\": \"n\", \"label\": \"Shinkyo Bridge\" },\n    { \"id\": \"o\", \"label\": \"Kegon Falls\" },\n    { \"id\": \"p\", \"label\": \"Nikko Futarasan Jinja\" },\n    { \"id\": \"q\", \"label\": \"Tobu World Square\" }\n  ]\n}\n');

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `message` text NOT NULL,
  `rating` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `feedbacks`
--

INSERT INTO `feedbacks` (`id`, `first_name`, `last_name`, `email`, `phone`, `message`, `rating`, `created_at`) VALUES
(1, 'Mollie', 'King', 'tyci@mailinator.com', '123456789', 'Nisi mollit tempora ', 4, '2025-04-16 17:15:40'),
(2, 'Ori', 'Carr', 'duxabogyma', '+1 (577) 553-8222', 'Animi et eos paria', 3, '2025-04-16 17:16:21');

-- --------------------------------------------------------

--
-- Table structure for table `home`
--

CREATE TABLE `home` (
  `id` int(11) NOT NULL,
  `json` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `home`
--

INSERT INTO `home` (`id`, `json`) VALUES
(1, '[{\"name\":\"home1\",\"chars\":[{\"id\":1,\"icon\":\"i1\",\"text\":\"MOST POPULAR DESTINATIONS\"},{\"id\":2,\"icon\":\"i2\",\"text\":\"BUDGET FRIENDLY PACKAGE\"},{\"id\":3,\"icon\":\"i3\",\"text\":\"SATISFACTION GUARANTEED\"},{\"id\":4,\"icon\":\"i4\",\"text\":\"EXPERIENCED TRAVEL EXPERTS\"}],\"title\":\"MOST POPULAR DESTINATIONS\",\"des\":\"Explore the worldwide destinations which are the most preferred by people, including amazing natural beauties as well as lively urban scenery. Japan’s cities, like Tokyo, Nagano and Nikko, offer a unique contrast. Tokyo, a global hub of innovation and energy, dazzles with its neon-lit skyline, bustling streets, and world-class shopping.\"},{\"cards\":[{\"id\":1,\"image\":\"image2\",\"title\":\"Tokyo City Tour\",\"subtitle\":\"Feel the pulse of Japan’s electric capital\",\"price\":\"$380\",\"originalPrice\":\"$500\",\"duration\":\"10 Hours\",\"guests\":\"1‑6 Guests\"},{\"id\":2,\"image\":\"image3\",\"title\":\"Mt. Fuji\",\"subtitle\":\"Touch the clouds and awaken your spirit\",\"price\":\"$408\",\"originalPrice\":\"$533\",\"duration\":\"10 Hours\",\"guests\":\"1‑6 Guests\"},{\"id\":3,\"image\":\"image4\",\"title\":\"Nagano Tour\",\"subtitle\":\"Find serenity where mountains meet mystic temples\",\"price\":\"$447\",\"originalPrice\":\"$562\",\"duration\":\"10 Hours\",\"guests\":\"1‑6 Guests\"},{\"id\":4,\"image\":\"image5\",\"title\":\"Nikko Tour\",\"subtitle\":\"Journey into nature’s grandeur and timeless shrines\",\"price\":\"$423\",\"originalPrice\":\"$550\",\"duration\":\"10 Hours\",\"guests\":\"1‑6 Guests\"}]},{\"des\":\"Experience the freedom of a flexible schedule and the choice of what you want to do and for how long you wish to do it. Relax in a comfortable ride in modern minivans that can seat as many as 13 passengers. Take in the views of Mount Fuji at your leisure by using the private charter service for the whole duration of your trip to the region.\",\"title\":\"We Make Your Tour More Enjoyable\",\"experience\":\"20+\",\"expText\":\"YEARS OF EXPERIENCE\",\"cards\":[{\"icon\":\"i6\",\"text\":\"Nationally well‑known <br> service provider\"},{\"icon\":\"i10\",\"text\":\"Most popular booking <br> solution provider\"}],\"bulletPoints\":[\"Free cancellation: Cancel up to 24 hours in advance for a full refund\",\"Hand‑picked premium accommodations that guarantee comfort and relaxation.\",\"Dedicated 24/7 support team ready to assist you at any moment.\"]},{\"cards\":[{\"id\":1,\"img\":\"image18\",\"title\":\"Experienced Travel Experts\",\"text\":\"Rely on our knowledgeable travel agents to create the perfect journey tailored just for you.\"},{\"id\":2,\"img\":\"image20\",\"title\":\"Effortless Booking Made Simple\",\"text\":\"Our easy‑to‑use booking platform makes planning your ideal trip a breeze, so you can focus on enjoying the journey from the start.\"},{\"id\":3,\"img\":\"image19\",\"title\":\"Local Guide Services\",\"text\":\"Professional local guides for city tours, nature excursions, or cultural experiences. Multi‑lingual guides.\"},{\"id\":4,\"img\":\"image24\",\"title\":\"Complete Travel Security\",\"text\":\"Your safety and peace of mind are our top priorities, ensuring that your journey is fully protected at all times.\"},{\"id\":5,\"img\":\"image25\",\"title\":\"Travel Insurance\",\"text\":\"Offering travel insurance packages that cover health, lost luggage, trip cancellations.\"},{\"id\":6,\"img\":\"image26\",\"title\":\"Recommendations – Restaurants\",\"text\":\"Reservations at local restaurants during your travel to make your journey happy.\\n\"}]},[{\"id\":1,\"photo\":\"image21\",\"name\":\"James Carter\",\"country\":\"UK\",\"review\":\"Got Your Ride handled everything flawlessly – flights, JR passes, even pocket‑Wi‑Fi. I just showed up and enjoyed Japan.\",\"bg\":\"bg-[#D8F4DA]\"},{\"id\":2,\"photo\":\"image22\",\"name\":\"Michael Johnson\",\"country\":\"USA\",\"review\":\"Smooth booking and great local tips. Their Osaka food tour was a highlight. Highly recommended!\",\"bg\":\"bg-[#FFE2CE]\"},{\"id\":3,\"photo\":\"image23\",\"name\":\"Daniel Wright\",\"country\":\"UK\",\"review\":\"From airport pickup to Mt Fuji day‑trip, Got Your Ride nailed the timing. I’ll book with them again next spring.\",\"bg\":\"bg-[#F1D4D4]\"},{\"id\":4,\"photo\":\"image27\",\"name\":\"Jonathan Harris\",\"country\":\"Australia\",\"review\":\"Booking was effortless and their support team answered every question within minutes. Five‑star service.\",\"bg\":\"bg-[#D9D9D9]\"},{\"id\":5,\"photo\":\"image28\",\"name\":\"Oliver Brooks\",\"country\":\"Japan\",\"review\":\"Loved the Kyoto cultural package. Guides were punctual, friendly, and spoke perfect English.\",\"bg\":\"bg-[#D8F4DA]\"},{\"id\":6,\"photo\":\"image29\",\"name\":\"William Scott\",\"country\":\"Germany\",\"review\":\"Got Your Ride took the stress out of planning. Hotels were spot‑on and within budget. 6 stars if I could.\",\"bg\":\"bg-[#FFE2CE]\"}]]');

-- --------------------------------------------------------

--
-- Table structure for table `homehero`
--

CREATE TABLE `homehero` (
  `json` longtext NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `homehero`
--

INSERT INTO `homehero` (`json`, `id`) VALUES
('[{\"h1\":\"A MESMERIZING SUNSET OVER Mount Fuji, JAPAN.\",\"p\":\"As the sky transitions from vibrant orange to soft pink, the majestic mountain stands proud, reflecting the colors of the fading day.\"},{\"h1\":\"An ancient hush settles over Zenko‑ji as dusk descends\",\"p\":\"The timbered halls glow softly in lantern light echoing with centuries of prayer while pilgrims tread the stone approach in quiet reverence, wrapped in the temple’s timeless serenity.\"},{\"h1\":\"A dazzling evening in Tokyo paints the skyline with neon brilliance\",\"p\":\"Towering skyscrapers, age‑old temples and bustling streets weave together in a vibrant tapestry that pulses with energy and wonder.\"},{\"h1\":\"Nikkō Tōshogū shines with gilded carvings beneath towering cedars\",\"p\":\"Ornate beams and mythical motifs catch afternoon light, while incense swirls and chants fill the sacred forest, celebrating both opulence and deep spirituality.\"},{\"h1\":\"Matsumoto-jō’s black lacquer and white walls mirror in the moat\",\"p\":\"Soaring gables and moon-viewing tower stand guard over the Alps, a poetic blend of strength and elegance frozen in twilight.\"}]', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'Admin', 'admin@gmail.com', '12345678');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactcards`
--
ALTER TABLE `contactcards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `destination`
--
ALTER TABLE `destination`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home`
--
ALTER TABLE `home`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `homehero`
--
ALTER TABLE `homehero`
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
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT for table `contactcards`
--
ALTER TABLE `contactcards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `destination`
--
ALTER TABLE `destination`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `home`
--
ALTER TABLE `home`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `homehero`
--
ALTER TABLE `homehero`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
