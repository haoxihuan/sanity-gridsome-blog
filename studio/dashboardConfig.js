export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6263c84d24f6120e2a98a328',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-dc817wu1',
                  apiId: '25dc29b3-67d7-4bd1-9b4b-f0bdb1ec9f73'
                },
                {
                  buildHookId: '6263c84d7fb737100390aae6',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-8rd9jruq',
                  apiId: '6e736240-43c7-4e13-a649-1f9026e089f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/haoxihuan/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-8rd9jruq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
