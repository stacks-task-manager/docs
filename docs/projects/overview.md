# Overview

The overview is a good way to have a over-the-top view of your current project progress. It is divided into several sections with its own specific information. To view the same information for multiple projects at the same time we recommend using the [Reports](./reports.md).

<img :src="$withBase('/assets/img/projects/overview.png')">

## Tasks summary

The tasks summary section will show you the total count and percentage of tasks in different states:
- `Idle` - tasks not yet started (progress is `0%`)
- `In progress` - tasks that have a progress greater then `0%`
- `Completed` - tasks that are marked as done and percentage is `100%`
- `Start today` - incomplete tasks that have the `start date` field the same as today's date
- `Overdue` - incomplete tasks that have the `due date` field the same as today's date

<img :src="$withBase('/assets/img/projects/overview-tasks-summary.png')">

## Total tasks

The total tasks section will show you the total task count in the current project and the number of stacks/columns.

<p align="center">
<img :src="$withBase('/assets/img/projects/overview-total.png')" width="50%">
</p>

## Tasks by priority

The tasks by priority section will show you the total task count grouped by each individual priority set to each task.

<p align="center">
<img :src="$withBase('/assets/img/projects/overview-priority.png')" width="50%">
</p>

## Tags and statuses overview

The tags and statuses overview section will show you the total task count grouped by each tag and status.

<p align="center">
<img :src="$withBase('/assets/img/projects/overview-tags-statuses.png')" width="90%">
</p>

## People overview

There are several overview sections related around project members. These sections shows how's assigned on the current project, how many tasks they have assgined and the time logged by each of them.

<p align="center">
<img :src="$withBase('/assets/img/projects/overview-people.png')" width="90%">
</p>

## Earnings overview

Earnings overview sections will show the total sum of all estimated vs. logged times along side the earnings based on the estimate time and spent time.

<p align="center">
<img :src="$withBase('/assets/img/projects/overview-earnings.png')" width="50%">
</p>

## Project status overview

The project status overview shows some basic info about the current project:

- created and last updated date
- owner
- company
- start and end date
- project health

## Stacks overview

The stacks overview shows both the estimated vs. spent time and task counts per each stack.

<img :src="$withBase('/assets/img/projects/overview-stacks.png')">
