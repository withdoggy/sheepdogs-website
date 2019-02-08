const data = [
  {
    id: 1,
    title: 'Trening wiosenny',
    schedule: [
      {
        allDay: true,
        start: new Date(2019, 2, 2),
        end: new Date(2019, 2, 2),
        location: 'Stare Chrapowo',
      },
      {
        allDay: true,
        start: new Date(2019, 2, 3),
        end: new Date(2019, 2, 3),
        location: 'Stare Chrapowo',
      },
    ],
  },
  {
    id: 2,
    title: 'Haczrange',
    schedule: [
      {
        allDay: false,
        start: new Date(2019, 2, 22, 9, 0),
        end: new Date(2019, 2, 22, 15, 0),
        location: 'Pyskowice',
      },
    ],
  },
  {
    id: 3,
    title: 'Kotla tour',
    schedule: [
      {
        allDay: true,
        start: new Date(2019, 2, 6),
        end: new Date(2019, 2, 6),
        location: 'Ksiegielnice',
      },
      {
        allDay: true,
        start: new Date(2019, 2, 7),
        end: new Date(2019, 2, 7),
        location: 'Kotla',
      },
    ],
  },
];

export function fetchEvents() {
  const delay = (func, time) =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve(func());
      }, time),
    );
  return delay(() => {
    let events = [];
    let c = 0;
    data.forEach(function(r) {
      return r.schedule.forEach(function(s) {
        c++;
        events.push({
          id: c,
          title: r.title,
          start: s.start,
          end: s.end,
          allDay: s.allDay,
          url: data.id,
          location: s.location,
        });
      });
    });

    return events;
  }, 1000);
}
