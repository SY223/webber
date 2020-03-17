document.getElementById('getPolit').addEventListener('click',getPolit);
document.getElementById('getSpur').addEventListener('click',getSpur);
document.getElementById('getMur').addEventListener('click',getMur);


function getPolit() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=018c26a9d5f14286920c8497627792df')
        .then(res => {
            return res.json();
        })
        .then(data => {
            let result;
            data.articles.forEach(article => {
                const { author, title,url } = article;
                result += `
                <div class="container">
                    ${title}
                    ${author}
                    ${url}<br />
                    <hr>
                </div>`;
            });
            document.getElementById('result').innerHTML=result;
        })
        .catch(err => {
            console.log(err);
        });
}

function getSpur() {
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=018c26a9d5f14286920c8497627792df')
        .then(res => {
            return res.json();
        })
        .then(data => {
            let result;
            data.articles.forEach(article => {
                const { author, title,url } = article;
                result += `
                <div class="container">
                    ${title}
                    ${author}
                    ${url}<br />
                    <hr>
                </div>`;
            });
            document.getElementById('result').innerHTML=result;
        })
        .catch(err => {
            console.log(err);
        });
}

function getMur() {
    fetch('https://newsapi.org/v2/everything?q=apple&from=2020-03-16&to=2020-03-16&sortBy=popularity&apiKey=018c26a9d5f14286920c8497627792df')
        .then(res => {
            return res.json();
        })
        .then(data => {
            let result;
            data.articles.forEach(article => {
                const { author, title,url } = article;
                result += `
                <div class="container">
                    ${title}
                    ${author}
                    ${url}<br />
                    <hr>
                </div>`;
            });
            document.getElementById('result').innerHTML=result;
        })
        .catch(err => {
            console.log(err);
        });
}


