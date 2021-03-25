import '../styles/reset.css';
import '../styles/globals.css'
import '../styles/modify.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp
