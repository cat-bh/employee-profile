const roleSpecifiData = employee => {
    if (employee.getRole() === 'Manager') {
        return `Office Number: ${employee.officeNumber}`;
    } else if (employee.getRole() === 'Engineer') {
        return `GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`
    } else if (employee.getRole() === 'Intern') {
        return `School: ${employee.getSchool()}`;
    }
}

const createEmployeeCard = array => {
    let cardsHTML = "";
    array.forEach(employee => {
        const html = `
        <div class="card m-2" style="width: 18rem;">
                <div class="teal p-2">
                        <h5 class="card-title">${employee.getName()}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                </div>
                <div class="card-body text-secondary">
                    <ul class="list-group">
                        <li class="list-group-item">Id: ${employee.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                        <li class="list-group-item">${roleSpecifiData(employee)}</li>
                    </ul>
                </div>
            </div>
        `
        cardsHTML = cardsHTML.concat(html);
    })

    return cardsHTML;
}

const htmlCreate = (employeeInfo) => {
    return `
    
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <header class="bg-warning p-1 text-center">
        <h1>My Team</h1>
    </header>

    <div class="container d-flex justify-content-center">
        <div class="mx-5 d-flex justify-content-center flex-wrap">

            ${createEmployeeCard(employeeInfo)}
            
        </div>
    </div>
</body>

</html>
    `
}


module.exports = htmlCreate;