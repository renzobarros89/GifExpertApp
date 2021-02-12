import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const inputValueChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();

        if (inputValue.trim().length>2){

            setCategories( cate =>[inputValue, ...cate]);
            setInputValue('');
        }   
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <input 
                    type='text'
                    value={inputValue}
                    onChange={inputValueChange}
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}

export default AddCategory;