# Board view

The board view uses a kanban board. A kanban board is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow). It can help both agile and DevOps teams establish order in their daily work. Kanban boards use cards ([Tasks](./task.md)), columns ([Stacks](./stack.md)).

<img :src="$withBase('/assets/img/projects/board-view.png')">

## How to use the board view

The board view main purpose is to give you a better look over a waterfall style progress of your tasks. In the view usually, but not necessarily, the tasks move from left to right in the columns.

### Waterflow usage example

Tasks are moved horizontally from left to right based on they status. When a task is created it goes into the `To do` column. When you start working on a specific task then it gets moved to the `Doing` column and eventually to the `Done` column when the task was completed.

| To do | Doing | Done
| --- | :---: | :---: | 
| Task 1 | Task 7 | Task 10
| Task 2 | Task 6 | Task 9
| Task 3 | Task 5 | Task 8

### Feature usage example

In this case the tasks are not moving to different columns when you start working on them but rather they get tagged either by using a [Status](./statuses.md) or [Tags](./tags.md) to mark `working on` state.

| Feature 1 | Feature 2 | Feature 3
| --- | :---: | :---: | 
| Task 1 | Task 7 | Task 10
| Task 2 | Task 6 | Task 9
| Task 3 | Task 5 | Task 8