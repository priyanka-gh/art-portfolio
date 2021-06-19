// import React from 'react'
// import Navbar from '../nav/navbar'
// import './Home.css'
// import AddIcon from '@material-ui/icons/Add';

// const Home = () => {
//     return (
//         <div className="grid-container">
//             <div className="one">
//                 <div className="grid-item grid-item-1">
//                     <img src="/images/fourteen.jpg"/>
//                     <div className="middle fadeIn-top">
//                         <AddIcon className="svg_icon"/>
//                     </div>
//                 </div>
//                 <div className="grid-item grid-item-2">
//                     <img src="/images/six.jpg"/>
//                     <div className="middle fadeIn-top">
//                         <AddIcon className="svg_icon"/>
//                     </div>
//                 </div>
//                 <div className="grid-item grid-item-3">
//                     <img src="/images/seventeen.jpg"/>
//                     <div className="middle fadeIn-top">
//                         <AddIcon className="svg_icon"/>
//                     </div>
//                 </div>
//             </div>
//             <div className="two">
//                 <div className="grid-item grid-item-4">
//                     <img src="/images/green2.jpg"/>
//                     <div className="middle fadeIn-top">
//                         <AddIcon className="svg_icon"/>
//                     </div>
//                 </div>
//                 <div className="grid-item grid-item-5">
//                     <img src="/images/sixteen.jpg"/>
//                     <div className="middle fadeIn-top">
//                         <AddIcon className="svg_icon"/>
//                     </div>
//                 </div>
//                 <div className="grid-item grid-item-6">
//                     <img src="/images/thirteen.jpg"/>
//                     <div className="middle fadeIn-top">
//                         <AddIcon className="svg_icon"/>
//                     </div>
//                 </div>
//             </div>
//             <div className="three">
//                 <div className="grid-item grid-item-7">
//                     <img src="/images/three.jpg"/>
//                     <div className="middle fadeIn-top">
//                         <AddIcon className="svg_icon"/>
//                     </div>
//                 </div>
//                 <div className="grid-item grid-item-8">
//                     <img src="/images/twenty.jpg"/>
//                     <div className="middle fadeIn-top">
//                         <AddIcon className="svg_icon"/>
//                     </div>
//                 </div>
//                 <div className="grid-item grid-item-9">
//                     <img src="/images/two.jpg"/>
//                     <div className="middle fadeIn-top">
//                         <AddIcon className="svg_icon"/>
//                     </div>
//                 </div>
//             </div>         
//         </div>
//     )
// }

// export default Home


import React from 'react'
import App from '../App'
import {useState,useEffect} from 'react';
import {SRLWrapper} from 'simple-react-lightbox'
import AddIcon from '@material-ui/icons/Add';
import './Home.css'
import Aos from "aos"
import 'aos/dist/aos.css'
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

    
    useEffect(()=>{
        Aos.init({duration: 9000})
    },[])

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
                <div className="image-card" data-aos="fade-up" key={image.id}>
                    <a href={`/images/${image.name}`}>
                        <img className="image "  src={`/images/${image.name}`} alt=""></img>
                    <div className="middle fadeIn-top">
                        <AddIcon className="svg_icon"/>
                    </div>
                    </a>
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
