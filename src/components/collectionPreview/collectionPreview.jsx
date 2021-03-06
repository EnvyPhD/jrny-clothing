import React from 'react'
import './collectionPreview.style.scss'
import CollectionItem from '../collectionItem/collectionItem'


const CollectionPreview = ({title, items}) => (
    <div className='collectionPreview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {items
            .filter((item,idx) => idx < 4)
            .map(({ id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps} /> 
            ))}
        </div>
    </div>
)

export default CollectionPreview;