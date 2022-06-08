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
            collapsable: true,
            children: [
                '/general/change-language.md',
                '/general/add-language.md',
                '/general/create-new-document.md',
                '/general/rename-document.md',
                '/general/change-theme.md'
            ]
        },
        {
            title: 'Workspaces',
            collapsable: true,
            children: [
                '/workspaces/what-is-a-workspace.md',
                '/workspaces/moving-a-workspace.md',
                '/workspaces/add-new-workspace.md',
                '/workspaces/renaming-a-workspace.md',
                '/workspaces/removing-a-workspace.md',
                '/workspaces/changing-workspace-icon.md',
            ]
        },
        {
            title: 'Projects',
            collapsable: true,
            children: []
        },
        {
            title: 'Essentials',
            collapsable: false,
            children: [
            '/essentials/layout.md',
            '/essentials/library.md',
            '/essentials/folders.md',
            '/essentials/tags.md',
            '/essentials/snippets.md',
            '/essentials/fragments.md',
            '/essentials/description.md',
            '/essentials/assistant.md',
            '/essentials/search.md',
            '/essentials/storage.md',
            '/essentials/sync.md',
            '/essentials/backup.md',
            ],
        },
        {
            title: 'Markdown',
            path: '/markdown/',
        },
        ],
  },
};
