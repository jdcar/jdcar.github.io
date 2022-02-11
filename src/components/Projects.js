import applyImg from '../images/apply.JPG'
import javascriptQuizImg from '../images/javascript-quiz.JPG'
import weatherAppImg from '../images/weather-app.JPG'
import burgerImg from '../images/burger.JPG'
import rockRoamImg from '../images/screenshot-2.JPG'
import viewRolesImg from '../images/view-roles.jpg'

const Projects = [
    {
        name: "Call Number Update",
        deployUrl: "",
        language: "javascript",
        repositoryUrl: "https://github.com/jdcar/alma-call-number-update",
        // image: applyImg,
        description: "Approximately 650 call numbers in our Alma holdings records needed their classification number changed. This program uses the Alma Retrieve Holdings Record and Update Holdings Record APIs to batched update from a csv file.",
        id: 1
    },
    {
        name: "Generate Normalization Rule",
        deployUrl: "",
        language: "javascript",
        repositoryUrl: "https://github.com/jdcar/generate-normalization-rule",
        // image: applyImg,
        description: "This is a command line application I use to generate Alma normalization rules. The rules can be used and reused to update subject headings in the bibliographic record.",
        id: 2
    },
    {
        name: "MARC Language Guesser",
        deployUrl: "",
        language: "python",
        repositoryUrl: "https://github.com/jdcar/marc-language-guesser",
        // image: applyImg,
        description: "Our catalog had a collection of records that were missing information about the language of the work. This program uses guess_language-spirit to guess the language based on the catalog record and uses it to build a new 008 field.",
        id: 3
    },
    {
        name: "MARC Delimiter Fixer Tool",
        deployUrl: "https://jdcar.github.io/delimiter-fix/",
        language: "javascript",
        repositoryUrl: "https://github.com/jdcar/delimiter-fix",
        // image: applyImg,
        description: "There is a lack of standardization for how the subfield delimiters in the MARC record appears between systems. Catalogers are often having to copy and paste MARC fields only to have to replace the subfield delimiter as well. This is a webform that takes a form of the MARC field and converts it to each delimiter type out there for easy copying. ",
        id: 4
    },


]

export default Projects
