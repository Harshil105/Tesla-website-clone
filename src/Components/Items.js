import React from 'react'
import Button from './Button'
import './items.css'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const items = ({Title,desc,bgimg,lbt,rbt,twobtn,lbtl,rbtl}) => {
  return (
    <div className='item' style={{
        backgroundImage:`url(${bgimg})`
    }}>
        <div className="item_container">
            <div className="item_text">
                <p>{Title}</p>
                <div className="item_desc">
                    <p>{desc}</p>
                </div>
            </div>
            <div className="item_lower">
                <div className="item_buttons">
                    <Button imp="primary" text={lbt} link={lbtl}/>
                    {twobtn &&(
                        <Button imp="secondary" text={rbt} link={rbtl}/>
                    )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default items