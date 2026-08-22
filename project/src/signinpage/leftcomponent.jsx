const Leftsection = () => {
return(
<div className="w-1/2 relative overflow-hidden h-screen">
  <div className="absolute inset-0 bg-[url('/school.jpe')] bg-cover bg-center blur-sm scale-105" />
  <div className="relative z-10 items-center justify-center flex h-full">
        <div className="absolute h-[300px] w-[80%] 
            rounded-[15px] bg-gray-800/50 border-[1px] border-white/60
            "/>
            <div className="relative flex text-center text-[40px] 
        font-semibold text-white w-[75%]">
          <p>Welcome to your academic center.</p>
        </div>
      </div>
</div>)}

export default Leftsection