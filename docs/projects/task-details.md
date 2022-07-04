# Task details

<img :src="$withBase('/assets/img/projects/task-details.png')">

## Assigning tags

There are 3 ways of assigning tags to a task:

1. from the task title by hitting `#` and using the autocomplete to select a tag from the drop-down menu
2. by clicking the `Add tag` button and selecting a tag from the popover menu
3. when creating a new task hitting `#` will autocomplete your tags

<img :src="$withBase('/assets/img/projects/assigning-tags.png')">

## Assigning people

There are 2 ways to assign people to a task:

1. from the task title by hitting `@` and using the autocomplete to select a person from the drop-down menu
2. by clicking the `Assign this task` button [<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.61,17.91c-0.57-1.32-3.35-2.19-5.19-3.01c-1.85-0.82-1.59-1.31-1.66-1.99
			c-0.01-0.09-0.01-0.19-0.02-0.29c0.63-0.56,1.15-1.33,1.49-2.22c0,0,0.02-0.05,0.02-0.06c0.07-0.19,0.13-0.39,0.19-0.6
			c0.42-0.09,0.67-0.55,0.76-0.98c0.1-0.17,0.29-0.6,0.25-1.08c-0.06-0.62-0.31-0.91-0.59-1.03c0-0.04,0-0.07,0-0.11
			c0-0.79-0.07-1.93-0.22-2.68c-0.03-0.21-0.08-0.42-0.14-0.62c-0.27-0.92-0.84-1.74-1.6-2.32C12.11,0.32,11,0,10.01,0
			s-2.1,0.32-2.89,0.92C6.36,1.5,5.79,2.32,5.52,3.24c-0.06,0.2-0.11,0.41-0.14,0.62C5.24,4.61,5.16,5.75,5.16,6.54
			c0,0.03,0,0.06,0,0.1c-0.29,0.11-0.55,0.4-0.61,1.04C4.51,8.16,4.7,8.59,4.8,8.76C4.9,9.2,5.15,9.67,5.59,9.74
			c0.05,0.21,0.12,0.41,0.19,0.6c0,0.01,0.01,0.03,0.01,0.04L5.8,10.4c0.34,0.91,0.87,1.69,1.52,2.25c0,0.09-0.01,0.18-0.02,0.26
			c-0.07,0.68,0.13,1.17-1.72,1.99s-4.62,1.69-5.19,3.01C-0.18,19.23,0.05,20,0.05,20h19.9C19.95,20,20.18,19.23,19.61,17.91z"/>
</svg>] and selecting a person from the popover.

<img :src="$withBase('/assets/img/projects/asigning-people.png')">

## Setting a start and due date

The start and due dates are important for indicating when you should begin working on a task and when it should be completed. The date picker also comes with a handy shortcuts sidebar to help you easily pick from a common list of dates.

<img :src="$withBase('/assets/img/projects/start-due-date.png')">

::: tip
The date indicator will be marked in `orange` for dates due today while in `red` for the overdue ones.
:::

## Adding subtasks
To add subtasks start by adding a `Checklist` widget to the task by clicking the [`1`] `Checkboxes` icon [<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20">
<path id="Combined-Shape" d="M2,12v4h4v-4H2z M1,10h6c0.55,0,1,0.45,1,1v6c0,0.55-0.45,1-1,1H1c-0.55,0-1-0.45-1-1v-6
				C0,10.45,0.45,10,1,10z M12,3h7l0,0c0.55,0,1,0.45,1,1l0,0c0,0.55-0.45,1-1,1h-7c-0.55,0-1-0.45-1-1S11.45,3,12,3z M8,0
				c0.55,0,1,0.45,1,1c0,0.28-0.11,0.53-0.29,0.71l-5,6C3.53,7.89,3.28,8,3,8S2.47,7.89,2.29,7.71l-2-2C0.11,5.53,0,5.28,0,5
				c0-0.55,0.45-1,1-1c0.28,0,0.53,0.11,0.71,0.29L3,5.59l4.29-5.3C7.47,0.11,7.72,0,8,0z M12,13h7l0,0c0.55,0,1,0.45,1,1l0,0
				c0,0.55-0.45,1-1,1h-7c-0.55,0-1-0.45-1-1S11.45,13,12,13z"/>
</svg>] and then click the `Add a subtask` button [`2`].

