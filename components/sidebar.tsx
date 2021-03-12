import { FC } from 'react';
import Link from 'next/link'

const sidebar: FC = ()  =>　{
    return(
        <>
            <div className="hoge__card__imagebox">
                <figure className="hoge__card__image">
                    <img src="#" alt=""/>
                </figure>
            </div>
            <div className="hoge__card__textbox">
                <h3 className="hoge__card__title">打田雅俊</h3>
                <p>自己紹介的な文章<br/>自己紹介的な文章<br/>自己紹介的な文章</p>
            </div>
            <Link href="#">
                <a>
                    自己紹介へ
                </a>
            </Link>
        </>
    )
}
export default sidebar