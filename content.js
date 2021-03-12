const getNumber = function(max = 11, min = 0) {
  return Math.floor(Math.random() * (max - min) + min);
}

const getRGB = function(a = 1) {
  let r = getNumber(255);
  let g = getNumber(255);
  let b = getNumber(255);
  return `rgba(${r},${g},${b},${a})`;
}

let cards = [{
    name: "Morning",
    temp: -20,
    chance: 80,
    icon: './img/morning.svg',
    color: getRGB(.2)
  },

  {
    name: "Day",
    temp: -25,
    chance: 25,
    icon: './img/day.svg  ',
    color: getRGB(.2)
  },
  {
    name: "Evening",
    temp: -30,
    chance: 40,
    icon: './img/evening.svg',
    color: getRGB(.2)

  },
  {
    name: "Night",
    temp: -40,
    chance: 75,
    icon: './img/night.svg',
    color: getRGB(.2)
  }
];
