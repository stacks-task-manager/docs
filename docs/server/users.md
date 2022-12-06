# Users

This document will show you how to manage app users from the admin panel.

## Creating your first user

To add your first user you need to:
1. click on the `Collections` section in the sidebar
2. click the `Users` table/collection from the secondary sidebar
3. click the `New record` button

<img :src="$withBase('/assets/img/server/create-user-1.png')">

::: tip
We recomand adding at least one `admin` role user
:::

1. fill all the required fields
2. click the `Create` button to save the user

<img :src="$withBase('/assets/img/server/create-user-2.png')">

## Managing users roles

User roles are divided in these 6 categories: `admin`, `manager`, `user`, `collaborator`, `client`, `contact`.
Learn more about the different user roles [here](./user-roles.md).

In order to change a user's role follow these steps:

1. click on the `Collections` section in the sidebar
2. click the `Users` table/collection from the secondary sidebar
3. search a user, either using the `search bar` or by scrolling the list
4. click on the user to edit

<img :src="$withBase('/assets/img/server/manage-role-1.png')">

When the user modal opens:

1. click the roles drop-down and select a new role from the list
3. click the `Save changes` button to set the new role

<img :src="$withBase('/assets/img/server/manage-role-2.png')">

::: tip
Changing the any user data from the server dashboard won't have any effect on the Stacks client app until an app refresh is done, but any role permission will!
:::

## Resetting passwords