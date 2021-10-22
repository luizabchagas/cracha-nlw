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

/* ARROW FUNCTIONS
É uma forma contraída da função. Criamos uma função ANÔNIMA.
Com isso, elimina-se a necessidade de dar um nome para a função e usar a palavra reservada function.
E se tiver apenas um comando na função, não precisa colocar {}, como foi no caso acima.
Então a declaração da função fica assim:
argumento => {

}
ao invés de
function nomeDaFuncao(argumentos) {

}*/
