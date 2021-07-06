export async function getQuestionData() {
  const url =
    "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple"
  const response = await fetch(url)
  const data = await response.json()

  const questionList = data.results.map((obj, index) => {
    function shuffle(array) {
      var currentIndex = array.length,
        randomIndex

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        ;[array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ]
      }

      return array
    }

    let optionsList = [...obj.incorrect_answers]
    optionsList.push(obj.correct_answer)
    shuffle(optionsList)

    const qObj = {
      sno: index + 1,
      question: obj.question,
      answer: obj.correct_answer,
      options: optionsList,
      selected: "",
    }

    return qObj
  })

  return questionList
}
