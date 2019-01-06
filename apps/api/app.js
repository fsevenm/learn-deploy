const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: '*',
}));

app.get('/api/events', (request, response) => {
  const events = [
    { id: 'event-1', title: 'ReactJS Intro', date: '2018-12-12' },
    { id: 'event-2', title: 'Functional Programming', date: '2018-12-11' },
  ];

  response.json({
    events,
  });
});

module.exports = app;