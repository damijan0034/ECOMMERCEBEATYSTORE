import {Typewriter} from 'react-simple-typewriter'

const Announcment = () => {
  return (
    <div className="bg-[#e9acd9] text-white text-[18px] 
    font-semibold h-[30px] text-center">
      <Typewriter
        words={['Beaty','Cosmetics','Skincare','Makeup','Haircare']}
        loop={0}
        cursor
        cursorStyle=''
        typeSpeed={150}
        deleteSpeed={50}
      />
    </div>
  )
}

export default Announcment