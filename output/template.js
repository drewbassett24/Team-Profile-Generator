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
                            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                            <li class="list-group-item">GitHub: <a href="${engineer.getGitHub()}" target="blank" rel="blank"></a>${engineer.getEmail()}</li>
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
                            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                            <li class="list-group-item">School: <a href="${intern.getSchool()}"</li>
                        </ul>
                    </div>
                </div>
            `;
    };

    const page = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateManager(intern))
        .join("")
        
    );

    return html.join("");


//export this function to generate the page
module.exports = team => {
    
}




}

    //Generate output page





