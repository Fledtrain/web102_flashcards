/* eslint-disable react/prop-types */
import { useState } from "react";

const questions = [
    {
        id: 0,
        question: "What character is this? He is the main protagonist of the Halo series.",
        // img: "/public/MC.webp",
        answer: "Master Chief",
        difficulty: "easy"
    },
    {
        id: 1,
        question: "How many Forza games are there?",
        answer: "5",
        difficulty: "medium"
    },
    {
        id: 2,
        question: "What is the most popular game in the world?",
        answer: "Minecraft",
        difficulty: "easy"
    },
    {
        id: 3,
        question: "What game is this character from? He is the main protagonist of the Legend of Zelda series.",
        // img: "",
        answer: "Link",
        difficulty: "easy"
    },
    {
        id: 4,
        question: "What massively popular battle royale game was developed by Epic Games?",
        answer: "Fortnite",
        difficulty: "medium"
    },
    {
        id: 5,
        question: "Which 1993 first-person shooter game is known for popularizing the genre",
        answer: "Doom",
        difficulty: "hard"
    },
    {
        id: 6,
        question: "What 2017 action-adventure game features a protagonist named Aloy?",
        answer: "Horizon Zero Dawn",
        difficulty: "hard"
    }
];

// Child Component
const Questions = ({ question }) => {
    // Using this to check if the card is flipped or not
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = (e) => {
        console.log(e.target.id)
        setIsFlipped(!isFlipped)
    }

    const nextCard = () => {
        console.log("next")
    }
    const prevCard = () => {
        console.log("prev")
    }

    return (
        <>
            <section className="mt-5">
                <div
                    id={question[0].id}
                    className={` ${isFlipped ? "" : ""} border flex justify-center items-center h-96 w-96 m-auto p-5
                    hover:bg-gray-800 active:bg-gray-900 `}
                    onClick={flipCard}
                >
                    {isFlipped ? question[0].answer : question[0].question}
                </div>
                <div
                    id={question[1].id}
                    className={` ${isFlipped ? "" : ""} hidden`}
                    onClick={flipCard}>{isFlipped ? question[1].answer : question[1].question}</div>
                <div
                    id={question[2].id}
                    className={` ${isFlipped ? "" : ""} hidden`}
                    onClick={flipCard}>{isFlipped ? question[2].answer : question[2].question}</div>
                <div
                    id={question[3].id}
                    className={` ${isFlipped ? "" : ""} hidden`}
                    onClick={flipCard}>{isFlipped ? question[3].answer : question[3].question}</div>
                <div
                    id={question[4].id}
                    className={` ${isFlipped ? "" : ""} hidden `}
                    onClick={flipCard}>{isFlipped ? question[4].answer : question[4].question}</div>
                <div
                    id={question[5].id}
                    className={` ${isFlipped ? "" : ""} hidden`}
                    onClick={flipCard}>{isFlipped ? question[5].answer : question[5].question}</div>
                <div
                    id={question[6].id}
                    className={` ${isFlipped ? "" : ""} hidden`}
                    onClick={flipCard}>{isFlipped ? question[6].answer : question[6].question}</div>
                <div className="m-4">
                    <button className="p-5 mr-2" onClick={nextCard}>Next</button>
                    <button className="p-5 ml-2" onClick={prevCard}>Previous</button>
                </div>
            </section>
        </>
    )
}


// Parent Component
const Card = () => {
    // Bringing the array of questions into state
    const [question, setQuestion] = useState(questions)

    const numOfCards = question.length
    return (
        <>
            <h2>Number of FlashCards: {numOfCards}</h2>
            <Questions question={question} onSetQuestion={setQuestion} />
        </>
    )
}

export default Card

