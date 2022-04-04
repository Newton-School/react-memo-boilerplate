import React from 'react';

export function Footer  ({content}){
    console.log('Rendered Footer');
    return(
        <footer id="footer">
            {content}
        </footer>
    )
}