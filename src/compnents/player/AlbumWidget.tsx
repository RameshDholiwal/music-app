import AlbumData from "./AlbumData";

export default function AlbumWidget({type, data}: {type:string, data:any}) {
return (
    <>
        {
            type === "artists"
            ? 
            data.map((item: any, _index: number) => {
                return <AlbumData title={item.title} subList={item.subList} image={item.image} />
            }) 
            : type === "similarsong"
            ? data.map((item: any, _index: number) => {
                return <AlbumData title={item.title} subList={item.subList} image={item.image} />
            }) 
            : type === "newrelease"
            ? data.map((item: any, _index: number) => {
                return <AlbumData title={item.title} subList={item.subList} image={item.image} />
            }) 
            : null
        }
    </>
  )
}
