function mowYard(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} mowed the yard.`);
      resolve(name);
    }, 2000);
  });
}

function weedEat(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tired = Math.random() < 0.2;
      if (tired) return reject(`${name} fell asleep after mowing the yard.`);
      console.log(`${name} finished using the weed eater.`);
      resolve(name);
    }, 1500);
  });
}

function trimHedges(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tired = Math.random() < 0.2;
      if (tired) return reject(`${name} fell asleep after weed eating the yard.`);
      console.log(`${name} finished trimming the hedges.`);
      resolve(name);
    }, 1000);
  });
}

function collectWood(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tired = Math.random() < 0.2;
      if (tired) return reject(`${name} fell asleep after trimming the hedges.`);
      console.log(`${name} finished collecting wood.`);
      resolve(name);
    }, 2500);
  });
}

function waterGarden(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tired = Math.random() < 0.2;
      if (tired) return reject(`${name} fell asleep after collecting wood.`);
      console.log(`${name} finished watering the garden.`);
      resolve(name);
    }, 500);
  });
}

async function doSummerChores(name) {
  try {
    await mowYard(name);
    await weedEat(name);
    await trimHedges(name);
    await collectWood(name);
    await waterGarden(name);
    console.log(`${name} finished all their chores!`);
  } catch (error) {
    console.log(error);
  }
}

doSummerChores("Shade");
