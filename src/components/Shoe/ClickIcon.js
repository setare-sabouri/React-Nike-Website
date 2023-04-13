import React from 'react'
import { MdOutlineAdsClick } from 'react-icons/md'
import { useEffect } from 'react';
export const ClickIcon = ({ Clicked }) => {

    useEffect(() => {
        if (!Clicked) {
            document.querySelector('.click-icon').style.display = 'block';
        } else {
            document.querySelector('.click-icon').style.display = 'none';
        }
    }, [Clicked]);

    return (
        <div className={'click-icon'} >
            <MdOutlineAdsClick
                size='1.6rem'
                color='#000000'
                title="by clicking you get the color picker in order to change shoe's color "
            />
            <span>Customize</span>
        </div>
    )
}
