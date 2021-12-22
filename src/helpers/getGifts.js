export const getGifts = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=FSOVMpdpxN3WF0YP2TrHZ1TV4RoSNIBC`
    const resp= await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(gif=>{
        return {
            id: gif.id,
            title: gif.title,
            img: gif.images?.downsized_medium.url
        }
    })

    return  gifs
}