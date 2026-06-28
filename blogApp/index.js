import express from 'express';

const app = express();
const port = 3001;
let posts = []

function fetchData(id) {
    const singlePost = posts?.find((item) => item?.id === parseInt(id))
    return singlePost;
}
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('index.ejs', { postsData: posts, path: '/' });
})
app.get('/newpost', (req, res) => {
    res.render('newpost.ejs', { currentData: null, path: '/newpost', edit: false });
})
app.get('/view-post/:id', (req, res) => {
    const singlePost = fetchData(req.params.id)
    res.render('viewpost.ejs', { singlePost, path: '/view-post' })
})
app.post('/save-blog', (req, res) => {
    const data = req.body;
    posts.push({
        id: posts.length + 1,
        title: data?.title,
        author: data.author,
        content: data?.content,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        readTime: Math.ceil(req.body.content.split(' ').length / 200)
    })
    res.redirect('/')
})

app.get('/edit-post/:id', (req, res) => {
    const currentData = fetchData(req.params.id);
    res.render('newpost.ejs', { currentData, path: '/edit-post', edit: true })
})
app.post('/update-post/:id', (req, res) => {
    const id = parseInt(req.params.id);
    posts = posts.map((item) => {
        if (item?.id === id) {
            return {
                ...item,
                title: req.body.title,
                author: req.body.author,
                content: req.body.content,
                readTime: Math.ceil(req.body.content.split(' ').length / 200)
            }
        }
        return item;
    })
})

app.post('/delete-post/:id', (req, res) => {
    posts = posts.filter((item) => item.id !== parseInt(req.params.id));
    res.redirect('/')
})

app.get('/not-found', (req, res) => {
    res.redirect('not-found.ejs');
})

app.use((req, res) => {
    res.status(404).render('404.ejs', { path: '' });
})

app.listen(port, () => {
    console.log('...Runing')
})