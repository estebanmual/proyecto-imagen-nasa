import { useRouter } from "next/router";
import { Image } from "@/types";

const ImageOfTheDay = (props: Image) => {
    const { url, title, date } = props;
    const router = useRouter();
    return (
        <div>
            <img src={url} alt={title} onClick={() => router.push(`/image/${date}`)} />
            <h2>{title}</h2>
        </div>
    );
};

export default ImageOfTheDay;