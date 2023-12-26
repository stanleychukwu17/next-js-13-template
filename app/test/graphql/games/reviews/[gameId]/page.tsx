"use client"
import { useMutation } from "@apollo/client"
import {useForm, SubmitHandler} from "react-hook-form"
import {ADD_NEW_REVIEW_FOR_THIS_GAME} from "@/app/graphql/mutations"
import './page.scss'

type GameReviewProps = {
    params: {
        gameId : number
    }
}
type add_new_review_form_props = {
    gameId: number,
    authorId: number,
    ratings: number,
    content: string
}

export default function GameReviewPage({params} : GameReviewProps) {
    const {gameId} = params
    const [ addNewReviewMutation, {data: newReviewData, loading: addNewItemLoading, error: errorInAddingReview, reset: resetNewReviewMutation} ] = useMutation(ADD_NEW_REVIEW_FOR_THIS_GAME, {errorPolicy: 'all'}) // apollo-graphql mutation for adding a new review for a game
    const { register: registerGameInput, handleSubmit: handleNewGameSubmit, setValue: newGameSetValue, formState: {errors:newGameError} } = useForm<add_new_review_form_props>() // react-hook-form for adding a review

    // the react-hook-form submit handler, calls the mutation function to create a new game record
    const create_this_new_game_record: SubmitHandler<add_new_review_form_props> = (data) => {
        // sends the new game to the graphql server to be saved
        // addNewReviewMutation({variables:{title:data.title, date:data.date_released}})
    }

    return (
        <section className="reviewsSection">
            <div className="text-5xl capitalize font-semibold">Grand theft Auto playstation</div>
            <div className="my-4 py-2 px-4 bg-[#67f2d1] w-[50px] text-lg font-bold whitespace-nowrap">50 reviews &nbsp; &nbsp; ⭐⭐</div>
            <div className="flex">
                <div className="RvwDtsCvr w-[70%] py-7">
                    <div className="EchGameCvr">
                        <div className="it_fl profImg">
                            
                        </div>
                        <div className="it_fl w-[80%] ml-5 py-1">
                            <div className="">Details of the review</div>
                            <div className="">
                                name of individual
                            </div>
                        </div>
                    </div>
                </div>
                <div className="AddReviewMCvr">
                    <div className="text-2xl font-medium">Add a new review</div>
                    <div className="GInp_General">
                        <form onSubmit={handleNewGameSubmit(create_this_new_game_record)}>
                            <div className="GInp_cvr">
                                <div className="GInp_title">Game ID</div>
                                <div className="GInp_input">
                                    <input type="number" className='' {...registerGameInput("gameId", { required: true, minLength: 5 })} />
                                    {newGameError.gameId && <p className='text-sm font-semibold text-[#df0e3a] pt-1'>This field is required with minimum of 5 letters</p>}
                                </div>
                            </div>
                            <div className="GInp_cvr">
                                <div className="GInp_title">Author ID</div>
                                <div className="GInp_input">
                                    <input type="number" {...registerGameInput("authorId", { required: true, minLength: 5 })} />
                                    {newGameError.authorId && <p className='text-sm font-semibold text-[#df0e3a] pt-1'>This field is required with minimum of 5 letters</p>}
                                </div>
                            </div>
                            <div className="GInp_cvr">
                                <div className="GInp_title">Ratings</div>
                                <div className="GInp_input">
                                    <input type="number" {...registerGameInput("authorId", { required: true, minLength: 5 })} />
                                    {newGameError.authorId && <p className='text-sm font-semibold text-[#df0e3a] pt-1'>This field is required with minimum of 5 letters</p>}
                                </div>
                            </div>
                            <div className="GInp_cvr">
                                <div className="GInp_title">Contents</div>
                                <div className="GInp_input">
                                    <textarea name="" id="" cols={40} rows={5}></textarea>
                                    {newGameError.authorId && <p className='text-sm font-semibold text-[#df0e3a] pt-1'>This field is required with minimum of 5 letters</p>}
                                </div>
                            </div>
                            <div className="GInp_Btn GenBtn1">
                                {
                                    addNewItemLoading ? (<button type="submit" className='opacity-50' disabled>Saving... </button>) : (<button type="submit">Save new game </button>)
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}