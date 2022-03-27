import React from "react";

const GiphyAPI = "https://api.giphy.com/v1/gifs/search?api_key=O3wePOOxb1QL4bvDGpFlp8PWQAxesEJz";

let GIFSearch = () => {
  let [search, setSearch] = React.useState("");
  let [gifs, setGifs] = React.useState([]);
  let [loadingState, setLoadingState] = React.useState(false);
  
  let searchGif = () => {
    if(search.length > 0){
      setLoadingState(true);
      fetch(GiphyAPI+search)
      .then((res)=>{
        setLoadingState(false);
        return res.json();
      })
      .then((result)=>{
        console.log(result);
        setGifs(result.data.map((gif)=>{
          return gif.images.fixed_height.url;
        }))
      })
      .catch(()=>{
        alert("Something went wrong");
        setLoadingState(false);
      })
    }
  }
  return (
    <div>       
            <form id="searchbar">
          <input 
            type="text" 
            placeholder="Search GIF"
            value={search}
            onChange={(e)=>setSearch(e.target.value)} 
          />
          <button onClick={searchGif}>
            Search
          </button>
          </form>
        
        {
          (loadingState) ? (
            <div className="loading">
              <div className="loader">
              </div>
            </div>
          ) : (
            <div className="list">
              {
                gifs.map((gif)=>{
                  return (
                      <img src={gif}/>  
                  )
                })
              }
            </div>
          )
        }
    </div>
  )
}

export default GIFSearch
