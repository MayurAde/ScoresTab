"use strict";

//Runs and Wickets variable
let runs = parseInt(document.querySelector(".runs").textContent);
let wickets = parseInt(document.querySelector(".wickets").textContent);

// Adder variables
let adder = 1;
let isPaused = false;

//Overs Update function
let over = parseInt(document.querySelector(".over").textContent);
let ball = parseInt(document.querySelector(".over").textContent);

// Over update function
let overUpdate = function () {
  if (over < 20) {
    if (ball == 5) {
      over += adder * 1;
      ball = 0;
      document.querySelector(".over").textContent = over;
      document.querySelector(".ball").textContent = 0;
    } else {
      ball += adder * 1;
      document.querySelector(".ball").textContent = ball;
    }
  }
};
let commentary = function (runValue) {
  var h = document.createElement("H3");
  var t = document.createTextNode(runValue + "of that ball ");
  h.appendChild(t);
  //document.body.querySelector(".commentary").appendChild(h);
};

// Run Rate update function
let rrUpdate = function () {
  let rr = (runs * 6) / (over * 6 + ball);
  document.querySelector(".rr").textContent = rr.toFixed(2);
};

// Runs update functions rrUpdate();
//Dot ball or NO RUN
document.querySelector(".add0").addEventListener("click", function () {
  runs += adder * 0;
  overUpdate();
  rrUpdate();

  document.querySelector(".runs").textContent = runs;
});
// 1 Run
document.querySelector(".add1").addEventListener("click", function () {
  runs += adder * 1;
  overUpdate();
  rrUpdate();
  commentary("1 Run ");

  document.querySelector(".runs").textContent = runs;
});
// 2 Runs
document.querySelector(".add2").addEventListener("click", function () {
  runs += adder * 2;
  overUpdate();
  rrUpdate();
  commentary("2 Runs ");

  document.querySelector(".runs").textContent = runs;
});
// 3 Runs
document.querySelector(".add3").addEventListener("click", function () {
  runs += adder * 3;
  overUpdate();
  rrUpdate();

  document.querySelector(".runs").textContent = runs;
});
// 4 Runs
document.querySelector(".add4").addEventListener("click", function () {
  runs += adder * 4;
  overUpdate();
  rrUpdate();
  document.querySelector(".runs").textContent = runs;
});
// 5 Runs
document.querySelector(".add5").addEventListener("click", function () {
  runs += adder * 5;
  overUpdate();
  rrUpdate();
  document.querySelector(".runs").textContent = runs;
});
// 6 Runs
document.querySelector(".add6").addEventListener("click", function () {
  runs += adder * 6;
  overUpdate();
  rrUpdate();
  document.querySelector(".runs").textContent = runs;
});

// Wicket
document.querySelector(".addW").addEventListener("click", function () {
  if (wickets < 10) {
    wickets += adder * 1;
    overUpdate();
    rrUpdate();
    document.querySelector(".wickets").textContent = wickets;
  }
});

// all Buttons

//Reset Button
document.querySelector(".reset").addEventListener("click", function () {
  wickets = 0;
  runs = 0;
  over = 0;
  ball = 0;
  adder = 1;
  document.querySelector(".wickets").textContent = 0;
  document.querySelector(".runs").textContent = 0;
  document.querySelector(".over").textContent = 0;
  document.querySelector(".ball").textContent = 0;
  document.querySelector(".rr").textContent = "0.00";
  document.querySelector(".pause").textContent = "Pause Innings";
});

//Pause Innings
document.querySelector(".pause").addEventListener("click", function () {
  if (adder == 0) {
    adder = 1;
    document.querySelector(".pause").textContent = "Pause Innings";
  } else {
    adder = 0;
    document.querySelector(".pause").textContent = " Resume Innings";
  }
});
