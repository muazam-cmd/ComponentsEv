import { useState } from 'react';
function Dropdown({ options }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOption = (option) => {
        setIsOpen(false);
        console.log(option);
    }
    const renderedOptions = options.map((option) => {
        return <div onClick={() => handleClickOption(option)} key={option.value} > {option.lable}</div >


    });
    return (
        <div>
            <div onClick={handleClick}>SELECT..</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    )
}
export default Dropdown;
