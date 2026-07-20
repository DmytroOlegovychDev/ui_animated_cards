import "./App.css";
import Card from "./components/Card";

function App() {
  const cards = [
    {
      question: "What is your favorite technology?",
      answer: "GSAP.",
    },
    {
      question: "What CSS framework do you use?",
      answer: "React, TypeScript and modern UI animations.",
    },
    {
      question: "What animation library do you like?",
      answer: "Tailwind CSS.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-8 bg-black min-h-screen items-center justify-center p-6">
      {cards.map((card, index) => (
        <Card key={index} question={card.question} answer={card.answer} />
      ))}
    </div>
  );
}

export default App;
