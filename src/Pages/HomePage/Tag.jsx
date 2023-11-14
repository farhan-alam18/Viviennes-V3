import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShippingOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';

const Tag = () =>{
  return (
    <div className="flex flex-col text-center p-6 gap-20 m-10 text-xs font-title md:flex-row md:my-15 md:mx-20">
        <div>
            <LocalShippingIcon style={{ color:'#F2C66D', fontSize:'40px'}}/>
            <div className='font-bold text-[#333333] text-[14px] m-2'>Delivery</div>
            <p> " Swiftly processed orders ensuring your purchases arrive on time. Experience our commitment to reliability with every delivery. "</p>
        </div>
        <div>
            <SupportAgentOutlinedIcon style={{ color:'#F2C66D' , fontSize:'40px'}}/>
            <div className='font-bold text-[#333333] text-[14px] m-2'>Customer Care</div>
            <p>" Your satisfaction is our utmost priority. Reach out any time, and our team is ready to assist, making sure your experience is seamless. "</p>
        </div>
        <div>

            <PaymentsOutlinedIcon style={{ color:'#F2C66D' , fontSize:'40px' }}/>
            <div className='font-bold text-[#333333] text-[14px] m-2'>Payment Security</div>
            <p>" Your safety, our responsibility. Each transaction is guarded with the highest security standards. Sleep easy knowing your details remain confidential and secure. "</p>
        </div>
    </div>
)
}

export default Tag