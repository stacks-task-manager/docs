# List view

The list view is all about task grouping by [stack](./stack.md), due date, priority or ungroupped.

<img :src="$withBase('/assets/img/projects/list-view.png')">

## Group by stack

List view groupped by stack is just a vertical representation of the [Board View](./board-view.md) and it allows moving task from one column to another on the vertical axis.

<img :src="$withBase('/assets/img/projects/list-view-stack.png')">

## Group by due date

List view groupped by due date is useful to have a quick glance over which task is due today, upcoming or already overdue. When changing the task date it will automatically jump into the correct grouping based on the newly selected date.

<img :src="$withBase('/assets/img/projects/list-view-duedate.png')">

## Group by priority

List view groupped by priority is useful to have a quick glance over which has more priority over another. The task rows can be easily dragged to any priority grouping to change their priority or by simply clicking the priority button and selecting a new one.

<img :src="$withBase('/assets/img/projects/list-view-priority.png')">