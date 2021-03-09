//generate team
const genTeam = team => {

    //generate Manager html
    const genManager = manager => {
        return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title"><i class="fa fa-thumbs-up" aria-hidden="true">${manager.getRole()}</i> Manager</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item"> Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    //generate engineer html
    const genEngineer = engineer => {
        return `
        <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${engineer.getName()}/h2>
                        <h3 class="card-title"><i class="fa fa-rocket" aria-hidden="true">${engineer.getRole()}</i> Engineer</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.getId()}</li>
                            <li class="list-group-item">Email: 
                            <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                            <li class="list-group-item">GitHub: 
                            <a href="${engineer.getGitHub()}" target="blank" rel="blank"></a>${engineer.getGitHub()}</li>
                        </ul>
                    </div>
                </div>
            `;
    };


    //generate Intern html
    const genIntern = intern => {
        return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${intern.getName()}/h2>
                <h3 class="card-title"><i class="fa fa-rocket" aria-hidden="true">${intern.getRole()}</i> Engineer</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: 
                    <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: 
                    <a href="${intern.getSchool()}"</li>
                </ul>
            </div>
        </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => genManager(manager))

    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => genEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => genIntern(intern))
        .join("")

    );

    return html.join("");

}


//export this function to generate the page
module.exports = team => {

    return `
<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="Width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>TEAM ROSTER</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
             integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-2 team-heading">
                    <h1 style="font-size:80px;" class="text-center">TEAM ROSTER</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${genTeam(team)}
                    </div>
                </div>
            </div>
        </body>

        </html>
    `;

};











