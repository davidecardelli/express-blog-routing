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
                        <a href="/posts/${post.slug}" style="max-width: 100px">
                            <img src="/img/posts/${post.image}" alt="${post.title}" style="max-width: 100px" />
                        </a>
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

// ! show
const show = (req, res) => {
    const post = findOrFail(req, res);
    res.format({
        html: () => {
            const htmlPost = `<h1>${post.title}</h1>
            <img src="/img/posts/${post.image}" alt="${post.title}" style="max-width: 100%" />
            <p>${post.content}</p>
            <ul>${post.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>`;

            res.type("html").send(htmlPost);
        },
        json: () => {
            res.type("json").send({ post });
        },
    });
};

// ! create
const create = (req, res) => {
    res.format({
        html: () => {
        },
        json: () => {
        },
    });
};

// ! download
const download = (req, res) => {
    res.format({
        html: () => {
        },
        json: () => {
        },
    });
};

// ? Utils
function findOrFail(req, res) {
    const slug = req.params.slug;
    const post = posts.find((post) => post.slug == slug);
    if (!post) {
        res.status(404).send(`Errore 404. Post con slug ${slug} non trovato`);
        return;
    }
    return post;
}

module.exports = { index, show, create, download };