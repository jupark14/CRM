const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res)=> {
    res.send([
        {
            'id': '111111',
            'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhBasAtPgN_RDTZ56mA8a2HBAqum7KXg6KeQ&usqp=CAU',
            'name': '박지우',
            'department': 'Digital Innovation Lab',
            'rank': 'Manager'
          },
          {
            'id': '222222',
            'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhBasAtPgN_RDTZ56mA8a2HBAqum7KXg6KeQ&usqp=CAU',
            'name': '김민석',
            'department': 'Digital Innovation Lab',
            'rank': 'Manager'
          },
          {
            'id': '333333',
            'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhBasAtPgN_RDTZ56mA8a2HBAqum7KXg6KeQ&usqp=CAU',
            'name': '윤새하',
            'department': 'Digital Innovation Lab',
            'rank': 'Manager'
          }
    ])

});

app.listen(port, () => console.log(`Listening on port ${port}`));