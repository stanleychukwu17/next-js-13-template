'use client'
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { FaPencil, FaRegTrashCan  } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import './page.scss'

import { GET_ALL_THE_GAMES } from '@/app/graphql/queries';
import Link from 'next/link';

type GamesProp = {
    id: number
    title: string
    date_released: string
    total_users_played: number
    total_reviews: number
}

// helper component
const GamesComponent = ({total_users_played, total_reviews, ...GamesProp}: GamesProp) => {
    const [showEdit, setShowEdit] = useState<boolean>(false)
    const [gameTitle, setGameTitle] = useState(GamesProp.title)
    const [gameReleaseDate, setGameReleaseDate] = useState(GamesProp.date_released)

    return (
        <div className="py-5">
            <div className="">
                {!showEdit && <div className="">
                    <div className="text-2xl px-2">{gameTitle}</div>
                    <div className="G_activitiesC py-2 text-sm flex">
                        <div className="">{gameReleaseDate}</div>
                        <div className=""><Link href="/users_played">{total_users_played} users played</Link></div>
                        <div className="">
                            <Link href="/reviews" className='flex items-center space-x-1'>
                                <span>
                                    <CiStar />
                                </span>
                                <span>{total_reviews} reviews</span>
                            </Link>
                        </div>
                    </div>
                </div>}
                {showEdit && <div className=''>
                    <div className="flex items-center pb-5">
                        <div className="w-32">Game title:</div>
                        <div className=""><input type="text" className='w-[350px]' value={gameTitle} onChange={(e) => { setGameTitle(e.target.value) }} /></div>
                    </div>
                    <div className="flex items-center pb-5">
                        <div className="w-32">Release date:</div>
                        <div className=""><input type="text" value={gameReleaseDate} onChange={(e) => { setGameReleaseDate(e.target.value) }} /></div>
                    </div>
                    <div className="GenBtn1">
                        <button>Save changes</button>
                    </div>
                </div>}
            </div>
            {!showEdit && <div className="G_workBtn">
                <button className='hover:text-[#0056b6]'onClick={() => { setShowEdit(true) }}>
                    <span><FaPencil /></span>
                    <span>Edit game</span>
                </button>
                <button className='hover:text-[#df0e3a]'>
                    <span><FaRegTrashCan /></span>
                    <span>Delete game</span>
                </button>
            </div>}
        </div>
    )
}

export default function GamesPage() {
    const {data, error, loading} = useQuery(GET_ALL_THE_GAMES)
    console.log({data, error, loading})

    return (
        <section className="GameMCvr flex">
            <div className="w-[70%]">
                {loading && <p className='text-2xl font-bold'>Loading...</p>}
                {data && data.games?.map((item: GamesProp) => {
                    return (<GamesComponent key={item.id} {...item} />);
                })}
            </div>

            <div className="w-[30%]">
                <div className="text-2xl font-medium">Add a new Game</div>
                <div className="GInp_General">
                    <form action="">
                        <div className="GInp_cvr">
                            <div className="GInp_title">Game title</div>
                            <div className="GInp_input">
                                <input type="text" className='w-[350px]' />
                            </div>
                        </div>
                        <div className="GInp_cvr">
                            <div className="GInp_title">Release date</div>
                            <div className="GInp_input">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="GInp_Btn GenBtn1">
                            <button className="">Save new game </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}