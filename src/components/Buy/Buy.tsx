import React from 'react';

const Buy = () => {
    return (
        <div className='bg-[#121212] mt-[9rem] py-10'>
            <div className="container">
                <div className='ml-24'>
                    <div className='flex items-center'>
                        <button className='w-[166px] h-[44px] text-white bg-[#DF5950] rounded-[50px]'>
                            Заказать курс
                        </button>
                        <div className='ml-10'>
                            <div className='flex items-center mb-4'>
                                <p className='text-[#717171]'>Учеников всего:</p>
                                <p className='text-white ml-[101px]'>200</p>
                            </div>
                            <div className='flex items-center '>
                                <p className='text-[#717171]'>Успешно закончили курс:</p>
                                <p className='text-white ml-[30px]'>190</p>
                            </div>
                        </div>
                        <div className='ml-10'>
                            <div className='flex '>
                                <p className='text-[#717171]'>Заработано учениками:</p>
                                <p className='text-white ml-8'>400 000₽</p>
                            </div>
                            <div className='flex my-2'>
                                <div className='w-[380px] h-[6px] bg-[#DF5950]'></div>
                                <div className='w-[250px] h-[6px] bg-white'></div>
                            </div>
                            <div className='flex'>
                                <p className='text-[#717171] '>0</p>
                                <p className='text-[#717171] ml-[34rem]'>1 000 000₽</p>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Buy;