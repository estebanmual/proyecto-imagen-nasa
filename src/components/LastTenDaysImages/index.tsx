import { useRouter } from "next/router";
import { Image } from "@/types";

type LastTenDaysImages = {
    images: Image[];
};

const LastTenDaysImages = (props: LastTenDaysImages) => {
    const { images } = props;
    const router = useRouter();
    return (
        <div>
            <h2>Últimos 10 días</h2>
            {images?.map((image, index) => (
                <div key={`last-ten-day-image-${image.title}-${index}`}>
                    <img src={image.url} alt={image.title} onClick={() => router.push(`/image/${image.date}`)}/>
                    <h2>{image.title}</h2>
                </div>
            ))}
        </div>
    );
};

export default LastTenDaysImages;