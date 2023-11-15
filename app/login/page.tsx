"use client"
import { useState } from "react"


import MessageComp, {MessageCompProps} from "../components/Message/MessageComp";

// gets the backEnd url from our .env file
const backEndPort = process.env.BACKEND_PORT;

type LoginForRHF = {
    username: string
    password: string
}

type RegisterRHF = {
    name: string
    username: string
    email: string
    gender: 'male'|'female'
    password: string
    confirm_password: string
}

export default function LoginPage() {
    const [isLoading1, setIsLoading1] = useState<boolean>(false) // used for login
    const [isLoading2, setIsLoading2] = useState<boolean>(false) // used for registering
    const [showAlert, setShowAlert] = useState<boolean>(false) // for showing of error messages from the backend
    const [alertMsg, setAlertMsg] = useState<MessageCompProps>({msg_type:'', msg_dts:''}) // the error message


    return (
        <div className="block relative my-14 padding-x">
            <div className="hidden">
                {/* <Header /> */}
            </div>
            {/* {showAlert && <MessageComp {...alertMsg} closeAlert={setShowAlert} />} */}

            <div className="pb-10 text-4xl">Hi there! Welcome to TodoM</div>
            <div className="ovrCover flex">
                <div className="w-1/2">
                    <div className="titleUp">Login</div>
                    <form onSubmit={handleLogin(submitLogin)}>
                        <div className="inputCover">
                            <div className="inpTitle font-bold">Username or Email</div>
                            <div className="inpInput">
                                <input type="text" {...registerLogin("username", { required: true })} />
                                {/* {loginError.username && <p>This field is required!!!</p>} */}
                            </div>
                        </div>
                        <div className="inputCover">
                            <div className="inpTitle">Password</div>
                            <div className="inpInput">
                                <input type="password" {...registerLogin("password", { required: true })} />
                                {/* {loginError.password && <p>This field is required!!!</p>} */}
                            </div>
                        </div>
                        <div className="btnCvr">
                            {/* {!isLoading1 && <button type="submit">Login</button>} */}
                            {/* {isLoading1 && <p>Loading...</p>} */}
                        </div>
                    </form>
                </div>
                <div className="w-1/2">
                    <div className="titleUp">Register</div>
                    <form onSubmit={handleRegister(submitRegistration)}>
                        <div className="inputCover">
                            <div className="inpTitle font-bold">name</div>
                            <div className="inpInput">
                                <input type="text" {...registerReg("name", {required: true})} />
                                {/* {regError.name && <p>This field is required!!!</p>} */}
                            </div>
                        </div>
                        <div className="inputCover">
                            <div className="inpTitle font-bold">username</div>
                            <div className="inpInput">
                                <input type="text" {...registerReg("username", {required: true})} />
                                {/* {regError.username && <p>This field is required!!!</p>} */}
                            </div>
                        </div>
                        <div className="inputCover">
                            <div className="inpTitle font-bold">email</div>
                            <div className="inpInput">
                                <input type="text" {...registerReg("email", {required: true})} />
                                {/* {regError.email && <p>This field is required!!!</p>} */}
                            </div>
                        </div>
                        <div className="inputCover">
                            <div className="inpTitle font-bold">gender</div>
                            <div className="inpInput">
                                <select {...registerReg("gender", {required: true})}>
                                    <option value="">Select your gender</option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                                {/* {regError.gender && <p>This field is required!!!</p>} */}
                            </div>
                        </div>
                        <div className="inputCover">
                            <div className="inpTitle">Password</div>
                            <div className="inpInput">
                                <input type="password" {...registerReg("password", {required: true})} />
                                {/* {regError.password && <p>This field is required!!!</p>} */}
                            </div>
                        </div>
                        <div className="inputCover">
                            <div className="inpTitle">Re-enter Password</div>
                            <div className="inpInput">
                                <input type="password" {...registerReg("confirm_password", {required: true})} />
                                {/* {regError.confirm_password && <p>This field is required!!!</p>} */}
                            </div>
                        </div>
                        <div className="btnCvr">
                            {/* {!isLoading2 && <button type="submit">Register</button>} */}
                            {/* {isLoading2 && <p>Loading...</p>} */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
