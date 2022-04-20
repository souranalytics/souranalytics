import axios from 'axios'

type GitHubProfile = {
  id: number
  username: string
  name: string
  avatar: string
}

class GitHub {
  async fetchAccessToken(code: string): Promise<string> {
    const {
      data: { access_token }
    } = await axios.request({
      data: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code
      },
      headers: {
        accept: 'application/json'
      },
      method: 'post',
      url: 'https://github.com/login/oauth/access_token'
    })

    return access_token
  }

  async fetchProfile(token: string): Promise<GitHubProfile> {
    const {
      data: { avatar_url, id, login, name }
    } = await axios.request({
      headers: {
        authorization: `Bearer ${token}`
      },
      method: 'get',
      url: 'https://api.github.com/user'
    })

    return {
      avatar: avatar_url,
      id,
      name,
      username: login
    }
  }

  async fetchEmail(token: string): Promise<string> {
    const { data } = await axios.request({
      headers: {
        authorization: `Bearer ${token}`
      },
      method: 'get',
      url: 'https://api.github.com/user/emails'
    })

    const { email } = data.find(({ primary, verified }) => primary && verified)

    return email
  }
}

export const github = new GitHub()
