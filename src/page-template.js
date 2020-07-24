const buildCard = (employeeObj) => {
  const { role, name, id, email, wildcard } = employeeObj;
  return `
    <div class="card m-4">
    <div class="card-header bg-primary text-white">
      <h5 class="card-title name">${name}</h5>
      <h6 class="card-subtitle mb-2 role">${role}</h6>
    </div>
    <div class="card-body py-5 bg-light">
      <ul class="list-group list-group-flush">
        <li class="list-group-item id">ID: ${id}</li>
        <li class="list-group-item email">Email: <a href="mailto:jared@fakemail.com">${email}</a></li>
        <li class="list-group-item wildcard">${wildcard}</li>
      </ul>
    </div>
  </div>
  `
}


module.exports = employeeData => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
      <link rel="stylesheet" href="./proto-style.css">
      <title>Team Profile</title>
    </head>
    <body>
      <header class="bg-danger text-white py-4 text-center">
        <h2>My Team</h2>
      </header>
      <main class="d-flex flex-wrap p-5 justify-content-center">
        ${employeeData.map(employeeObj => buildCard(employeeObj))}
      </main>
    
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </body>
    </html>
  `
}