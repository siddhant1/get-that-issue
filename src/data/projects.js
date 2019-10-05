const projects = [
  {
    search: "node",
    name: "Node.js",
    q: 'org:nodejs is:issue is:open label:"good first issue"'
  },
  {
    search: "electron",
    name: "Electron",
    q:
      'org:electron is:issue is:open sort:updated-desc label:"good first issue"'
  },
  {
    search: "vscode",
    name: "VS Code",
    q: 'repo:microsoft/vscode state:open label:"good first issue"'
  },
  {
    search: "gutenberg",
    name: "Gutenberg",
    q:
      ' repo:WordPress/gutenberg is:issue is:open sort:updated-desc label:"good first issue"'
  },
  {
    search: "wolkenkit",
    name: "wolkenkit",
    q:
      'repo:thenativeweb/wolkenkit is:issue is:open sort:updated-desc label:"Good first issue"'
  },
  {
    search: "typescript",
    name: "TypeScript",
    q: 'repo:microsoft/typescript is:issue is:open label:"good first issue"'
  },
  {
    search: "strapi",
    name: "Strapi",
    q: 'repo:strapi/strapi is:issue is:open label:"Good for new contributors"'
  },
  {
    search: "create-react-app",
    name: "Create React App",
    q:
      'repo:facebook/create-react-app is:issue is:open label:"good first issue"'
  },
  {
    search: "debugger.html",
    name: "debugger.html",
    q:
      'repo:devtools-html/debugger.html is:issue is:open label:"good first issue"'
  },
  {
    search: "webpack-cli",
    name: "webpack CLI",
    q:
      'repo:webpack/webpack-cli is:open is:issue label:"Good First Contribution"'
  },
  {
    search: "jest",
    name: "Jest",
    q: 'repo:facebook/jest is:open is:issue label:":wave: Good First Issue"'
  },
  {
    search: "bigtestjs.io",
    name: "BigTestjs.io",
    q: 'repo:bigtestjs/bigtestjs.io is:open is:issue label:"good first issue"'
  },
  {
    search: "netlify",
    name: "Netlify",
    q: 'org:netlify is:issue is:open sort:updated-desc label:"good first issue"'
  },
  {
    search: "gatsby",
    name: "Gatsby",
    q: 'org:gatsbyjs is:issue is:open label:"good first issue"'
  },
  {
    search: "easygraphql",
    name: "EasyGraphQL",
    q: 'org:easygraphql is:issue is:open label:"good first issue"'
  },
  {
    search: "apollo",
    name: "Apollo",
    q: 'org:apollographql is:issue is:open label:"good first issue"'
  },
  {
    search: "react",
    name: "React",
    q: 'repo:facebook/react is:issue is:open label:"good first issue"'
  },
  {
    search: "react-native",
    name: "React Native",
    q: 'repo:facebook/react-native is:issue is:open label:"Good first issue"'
  },
  {
    search: "babel",
    name: "Babel",
    q:
      'repo:babel/babel is:issue is:open label:"good first issue" -label:"Has PR" -label:"claimed"'
  },
  {
    search: "mocha",
    name: "Mocha",
    q: "org:mochajs is:issue is:open label:good-first-issue"
  },
  {
    search: "docz",
    name: "Docz",
    q: 'repo:doczjs/docz is:issue is:open label:"good first issue"'
  },
  {
    search: "react-navigation",
    name: "React Navigation",
    q:
      'repo:react-navigation/react-navigation is:issue is:open label:"good first issue"'
  },
  {
    search: "wemake-python-styleguide",
    name: "wemake-python-styleguide",
    q:
      'repo:wemake-services/wemake-python-styleguide is:issue is:open label:"level starter"'
  },
  {
    search: "hacktoberfest",
    name: "Hacktoberfest",
    q: 'is:issue is:open label:"hacktoberfest"'
  },
  {
    search: "I'm Feeling Lucky",
    name: "I'm Feeling Lucky 🎲",
    q: 'is:issue is:open label:"good first issue"'
  }
];
export default projects;
