import React from 'react';
import Zurag1 from './jijig zurag.jpg'
import Zurag2 from './323568684_746557983558895_379527181294929521_n.jpg'
import Zurag3 from './323568684_746557983558895_379527181294929521_n.jpg'
import Zurag4 from './323568684_746557983558895_379527181294929521_n.jpg'
import Zurag5 from './323568684_746557983558895_379527181294929521_n.jpg'
import Zurag6 from './323568684_746557983558895_379527181294929521_n.jpg'
import Zurag7 from './323568684_746557983558895_379527181294929521_n.jpg'

function Jijigzurag() {
    const jijigBannerZurag =[
        {
            id: 1,
            img: Zurag7,
            text:'Bilguun'
        },
        {
            id: 2,
            img: Zurag2,
            text:'Bilguun'
        },
        {
            id: 3,
            img: Zurag3,
            text:'Bilguun'
            
        },
        {
            id: 4,
            img: Zurag4,
            text:'Bilguun'
        },
        {
            id: 5,
            img: Zurag5,
            text:'Bilguun'
        },
        {
            id: 6,
            img: Zurag6,
            text:'Bilguun'
        },
    ]
  return (
    <div className='w-[60%] h-[900px] bg-[black] rounded-[30px] relative'>
        <img src={Zurag1} className='w-[100%] h-[100%] rounded-[30px] object-cover'/>
        <h1 className='absolute top-[0] text-[3rem] text-[white] left-[50%] translate-x-[-50%]'>MBA</h1>
        <h1 className='absolute top-[5%] text-[3rem] text-[white] left-[50%] translate-x-[-50%]'>Play offs</h1>
        <button className='absolute top-[12%] text-[1.5rem] text-[white] left-[50%] translate-x-[-50%]  '>unbalanced</button>
        <div className='absolute grid grid-cols-3 w-full top-[200px] left-[50px] gap-[30px] '>
            {
                jijigBannerZurag.map((utga)=>(
                    <div className='' >
                        <img src={utga.img} className='h-[200px] w-[150px] object-cover rounded-[30px] ' />
                        <p className='text-[red] pl-[20%]'>{utga.text}</p>
                    </div>
                ))
            }
            {/* <div><img src={Zurag2} className='w-[150px] h-[200px] rounded-[30px]'/></div>
            <img src={Zurag3} className='w-[150px] h-[200px] rounded-[30px]'/>
            <img src={Zurag4} className='w-[150px] h-[200px] rounded-[30px]'/>
            <img src={Zurag5} className='w-[150px] h-[200px] rounded-[30px]'/>
            <img src={Zurag6} className='w-[150px] h-[200px] rounded-[30px]'/>
            <img src={Zurag7} className='w-[150px] h-[200px] rounded-[30px]'/> */}
        </div>
        <div className='w-[80%] h-[70px] bg-black absolute top-[78%] left-[10%] rounded-tl-[30px] rounded-bl-[30px] flex'>
            <div className='w-[15%] h-[70px] bg-white  rounded-tl-[30px] rounded-bl-[30px]'>
                <p className='pl-[20%] pt-[20%]'>bilguun</p>
            </div>
            <div className='w-[250px] h-[70px] bg-[purple]'>
            <p className='pl-[35%] pt-[8%]'>bilguun</p>
            </div>
            <div className='w-[300px] h-[70px] bg-[white]'>
            <p className='pl-[40%] pt-[8%]'>bilguun</p>
            </div>
        </div>
        <div className='w-[80%] h-[70px] bg-black absolute top-[87%] left-[10%] rounded-tl-[30px] rounded-bl-[30px] flex'>
            <div className='w-[15%] h-[70px] bg-white  rounded-tl-[30px] rounded-bl-[30px]'>
            <p className='pl-[20%] pt-[20%]'>bilguun</p>
            </div>
            <div className='w-[250px] h-[70px] bg-[purple]'>
            <p className='pl-[35%] pt-[8%]'>bilguun</p>
            </div>
            <div className='w-[300px] h-[70px] bg-[white]'>
            <p className='pl-[40%] pt-[8%]'>bilguun</p>
            </div>
        </div>
    </div>
  );
}

export default Jijigzurag;
