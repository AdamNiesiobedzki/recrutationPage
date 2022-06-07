window.addEventListener('scroll', function(){
  const navBar = document.getElementsByClassName('nav');
  navBar[0].classList.toggle("sticky", window.scrollY > 450);
})



const myLocalStorage = localStorage;
const container = document.getElementById('container');

function scanForArticleId(id)
{
    let savedIDs = JSON.parse(localStorage.getItem("favouriteArticles"));
    if(savedIDs === null) {return true;}
    else 
    {
        for (let i = 0; i < savedIDs.length; i++)
        {
            if(savedIDs[i] == id)
            {
                return false;
            }
        }
    }
    return true;
}

const renderTile = item =>
{
    const hiperLink = document.createElement('a');
    hiperLink.href = item.url; 
    const tile = document.createElement('div');
    const titleTag = document.createElement('h3');
    const title =  document.createTextNode(item.title);
    titleTag.appendChild(title);
    const dateTag = document.createTextNode(item.publishedAt.slice(0,10));
    const newLine = document.createElement('div');
    const summaryTag = document.createTextNode(item.summary);
    const imgTag = document.createElement('img');
    imgTag.src = item.imageUrl;
    const button = document.createElement('button')
    button.value = item.id;
    button.addEventListener('click', toggleFavourite)
    if (scanForArticleId(item.id)){button.textContent = "add to favourite";}
    else {button.textContent = "delete from favourite";}
    hiperLink.appendChild(titleTag);
    tile.appendChild(hiperLink);
    tile.appendChild(dateTag);
    tile.appendChild(newLine);
    tile.appendChild(summaryTag);
    tile.appendChild(imgTag);
    tile.appendChild(button);
    tile.classList.add('tile');
    container.appendChild(tile);
}


