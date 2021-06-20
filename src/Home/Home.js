import React from 'react'
import {useState,useEffect} from 'react';
import {SRLWrapper} from 'simple-react-lightbox'
import AddIcon from '@material-ui/icons/Add';
import Fade from 'react-reveal/Fade';
import './Home.css'

const images=[
    {id:'id1' , name:'fourteen.jpg' , tag:'Mandala'},
    {id:'id2' , name:'vedtara.jpg' , tag:'Digital'},
    {id:'id3' , name:'sushant.jpg' , tag:'Sketching'},
    {id:'id4' , name:'six.jpg' , tag:'Mandala'},
    {id:'id5' , name:'ps4.jpg' , tag:'Digital'},
    {id:'id6' , name:'jonsnow.jpg' , tag:'Sketching'},
    {id:'id7' , name:'seventeen.jpg' , tag:'Mandala'},
    {id:'id8' , name:'green2.jpg' , tag:'Mandala'},
    {id:'id9' , name:'ps1.jpg' , tag:'Digital'},
    {id:'id10' , name:'ps6.jpg' , tag:'Digital'},
    {id:'id11' , name:'sixteen.jpg' , tag:'Mandala'},
    {id:'id12' , name:'eye.jpg' , tag:'Digital'},
    {id:'id13' , name:'thirteen.jpg' , tag:'Mandala'},
    {id:'id14' , name:'ps3.jpg' , tag:'Digital'},
    {id:'id15' , name:'three.jpg' , tag:'Oil Pastel'},
    {id:'id16' , name:'girl.jpg' , tag:'Digital'},
    {id:'id17' , name:'twenty.jpg' , tag:'Mandala'},
    {id:'id18' , name:'srk.jpg' , tag:'Sketching'},
    {id:'id19' , name:'ps2.jpg' , tag:'Digital'},
    {id:'id20' , name:'two.jpg' , tag:'Mandala'},
    {id:'id21' , name:'leemin.jpg' , tag:'Digital'},

]


const options={
    setting:{
        overlayColor:'green'
    },
    buttons:{
        backgroundColor:'transparent',
        iconColor:"white"
    }
};

const Home = () => {

    const [tag,setTag]=useState('all')
    const [filtered,setFiltered]=useState([])

    useEffect(()=>{
        tag==='all'?setFiltered(images):
                    setFiltered(images.filter(image=>
                                image.tag===tag))
    },[tag])
    return (
        <div className="filters" handleSetTag={setTag}>
            <TagButton className="tags" name="Mandala" handleSetTag={setTag} tagActive={tag==='Mandala'?true:false}/>
            <TagButton className="tags" name="Oil Pastel" handleSetTag={setTag} tagActive={tag==='Oil Pastel'?true:false}/>
            <TagButton className="tags" name="Sketching" handleSetTag={setTag} tagActive={tag==='Sketching'?true:false}/>
            <TagButton className="tags" name="Digital" handleSetTag={setTag} tagActive={tag==='Digital'?true:false}/>
            <TagButton className="tags" name="all" handleSetTag={setTag} tagActive={tag==='all'?true:false}/>
            <SRLWrapper options={options}>
            <div className="container">
            {filtered.map(image=>
                <div className="image-card"  key={image.id}>
                    <Fade left>
                    <a href={`/images/${image.name}`}>
                        <img className="hoverimg" src={`/images/${image.name}`} alt=""></img>
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

export default Home
