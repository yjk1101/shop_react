import React, { useContext, useEffect, useState } from 'react'
import '../App.css';
import { Context1 } from '../App';

const TabContent = ({tab}) => {
    const [fade, setFade] = useState('');
    const {remain, shoes} = useContext(Context1);

    useEffect(()=> {
        const animationTimer = setTimeout(()=> {setFade('end')}, 50)
        
        return () => {
            setFade('');
            clearTimeout(animationTimer);
        }
    }, [tab])


    // if(tab === 0) {
    //     return <div>내용0</div>
    // } else if(tab === 1) {
    //     return <div>내용1</div>
    // } else if(tab === 2) {
    //     return <div>내용2</div>
    // } 

  return (
    <div className={'text-center start ' + fade}>
        {[<div>내용0<p>{shoes[0].title + ': ' + remain[1]}</p></div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  )
}

export default TabContent