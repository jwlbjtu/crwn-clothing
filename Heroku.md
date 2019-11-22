## _Heroku_
> Steps to deploy the application to Heroku   

* Create account on [Heroku](https://www.heroku.com)
* Download and install [Heroku-Client](https://devcenter.heroku.com/articles/heroku-cli)

Commands to run to deploy the application by using *Heroku-Client*
```text
$ heroku login //login to Heroku

$ heroku logout //logout of Heroku
```
```text
$ heroku create <project_name> --buildpack https://github.com/mars/create-react-app-buildpack.git

$ git push heroku master
```

Application URL [https://jwl-clothing.herokuapp.com/](https://jwl-clothing.herokuapp.com/)