import { FC } from 'react';
import Link from 'next/link'

interface PostData {
    thumbnailUrl: string;
    title: string;
    exerpt: string;
    category: string;
    linkUrl: string;
}
const Post: FC<PostData> = ({thumbnailUrl,title,exerpt,category,linkUrl})  =>　{
    return(
        <>
            <article className="hoge__card">
                <Link href={linkUrl}>
                    <a>
                        <div>{category}</div>
                        <div className="hoge__card__imagebox">
                            <figure className="hoge__card__image">
                                <img src={thumbnailUrl} alt=""/>
                            </figure>
                        </div>
                        <div className="hoge__card__textbox">
                            <h3 className="hoge__card__title">{title}</h3>
                            <p>{exerpt}</p>
                        </div>
                        <div className="hoge__card__buttonbox">
                            button
                        </div>
                    </a>
                </Link>
            </article>
        </>
    )
}
export default Post