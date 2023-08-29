import fetcher from "@/utils/fetcher"
import ImageOfTheDay from "@/components/ImageOfTheDay";
import LastTenDaysImages from "@/components/LastTenDaysImages";
import { Image } from "@/types" 

type HomeProps = {
  imageOfTheDay: Image;
  last10DaysImages: Image[];
};

export default function Home(props: HomeProps) {
  const { imageOfTheDay, last10DaysImages } = props;
  return (
    <div>
      <ImageOfTheDay {...imageOfTheDay} />
      <LastTenDaysImages images={last10DaysImages}/>
    </div>
  )
};

export async function getServerSideProps() {
  try {
    const imageOfTheDay = await fetcher();
    const last10DaysImages = await fetcher('&start_date=2023-08-19&end_date=2023-08-28')

    return {
      props: {
        imageOfTheDay,
        last10DaysImages
      }
    }
  } catch (error) {
    console.error(error)
  }
}
