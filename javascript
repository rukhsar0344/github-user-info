async function getGitHubUser() {
    const username = document.getElementById("usernameInput").value.trim();
    if (!username) return alert("Please enter a username");
  
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      alert("User not found!");
      return;
    }
  
    const data = await response.json();
    const card = document.getElementById("userCard");
  
    card.innerHTML = `
      <img src="${data.avatar_url}" alt="Profile Picture">
      <h2>${data.name || data.login}</h2>
      <p>${data.bio || "No bio available"}</p>
      <div class="stats">
        <div class="stat">
          <strong>${data.public_repos}</strong>
          <div>Repos</div>
        </div>
        <div class="stat">
          <strong>${data.followers}</strong>
          <div>Followers</div>
        </div>
        <div class="stat">
          <strong>${data.following}</strong>
          <div>Following</div>
        </div>
      </div>
    `;
  
    card.style.display = "block";
  }
  
