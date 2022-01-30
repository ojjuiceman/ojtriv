import React, { useEffect, useState } from "react";
import './Question.css';
import './Leaderboard.css';
import './Barchart.css';
import {Link} from "react-router-dom"

// import styled from "styled-components"



function Question({ category, difficulty, user}) {
  // const [question, setQuestion] = useState(null);
  // const [answer, setAnswer] = useState(null);
  // const [incorrectAnswers, setIncorrectAnswers] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answersArray, setAnswersArray] = useState([]);
  const [answersState, setAnswersState] = useState(null);
  const [finalFourAnswerArray, setFinalFourAnswerArray] = useState([]);
  const [correctArrayState, setCorrectArrayState] = useState(null);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [questionsArray, setQuestionsArray] = useState([]);
  const [attempt, setAttempt] = useState(null);
  const [highScore, setHighScore] = useState(null);
  const [averageScore, setAverageScore] = useState(null);
  const [personalHighScore, setPersonalHighScore] = useState(null);
  const [personalAverage, setPersonalAverage] = useState(null);
  const [newLeaderEntryPost, setNewLeaderEntryPost] = useState(null);
  const [newLeaderEntryPatch, setNewLeaderEntryPatch] = useState(null);
  const [allLeaderEntries, setAllLeaderEntries] = useState(null);
  const [resultsArray, setResultsArray] = useState([]);
  const [allData, setAllData] = useState(null);





  console.log('first log')

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
      .then((r) => r.json())
      .then(data => hello(data))
      .catch(error => console.log("error is: ", error));
  }, []);

  console.log('second log')



// this function creates an array of objects, with each object having two properties, the correct answers and incorrect answers
  function hello(api) {
    if(api.results.length === 0) {
      // alert("Unfortunately There Is No Quiz For This Level, Try Another Level!");
      setAllData(api)
      return;
    }

    console.log("this is the api ", api)
    // const onlyQuestions = api.results.map((obj) => ({question: obj.question}))
    const onlyQuestions = api.results.map(obj => obj.question)
    console.log("henceforth shall be the questions ", onlyQuestions)
    setQuestionsArray(onlyQuestions)
    const onlyAnswers = api.results.map((obj) => ({correctAnswer: obj.correct_answer, incorrectAnswers: obj.incorrect_answers}))
    console.log("henceforth shall be the answers ", onlyAnswers)
    setAnswersArray(onlyAnswers)
    let correctArray = onlyAnswers.map(answersObj => answersObj.correctAnswer)
    console.log("this is the correct array ", correctArray)
    setCorrectArrayState(correctArray)
    // setCorrectArrayState creates an array of all ten correct answers
    next(onlyAnswers)
  }

  console.log('third log')



function next(answersArray) {
  // for(var i = 0; i < answersArray.length; i++) {
  //   console.log("one correct and one incorrect answer", answersArray[i])
  //   console.log(i)
  //   setAnswersState(answersArray[i])
  //   // answersState is the specific answers object that is being iterated over
  //   break;
  // }
  let newAnswerIndex = 0
  if(answerIndex === null) {
    newAnswerIndex = 0
// setAnswerIndex(0)
  } else if(answerIndex !== null && answerIndex < 9){
     newAnswerIndex = answerIndex + 1
  }
  console.log("the answer array ", answersArray)
  setAnswersState(answersArray[newAnswerIndex])
  setAnswerIndex(newAnswerIndex)

}

// next func takes answers array and sets the first index to state
useEffect(() => {
  console.log("answer state ", answersState)
  if(answerIndex !== null) {
    ansArrFunc()
  }
}, [answerIndex])

