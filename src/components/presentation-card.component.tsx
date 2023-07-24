import ButtonIcon from './button-icon.component';
import {ReactComponent as GithubLogo} from '../assets/github.svg';
import {ReactComponent as LinkedInLogo} from '../assets/linkedin.svg';
import {ReactComponent as EmailLogo} from '../assets/email.svg';

const PresentationCard = () => {
    return (
        <header className='m-3 border rounded-lg flex flex-col items-center text-center pb-8 pt-6'>
            <h1 className='text-3xl font-bold'> Nicolás Bolaños Castro</h1>
            {/* <img src='/src/assets/animoji-FA.webp' width='40px' height='40px'/> */}
            <h2 className='mt-3 text-xl font-semibold'> Web UI Developer </h2>
            <p className='text-gray-400 mt-4'> nicolas.bolanos97@gmail.com </p>
            <div className='flex gap-3 mt-5'>
                <ButtonIcon href='/' Icon={GithubLogo}/>
                <ButtonIcon href='/' Icon={LinkedInLogo}/>
                <ButtonIcon href='mailto:nicolas.bolanos97@gmail.com' Icon={EmailLogo}/>
            </div>
        </header>
    );
};

export default PresentationCard;
