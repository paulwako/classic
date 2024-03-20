
function loadHTML(page) {
        fetch(`/${page}.html`).then(res =>{
                if(res.ok){
                        return res.text();
                }
        }).then( result =>{
                document.querySelector("#content").innerHTML = result;
        })
      };

