type workLocation = "Home" | "Office";

enum fitness {
  Crossfit,
  Biking,
  Trekking,
}

enum seasons {
  summer,
  fall,
  winter,
  spring,
}

const coding = [
  "write some code",
  "debug",
  "maybe Google it",
  "keep debugging",
  "eureka!",
];

const homeActivities = [
  "watch youtube",
  "coding",
  "reading",
  "watch House Of The Dragon",
  "watch The Office",
];
const outdoorActivities = [
  "eat ice cream",
  "visit friends",
  "go to a restaurant",
  "go to the museum",
  "go to the beach",
];

const meals = {
  breakfast: "Arepita with eggs and fruit",
  lunch: "Salmon, salad and rice",
  dinner: "a bowl of cereal",
};

/** Function to pet cats and dogs */
const petting = (place: workLocation, wannaPlay: boolean = true) => {
  if (wannaPlay) {
    switch (place) {
      case "Home": {
        console.log(`Petting Milla`);
        break;
      }
      case "Office": {
        console.log(`Petting my coworker's dog`);
        break;
      }
      default: {
        console.log(`Petting any dog or cat that gets close`);
      }
    }
  } else {
    throw new Error("😢 please let me pet you please please");
  }
};

/** Funtion to activate my day with exercise! */
const workout = (time: number, training: fitness) => {
  return new Promise<void>((resolve) => {
    console.log(
      `There is time to go and ${fitness[training]} for ${time} seconds`
    );
    setTimeout(() => {
      console.log(`Done! 🥵`);
      resolve();
    }, time * 1000);
  });
};

/** Let's write some code! */
const work = () => {
  return new Promise<void>((resolve) => {
    const workTime = 2000;
    let index = 0;
    const logNext = () => {
      if (index === coding.length) {
        resolve();
        return;
      }
      console.log(coding[index]);
      index++;
      setTimeout(logNext, workTime);
    };
    logNext();
  });
};

/** It's important to be feeded */
const eat = (meal: string) => {
  console.log(`yummy, it's time for ${meal}`);
};

/** Girls just wanna have fun */
const spareTime = (season: seasons) => {
  const randomActivity = (arr: string[]) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  };
  if (season === seasons["spring"] || season === seasons["summer"]) {
    console.log(`Finally! Today I'll ${randomActivity(outdoorActivities)}`);
  } else {
    console.log(
      `Hmm it's chilling! Today I'll ${randomActivity(homeActivities)}`
    );
  }
};

/** One of my 10 favorite activities */
const sleep = () => {
  console.log(`Sorry, I also talk while sleeping`);
};

/** Just one regular weekday */
const routine = async (workPlace: workLocation, season: seasons) => {
  if (workPlace === "Home") await workout(6, fitness.Crossfit);
  else await workout(2, fitness.Biking);

  eat(meals.breakfast);
  await work();
  petting(workPlace);
  await work();
  eat(meals.lunch);
  await work();
  await work();
  petting(workPlace);
  spareTime(season);
  eat(meals.dinner);
  petting(workPlace);
  sleep();
};

routine("Home", seasons.summer);
