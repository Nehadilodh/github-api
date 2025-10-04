let search = document.querySelector(".searchbtn");
let input = document.querySelector(".Searchinpt");
let card = document.querySelector(".card");



async function getProfile(username) {
    const raw = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    });

    if (!raw.ok) {
        throw new Error("user not found or rate limit reached");
    }

    return await raw.json();
}


async function searchUsers(query) {
    const res = await fetch(`https://api.github.com/search/users?q=${query}`);
    if (!res.ok) throw new Error("Failed to search users");
    return await res.json();
}

function Profiledata(details){
    console.log(details.items);
    
    card.innerHTML = ""; 

    details.items.forEach(async detail => {
        // fetch full profile for each user
        let user = await getProfile(detail.login);

        let data = `
        <div class="max-w-sm bg-gray-800 text-white rounded-xl shadow-lg p-4 flex gap-4 items-start">
            <img 
                src="${user.avatar_url}" 
                alt="GitHub Avatar" 
                class="w-16 h-16 rounded-full border-2 border-blue-500"
            />

            <div class="flex-1">
                <h2 class="text-lg font-semibold leading-tight">${user.name || user.login}</h2>
                <p class="text-sm text-blue-400 mb-1">@${user.login}</p>

                <p class="text-xs text-gray-300 mb-2">${user.bio || "No bio available"}</p>

                <div class="text-xs grid grid-cols-2 gap-x-4 gap-y-1 text-gray-400">
                    <div><span class="font-semibold text-white">Repos:</span> ${user.public_repos}</div>
                    <div><span class="font-semibold text-white">Followers:</span> ${user.followers}</div>
                    <div><span class="font-semibold text-white">Following:</span> ${user.following}</div>
                    ${user.location ? `<div><span class="font-semibold text-white">Location:</span> ${user.location}</div>` : ""}
                    ${user.company ? `<div><span class="font-semibold text-white">Company:</span> ${user.company}</div>` : ""}
                    ${user.blog ? `
                        <div class="col-span-2">
                          <span class="font-semibold text-white">Blog:</span> 
                          <a href="${user.blog}" target="_blank" class="text-blue-400 hover:underline break-all">${user.blog}</a>
                        </div>` : ""}
                </div>
            </div>
        </div>
        `;

        card.innerHTML += data;
    });
}

search.addEventListener('click', function(data){
    data.preventDefault();
    let username = input.value.trim();
    if(username.length > 0){
        searchUsers(username).then((data)=>{
            Profiledata(data)
        })
    }
    else {
    alert("Not found")
    } 

})
