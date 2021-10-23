const LinksSocialMedia = {
  github: 'luizabchagas',
  facebook: 'luiza.chagas.37',
  instagram: 'luizabchagas',
  twitter: 'luizabchagas'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

/*function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[(0,1,2)].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}*/

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
