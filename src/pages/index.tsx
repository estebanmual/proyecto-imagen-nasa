import fetcher from "@/utils/fetcher"
import ImageOfTheDay from "@/components/ImageOfTheDay";
import LastTenDaysImages from "@/components/LastTenDaysImages";
import { Image } from "@/types" 
import { sub, format } from 'date-fns'

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
  const startDate = format(sub(new Date(), {
    days: 10
  }), 'yyyy-MM-dd');

  const endDate = format(sub(new Date(), {
    days: 1
  }), 'yyyy-MM-dd');

  console.log(startDate, endDate)
  try {
    const imageOfTheDay = await fetcher();
    const last10DaysImages = await fetcher(`&start_date=${startDate}&end_date=${endDate}`)

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
