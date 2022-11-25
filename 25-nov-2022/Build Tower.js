function towerBuilder(nFloors) {
  // build here
  let floorsAcheaved = 1;
  let previousFloor = floorsAcheaved - 1;
  let spaces = nFloors - 1;
  const building = [];
  const floorsArchitecture = "*";

  while (floorsAcheaved <= nFloors) {
    building.push(
      " ".repeat(spaces) +
        floorsArchitecture.repeat(floorsAcheaved + previousFloor) +
        " ".repeat(spaces)
    );
    floorsAcheaved++;
    spaces--;
    previousFloor = floorsAcheaved - 1;
  }

  return building;
}
