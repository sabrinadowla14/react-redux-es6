import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const projects = [
  {
    id: "Build-an-Item-Catalog-Application",
    title: "Build-an-Item-Catalog-Application",
    watchHref: "https://github.com/sabrinadowla14/Build-an-Item-Catalog-Application",
    userId: "sabrina-dowla",
    length: "6:20",
    category: "Python"
  },
  {
    id: "react-redux-es6",
    title: "react-redux-es6",
    watchHref: "https://github.com/sabrinadowla14/react-redux-es6",
    authorId: "sabrina-dowla",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "buildPortfolioProject",
    title: "buildPortfolioProject",
    watchHref: "https://github.com/sabrinadowla14/buildPortfolioProject",
    authorId: "sabrina-dowla",
    length: "3:10",
    category: "HTML5"
  },
  {
    id: "ResumeWebsiteUsingAngular2",
    title: "ResumeWebsiteUsingAngular2",
    watchHref: "https://github.com/sabrinadowla14/ResumeWebsiteUsingAngular2",
    authorId: "sabrina-dowla",
    length: "2:52",
    category: "Angular2"
  },
  {
    id: "Final_Database_Tournament",
    title: "Final_Database_Tournament",
    watchHref: "https://github.com/sabrinadowla14/Final_Database_Tournament",
    authorId: "sabrina-dowla",
    length: "2:30",
    category: "PostgreSQL"
  },
  {
    id: "Multi_User_Blog",
    title: "Multi_User_Blog",
    watchHref: "https://github.com/sabrinadowla14/Multi_User_Blog",
    authorId: "sabrina-dowla",
    length: "5:10",
    category: " Jinja"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (project) => {
  return replaceAll(project.title, ' ', '-');
};

class ProjectApi {
  static getAllProjects() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], projects));
      }, delay);
    });
  }

  static saveProject(project) {
    project = Object.assign({}, project); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minProjectTitleLength = 1;
        if (project.title.length < minProjectTitleLength) {
          reject(`Title must be at least ${minProjectTitleLength} characters.`);
        }

        if (project.id) {
          const existingProjectIndex = projects.findIndex(a => a.id == project.id);
          projects.splice(existingProjectIndex, 1, project);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          project.id = generateId(project);
          project.watchHref = `https://github.com/sabrinadowla14
          length: "2:30",
/${project.id}`;
          projects.push(project);
        }

        resolve(project);
      }, delay);
    });
  }

  static deleteProject(projectId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfProjectToDelete = projects.findIndex(project => {
          return project.projectId == projectId;
        });
        projects.splice(indexOfProjectToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ProjectApi;
