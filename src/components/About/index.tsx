import React from 'react';
import comp from './../../assets/img/about__img.svg'
import bgc from './../../assets/img/bgc.svg'
import start from './../../assets/img/start-1.svg'
import prof from './../../assets/img/icon-1.svg'
import prof1 from './../../assets/img/icon-2.svg'
import prof2 from './../../assets/img/icon-3.svg'
import bottom from './../../assets/img/brand.svg'
import ms from './../../assets/img/logo-ms.svg'
const Index = () => {
    return (
        <div>
            <img src={bgc} alt="" className='absolute z-[-1]'/>
            <div className="container">
                <div className='pt-[12rem]'>
                    <div className='z-[1] flex justify-around'>
                        <img src={comp} alt="" className='w-[400px]'/>
                        <div className='mt-10'>
                            <h1 className='text-white text-[44px] font-[700]'>Чем мы занимаемся?</h1>
                            <p className='w-[630px] text-white mt-6'>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Eget neque, dignissim et feugiat elit augue in
                                suspendisse egestas. Dictum vestibulum mi et sed nunc
                                , orci fermentum vestibulum, morbi. Et neque, adipiscing
                                sapien sem senectus praesent aenean consequat.
                                Aenean facilisi turpis aliquet fringilla.
                                Nunc sem felis sed interdum feugiat mattis elit,
                                sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet.
                                Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. </p>
                        </div>
                    </div>
                </div>
                <div className='mt-[10rem]'>
                    <div className='ml-14'>
                        <div className='flex items-center'>
                            <img src={start} alt=""/>
                            <h1 className='text-white text-[45px] font-[500] ml-8'>Быстрый старт</h1>
                        </div>
                        <div className='mt-8'>
                            <p className='text-[#717171] text-[16px] w-[400px]'>Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
                        </div>
                        <div className='mt-20'>
                            <div className='flex items-center'>
                                <div>
                                    <p className='text-white text-[36px] font-[600]'>100%</p>
                                    <div className='w-[300px] h-[80px] bg-[#C89AFC] my-6'></div>
                                    <p className='w-[290px] text-[#717171] text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                                </div>
                                <div>
                                    <p className='text-white text-[36px] font-[600]'>75%</p>
                                    <div className='w-[300px] h-[60px] bg-[#C89AFC] my-8'></div>
                                    <p className='w-[290px] text-[#717171] text-[13px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                                </div>
                                <div>
                                    <p className='text-white text-[36px] font-[600] '>50%</p>
                                    <div className='w-[300px] h-[30px] bg-[#C89AFC] my-14 ' ></div>
                                    <p className='w-[290px] text-[#717171] text-[13px] '>Lorem ipsum dolor sit amet,  Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                                </div>
                                <div>
                                    <p className='text-white text-[36px] font-[600]'>Итог</p>
                                    <div className='w-[300px] h-[10px] bg-[#C89AFC] my-16'></div>
                                    <p className='w-[290px] text-[#717171] text-[13px]'>Lorem ipsum dolor sit amet,  Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className='text-white text-[44px] font-[500] text-center mt-[10rem] mr-10'>Получите профессию прямо сейчас</h1>
                         <div className='ml-10 mt-20'>
                             <div className='flex mx-6'>
                                 <div className=''>
                                     <img src={prof} alt="" className='ml-[6rem]'/>
                                     <h1 className='text-white text-[24px] font-[500] w-[300px] text-center my-10'>Только практические
                                         навыки в работе</h1>
                                     <p className='text-[#717171] w-[350px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                                 </div>
                                 <div className=''>
                                     <img src={prof1} alt="" className='ml-[6rem]'/>
                                     <h1 className='text-white text-[24px] font-[500] w-[300px] text-center my-10'>Только практические
                                         навыки в работе</h1>
                                     <p className='text-[#717171] w-[350px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                                 </div>
                                 <div className=''>
                                     <img src={prof2} alt="" className='ml-[6rem]'/>
                                     <h1 className='text-white text-[24px] font-[500] w-[300px] text-center my-10'>Только практические
                                         навыки в работе</h1>
                                     <p className='text-[#717171] w-[350px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                                 </div>
                             </div>
                         </div>

                        </div>
                        <div className='mt-[14rem]'>
                            <div className='flex '>
                                <img src={bottom} alt="" />
                                <h1 className='text-white text-[40px] font-[600] ml-16'>Партнеры - топовые бренды</h1>
                            </div>
                            <div>
                                <div className='flex'>
                                    <img src={ms} alt=""/>
                                    <img src={ms} alt=""/>
                                    <img src={ms} alt=""/>
                                    <img src={ms} alt=""/>
                                </div>
                                <div className='flex'>
                                    <img src={ms} alt=""/>
                                    <img src={ms} alt=""/>
                                    <img src={ms} alt=""/>
                                    <img src={ms} alt=""/>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Index;