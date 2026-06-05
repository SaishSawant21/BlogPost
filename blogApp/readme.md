# BlogPost

A simple blog web application built with Node.js, Express.js, and EJS. Users can create, view, edit, and delete blog posts. Posts are stored in memory and do not persist between server sessions.

## Features

- View all blog posts on the home page
- Read individual blog posts
- Create new blog posts
- Edit existing blog posts
- Delete blog posts
- Responsive design using Bootstrap 5
- Editorial warm design with custom styling

## Tech Stack

- **Backend:** Node.js, Express.js
- **Templating:** EJS
- **Styling:** Bootstrap 5, Custom CSS
- **Fonts:** Playfair Display, DM Sans (Google Fonts)

## Project Structure

```
project/
├── public/
│   └── style.css
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   ├── newpost.ejs
│   └── viewpost.ejs
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   ```

2. Navigate to the project directory
   ```bash
   cd blogpost
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the server
   ```bash
   node index.js
   ```

5. Open your browser and visit
   ```
   http://localhost:3001
   ```


## Notes

- Posts are stored in memory and will reset when the server is restarted
- No database is used in this version of the application