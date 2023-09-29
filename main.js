$(document).ready(() => {
  const endpoint = "https://api.github.com/users/danieldribeiro";

  fetch(endpoint)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const userImage = json.avatar_url;
      const profileName = json.name;
      const username = json.login;
      const repositories = json.public_repos;
      const followers = json.followers;
      const following = json.following;

      $("#user-image").attr("src", userImage);
      $("#profile-name").text(profileName);
      $("#username").text(username);
      $("#repositories").text(repositories);
      $("#followers").text(followers);
      $("#following").text(following);
    })
    .catch((err) => {
        alert('Ocorreu um erro ao buscar o endereço, tente novamente mais tarde')
    })
});
