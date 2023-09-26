/* eslint-disable react/prop-types */
import { useState } from "react";

const questions = [
    {
        id: 0,
        question: "What character is this? He is the main protagonist of the Halo series.",
        img: "MC.webp",
        answer: "Master Chief",
        difficulty: "easy"
    },
    {
        id: 1,
        question: "How many Forza games are there?",
        img: "",
        answer: "5",
        difficulty: "medium"
    },
    {
        id: 2,
        question: "What is the most popular game in the world?",
        img: "",
        answer: "Minecraft",
        difficulty: "easy"
    },
    {
        id: 3,
        question: "What game is this character from? He is the main protagonist of the Legend of Zelda series.",
        img: "",
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
        img: "",
        answer: "Doom",
        difficulty: "hard"
    },
    {
        id: 6,
        question: "What 2017 action-adventure game features a protagonist named Aloy?",
        img: "",
        answer: "Horizon Zero Dawn",
        difficulty: "hard"
    }
];

/**
 * Component for displaying questions and answers 
 * 
 * @component
 * @param  {object} question 
 * @param  {function(): number} onNext Increment id by 1
 * @param  {function(): number} onPrev Subtract id by 1
 */

// Child Component
const Questions = ({ question, onNext, onPrev }) => {
    // Using this to check if the card is flipped or not
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped)
    }

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
                        border flex justify-center items-center h-96 w-96 m-auto p-5 active:bg-slate-500 
                    `}
                    onClick={flipCard}
                >
                    {isFlipped ? <><img src={question.img} alt="Test" /></> : question.question}
                </div>
                <div className="m-4">
                    <button className="p-5 mr-2 hover:bg-slate-500 active:bg-slate-600 " onClick={onPrev}>Previous</button>
                    <button className="p-5 ml-2 hover:bg-slate-500 active:bg-slate-600 " onClick={onNext}>Next</button>
                </div>
            </section>
        </>
    )
}

/**
 * Component for displaying Card
 * @component 
 */

// Parent Component
const Card = () => {
    // Bringing the array of questions into state
    const [question, setQuestion] = useState(questions)
    // Used to track the current question
    const [questionNum, setQuestionNum] = useState(0)

    /** Increments Question Number
     * @returns {number} 
     */
    const nextCard = () => {
        if (questionNum < numOfCards - 1) {
            setQuestionNum(questionNum + 1)
        }
    }
    /**Decrements Question Number
     * @returns {number} 
     */
    const prevCard = () => {
        if (questionNum > 0) {
            setQuestionNum(questionNum - 1)
        }
    }
    const numOfCards = question.length
    return (
        <>
            <h2 className="text-slate-900">Number of FlashCards: {numOfCards}</h2>
            <Questions
                question={question[questionNum]}
                onSetQuestion={setQuestion}
                onNext={nextCard}
                onPrev={prevCard} />
        </>
    )
}

export default Card

