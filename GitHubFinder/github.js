class GitHub {
  constructor() {
    this.client_id = '1f771206b9593f55b615';
    this.client_secret = '8486220ed14d3f81b687fb40046cde6ac1545640';
    this.repos_count = 5;
    this.repos_sort = 'created';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    console.log(repoResponse);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json()

    return {
      profile,
      repos
    }
  }
}

