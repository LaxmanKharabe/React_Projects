import { forwardRef, useImperativeHandle, useRef } from "react"
const ResultModel = forwardRef(({result, targetTime}, ref)=>{

    const resultRef = useRef(null);

    useImperativeHandle(ref, ()=>({
        open: ()=>{
            resultRef.current.showModal();
        }
    }))

    return(
        <dialog className="result-modal" ref={resultRef}>
            <h2>You {result} </h2>
            <p>Target time was <strong>{targetTime}</strong> seconds.</p>
            <p>You stopped timer with <strong>x seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModel;