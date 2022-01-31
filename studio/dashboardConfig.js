export default {
  widgets: [
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
                  buildHookId: '61f867576d6cce1ffcbabc66',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7imq3mhx',
                  apiId: 'dd143951-9671-409b-9833-be20e1421671'
                },
                {
                  buildHookId: '61f86757b08e5624a60514cd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ekr1qd53',
                  apiId: 'f710db24-eb59-4c0f-8e05-5f67f4fb2e93'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/halfsangue/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ekr1qd53.netlify.app', category: 'apps'}
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
