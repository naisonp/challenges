module.exports = {
  classMonster(className) {
    switch (className) {
      case "Gold":
        return 'S';
      case "Dragon":
        return 'A';
      case "Tiger":
        return 'B';
      case "Wolf":
        return 'C';
    }
  },
};
