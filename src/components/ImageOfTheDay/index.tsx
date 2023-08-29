import { useRouter } from "next/router";
import { Image as ImageType} from "@/types";
import Image from "next/image";

import styles from "./ImageOfTheDay.module.css"

const ImageOfTheDay = (props: ImageType) => {
    const { url, title, date } = props;
    const router = useRouter();

    return (
        <div className={styles.container}>
            <Image 
                src={url || ''} 
                alt={title || ''} 
                onClick={() => router.push(`/image/${date}`)} 
                className={styles.image}
                width={200}
                height={200}    
            />
            <h2>{title}</h2>
        </div>
    );
};

export default ImageOfTheDay;