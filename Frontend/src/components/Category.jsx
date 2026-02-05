import React from 'react'

const Category = () => {
    return (
        <div className="flex items-center">
            <div className="relative bg-[url('serum.jpg')] bg-cover 
            bg-no-repeat bg-center h-[500px] w-[400px] bg-slate-300
            m-[20px] flex items-center justify-center
        ">
                <div className="absolute inset-0
            bg-gradient-to-l from-black/50 to-transparent
            ">
                    <div className="relative flex items-center justify-center
                h-full">
                        <h2 className="text-white text-[30px] font-bold
                    ">Serums</h2>

                    </div>
                </div>

            </div>
             <div className="relative bg-[url('serum1.jpg')] bg-cover 
            bg-no-repeat bg-center h-[500px] w-[400px] bg-slate-300
            m-[20px] flex items-center justify-center
        ">
                <div className="absolute inset-0
            bg-gradient-to-l from-black/50 to-transparent
            ">
                    <div className="relative flex items-center justify-center
                h-full">
                        <h2 className="text-white text-[30px] font-bold
                    ">Toners</h2>

                    </div>
                </div>

            </div>
             <div className="relative bg-[url('foundation.jpg')] bg-cover 
            bg-no-repeat bg-center h-[500px] w-[400px] bg-slate-300
            m-[20px] flex items-center justify-center
        ">
                <div className="absolute inset-0
            bg-gradient-to-l from-black/50 to-transparent
            ">
                    <div className="relative flex items-center justify-center
                h-full">
                        <h2 className="text-white text-[30px] font-bold
                    ">Foundations</h2>

                    </div>
                </div>

            </div>
             <div className="relative bg-[url('lotion.jpg')] bg-cover 
            bg-no-repeat bg-center h-[500px] w-[400px] bg-slate-300
            m-[20px] flex items-center justify-center
        ">
                <div className="absolute inset-0
            bg-gradient-to-l from-black/50 to-transparent
            ">
                    <div className="relative flex items-center justify-center
                h-full">
                        <h2 className="text-white text-[30px] font-bold
                    ">Losions</h2>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Category