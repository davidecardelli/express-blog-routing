// ! importo il 'db'
const posts = require("../db/posts.js");

// ! index
const index = (req, res) => {
    res.format({
        html: () => {
            const htmlPosts = [
                "<h1>I miei post</h1>",
                "<ul>",
                ...posts.map(
                    (post) => `<li>
              <h3>${post.title}</h3>
              <img src="/img/posts/${post.image}" alt="${post.title}" style="max-width: 100px" />
              <ul>
                <li>${post.content}</li>
                <li>
                  <ol>${post.tags.map((tag) => `<li>${tag}</li>`).join("")}</ol>
                </li>
              </ul>
            </li>`
                ),
                "</ul>",
            ];

            res.type("html").send(htmlPosts.join(""));
        },
        json: () => {
            res.type("json").send({ posts });
        },
    });
};

module.exports = { index };