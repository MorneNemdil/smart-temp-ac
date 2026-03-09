import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@/lib/context/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
    const user = useUser();
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginClicked = async () => {
        try {
            await user.login(email, password);
            nav('/');
        } catch (error) {
            toast.error("Invalid email or password");
        } finally {
            setEmail("");
            setPassword("");
        }
    }

    return (<div className="flex h-screen">
        <div className="w-[10vw] p-5">
            {/* <Avatar className='hover:shadow hover:shadow-gray-700 hover:cursor-pointer' onClick={() => nav('/')}>
                <AvatarImage src={} alt="@shadcn" className='p-1' />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
        </div>
        <div className="flex justify-center items-center w-full h-full">
            <div className="flex flex-col gap-3 w-[50vw] md:w-[35vw]">
                <div className="flex flex-col gap-1">
                    <Label className="ml-0.5">Email</Label>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <Label className="ml-0.5">Password</Label>
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                </div>
                <Button
                    className="button"
                    type="button"
                    onClick={onLoginClicked}
                >
                    Login
                </Button>
            </div>
            <div className="w-[10vw]" />
        </div>
    </div>
    )
}

export default Login