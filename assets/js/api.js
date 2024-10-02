
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Drenilson/js-developer-portfolio/refs/heads/main/data/myprofile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
