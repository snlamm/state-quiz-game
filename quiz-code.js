

// construct State class
function State (name, capital, trivia) {
  this.name = name;
  this.capital = capital;
  this.trivia = trivia;
}

//array of state objects
sA = new Array()
sA[0] = new State ("alabama", "montgomery", "housed the original capital of the Confederate States of America")
sA[1] = new State ("alaska", "juneau", "has the lowest population density of any state")
sA[2] = new State ("arizona", "phoenix", "is famous for its saguaro cacti")
sA[3] = new State ("arkansas", "little rock", "hosts the annual World Championship ‘Duck Calling’ contest and is known as ’The Natural State’")
sA[4] = new State ("california", "sacramento", "houses Silicon Valley, the tech hub of the United States")
sA[5] = new State ("colorado", "denver", "is the only state to lie entirely above 3,000 feet in elevation")
sA[6] = new State ("connecticut", "hartford", "houses the PEZ candy company")
sA[7] = new State ("delaware", "dover", "became, in 1787, the first state to ratify the United States constitution")
sA[8] = new State ("florida", "tallahassee", "is the flattest state, with a mean elevation of about 100 feet")
sA[9] = new State ("georgia", "atlanta", "is the largest produces of peanuts, pecans, and peaches")
sA[10] = new State ("hawaii", "honolulu", "is the most geographically southern in the nation")
sA[11]= new State ("idaho", "boise", "is famous for potatoes")
sA[12] = new State ("illinois", "springfield", "was the first to ratify the 13th amendment, abolishing slavery")
sA[13] = new State ("indiana", "indianapolis", "hosted the very first professional baseball game")
sA[14] = new State ("kansas", "topeka", "houses the geographic center of the lower 48 states")
sA[15] = new State ("kentucky", "frankfort", "was the birthplace of Abraham Lincoln")
sA[16] = new State ("louisiana", "baton Rouge", "is the only state to have parishes instead of counties")
sA[17] = new State ("maine", "augusta", "is the only one to border exactly one other state")
sA[18] = new State ("maryland", "annapolis", "gave up land to create Washington D.C.")
sA[19] = new State ("massachusetts", "boston", "was the Revolutionary War started in")
sA[20] = new State ("michigan", "lansing", "is shaped like a hand")
sA[21] = new State ("minnesota", "st. paul", "houses the Mall of America, the largest mall in the United States")
sA[22] = new State ("mississippi", "jackson", "has an Indian name that means ‘great river of gathering waters’")
sA[23] = new State ("missouri", "jackson", "shares its name with the longest river in the United States")
sA[24] = new State ("montana", "helena", "has the largest grizzly bear population in the lower 48 states")
sA[25] = new State ("nebraska", "lincoln", "has the largest hand-planted forest in America, covering nearly 150,000 acres")
sA[26] = new State ("nevada", "carson city", "is home to Las Vegas")
sA[27] = new State ("new hampshire", "concord", "was the first colony to declare independence from Great Britain")
sA[28] = new State ("new jersey", "trenton", "houses Atlantic City, whose streets featured as the properties in the original game of Monopoly")
sA[29] = new State ("new mexico", "santa fe", "has the highest concentration of PHDs?")
sA[30] = new State ("new york", "albany", "houses the Statue of Liberty")
sA[31] = new State ("north carolina", "raleigh", "was where the Wright brothers completed the first successful airplane flight")
sA[32] = new State ("north dakota", "bismarck", "is the least visited state in America")
sA[33] = new State ("ohio", "columbus", "is home to the Rock and Roll Hall of Fame")
sA[34] = new State ("oklahoma", "oklahoma city", "has the most tornados of all US states")
sA[35] = new State ("oregon", "salem", "is home to Crater Lake, the deepest lake in the US, which reaches nearly 2,000 feet deep")
sA[36] = new State ("pennsylvania", "harrisburg", "is home to the Liberty Bell")
sA[37] = new State ("rhode Island", "providence", "is the smallest state")
sA[38] = new State ("south carolina", "columbia", "in 1860 became the first to secede from the Union, setting the stage for the Civil War")
sA[39] = new State ("south dakota", "pierre", "is home to Badlands National Park")
sA[40] = new State ("tennessee", "nashville", "did Elvis Presley call home")
sA[41] = new State ("texas", "austin", "is the largest oil-producing state in the country")
sA[42] = new State ("utah", "salt lake city", "is famous for its natural arches")
sA[43] = new State ("vermont", "montpelier", "is the only New England state that does not border the Atlantic Ocean")
sA[44] = new State ("virginia", "richmond", "was the location of Jamestown, the first permanent English settlement on the American continent")
sA[45] = new State ("washington", "olympia", "houses Boeing’s airplane factory, the worlds largest factory by volume at nearly 500 million cubic feet")
sA[46] = new State ("west virginia", "charleston", "is considered the southern most northern state and the northern most southern state")
sA[47] = new State ("wisconsin", "madison", "is considered the dairy capital of the United States")
sA[48] = new State ("wyoming", "cheyenne", "houses the bulk of Yellowstone National Park")
sA[49] = new State ("iowa", "des moines", "has the highest literacy rate (99%) in the United States")
//make twoPlayer a global variable
var twoPlayer = true;

//choose number of players
var playerNum = function () {
    var playerPrompt = prompt ("Are there 1 or 2 players? Please enter 1 or 2");
    if (playerPrompt === "2") {
       return twoPlayer === true;
    } else if (playerPrompt === "1") {
        return twoPlayer === false;
    } else {
        console.log("Error: Please enter the number 1 or the number 2");
    };
};

playerNum();

// keep track of player score
var totalScore1 = 0;
var totalScore2 = 0;

// choose a random state name

var stateChoice = 3
var stateRandom = 3

var pickState = function () {
  stateRandom = Math.floor(Math.random () * 50);
  stateChoice = sA[stateRandom].name;
  return stateChoice
};

 pickState();

// choose state questions
var pickQ = function () {
    var qRandom = Math.floor(Math.random() * 2);
    switch (qRandom) {
      case 0:
      prompt ("What is the capital of "+ stateChoice.toUpperCase());
      break;
      case 1:
      prompt ("Which state "+ sA[stateRandom].trivia + "?");
      break;
    }

};


pickQ ()

