# Task details

## Anatomy

<br /><br />
<img :src="$withBase('/assets/img/projects/task-details.png')">

## Assigning tags

There are 3 ways of assigning tags to a task:

1. from the task title by hitting `#` and using the autocomplete to select a tag from the drop-down menu
2. by clicking the `Add tag` button and selecting a tag from the popover menu
3. when creating a new task hitting `#` will autocomplete your tags

<p align="center">
<img :src="$withBase('/assets/img/projects/assigning-tags.png')" width="70%">
</p>
## Assigning people

There are 2 ways to assign people to a task:

1. from the task title by hitting `@` and using the autocomplete to select a person from the drop-down menu
2. by clicking the `Add people` button and selecting a person from the popover.

<img :src="$withBase('/assets/img/projects/asigning-people.png')">

## Setting a start, due or do dates

The start and due dates are important for indicating when you should begin working on a task and by when it should be completed. The date picker also comes with a handy shortcuts sidebar to help you easily pick from a common list of dates. (Optional) The do date on the other hand it would be a good indicator for when a task should be picked up for work

To add a date follow these simple steps:

1. Click the task where you want to add a date
2. Click the `Add date` button for the start, due, or do date
3. Select a day
4. (Optional) select a date via the shortcut
5. The date will be shown in the task card

<img :src="$withBase('/assets/img/projects/dates.png')">

::: tip
The date indicator will be marked in `orange` for dates due today while in `red` for the overdue ones.
:::

## Adding subtasks
To add subtasks follow these simple steps:

1. Click the task where you want to add a subtask
2. Scroll down and click the `Subtasks` tab
3. Click the `Add subtask` button
4. Enter the task title in the input
5. The task card will indicate the number of subtasks

<img :src="$withBase('/assets/img/projects/adding-subtasks.png')">

::: tip
You can change the title of each checklists and toggle the visibility of the completed subtasks
:::

## Adding a location

Task locations can let you see your work in a geographical environment. Each task can have an unlimited number of pins. To add a location follow these simple steps:

1. Click the task where you want to add a location
2. Scroll down and click the `Locations` tab
3. Click the `Add location` button
4. Type a locations name
5. Select from the list of locations found
6. The task card will indicate if the it contains any saved locations

<img :src="$withBase('/assets/img/projects/adding-location.png')">

::: tip
You can view all tasks locations from the [World view](./world.md)
:::

## Attaching files

To attach a file follow these simple steps:

1. Click the task where you want to attach files
2. Scroll down and click the `Files` tab
3. Click on the `Select files` button or drag-and-drop and files on the panel to attach

<img :src="$withBase('/assets/img/projects/attaching-files.png')">

::: tip
When attaching a file Stack will create a phisical copy of it into the workspace folder.
:::

## Assigning a status

To assign a task status follow these simple steps:

1. Click the task where you want to add a status
2. Click the `Add status` button
3. Search or select any status from the popup list
4. The selected status will be shown in both the [Task details](./task-details.md) and [Task card](./task.md)

<img :src="$withBase('/assets/img/projects/adding-status.png')">

## Creating a recurring task

Recurring tasks are a good way to either reopen or create a new one (identical to the original) once it was marked as done. There are several way to make a task repeat, and each of them will update the due date accordingly:

- Daily
- Weekly
- Monthly
- Yearly
- Periodically

To make a task repeat follow these steps:

1. Click the task which you want to recur
2. Click the `Add repeat` button in [Task details](./task-details.md)
3. Select the repeat time span
4. (Optionally) Select wether to reopen the task or create a new one instead
5. Task cards will indicate if a task is recurring

<img :src="$withBase('/assets/img/projects/recurring-tasks.png')">

## Changing the progress

## Changing the priority

## Editing the layout

## Embedded panel

The task details can be moved to an embedded panel layout in the current view. This allows you to interract with both the tasks on the board view and the task details on the side. To enable this options:

<img :src="$withBase('/assets/img/projects/embedded-task-details.png')">

1. Open the [Preferences](../general/open-preferences.md)
2. Click on the `General` tab under the `Projects` section
3. Click and enable `Use embedded task details`
4. (Optional) Click to enable if click outside of the task details area should close the panel

<img :src="$withBase('/assets/img/projects/enabling-embedded-task-details.png')">