import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@akemnoorsingh/medium-project";

import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        "name": "",
        "email": "",
        "password": ""
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch (e) {
            console.log(e);
            alert("Error while signing up")
        }
    }

    return <div className="h-screen flex justify-center flex-col py-6 md:py-0">
        <div className="flex justify-center flex-col gap-3 md:gap-5 items-center">
             <div className="px-4 md:px-10 text-center md:text-left">
                    <div className="text-2xl sm:text-3xl lg:text-5xl gasoek-one-regular text-[#141414] font-extrabold">
                        {type === "signin" ? "Welcome back!" : "Create an account"}
                    </div>
                    <div className="text-white mt-1 funnel-display-regular text-sm sm:text-lg md:text-xl">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                        <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "Sign up" : "Sign in"}
                        </Link>
                    </div>
                </div>
            <div className="border funnel-display-regular p-5 md:p-10 rounded-3xl bg-white shadow-lg w-[90%] max-w-[500px] mx-4">
               
                <div className="">
                    {type === "signup" ? <LabelledInput label="Name" placeholder="Vengence.." onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} /> : null}
                    <LabelledInput label="Email" placeholder="vengence@gotham.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }} />
                    <LabelledInput label="Password" type={"password"} placeholder="I am Batman" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                    <Button onClick={sendRequest} type={type} />
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-1 md:mb-2 text-sm text-[#141414] font-semibold pt-3 md:pt-4">{label}</label>
        <input onChange={onChange}
            type={type || "text"}
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5"
            placeholder={placeholder}
            required />
    </div>
}


export function Button({ onClick, type }: { onClick: () => void, type: "signup" | "signin" }) {
    return (
        <button onClick={onClick}
            type="button"
            className="mt-6 md:mt-8 w-full funnel-display-regular text-white bg-[#141414] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 md:px-5 py-2 md:py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> 
            {type === "signup" ? "Sign up" : "Sign in"}
        </button>
    )
}
