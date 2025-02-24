import React from 'react'
import Image1 from '../../assets/category/earphone.png'
import Image2 from '../../assets/category/watch.png'
import Image3 from '../../assets/category/macbook.png'
import Button from '../Shared/Button';

const Category = () => {
    return (
        <div className="py-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* first col */}
                <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-gray-400">Enjoy</p>
                            <p className="text-2xl font-semibold mb-[2px]">With</p>
                            <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Earphone</p>
                            <Button text="Browse" bgColor={'bg-red-500'} textColor={'text-white'} />
                        </div>
                    </div>
                    <img src={Image1} alt="" className="w-[320px] absolute bottom-0" />
                </div>
                {/* sec col  */}
                <div className="py-10 pl-5 bg-gradient-to-br from-yellow-400 to-yellow-500 text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-white-400">Enjoy</p>
                            <p className="text-2xl font-semibold mb-[2px]">With</p>
                            <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Gadget</p>
                            <Button text="Browse" bgColor={'bg-white'} textColor={'text-yellow-500'} />
                        </div>
                    </div>
                    <img src={Image2} alt="" className="w-[320px] absolute -right-4 lg:top-[40px]" />
                </div>
                {/* third col */}
                <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-red-500 to-red-500 text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-white-400">Enjoy</p>
                            <p className="text-2xl font-semibold mb-[2px]">With</p>
                            <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Laptop</p>
                            <Button text="Browse" bgColor={'bg-white'} textColor={'text-red-500'} />
                        </div>
                    </div>
                    <img src={Image3} alt="" className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Category
