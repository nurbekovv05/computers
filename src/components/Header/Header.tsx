import React from 'react';
import logoHeader from './../../assets/img/icon.svg'
import pagePhoto from './../../assets/img/main-screen__bgc.svg'
const Header = () => {
    return (
        <>
            <div>
                <img src={pagePhoto} alt="" className='absolute z-[-1] top-0 object-cover'/>
                <div className='mt-6'>
                    <div className="container">
                        <div className="header-content">
                            <div className="flex items-center justify-between ">
                                <img src={logoHeader} alt=""/>
                                <div className="flex items-center text-white font-[400]">
                                    <h2 className='mx-3'>Главная</h2>
                                    <h2 className='mx-3'>Курсы</h2>
                                    <h2 className='mx-3'>Расписание</h2>
                                    <h2 className='mx-3'>Преподаватели</h2>
                                    <h2 className='mx-3'>Рассылка</h2>
                                    <h2 className='mx-3'>Контакты</h2>
                                </div>
                                <div className="button-header">
                                    <button className='bg-[#C89AFC] w-[183px] h-[44px] text-white rounded-[50px]'>Зайти в кабинет</button>
                                </div>
                            </div>
                            <div className='mt-[10rem]'>
                                <h1 className=' text-white text-[48px] font-[600] ml-[7rem]'>Первый курс <br/>
                                    по  компьютерной сборке</h1>

                                <div className='flex items-center ml-24 mt-10'>
                                    <div className='bg-[#121212] w-[100px] h-[110px] mx-3'>
                                        <div className='text-center pt-4'>
                                            <h2 className='text-white text-4xl bold-[500]'>18</h2>
                                            <p className='text-[#717171] pt-1'>Дней</p>
                                        </div>
                                    </div>
                                    <div className='bg-[#121212] w-[100px] h-[110px] mx-3'>
                                        <div className='text-center pt-4'>
                                            <h2 className='text-white text-4xl bold-[500]'>18</h2>
                                            <p className='text-[#717171] pt-1'>Часов</p>
                                        </div>
                                    </div>
                                    <div className='bg-[#121212] w-[100px] h-[110px] mx-3'>
                                        <div className='text-center pt-4'>
                                            <h2 className='text-white text-4xl bold-[500]'>18</h2>
                                            <p className='text-[#717171] pt-1'>Минут</p>
                                        </div>
                                    </div>
                                    <div className='bg-[#121212] w-[100px] h-[110px] mx-3'>
                                        <div className='text-center pt-4'>
                                            <h2 className='text-white text-4xl bold-[500]'>18</h2>
                                            <p className='text-[#717171] pt-1'>Секунд</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;