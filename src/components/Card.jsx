/* eslint-disable react/prop-types */
import { useState } from "react";

const questions = [
    {
        id: 0,
        question: "What character is this? He is the main protagonist of the Halo series...",
        img: "MC.webp",
        answer: "Master Chief",
        difficulty: "easy"
    },
    {
        id: 1,
        question: "How many Forza games are there?",
        img: "Forza.webp",
        answer: "5",
        difficulty: "medium"
    },
    {
        id: 2,
        question: "What is the most popular game in the world?",
        img: "Mine.webp",
        answer: "Minecraft",
        difficulty: "easy"
    },
    {
        id: 3,
        question: "What game is this character from? He is the main protagonist of the Legend of Zelda series.",
        img: "Link.webp",
        answer: "Link",
        difficulty: "easy"
    },
    {
        id: 4,
        question: "What massively popular battle royale game was developed by Epic Games?",
        img: "FORT.webp",
        answer: "Fortnite",
        difficulty: "medium"
    },
    {
        id: 5,
        question: "Which 1993 first-person shooter game is known for popularizing the genre? 🔫",
        img: "doom.webp",
        answer: "Doom",
        difficulty: "hard"
    },
    {
        id: 6,
        question: "What 2017 action-adventure game features a protagonist named Aloy?",
        img: "HZD.webp",
        answer: "Horizon Zero Dawn",
        difficulty: "hard"
    }
];

/**Component for displaying questions and answers 
 * @component
 * @param  {object} question 
 * @param  {function(): number} onNext Increment id randomly
 * @param  {function(): number} onPrev Subtract id by 1
 */

const Questions = ({ question, onNext, onPrev, onFlip, isFlipped }) => {
    return (
        <>
            <section className="mt-5 ">
                <div
                    id={question.id}
                    className=
                    {`
                        ${question.difficulty === "hard" && "bg-red-800"}
                        ${question.difficulty === "medium" && "bg-purple-800"}
                        ${question.difficulty === "easy" && "bg-green-800"}
                        border border-slate-900 flex justify-center items-center h-96 w-72 sm:w-96  m-auto p-5 active:bg-slate-500 rounded-xl
                    `}
                    onClick={onFlip}
                >
                    {isFlipped ?
                        <>
                            <p className="text-xl font-medium">
                                {question.answer}
                            </p>
                        </> :
                        <>
                            <div>
                                <p className="p-5">
                                    {question.question}
                                </p>
                                <img
                                    // Center Image
                                    className="rounded-2xl h-48 items-center justify-center m-auto"
                                    src={question.img}
                                    alt="No Hints"
                                    loading="lazy"
                                />
                            </div>
                        </>
                    }
                </div>
                <div className="m-4">
                    {/* <button className="p-5 mr-2 hover:bg-slate-500 active:bg-slate-600 " onClick={onPrev}>Previous</button> */}
                    <button
                        className={`
                        ${question.difficulty === "hard" && "bg-red-800"}
                        ${question.difficulty === "medium" && "bg-purple-800"}
                        ${question.difficulty === "easy" && "bg-green-800"} 
                        p-5 ml-2 active:bg-slate-500 font-semibold`}
                        onClick={onNext}>Next</button>
                </div>
            </section>
        </>
    )
}

/**Component for displaying Card
 * @component 
 */
const Card = () => {
    // Bringing the array of questions into state
    const [question, setQuestion] = useState(questions)
    // Used to track the current question
    const [questionNum, setQuestionNum] = useState(0)
    // Using this to check if the card is flipped or not
    const [isFlipped, setIsFlipped] = useState(false);
    const [randomQuestionNum, setRandomQuestionNum] = useState(0)

    const flipCard = () => {
        setIsFlipped(!isFlipped)
    }
    const numOfCards = question.length

    /** Increments Question Number
     * @returns {number}
    */
    const nextCard = () => {
        let newRandomNum;
        do {
            newRandomNum = Math.floor(Math.random() * 7)
        } while (newRandomNum === randomQuestionNum)

        setRandomQuestionNum(newRandomNum)
        setQuestionNum(newRandomNum)
        setIsFlipped(false)

    }
    /**Decrements Question Number
     * @returns {number} 
     */
    const prevCard = () => {
        if (questionNum > 0) {
            setQuestionNum(questionNum - 1)
            setIsFlipped(false)
        }
    }
    return (
        <>
            <h2 className="text-slate-900 text-xl">Number of FlashCards: {numOfCards}</h2>
            <Questions
                question={question[questionNum]}
                onSetQuestion={setQuestion}
                onNext={nextCard}
                onPrev={prevCard}
                onFlip={flipCard}
                isFlipped={isFlipped}
            />
        </>
    )
}

export default Card

