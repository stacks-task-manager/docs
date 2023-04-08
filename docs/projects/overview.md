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