# Installation

::: warning
Please keep in mind that Stack Server is still under active development and therefore full backward compatibility is not guaranteed before reaching v1.0.0.
:::

## Downloading the server

The Stacks server is based on [PocketBase](https://pocketbase.io) which is an open source backend consisting of embedded database (SQLite) with realtime subscriptions, built-in users management, convenient dashboard UI and simple REST-ish API.

The easiest way to get started is to download the prebuilt minimal PocketBase app from their [website](https://pocketbase.io/docs/).

## Running the server

Once you've downloaded and extracted the archive, you could start the application by running the following console command in the extracted directory: `./pocketbase serve`.

And that's it! A web server will be started with the following routes:

- `http://127.0.0.1:8090` - if `pb_public` directory exists, serves the static content from it (html, css, images, etc.)
- `http://127.0.0.1:8090/_/` - Admin dashboard UI
- `http://127.0.0.1:8090/api/` - REST API

The first time, when you access the Admin dashboard UI, it will prompt you to create your first admin account (email and pass).

---

PocketBase will automically create a new directory pb_data alongside the executable to store your application data and settings.

To check all avaialble commands and their options, you could run `./pocketbase --help` or `./pocketbase [command] --help`

## Creating the first admin account

<img :src="$withBase('assets/img/server/admin-creation.png')">

Fill the form and hit `Create and login` to continue configuring the server.

## Importing server settings

<img :src="$withBase('assets/img/server/import-settings.png')">

<img :src="$withBase('assets/img/server/confirming-import.png')">

<img :src="$withBase('assets/img/server/confirm-and-import.png')">