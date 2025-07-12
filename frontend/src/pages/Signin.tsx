import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"

export const Signin = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
                <Auth type="signin"></Auth>
            </div>
            <div className="hidden md:block bg-[#141414] md:bg-transparent">
                <Quote></Quote>
            </div>
        </div>
    )
}