<img :src="$withBase('/assets/img/projects/adding-subtasks.png')">

::: tip
You can change the title of each checklists and toggle the visibility of the completed subtasks
:::

## Adding a custom text

To add a custom text start by adding a `Custom text` widget to the task by clicking the `T` [<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19,3h-2V1c0-0.55-0.45-1-1-1s-1,0.45-1,1v2h-2c-0.55,0-1,0.45-1,1s0.45,1,1,1h2
			v2c0,0.55,0.45,1,1,1s1-0.45,1-1V5h2c0.55,0,1-0.45,1-1S19.55,3,19,3z M5,7.5v1C5,8.78,5.22,9,5.5,9S6,8.78,6,8.5V8h2v7H7.5
			C7.22,15,7,15.22,7,15.5C7,15.78,7.22,16,7.5,16h2c0.28,0,0.5-0.22,0.5-0.5c0-0.28-0.22-0.5-0.5-0.5H9V8h2v0.5
			C11,8.78,11.22,9,11.5,9S12,8.78,12,8.5v-1C12,7.22,11.78,7,11.5,7h-6C5.22,7,5,7.22,5,7.5z M16,9c-0.55,0-1,0.45-1,1v8H2V5h8
			c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1H1C0.45,3,0,3.45,0,4v15c0,0.55,0.45,1,1,1h15c0.55,0,1-0.45,1-1v-9C17,9.45,16.55,9,16,9z"
			/>
</svg>] icon in the task footer [`1`]. Read more about how to use the [markdown syntax](../other/markdown-syntax.md) to write your custom text.

<img :src="$withBase('/assets/img/projects/adding-custom-text.png')">

## Adding a map
Maps can let you see your work in a geographical environment. Each task can have an unlimited number of pins.

## Attaching files and links

To attach a file or a link start by adding an `Attachment` widget to the task by clicking the `Paper clip` [<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.35,2.67C17.24,1.56,15.79,1,14.33,1c-1.44,0-2.89,0.56-3.99,1.67l-9.16,9.27
			C0.4,12.73,0,13.78,0,14.83c0,1.05,0.39,2.1,1.18,2.9c0.78,0.79,1.82,1.18,2.85,1.18c1.04,0,2.07-0.39,2.87-1.2l9.14-9.27
			C17,7.48,17,5.94,16.06,4.99c-0.94-0.95-2.49-0.96-3.44,0l-7.59,7.69l0,0c-0.31,0.32-0.3,0.83,0.01,1.14
			c0.31,0.31,0.81,0.31,1.13,0.02l0,0l7.59-7.69c0.31-0.31,0.84-0.31,1.13-0.02c0.31,0.31,0.31,0.85,0,1.16l-9.14,9.27
			c-0.93,0.95-2.54,0.93-3.45,0.02c-0.94-0.95-0.92-2.55,0.02-3.49l9.16-9.25c1.55-1.56,4.18-1.59,5.72-0.03
			c1.56,1.57,1.55,4.26,0,5.82l-8.89,9.02l0,0c-0.3,0.31-0.3,0.81,0.01,1.11c0.3,0.3,0.79,0.31,1.1,0.01l0,0.01l8.91-9.02
			C19.45,9.65,20,8.19,20,6.73C20,5.25,19.45,3.79,18.35,2.67z"/>
</svg>] icon in the task footer [`1`]. To add an attachment or link click on the `Add an attachment` button [`2`].

<img :src="$withBase('/assets/img/projects/attaching-files-links.png')">

You can either attach a file or add a link. Links can be of 2 types:
1. URLs, links on web
2. links that point to a local file on your hard drive

::: tip
When attaching a file Stack will create a phisical copy of it into the workspace folder.
:::

## Assigning a status

## Creating a recurring task

## Changing the progress

## Changing the priority