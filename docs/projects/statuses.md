# Statuses

Just like [Tags](./tags.md) statuses are another way of organizing your tasks. Unlike tags the statuses are mapped 1 to 1 with the task. The status can be created either as a **workspace status** (global - visible accross the whole workspace), or **local status** (only visible on the current project).

The statuses are mostly used to indicate how a tasks iss progressing: `On track`, `Off track`, `Progressing`, and so on.

<img :src="$withBase('/assets/img/projects/statuses-dialog.png')">

## Adding a Status

There are multiple ways to create a new status:

1. From the [Task details](./task-details.md)
    1. click the **Add status** button under the **Status** section on the sidebar
    2. start typing the new status name
    3. select a color from the predefined list and click the **Create new status** button
2. From the **Project settings**
    1. [Open the statuses manager](#managing-statuses)
    2. select the **Statuses** tab and click **Add status**
3. From any task card
    1. click the status button
    2. start typing the new status name
    3. select a color from the predefined list and click the **Create new status** button

## Deleting a Status

1. [Open the statuses manager](#managing-statuses)
2. Select the **Statuses** tab and click the button to remove a tag

::: warning
By deleting a status it will also remove it from any assiged tasks
:::

<img :src="$withBase('/assets/img/projects/statuses-delete.png')">

## Changing Status color

1. Open any project
2. [Open the statuses manager](#managing-statuses)
3. Click on the **Statuses** tab and click the tag you want to change
4. Click the colored square to select a new color
5. Click on the `tick` <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M17,4c-0.28,0-0.53,0.11-0.71,0.29L7,13.59l-3.29-3.29C3.53,10.11,3.28,10,3,10 c-0.55,0-1,0.45-1,1c0,0.28,0.11,0.53,0.29,0.71l4,4C6.47,15.89,6.72,16,7,16s0.53-0.11,0.71-0.29l10-10C17.89,5.53,18,5.28,18,5 C18,4.45,17.55,4,17,4z"/></svg> button to save the new color 

## Managing statuses

1. Open the project menu from the toolbar
2. Click the **Tags & Statuses** menu item

<img :src="$withBase('/assets/img/projects/tags-status-menu.png')">
<br />
<br />
<img :src="$withBase('/assets/img/projects/statuses-dialog.png')">