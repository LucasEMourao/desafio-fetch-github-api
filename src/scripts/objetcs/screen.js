const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                        <img src="${user.avatarUrl}" alt = Foto do perfil do usuário/>
                            <div class="data">
                                <h1>${user.name ?? "Não possui nome cadastrado😢"}</h1>
                                <p>${user.bio ?? "Não possui bio cadastrado😢"}</p> <br>
                                <p> 👥${user.followers} Seguidores </p>
                                <p> 👥${user.following} Seguindo </p>
                            </div>
                        </div>`;
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href ="${repo.html_url}" target ="_blank">${repo.name}
                                                                        <div class ="about"> 
                                                                            <ul>
                                                                                <li><p>🍴${repo.forks_count} </p></li>
                                                                                <li><p>⭐${repo.stargazers_count} </p></li>
                                                                                <li><p>👀${repo.watchers_count} </p></li>
                                                                                <li><p>📃${repo.language ?? 'Não tem'} </p></li>
                                                                            </ul>
                                                                        </div>
                                                                    </a>
                                                                </li>`)
        

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class ="repositories section">
                                                            <h2>Repositórios</h2>
                                                            <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let eventsItens = ''
        user.events.forEach(event =>{
            const eventName = event.repo.name
            const pushEvent = event.type === 'PushEvent'
            const createEvent = event.type === 'CreateEvent'
            
            if(pushEvent){
                eventsItens += `<li><p><span>${eventName}</span> - ${event.payload.commits[0].message}</p></li>`
            }
            else if(createEvent){
                eventsItens += `<li><p><span>${eventName}</span> - Sem mensagem de commit</p></li>`
            }
        })

        if(user.events.length > 0){
            this.userProfile.innerHTML += ` <div class ="events-section">
                                                <h2>Eventos</h2>
                                                <div class = "eventsList">
                                                    <ul>${eventsItens}</ul>
                                                </div>
                                            </div>`
        }

        // this.userProfile.innerHTML += 
        // `<div class ="events-section">
        //      <h3>Eventos</h3>
        // </div>`
        // user.events.forEach(event =>{
        //     const eventName = event.repo.name
        //     if(event.payload){
        //         if(event.payload.commits){
        //             event.payload.commits.forEach(message =>{
        //                 const commitMessage = message.message

        //                 this.userProfile.innerHTML +=
        //                 `<span class ="eventsActiveList">
        //                     <ul>
        //                         <li>
        //                             <p><strong>${eventName}</strong> - ${commitMessage}</p>
        //                         </li>
        //                     </ul>
        //                 </span>`
        //             })
        //         }
        //     }
        // })
        // let eventsItens = ''
        // user.events.forEach(event => eventsItens += `<li><p>${event.repo.name} - ${event.payload.description}</p></li>`)
        // console.log(eventsItens);

        // if(user.events.length > 0){
        //     this.userProfile.innerHTML += `<div class ="events section">
        //                                                     <h3>Eventos</h3>
        //                                                     <ul>${eventsItens}</ul>
        //                                     </div>`
        // }
        
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3> Usúario não encontrado </h3>"
    }
}



export { screen }