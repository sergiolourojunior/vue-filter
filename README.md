# Vue Filter

A small system of register and listing results with filter interactives.

## Technologies used
- Vue.js – [Github repository](https://github.com/vuejs/vue)
- Axios – [Github repository](https://github.com/axios/axios)
- Bootstrap – [Github repository](https://github.com/twbs/bootstrap)
- Bootstrap Icons – [Github repository](https://github.com/twbs/icons)
- Random User Generator – [Official Website](https://randomuser.me/)
- PHP – [Github repository](https://github.com/php/)
- HTML 5

## Installation
To install the system is fast and easy.

1. Create a database;
2. Configure access data in the file `model/DAO.php`;
3. Create a table `person`:
    ```sql
    CREATE TABLE IF NOT EXISTS `person` (
        `id` BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        `name` VARCHAR(150) NOT NULL,
        `gender` VARCHAR(10) NOT NULL,
        `city` VARCHAR(100) NOT NULL,
        `state` VARCHAR(100) NOT NULL,
        `picture` VARCHAR(250) NOT NULL,
        `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        `deleted_at` DATETIME NULL
    );
    ```
4. Done!