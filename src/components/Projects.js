import applyImg from '../images/apply.JPG'
import javascriptQuizImg from '../images/javascript-quiz.JPG'
import weatherAppImg from '../images/weather-app.JPG'
import burgerImg from '../images/burger.JPG'
import rockRoamImg from '../images/screenshot-2.JPG'
import viewRolesImg from '../images/view-roles.jpg'

const Projects = [
    {
        name: "To apply or not to apply",
        deployUrl: "https://rocky-refuge-43458.herokuapp.com/",
        repositoryUrl: "https://github.com/n1flight/To_appy_or_not_to_apply",
        image: applyImg,
        description: "A group project for Northwestern Coding Bootcamp. To Apply or Not to Apply is an online application for keeping track of your job hunt."
    },
    {
        name: "Javascript quiz",
        deployUrl: "https://jdcar.github.io/04-Web-APIs-Code-Quiz/",
        repositoryUrl: "https://github.com/jdcar/04-Web-APIs-Code-Quiz",
        image: javascriptQuizImg,
        description: "An online five question Javascript quiz" 
    },
    {
        name: "Weather app",
        deployUrl: "https://github.com/jdcar/06-Server-Side-APIs",
        repositoryUrl: "https://jdcar.github.io/06-Server-Side-APIs/",
        image: weatherAppImg,
        description: "The weather app uses the OpenWeather API for up-to-date weather information. The program utilizes local storage and Bootstrap."
    },
    {
        name: "Burger Logger",
        deployUrl: "https://infinite-ocean-95667.herokuapp.com/",
        repositoryUrl: "https://github.com/jdcar/burger-logger",
        image: burgerImg,
        description: "An online app to keep track of burgers. Includes create, update, delete MySql queries."
    },
    {
        name: "Rock & Roam",
        deployUrl: "https://glynismullankwok.github.io/musiclocations/",
        repositoryUrl: "https://github.com/glynismullankwok/musiclocations",
        image: rockRoamImg,
        description: "Rock and Roam uses MusixMatch and other APIs to show songs about locations"
    },
    {
        name: "Employee Tracker",
        deployUrl: null,
        repositoryUrl: "https://github.com/jdcar/employee-tracker",
        image: viewRolesImg,
        description: "A command line program to keep track of employees using MySql"
    }


]

export default Projects
