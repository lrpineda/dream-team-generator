const Employee = require("../lib/Employee");

// Creating a function to generate the HTML for the Manager
const manager = managerInfo => {
    return `
                <div class="column is-3">
                    <div class="box has-background-info has-text-centered mb-0">
                        <h1 class="title is-3 has-text-white">${managerInfo.name}</h1>
                        <p class="subtitle is-5 has-text-white"><i class="fa-solid fa-mug-hot"></i>  Manager</p>
                    </div>
                    <div class="box">
                        <p>ID: ${managerInfo.id}</p>
                        <p>Email: <a href="mailto:${managerInfo.email}">${managerInfo.email}</a></p>
                        <p>Office number: ${managerInfo.officeNumber}</p>
                    </div>
                </div>
    `;
};

// Create a function to generate the HTML for the Intern
const intern = internInfo => {
    return `
                <div class="column is-3">
                    <div class="box has-background-info has-text-centered mb-0">
                        <h1 class="title is-3 has-text-white">${internInfo.name}</h1>
                        <p class="subtitle is-5 has-text-white"><i class="fa-solid fa-user-graduate"></i>  Intern</p>
                    </div>
                    <div class="box">
                        <p>ID: ${internInfo.id}</p>
                        <p>Email: <a href="mailto:${internInfo.email}">${internInfo.email}</a></p>
                        <p>School: ${internInfo.school}</p>
                    </div>
                </div>
    `;
};

// 
const engineer = engineerInfo => {
    return `
                <div class="column is-3">
                    <div class="box has-background-info has-text-centered mb-0">
                        <h1 class="title is-3 has-text-white">${engineerInfo.name}</h1>
                        <p class="subtitle is-5 has-text-white"><i class="fa-solid fa-user-cog"></i>  Engineer</p>
                    </div>
                    <div class="box">
                        <p>ID: ${engineerInfo.id}</p>
                        <p>Email: <a href="mailto:${engineerInfo.email}">${engineerInfo.email}</a></p>
                        <p>GitHub: <a href="https://github.com/${engineerInfo.github}">${engineerInfo.github}</a></p>
                    </div>
                </div>
    `;
};

module.exports = employees => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"/>
    <script src="https://kit.fontawesome.com/f1e2e0e591.js" crossorigin="anonymous"></script>
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
        <section class="hero is-danger">
            <div class="hero-body has-text-centered">
                <h1 class="title text">My Team</h1>
            </div>
        </section>
    </header>
    <main>
        <div class="section is-medium">
            <div class="columns is-multiline is-justify-content-center">
                ${employees.map(employee => {
                    if (employee.getRole() === "Manager") {
                        return manager(employee);
                    }else if (employee.getRole() === "Intern") {
                        return intern(employee);
                    }
                    return engineer(employee);
                    }).join("")}
            </div>
        </div>
    </main>
</body>
</html>
    `;
};