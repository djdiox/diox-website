import {ToolType} from './tool-type';
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
      frameworks: [],
      tools: [
        {
          name: 'Angular.JS',
          website: 'https://angularjs.org/',
          type: ToolType.framework,
          description: 'The old version of the famous MVVM Framework'
        },
        {
          name: 'Angular 2+',
          website: 'https://angular.io/',
          type: ToolType.framework,
          description: 'Newer version of the angular framework'
        },
        {
          name: 'Node.JS',
          website: 'https://nodejs.org/en/',
          type: ToolType.framework,
          description: 'Swiss army tool for developers'
        },
        {
          name: 'Laravel',
          website: 'https://laravel.com/',
          type: ToolType.framework,
          description: 'Best PHP framework'
        },
        {
          name: 'NativeScript',
          website: 'https://www.nativescript.org/',
          type: ToolType.framework,
          description: 'Run Angular / vue.js on mobile devices'
        },
        {
          name: 'Unity',
          website: 'https://unity3d.com/de',
          type: ToolType.framework,
          description: 'Gaming framework'
        },
        {
          name: 'GraphQL',
          website: 'https://graphql.org/learn/',
          type: ToolType.development,
          description: 'Query language for backend'
        },
        {
          name: 'Firebase',
          website: 'https://firebase.google.com/',
          type: ToolType.database,
          description: 'Reactive database by google'
        },
        {
          name: 'webpack',
          website: 'https://webpack.js.org/',
          type: ToolType.development,
          description: 'process javascript for web'
        },
        {
          name: 'yarn',
          website: 'http://yarn.org/',
          type: ToolType.development,
          description: 'alternative package manager for node.js'
        },
        {
          name: 'GitLab',
          website: 'https://about.gitlab.com/',
          type: ToolType.development,
          description: 'Git repository provider with CI/CD etc.'
        },
        {
          name: 'GitHub',
          website: 'https://github.com/',
          type: ToolType.development,
          description: 'Git repository provider'
        },
        {
          name: 'Docker',
          website: 'https://www.docker.com/',
          type: ToolType.development,
          description: 'VM for simple deployment etc.'
        },
        {
          name: 'Webstorm',
          website: 'https://www.jetbrains.com/webstorm/',
          type: ToolType.IDE,
          description: 'Jetbrains Web IDE'
        },
        {
          name: 'VS Code',
          website: 'https://code.visualstudio.com/',
          type: ToolType.IDE,
          description: 'Lightweight IDE for many languages'
        },
        {
          name: 'Visual Studio',
          website: 'https://visualstudio.microsoft.com/de/',
          type: ToolType.IDE,
          description: 'Windows development environment'
        },
        {
          name: 'Jira',
          website: 'https://www.atlassian.com/software/jira',
          type: ToolType.management,
          description: 'Advanced SCRUM / Kan Ban etc. Webapp'
        },
        {
          name: 'Trello',
          website: 'https://trello.com/',
          type: ToolType.management,
          description: 'Process Management Webapp'
        },
        {
          name: 'MacOSX',
          website: 'https://www.apple.com/lae/macos/high-sierra/',
          type: ToolType.OS,
          description: 'Beautiful running OS'
        },
        {
          name: 'Windows',
          website: 'https://www.microsoft.com/en-us/windows',
          type: ToolType.OS,
          description: 'Microsoft all-time classic'
        },
        {
          name: 'Ubuntu',
          website: 'https://www.ubuntu.com/',
          type: ToolType.OS,
          description: '(Or other Linux distributions) for servers'
        },
        {
          name: 'Office',
          website: 'https://www.office.com/',
          type: ToolType.office,
          description: 'Office 365 for good office experience'
        }
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
        'Agile development',
        'SCRUM',
        'Kan Ban',
        'Waterfall',
      ]
    }
  }
};
