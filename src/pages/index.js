import React from 'react';
import {css} from '@emotion/core'
import Form from '../components/form';

export default () => {    
    return (
        <>
            <h1 css = {css`
            text-align:center;
            margin:2rem;
            color:cornflowerblue;
            `}>Send a message </h1>
            <Form />
        </>
    )
}