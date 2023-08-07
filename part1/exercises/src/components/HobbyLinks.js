export default function HobbyLinks(){
    const hobbies = ["https://www.crunchyroll.com/","https://store.steampowered.com/"]
    return (
        <div>
            <h1>Hobbies</h1>
            <a href = {HobbyLinks[0]}>Crunchy Roll ~ my favorite Anime site<br/></a>
            <a href = {HobbyLinks[1]}>Video Games</a>
        </div>
    )
}