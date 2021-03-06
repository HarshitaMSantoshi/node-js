const data = require('../my-data')

module.exports.index = function(req,res) {
    console.log(req.session)
    res.render('index', {
        title:'My Portfolio',
        hasNavHome : true
    })
}


module.exports.project = function(req, res) {

    res.render('projects', {
        layout:'layout',
        title:'Projects',
        projects: data.myProjects,
        hasNavProject : true
    })
}

module.exports.projectDetail = function(req,res) {

    let alias = req.params.alias;
    let index = data.projectIndex[alias];
    let project = data.myProjects[index];
    res.render('project-detail', {
        title : 'Project',
        projectDetail: project
    })   
}


module.exports.signin = (req,res) => {
    res.render('signin', {
        layout:'signin-layout',
        title:'SignIn'
    })
}

let users = [
    {name:'harshita',email:'test@test.com', password:'test'},
    {name:'harshita',email:'harshita@test.com', password:'test'}
]

module.exports.doSignin = (req,res, next) => {
    let bodyData = req.body;

    console.log(bodyData)
    let usr = users.filter(e => e.email === bodyData.email)[0];

    console.log(usr)
    if(usr.password === bodyData.password) {

        req.session.user = usr;
        req.session.isLoggedIn = true;

        console.log(req.session)
        res.redirect('/admin')
    }else {
        next(new Error('Password is wrong'))
    }
}

module.exports.admin = (req,res) => {
    res.render('admin/index', {
        title: 'Admin',
        layout:'admin-layout'
    })
}


module.exports.signout = (req,res) => {
    req.session.isLoggedIn = false;
    req.session.user = {};

    res.redirect('/'); 
}

module.exports.adminProjects = (req,res) => {
    res.render('admin/projects', {
        title: 'Project List',
        layout:'admin-layout',
        projects: data.myProjects
    })
}
