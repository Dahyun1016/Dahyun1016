const fs = require('fs');
const fetch = require('node-fetch');

async function updateReadme() {
  const stats = await fetch('https://github-readme-stats.vercel.app/api?username=Dahyun1016&hide_title=true&show_icons=true&include_all_commits=true&disable_animations=true&theme=vue')
    .then(response => response.text());

  fs.writeFileSync('README.md', `<div align="center">\n  ${stats}\n</div>\n`);
}

updateReadme();
