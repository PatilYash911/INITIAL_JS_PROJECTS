const insertId = document.querySelector('#insert')

window.addEventListener('keydown', (e) => {
    insertId.innerHTML = `
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table with 3 columns and 2 rows</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            padding: 0;
        }

        table {
            border-collapse: collapse;
            width: 40%;
            height: 10%;
            /* Adjust width as needed */
        }

        th,
        td {
            border: 1px solid black;
            padding: 12px;
            text-align: center;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>

<body>

    <div class = 'color'>
    <table>
    <thead>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Code</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${e.key == ' ' ? 'Space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>

    </tbody>
</table>
  </div>
  </body>  `
});
