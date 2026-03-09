import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button.tsx';

const NotFoundPage = () => {
    const nav = useNavigate();

    return (<>
        <div className="flex justify-center items-center w-full h-[80vh]">
            <div className="flex flex-col gap-3 w-[30%]">
                <p>404 Not Found</p>
                <Button onClick={() => nav("/")}>Return to home page</Button>
            </div>
        </div>
    </>
    )
}

export default NotFoundPage