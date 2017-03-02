var men = [
  "Andre",
  "Derrick",
  "Edward",
  "Hayden",
  "Jaylan",
  "Joey",
  "Michael",
  "Mike",
  "Osvaldo",
  "Ozzy",
  "Tyler"
];

var women = [
  "Alicia",
  "Carolina",
  "Casandra",
  "Gianna",
  "Hannah",
  "Kam",
  "Kari",
  "Kathryn",
  "Shannon",
  "Taylor",
  "Tyranny"
];

var matchUps = [
  [
    2,
    {
      "Alicia": "Andre",
      "Carolina": "Joey",
      "Casandra": "Jaylan",
      "Gianna": "Ozzy",
      "Hannah": "Michael",
      "Kam": "Edward",
      "Kari": "Mike",
      "Kathryn": "Derrick",
      "Shannon": "Hayden",
      "Taylor": "Tyler",
      "Tyranny": "Osvaldo"
    }
  ],
  [
    0,
    {
      "Alicia": "Derrick",
      "Carolina": "Joey",
      "Casandra": "Mike",
      "Gianna": "Michael",
      "Hannah": "Andre",
      "Kam": "Jaylan",
      "Kari": "Osvaldo",
      "Kathryn": "Ozzy",
      "Shannon": "Edward",
      "Taylor": "Hayden",
      "Tyranny": "Tyler"
    }
  ],
  [
    4,
    {
      "Alicia": "Mike",
      "Carolina": "Hayden",
      "Casandra": "Jaylan",
      "Gianna": "Ozzy",
      "Hannah": "Derrick",
      "Kam": "Edward",
      "Kari": "Andre",
      "Kathryn": "Joey",
      "Shannon": "Tyler",
      "Taylor": "Michael",
      "Tyranny": "Osvaldo"
    }
  ],
  [
    4,
    {
      "Alicia": "Edward",
      "Carolina": "Hayden",
      "Casandra": "Andre",
      "Gianna": "Derrick",
      "Hannah": "Ozzy",
      "Kam": "Mike",
      "Kari": "Michael",
      "Kathryn": "Joey",
      "Shannon": "Tyler",
      "Taylor": "Osvaldo",
      "Tyranny": "Jaylan"
    }
  ],
  [
    4,
    {
      "Alicia": "Mike",
      "Carolina": "Hayden",
      "Casandra": "Jaylan",
      "Gianna": "Osvaldo",
      "Hannah": "Ozzy",
      "Kam": "Edward",
      "Kari": "Michael",
      "Kathryn": "Joey",
      "Shannon": "Tyler",
      "Taylor": "Andre",
      "Tyranny": "Derrick"
    }
  ],
  [
    4,
    {
      "Alicia": "Mike",
      "Carolina": "Hayden",
      "Casandra": "Ozzy",
      "Gianna": "Osvaldo",
      "Hannah": "Jaylan",
      "Kam": "Edward",
      "Kari": "Michael",
      "Kathryn": "Joey",
      "Shannon": "Tyler",
      "Taylor": "Andre",
      "Tyranny": "Derrick"
    }
  ],
  [
    4,
    {
      "Alicia": "Ozzy",
      "Carolina": "Hayden",
      "Casandra": "Andre",
      "Gianna": "Mike",
      "Hannah": "Michael",
      "Kam": "Edward",
      "Kari": "Derrick",
      "Kathryn": "Joey",
      "Shannon": "Tyler",
      "Taylor": "Osvaldo",
      "Tyranny": "Jaylan"
    }
  ],
  [
    4,
    {
      "Alicia": "Ozzy",
      "Carolina": "Hayden",
      "Casandra": "Joey",
      "Gianna": "Andre",
      "Hannah": "Tyler",
      "Kam": "Edward",
      "Kari": "Mike",
      "Kathryn": "Michael",
      "Shannon": "Derrick",
      "Taylor": "Osvaldo",
      "Tyranny": "Jaylan"
    }
  ],
];

var truthBooths = [
  {
    "Hayden": {
      "Gianna": false
    }
  },
  {
    "Andre": {
      "Alicia": false
    }
  },
  {
    "Ozzy": {
      "Carolina": false
    }
  },
  {
    "Osvaldo": {
      "Tyranny": false
    }
  },
  {
    "Edward": {
      "Kam": true
    }
  },
  {
    "Ozzy": {
      "Hannah": false
    }
  },
  {
    "Andre": {
      "Taylor": false
    }
  },
  {
    "Hayden": {
      "Carolina": true
    }
  }
];
