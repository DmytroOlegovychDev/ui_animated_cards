import { useState } from "react";

function Card({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`w-72 h-80 sm:w-80 sm:h-96 md:w-80 md:h-100 cursor-pointer ${
        flipped ? "bg-green-300" : "bg-red-300"
      } rounded-2xl flex flex-col justify-center items-center transition-transform ${
        flipped ? "[transform:rotateY(180deg)]" : ""
      }`}
      onClick={() => setFlipped(!flipped)}
    >
      {!flipped && (
        <>
          <div className="text-sm sm:text-base text-gray-600">Question?</div>
          <div className="text-xl sm:text-2xl md:text-3xl text-center">
            {question}
          </div>
        </>
      )}

      {flipped && (
        <>
          <div className="text-sm sm:text-base text-gray-600 [transform:rotateY(180deg)]">
            Answer
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl text-center [transform:rotateY(180deg)]">
            {answer}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
