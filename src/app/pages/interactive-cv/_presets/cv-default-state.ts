/**
 * Created by markuswagner on 29.07.18.
 */
// TODO: Refactor for Page Class
export const DEFAULT_STATE = {
  view: 'start',
  index: 0,
  progress: 0,
  breadcrumbs: ['start'],
  data: {
    views: [
      'start',
      'school',
      'experience',
      'technology',
      'programming',
      'goals',
      'end'
    ],
    schools: [
      {
        name: 'Silcherschule Kornwestheim',
        type: 'elementary school',
        duration: '2000 - 2006',
        tooltip: 'first start into educational world'
      },
      {
        name: 'Realschule Remseck',
        type: 'middle school',
        duration: '2006 - 2012',
        tooltip: 'basic skills and mostly soft skills'
      },
      {
        name: 'ITS-Schule Stuttgart',
        type: 'apprenticeship school',
        duration: '2012 - 2015',
        tooltip: 'software and business skills'
      }
    ],
    experiences: [
      {
        position: 'right',
        startDate: '2012-09',
        endDate: '2015-07',
        headline: 'k+k information services GmbH',
        content: 'Quality management software'
      },
      {
        position: 'left',
        startDate: '2015-07',
        endDate: '2015-11',
        headline: 'Mediverbund AG',
        content: 'Software for doctors'
      },
      {
        position: 'right',
        startDate: '2015-11',
        endDate: '2016-05',
        headline: 'Fritz & Dietrich GbR',
        content: 'Agency for fairs & mobile software'
      },
      {
        position: 'left',
        startDate: '2016-05',
        endDate: `${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)} (today)`,
        headline: 'netvico GmbH',
        content: 'Digital signage & management software'
      },
    ],
    technology: {
      tools: [
        'Angular.JS',
        'Angular 2+',
        'Firebase',
        'Node.JS',
        'GraphQL',
        'webpack',
        'NativeScript',
        'yarn',
        'MongoDB',
        'MySQL',
        'PostgresSQL',
        'GitLab',
        'Docker',
        'Ubuntu',
        'Webstorm',
        'VS Code',
        'Jira',
        'Trello',
        'MacOSX',
        'Windows',
        'Visual Studio',
        'Unity',
        'Office'
      ]
    },
    programming: {
      languages: [
        'C#',
        'JavaScript (ES6)',
        'Typescript',
        'HTML5',
        'CSS 3.0',
        'SCSS',
        'PWA',
        'PHP',
        'bash',
        'SQL',
        'NoSQL',
        'Visual Basic',
        'VBA',
      ],
      technics: [
        'Agile Development',
        'SCRUM',
        'Kan Ban',
        'Waterfall',
      ]
    }
  }
};
