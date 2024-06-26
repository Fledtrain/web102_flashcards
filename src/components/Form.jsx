/* eslint-disable react/prop-types */

const Form = ({ answer, handleChange, color, handleSubmit }) => {

    // A user's answer may be counted as correct even when it is slightly different from the target answer



    return (
        <>
            <form className="m-1 sm:m-2 flex flex-row text-center justify-center ">
                <p className="flex justify-center items-center font-semibold mr-1 text-ellipsis text-sm sm:text-base">Guess the Answer here: </p>
                <input
                    type="text"
                    name="answer"
                    value={answer}
                    onChange={handleChange}
                    placeholder="Enter Answer Here..."
                    className={`${color} text-center sm:text-lg text-md bg-slate-800`} />
                <button
                    disabled={answer === ""}
                    className={`bg-slate-500 p-3 sm:p-5 ml-1 active:bg-slate-500 font-semibold uppercase`}
                    onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Form