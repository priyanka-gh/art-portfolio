import React from 'react'
import './Old.css'
import {useState,useEffect} from 'react';
import {SRLWrapper} from 'simple-react-lightbox'
import AddIcon from '@material-ui/icons/Add';
import Fade from 'react-reveal/Fade';


const images=[
    {id:'1' , name:'acrylic.jpg' , tag:'Painting'},
    {id:'2' , name:'flower.jpg' , tag:'Painting'},
    {id:'3' , name:'god.jpg' , tag:'Painting'},
    {id:'4' , name:'landscape.jpg' , tag:'Painting'},
    {id:'5' , name:'pen.jpg' , tag:'Still Life'},
    {id:'6' , name:'pencil.jpg' , tag:'Still Life'},
    {id:'7' , name:'scenery.jpg' , tag:'Painting'},
    {id:'8' , name:'women.jpg' , tag:'Painting'}

]

const options={

    buttons:{
        backgroundColor:'transparent',
        iconColor:"white"
    }
};

const Old = () => {


    const [tag,setTag]=useState('all')
    const [filtered,setFiltered]=useState([])

    useEffect(()=>{
        tag==='all'?setFiltered(images):
                    setFiltered(images.filter(image=>
                                image.tag===tag))
    },[tag])
    return (
        <div className="filters" handleSetTag={setTag}>
            <TagButton name="Painting" handleSetTag={setTag} tagActive={tag==='Painting'?true:false}/>
            <TagButton name="Still Life" handleSetTag={setTag} tagActive={tag==='Still Life'?true:false}/>
            <TagButton name="all" handleSetTag={setTag} tagActive={tag==='all'?true:false}/>
            <SRLWrapper options={options}>
            <div className="container">
            {filtered.map(image=>
                <div className="image-card"  key={image.id}>
                    <Fade left>
                    <a href={`/images/${image.name}`}>
                    <img className="image" src={`/images/${image.name}`} alt=""></img>
                    <div className="middle fadeIn-top">
                        <AddIcon className="svg_icon"/>
                    </div>
                    </a>
                    </Fade>
                </div>
            )}
            </div>
            </SRLWrapper>
        </div>
    )
}

const TagButton=({name,handleSetTag,tagActive})=>{
    return <button className="submit" onClick={
        ()=>{
            handleSetTag(name)
            } }>
        {name.toUpperCase()}
    </button>
}

export default Old
