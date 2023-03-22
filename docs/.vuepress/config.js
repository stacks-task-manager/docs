const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  title: 'Stacks',
  base: isDev ? '/' : '/',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  themeConfig: {
    // repo: 'https://github.com/',
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Site', link: 'https://stacks.rocks', target: '_self', rel: '' },
    ],
    sidebar: [
      {
        title: 'General',
        collapsable: false,
        path: '/general/',
        children: [
          '/general/layout.md',
          '/general/sidebar.md',
          '/general/documents.md',
          '/general/home.md',
          '/general/calendar.md',
          '/general/changing-the-language.md',
          '/general/add-language.md',
          '/general/create-new-document.md',
          '/general/rename-document.md',
          '/general/change-theme.md',
          '/general/open-preferences.md',
          '/general/keyboard-shortcuts.md',
        ],
      },
      {
        title: 'Workspaces',
        collapsable: false,
        children: [
          '/workspaces/what-is-a-workspace.md',
          '/workspaces/moving-a-workspace.md',
          '/workspaces/add-new-workspace.md',
          '/workspaces/renaming-a-workspace.md',
          '/workspaces/removing-a-workspace.md',
          '/workspaces/changing-workspace-icon.md',
        ],
      },
      {
        title: 'Projects',
        collapsable: false,
        path: '/projects/',
        children: [
          '/projects/board-view.md',
          '/projects/list-view.md',
          '/projects/table-view.md',
          '/projects/stack.md',
          '/projects/task.md',
          '/projects/task-details.md',
          '/projects/tags.md',
          '/projects/statuses.md',
          '/projects/settings.md',
        ],
      },
      {
        title: 'People',
        path: '/people/',
        collapsable: false,
        children: [],
      },
      {
        title: 'Notepad',
        collapsable: false,
        children: ['/notepad/add-image.md', '/notepad/resize-image.md'],
      },
      {
        title: 'Files',
        collapsable: false,
        children: [],
      },
      {
        title: 'License',
        collapsable: false,
        children: [
          '/license/use-license.md',
          '/license/buy-license.md',
          '/license/manage-linked-devices.md',
        ],
      },
      {
        title: 'Syncing',
        collapsable: false,
        children: [
          '/syncing/when-to-sync.md',
          '/syncing/sync-with-google-drive.md',
          '/syncing/sync-with-dropbox.md',
          '/syncing/sync-with-icloud-drive.md',
        ],
      },
      {
        title: 'Backup',
        collapsable: false,
        children: [
          '/backup/manual-backup.md',
          '/backup/automatic-backup.md',
          '/backup/restore-backup.md',
        ],
      },
      {
        title: 'Other',
        collapsable: false,
        children: [
            '/other/joining-beta-program.md',
            '/other/markdown-syntax.md'
        ],
      },
    //   {
    //     title: 'Markdown',
    //     path: '/markdown/',
    //   },
      {
        title: 'Server',
        path: '/server/',
        children: [
            '/server/installation.md',
            '/server/users.md',
            '/server/admins.md',
            '/server/deploy.md',
            '/server/api.md',
        ],
      }
    ],
  },
};
