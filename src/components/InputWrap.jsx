// 새로운 방식
const InputWrap = ({text, data, inputChange}) => {
    const changeInputValue = (e) => {
        inputChange(e.target.value);
    }

    return (
        <div className='input_wrap'>
            <label htmlFor="">
                {text}
            </label>
                <input type="text" value={data} onChange={changeInputValue} />
        </div>
    )
}

export default InputWrap;


// const InputWrap = ({text, name, data, inputChange}) => {
    

//     return (
//         <div className='input_wrap'>
//             <label htmlFor="">
//                 {text}
//             </label>
//                 <input type="text" name={name} value={data} onChange={inputChange} />
//         </div>
//     )
// }

// export default InputWrap;