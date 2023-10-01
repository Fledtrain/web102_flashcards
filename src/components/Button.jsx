/* eslint-disable react/prop-types */
const Button = ({ question, onClick, children }) => {
    return (
        <>
            <button
                className={`
            ${question.difficulty === "hard" && "bg-red-800"}
            ${question.difficulty === "medium" && "bg-purple-800"}
            ${question.difficulty === "easy" && "bg-green-800"} 
            p-5 ml-2 active:bg-slate-500 font-semibold uppercase`}
                onClick={onClick} >{children}
            </button>
        </>
    )
}

export default Button