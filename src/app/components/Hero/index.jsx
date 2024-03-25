// import './LandingPageHero.css'

// export const LandingPageHero = () => {
//     return (
//         <div className='content'>
//             <div className='text'>
//                 <h1>Get Premium free for 1 month</h1>
//                 <p className='one'>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
//                 <div className='button'>
//                     <button className='button-one'>GET STARTED</button><button className='button-two'>SEE OTHER PLANS</button>
//                 </div>
//                 <p><a href="#Terms and conditions apply.">Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium.</p>
//             </div>
//         </div>
//     )
// }

import style from './LandingPageHero.module.css'

export const Hero = () => {
    return (<section className={style.hero}>
        <h1 className={style.title}>Get Premium free for 1 month</h1>                                     
        <p className={style.description}>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>

        <div className={style['button-group']}>
            <button className='btn'>GET STARTED</button><button className='btn-outline'>SEE OTHER PLANS</button></div>

        <div className={style.terms}>
        <a href="#Terms and conditions apply.">Terms and conditions apply.</a>  
        1 month free not available for users who have already tried Premium.
        </div>
    </section>



    )
}
