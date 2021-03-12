import { FC } from 'react';
import Link from 'next/link'

interface IconLink {
    iconUrl: string;
    text: string;
    linkUrl: string;
}
const Iconlink: FC<IconLink> = ({iconUrl,text,linkUrl})  =>　{
    return(
        <>
            <article className="hoge__card">
                <Link href={linkUrl}>
                    <a>
                        <div className="hoge__card__imagebox">
                            <figure className="hoge__card__image">
                                <img src={iconUrl} alt=""/>
                            </figure>
                        </div>
                        <div className="hoge__card__textbox">
                            <h3 className="hoge__card__title">{text}</h3>
                        </div>
                    </a>
                </Link>
            </article>
        </>
    )
}
export default Iconlink