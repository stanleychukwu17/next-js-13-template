'use client'
import './page.scss'
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { FaPencil, FaRegTrashCan  } from "react-icons/fa6";

import { GET_ALL_THE_GAMES } from '@/app/graphql/queries';
import Link from 'next/link';

// helper component


export default function GamesPage() {
    const {data, error, loading} = useQuery(GET_ALL_THE_GAMES)
    console.log({data, error, loading})

    return (
        <section className="GameMCvr flex">
            <div className="w-[70%]">
                <div className="py-5">
                    <div className="">
                        <div className="text-2xl px-2">Grand theft auto part 2</div>
                        <div className="G_activitiesC py-2 text-sm flex">
                            <div className="">Oct 2022</div>
                            <div className=""><Link href="/users_played">15users played</Link></div>
                            <div className=""><Link href="/reviews">45 reviews</Link></div>
                        </div>
                    </div>
                    <div className="G_workBtn">
                        <button className='hover:text-[#0056b6]'>
                            <span><FaPencil /></span>
                            <span>Edit game</span>
                        </button>
                        <button className='hover:text-[#df0e3a]'>
                            <span><FaRegTrashCan /></span>
                            <span>Delete game</span>
                        </button>
                    </div>
                </div>
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
                        <div className="GInp_Btn">
                            <button className="">
                                Save new game
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}