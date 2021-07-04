export async function getQuestionData() {
  const url =
    "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple"
  const response = await fetch(url)
  const data = await response.json()

  const questionList = data.results.map((obj, index) => {
    const qObj = {
      sno: index + 1,
      question: obj.question,
      answer: obj.correct_answer,
      options: obj.incorrect_answers,
    }

    return qObj
  })

  return questionList
}
