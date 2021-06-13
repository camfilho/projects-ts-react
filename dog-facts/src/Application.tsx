import * as React from 'react';
import { fetchDogFacts, DogFactType } from './dog-facts';

type FormPropsType = {
  onSubmit: (n: number) => void
}

const Form = ({ onSubmit }: FormPropsType) => {
  const [n, setN] = React.useState(1)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(n)
      }}
    >
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        <input type="number" onChange={(event) => setN(+event.target.value)} value={n} min="1" max="10" id="number-of-facts" />
      </div>
      <input type="submit" value="Fetch Dog Facts" />
    </form>
  );
};

const Fact = ({ fact }: { fact: string }) => {
  return (
    <article className="dog-fact">
      <h3>Dog Fact</h3>
      <p>{fact}</p>
    </article>
  );
};

const Application = () => {
  const [facts, setFacts] = React.useState<DogFactType[]>([])
  const handleDogFacts = (count: number) => {
    fetchDogFacts(count)
    .then((facts) => setFacts(facts))
  }
  React.useEffect(() => {
    fetchDogFacts(1)
      .then((facts) => setFacts(facts))
  }, [])
  return (
    <main>
      <Form onSubmit={handleDogFacts} />
      <section>
        {
          facts.map(fact => <Fact fact={fact.fact} />)
        }
      </section>
    </main>
  );
};

export default Application;
