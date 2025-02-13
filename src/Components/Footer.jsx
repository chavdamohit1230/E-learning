import  blacklogo from '../assets/images/blacklogo.webp';
const Footer =()=>{

    return(

        <>
            <div className="h-[470px] bg-[#e7f8ee] w-[100%] absolute flex ">
                <div className="w-50 bg-blue-400 h-[80%] ml-20 mt-15 ">
                    <img src={blacklogo} alt="" className="w-15px h-13"/>
                        <p className='text-center text-2xl mt-2'>Caribbean Ct</p>
                        <p className='text-center text-[#309255] mt-2'>Haymarket, Virginia (VA).</p>
                            
                </div>
        
            </div>

        </>
    );


}
export default Footer;