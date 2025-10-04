# github-api
A simple web application to search and display **GitHub user information** using the GitHub API. Built with **HTML, CSS, JavaScript** (or React if you used it).

## 🚀 Features

* Search GitHub users by username.
* Display user details:

  * Avatar
  * Name & Bio
  * Followers & Following
  * Public Repositories
  * Company & Location
* Error handling for invalid usernames.
* Clean and responsive UI.



## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript (or React if applicable)
* **API:** [GitHub REST API](https://docs.github.com/en/rest)


## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/github-user-finder.git


Navigate to project folder:

```bash
cd github-user-finder
```

Open `index.html` in your browser (if vanilla JS)
OR
Run locally (if React):

```bash
npm install
npm start
```


## ⚠️ Important Note on API Limit

* GitHub’s free API allows only **60 requests per hour** without authentication.
* In this project, each search shows **30 users per request**, so after 2–3 searches the limit is reached and results stop showing.
* To solve this, you can use a **GitHub Personal Access Token**, which increases the limit to **5000 requests per hour**.
* ⚠️ I didn’t add my token directly in the project because it’s unsafe to share publicly.


## 💡 Future Improvements
* Display repositories with stars & forks.
* Dark/Light mode toggle.
* Compare two GitHub users.
* Export user info as PDF/CSV.