function ansArrFunc() {
  console.log("what happnes here")
  var fourAnswerArray = []
  for(var key in answersState){
    fourAnswerArray.push(answersState[key]);
  // fourAnswerArray = [...fourAnswerArray, answersState.incorrectAnswers]
  }
  console.log("here are 4 answers ", fourAnswerArray)

  let finalFourAnswerArray = [...fourAnswerArray[1], fourAnswerArray[0]]
  // console.log("here are 4 answers ", finalFourAnswerArray)
      for (var i = finalFourAnswerArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = finalFourAnswerArray[i];
        finalFourAnswerArray[i] = finalFourAnswerArray[j];
        finalFourAnswerArray[j] = temp;
    }
console.log("the array of four shuffled answers to be mapped ", finalFourAnswerArray)
  console.log("whats good")
  setFinalFourAnswerArray(finalFourAnswerArray)
}

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

  function handleAnswerOptionClick(e) {
    let filteredArray = correctArrayState.filter(correctAns => e.target.value === correctAns)
    console.log("hence correct array state ", correctArrayState)
    console.log("target value ", e.target.value)
    console.log("this is the filtered array ", filteredArray)


    if (filteredArray.length !== 0) {
      setScore(score + 1)
      // setResultsArray(resultsArray.push({question: questionsArray[currentQuestion]}))
      setResultsArray([...resultsArray, {question: decodeHtml(questionsArray[currentQuestion]), answer: decodeHtml(answersState.correctAnswer)}])
    } else {
      setResultsArray([...resultsArray, {question: decodeHtml(questionsArray[currentQuestion]), yourWrongAnswer: e.target.value, answer: decodeHtml(answersState.correctAnswer)}])
    }
    console.log("initial result array ", resultsArray)

		// if (isCorrect) {
		// 	setScore(score + 1);
		// }

		setCurrentQuestion(currentQuestion + 1);
		if (currentQuestion < 9) {
      next(answersArray)
			// setCurrentQuestion(nextQuestion);
		} else {
      setShowScore(true);

		}
  };

  // fndjaisnfi  fndasnfldangdaw

  // function yoho() {
  //   fetch("/leaderboard_entries").then((response) => {
  //     // console.log("yippee mid fetch")
  //     if (response.ok) {
  //       response.json().then((entryData) => console.log("so many leaderboard logs ",entryData));
  //     }
  //   });
  // }

  // const playArray = [{name: "alex", score: 23}, {name: "mike", score: 14}, {name: "joe", score: 9}, {name: "ali", score: 54}, {name: "brian", score: 43}]
  // const newPlayArray = playArray.sort((a, b) => a.score - b.score).reverse()
  // console.log("the new play array ", newPlayArray)

  // useEffect(() => {
  //   let theLeaderboard = [...leaderboard].sort((a, b) => a[1] - b[1]).reverse().map((u) => `${u[0]} --- ${u[1]}\n\n`).slice(0, 15)
  // }, [filler])

  // useEffect(() => {
  //   let theLeaderboard = [...leaderboard].sort((a, b) => a[1] - b[1]).reverse().map((u) => `${u[0]} --- ${u[1]}\n\n`).slice(0, 15)
  // }, [filler])

  useEffect(() => {
    console.log("check out these entries ", allLeaderEntries)
  }, [allLeaderEntries])

  useEffect(() => {
    fetch("/leaderboard_entries").then((response) => {
      // console.log("yippee mid get fetch from post")
      if (response.ok) {
        response.json().then((r) => setAllLeaderEntries(r));
      }
    });
  }, [newLeaderEntryPost])

  useEffect(() => {
    fetch("/leaderboard_entries").then((response) => {
      // console.log("yippee mid get fetch from patch")
      if (response.ok) {
        response.json().then((r) => setAllLeaderEntries(r));
      }
    });
  }, [newLeaderEntryPatch])

  function handleCombinedScore(leaderData) {
    console.log("the data of the leader", leaderData)

    let filtered = leaderData.filter(leaderEntry => user.username === leaderEntry.user.username)
    console.log("filter it up ", filtered)
    if (filtered.length === 0) {
      fetch("/leaderboard_entries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          high_score: null,
          cumulative_score: score,
          user_id: user.id
        }),
      })
        .then((r) => r.json())
        .then((data) => {
          setNewLeaderEntryPatch(data)
        });
    } else {
      let oldCombinedScore = filtered[0].cumulative_score
      fetch(`leaderboard_entries/${filtered[0].id}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    cumulative_score: oldCombinedScore + score
  }),
})
  .then((r) => r.json())
  .then((updatedEntry) => setNewLeaderEntryPost(updatedEntry));
    }
    // now we do a get fetch request to the leaderboard table, and apply elijah's sort and map code

    // so the problem here is that the below fetch does not show the updated cumulative score,
    // even though i just did the patch request above. its always one behind. fix this.
    // yoho()
    // or instead of yoho use a useEffect with updatedEntry in the dependency array, and put the get request to leaderboard entries inside it

    // also, why does tani's (id: 1) cumulutaive score keep going up for no reason? every time te page rerenders,
    // the latest person to go's score updates. it runs again- maybet heuseeffect is the cultprit here

    //  so whats goin on here is it rerenders twice. it updates teh persons cumulative points and adds double the amount
    // they got right this round. so if they previously had a cumulative score of 12, and they got 3 right, every time the page
    // rerenders it adds six. so itll go from 12 to 18 to 24 to 30, etc   nkj k dfasf
    // when i log a diff user in, it adds teh proper amount to the cumulative score of teh last person who did the quiz.
    // then i renrender and it does the double add thing to the current logged person

  // so to recap, firstoff the leaderboard entry gets updated late. secondly it does the patch request twice every time the page rerenders.
  }

  function handleAverage(allAttempts) {
    let highest = allAttempts[0].score
    let total = 0
    let personalBest = 0
    let personalTotal = 0
    let count = 0
    // if allattempts.user.username === user, check to see if score is higher than personalBest and set new personalBest if so
    for(var i = 0; i < allAttempts.length; i++) {

      if(allAttempts[i].score > highest) {
        highest = allAttempts[i].score
      }

      total = total + allAttempts[i].score

      // console.log("this specific attempt ", allAttempts[i])
      // console.log("lets see this user ", user)

      if(allAttempts[i].user.username === user.username && allAttempts[i].score > personalBest) {
        personalBest = allAttempts[i].score
      }

      if(allAttempts[i].user.username === user.username) {
        personalTotal = personalTotal + allAttempts[i].score
        count++
      }

    }

    // do get request to leaderboard table, take the data and do a filter function and return true if user === data.user.username.
    // if that filtered array is empty, meaning it's the user's first time doing the quiz, do a post request that adds
    // attempt.score as the cumulative score. if the array is not empty, meaning it's not the user's first attempt,
    // do a fetch update that does data.cumulative_score plus attempt.score. that should be in the update fetch request as follows:
    // cumulative_score: data.cumulative_score plus attempt.score

    // now that i have the cumulative scores of each user in the LeaderboardEntry table, use elijah's code to sort it and map it

// console.log("yippee before fetch")
    fetch("/leaderboard_entries").then((response) => {
      // console.log("yippee mid fetch")
      if (response.ok) {
        response.json().then((leaderData) => handleCombinedScore(leaderData));
      }
    });

    // console.log("yippee after fetch")


    // setTotalScore(total)
    let average = total / allAttempts.length
    let selfAverage = personalTotal / count
    setPersonalAverage(selfAverage)
    setAverageScore(average)
    setHighScore(highest)
    setPersonalHighScore(personalBest)
  }

  // function handleCumulative() {
  //   //
  // }

  // useEffect(() => {
  //   if (showScore) {
  //     fetch("/yo").then((response) => {
  //       if (response.ok) {
  //         response.json().then((data) => handleCumulative(data));
  //       }
  //     });
  //   }
  // }, [showScore])

  useEffect(() => {
    if (showScore) {
      console.log("bout to show leaderboard", showScore)
      fetch("/Attempt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          score: score,
          user_id: user.id
        }),
      })
        .then((r) => r.json())
        .then((data) => {
          setAttempt(data)
          console.log("the attempt frmo the attempt fetch ", data)
        });

        // i need the above poist request to happen, and then the below get request to happen. Currently, the get request is happening
        // and indexing all the data without the latest attempt having been added to the attempts table. this is no bueno,
        // bc it does not show the attempt that the user just did. I need this for what im rendering.

        // fetch("/Average").then((response) => {
        //   if (response.ok) {
        //     response.json().then((allAttempts) => handleAverage(allAttempts));
        //   }
        // });

    } else {
      console.log("NOTHING TO SEE HERE")
    }
    },
     [showScore])

     useEffect(() => {
       if(attempt !== null) {
      fetch("/Average").then((response) => {
        if (response.ok) {
          response.json().then((allAttempts) => handleAverage(allAttempts));
        }
      });
    }
     }, [attempt])


    //  fetch("/Average").then((response) => {
    //   if (response.ok) {
    //     response.json().then((r) => console.log("average data is: ", r));
    //   }
    // });
  // every time showsocre changes (becomes true) we want to to a fetch post request and capture and post the score, and the user id.

  // console.log("here is the unescape ", decodeHtml(questionsArray[answerIndex]))

//  when showscore becomes true, i want to do a get request fetch to the attempts table, and retrieve all the attempts,
// then once i have that data, call a fucntion on that data that loops over the data (maybe using reduce function)
// and adds all the scores together, then divide that number by the number of attempts (by the data.length) (perhaps if i can divide it by the id of
// the last attempt). this will give me the average score for all users. set this in state, call it setAverage. Ah! do this functionality in the atttempts controller. make a
// custom method.

// function sortByHighScore(){
//   console.log("whazzaaaaap")
// }

function sortByHighestAverage(){
  console.log("yooyoyoyo")
}

function sortByHighestCumulative(){
  console.log("whatsgoodwiddit")
}

// const dynamicHeight = (4 + 95) + "%"

const highscory = (highScore * 10) + "%"
const personalHighScory = (personalHighScore * 10) + "%"
const averageScory = (averageScore * 10) + "%"
const personalAveragy = (personalAverage * 10) + "%"
const scory = (score * 10) + "%"


console.log("high scory is ", highscory)
console.log("personal high scory is ", personalHighScory)
console.log("average scory is ", averageScory)
console.log("personal averagy is ", personalAveragy)


console.log("scooooorer ", score)


  return (
		<div className="question-container">
			{showScore && attempt &&
 <div>
 <div className='score-section'>
   You scored {score} out of 10!
 </div>
 <br></br>
 {/* <strong>Attempt number: {attempt.id}</strong><br></br>
 <strong>The average score from all players for this game is: {averageScore}</strong><br></br>
 <strong>The high score from all players for this game is: {highScore}</strong><br></br>
 <strong>Your personal high score is: {personalHighScore}</strong><br></br>
 <strong>Your personal average is: {personalAverage}</strong> */}

 <div className="answer-results">
 {resultsArray.map(r => r.yourWrongAnswer === undefined ? <div className="correct"><br></br>
 {resultsArray.indexOf(r) + 1}. {r.question} <br></br><br></br> CORRECT, it's  "{r.answer}"<br></br></div> : <div className="incorrect"><br></br>
 {resultsArray.indexOf(r) + 1}. {r.question} <br></br><br></br> You Chose "{r.yourWrongAnswer}".
 But you're WRONG, Stupid! The correct answer is "{r.answer}"<br></br></div>)}
 </div>

 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>

 <div className="entire-board">
 <h2 className="title">Player Leaderboard</h2>

 {/* <div>
   {resultsArray.map(r => r.yourWrongAnswer === undefined ? <p>{r.question + " " + r.answer}</p> : <p>{r.question + " " + r.yourWrongAnswer + " WRONG, IT'S " + r.answer}</p>)}
 </div> */}



 <table className="taby">

 <thead>
 <tr className="toprow">
   <th class="rank">Rank</th>
   <th className="play">Player</th>
   {/* <th onClick={sortByHighScore}>High Score</th> */}
   {/* <th onClick={sortByHighestAverage}>Average Score(rn shows high score)</th> */}
   <th className="play"></th>
   <th onClick={sortByHighestCumulative} class="combined">Combined Score</th>
   </tr>
</thead>

{allLeaderEntries.sort((a, b) => a.cumulative_score - b.cumulative_score).reverse().map(entry => <tr>
 <td class="rank">{allLeaderEntries.indexOf(entry) + 1}</td>
 <td className="player-and-arrow">{entry.user.username}</td>
 <td className="player-and-arrow">----------------------------------------------------------------></td>

 {/* <td>{entry.high_score}</td> */}
 <td class="combined">{entry.cumulative_score}</td>
 </tr>).slice(0, 15)}

{/* <tr>
<td>1</td>
<td>Alfreds Futterkiste</td>
<td>Maria Anders</td>
<td>Germany</td>
</tr>

<tr>
<td>2</td>
<td>Francisco Chang</td>
<td>Mexico</td>
<td>Mexico</td>
</tr>

<tr><td>3</td></tr>
<tr><td>4</td></tr>
<tr><td>5</td></tr>
<tr><td>6</td></tr>
<tr><td>7</td></tr>
<tr><td>8</td></tr>
<tr><td>9</td></tr>
<tr><td>10</td></tr> */}

</table>

</div>

<br></br>
 <br></br>
 <br></br>
 <br></br>


 <h1>Compare your score with the TriviApp Graph!</h1>
 <div class="buttony">
<div className="scores uno">Your Score</div>
<div className="scores dos">Your High Score</div>
<div className="scores tres">Average TriviApp score</div>
<div className="scores quatro">Your Average Score</div>

</div>
<div class="chart-container">


<div class="base"></div>

<ul class="meter">
<li><div>8</div></li>
<li><div>6</div></li>
<li><div>4</div></li>
<li><div>2</div></li>
<li><div>0</div></li>

</ul>

<table>
<tr>
 {/* <button>heee</button> */}
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 {/* <td></td>
 <td></td>
 <td></td>
 <td>hey</td> */}
</tr>
<tr>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 {/* <td></td>
 <td></td>
 <td></td>
 <td></td> */}
</tr>
<tr>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 {/* <td></td>
 <td></td>
 <td></td>
 <td></td> */}
</tr>
<tr>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 {/* <td></td>
 <td></td>
 <td></td>
 <td></td> */}
</tr>
<tr>
 <td></td>
 <td></td>
 <td></td>
 <td></td>
 {/* <td></td>
 <td></td>
 <td></td>
 <td></td> */}
</tr>
</table>

<div class="barnard">
<div class="bar one" style={{height: scory}}></div>
<div class="bar two" style={{height: personalHighScory}}></div>
<div class="bar three" style={{height: averageScory}}></div>
<div class="bar four" style={{height: personalAveragy}}></div>
</div>

{/* <div class="bar five"></div>
<div class="bar six"></div>
<div class="bar seven">jijiji</div>
<div class="bar eight"></div> */}
</div>

<br></br>
<br></br>

<div className="play-again">
<Link to="/Categories">Play Again!</Link>
</div>

 </div>
      }
      {showScore === false && allData === null &&
				<div className="question-and-answer">
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{10}
						</div>
						<div className='question-text'>{decodeHtml(questionsArray[answerIndex])}</div>
					</div>
					<div className='answer-section'>
						{finalFourAnswerArray.map((answerOption) => (
							// <button value={answerOption} onClick={(e) => handleAnswerOptionClick(e)}>{decodeHtml(answerOption)}</button>
              <button className="options-button" value={answerOption} onClick={(e) => handleAnswerOptionClick(e)}>{decodeHtml(answerOption)}</button>
						))}
					</div>
				</div>
      }
      {allData !== null &&
      <div>
        <h1 className="whoopsie">Whoops!</h1>
        <h4 className="whoops-message">The {category === 13 ? "Musicals and Theater" : category === 19 ? "Mathematics" : category === 24 ? "Politics" : category === 25 ? "Art" : category === 26 ? "Celebrities" : category === 30 ? "Gadgets" : " whatever"} quiz is currently under construction. Please go back and try another quiz.</h4>
        <Link to="/Categories" className="whoops-back-link">Back</Link>
          {/* <div>{category === 13 ? <a className="trivia-link" href="https://www.usefultrivia.com/music_trivia/broadway_musicals_trivia.html">Musicals Trivia!</a>
          : category === 19 ? <a className="trivia-link" href="https://www.triviaquestionss.com/math-trivia-questions-and-answers/">Math Trivia!</a> : category === 24 ? <a className="trivia-link" href="https://www.usefultrivia.com/political_trivia/">Politics Trivia!</a>
          : category === 25 ? <a className="trivia-link" href="https://www.usefultrivia.com/art_trivia/">Art Trivia!</a> : category === 26 ? <a className="trivia-link" href="https://www.usefultrivia.com/celebrity_trivia/">Celebrity Trivia!</a>
          : category === 30 ? <a className="trivia-link" href="https://www.britannica.com/quiz/electronics-amp-gadgets-quiz">Electronics and Gadgets Trivia!</a> : "Nothing to see here"}</div> */}
        </div>
      }

        {/* {allData.results.length !== 0 &&
          <h1>what is up with this crap</h1>
        } */}




		</div>
	)
}

export default Question

// problem 1: someimtes the useEffect renders the proper api, and sometimes the Pi is empty. why is this?
// problem 2: the question has random characters in it, how do i remove them?

// I want to fetch in here, keep the array of data in state, and every time i click the next question button,
// state will change to the object at the next index
// i also need the difficulty level state and category state to be here for the fetch call


// the following code is everything i need to create an shuffled array of the four answers that i will map over,
// so i will map over fourAnswerArray

// const answers = data.results.map((obj) => ({correctAnswer: obj.correct_answer, incorrectAnswers: obj.incorrect_answers}))


// function ansArrFunc() {
//   var fourAnswerArray = []
//   for(var key in answersState){
//     fourAnswerArray.push(answersState.correctAnswer);
//   fourAnswerArray = [...fourAnswerArray, answersState.incorrectAnswers]
//   }
//       for (var i = fourAnswerArray.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = fourAnswerArray[i];
//         fourAnswerArray[i] = fourAnswerArray[j];
//         fourAnswerArray[j] = temp;
//     }
// console.log(fourAnswerArray)
//   console.log("whats good")

// }

// function next() {
//   for(var i = 0; i < answers.length; i++) {
//     console.log(answers[i])
//     console.log(i)
//     setAnswersState(answers[i])
//     ansArrFunc()
//     // answersState is the specific answers object that is being iterated over
//     break;
//   }
// }

// next()








// old format:


// import React, { useEffect, useState } from "react";
// import './Question.css';

// function Question({ category, difficulty}) {

//   const [question, setQuestion] = useState(null);
//   const [answer, setAnswer] = useState(null);
//   const [incorrectAnswers, setIncorrectAnswers] = useState(null);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
// 	const [showScore, setShowScore] = useState(false);
//   const [score, setScore] = useState(0);

//   // var answersArray = [answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, ]
//   let answersArray = []

//   function handleQuestionApi(data) {
//     setQuestion(data.results[0].question)
//     setAnswer(data.results[0].correct_answer)
//     setIncorrectAnswers(data.results[0].incorrect_answers)
//     // for loop over data.results, then for in loop over the object within the for loop,
//     // check to see if obj[key] === correct_answer || obj[key] === incorrect_answers, and if so, add it to the all questions array
//     // that will be kept in state. Then I create another for loop after this one, not inside of it, looping over
//     // the answersArray, and i use slice to cut out a chunk of four elements. i will keep those 4 elements in state
//     // called currentAnswers and map them out, once i shuffle them
//     // using a shuffle method (google it).
//     // every time i click next quetion button the next four answers will be set to state and mapped out.
//     const answers = data.results.map((obj) => ({correctAnswer: obj.correct_answer, incorrectAnswers: obj.incorrect_answers}))
//   }


//   // every time i click next question, i want to set state to a shuffled array of the next object. how do i acheive this?

//   function setAnswersState() {
//     // map over answers array, and on each iteration, push the values of the object into an array
//   }

//   // for(var i = 0; i < data.results; i++) {
//   //   for(var key in obj) {
//   //     if(key === correct_answer || key === incorrect_answers) {
//   //       answersArray.push(obj[key])
//   //     }
//   //   }
//   // }

//   useEffect(() => {
//     fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
//       .then((r) => r.json())
//       .then(data => handleQuestionApi(data));
//   }, []);


//   const handleAnswerOptionClick = (isCorrect) => {
// 		if (isCorrect) {
// 			setScore(score + 1);
// 		}

// 		const nextQuestion = currentQuestion + 1;
// 		if (nextQuestion < 10) {
// 			setCurrentQuestion(nextQuestion);
// 		} else {
// 			setShowScore(true);
// 		}
// 	};

//   return (
// 		<div className="question-container">
// 			{showScore ? (
// 				<div className='score-section'>
// 					You scored {score} out of 10
// 				</div>
// 			) : (
// 				<>
// 					<div className='question-section'>
// 						<div className='question-count'>
// 							<span>Question {currentQuestion + 1}</span>/{10}
// 						</div>
// 						<div className='question-text'>{question}</div>
// 					</div>
// 					<div className='answer-section'>
// 						{questions[currentQuestion].answerOptions.map((answerOption) => (
// 							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
// 						))}
// 					</div>
// 				</>
// 			)}
// 		</div>
// 	);
// }

// export default Question