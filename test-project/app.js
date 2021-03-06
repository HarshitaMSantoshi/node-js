const express = require('express');
const hbs = require('hbs');
const session = require('express-session');
const routes = require('./routes/index')
const errorHandlers = require('./middelwares/error-handlers');
const appMiddleware = require('./middelwares/app-middleware');

const app = express();

app.set('views', __dirname+'/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials')

//  middlewares

app.use(session({
    secret:'myappsecret',
    saveUninitialized: false,
    resave: false,
    cookie: {maxAge: 60000}
}))

app.use(express.static(__dirname+'/static'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(appMiddleware.authenticated);
app.use(appMiddleware.logger);

app.get('/', routes.index);
app.get('/projects', routes.project);

app.get('/signin', routes.signin);
app.post('/signin', routes.doSignin);
app.get('/signout', routes.signout);

app.get('/admin', appMiddleware.authenticate, routes.admin);
app.get('/admin/projects', appMiddleware.authenticate, routes.adminProjects)


app.get('/projects/:alias', routes.projectDetail);

app.use(errorHandlers.notFound);


app.use(errorHandlers.handleError);

app.listen(3000, () => console.log('Server up n running on port 3000'))

{
    name:'Micheal',
    hobbies: ['Dancer', 'Singer', 'Painter'],
    born:1928,
    password:'Hello'
}

{
    name:'Arijit',
    hobbies: [ 'Singer', 'Painter'],
    born:1930,
    password:'Hello'
}