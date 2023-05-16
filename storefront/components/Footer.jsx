import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <div className='flex justify-center items-center w-screen h-screen gap-20'>
            <Image src="/illustrations/Feedback-bro.svg" alt='footerIllustration' width={750} height={750} />

            <form action="" className="flex flex-col flex-wrap justify-center gap-10 w-1/4">
                <h1 className='font-extrabold text-6xl text-green-700'>Give us your Precious FeedBack </h1>
                <div className='flex flex-col flex-wrap gap-2'>
                    <input type="email" placeholder='Enter Email'
                        className='inputField'/>
                    <textarea name="feedBack" id="feedBack" cols="30" rows="10" className='inputField' placeholder='FeedBack Here'></textarea>
                    <button type='submit' className='primaryBtn'>Send FeedBack</button>
                </div>
            </form>
        </div>
    )
}

export default Footer 