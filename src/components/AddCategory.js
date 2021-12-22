import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories,categories}) => {
    
    const [inputValue, setinputValue] = useState("")

    const handleInputChange = (e)=>{
        setinputValue(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(inputValue.trim().length > 2 && !categories.includes(inputValue)){
            setCategories( categoriesOld => [ inputValue, ...categoriesOld] )
            setinputValue('');
        }else{
            alert("Algo se cargo mal")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories:PropTypes.array.isRequired

}


export default AddCategory
