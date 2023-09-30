const Button = ({ question, onNext, onPrev, shuffle, children }) => {
    return (
        <>
            <button
                className={`
            ${question.difficulty === "hard" && "bg-red-800"}
            ${question.difficulty === "medium" && "bg-purple-800"}
            ${question.difficulty === "easy" && "bg-green-800"} 
            p-5 ml-2 active:bg-slate-500 font-semibold`}
                onClick={() => { onNext(), onPrev() }} >{children}
            </button>
        </>
    )
}

export default Button