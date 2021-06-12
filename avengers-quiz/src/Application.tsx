import { questions } from './questions';
import * as React from 'react'

type QuestionProps = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: QuestionProps) => {
  const [isHiden, toggleAnswer] = React.useState(true)

  return (
    <article className="question">
      <header>{question}</header>
      <p className="answer">
        <span className={isHiden ? "blurred" : "visible"}>{answer}</span>
      </p>
      <footer>
        <button onClick={() => toggleAnswer(false)}>Toggle Answer</button>
      </footer>
    </article>
  );
};

const Application = () => {
  return (
    <main>
      {questions.map((q) => (
        <Question question={q.question} answer={q.answer} key={q.id} />
      ))}
    </main>
  );
};

export default Application;
