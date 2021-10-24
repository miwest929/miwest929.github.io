const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/miwest929/miwest929.github.io'
  },
  () => {
    console.log('Deploy Complete!')
  }
)
