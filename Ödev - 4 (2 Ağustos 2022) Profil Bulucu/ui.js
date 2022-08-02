class UI {
  constructor() {
    this.profileContainer = document.querySelector("#profileContainer");
    this.alert = document.querySelector("#alert");
  }

  showProfile(profile) {
    this.profileContainer.innerHTML = `

            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                         <a href="https://listelist.com/wp-content/uploads/2014/11/the-joker-listelist-620x375.jpg"><img src="https://listelist.com/wp-content/uploads/2014/11/the-joker-listelist-620x375.jpg" class="img-thumbnail"></a>
                    </div>
                    <div class="col-md-8">
                        <h4>Contact</h4>
                        <ul class="list-group">
                             <li class="list-group-item">
                                name : ${profile.name}
                             </li>
                             <li class="list-group-item">
                                username : ${profile.username}
                             </li>
                             <li class="list-group-item">
                                email : ${profile.email}
                             </li>

                             <li class="list-group-item">
                               address : ${profile.address.street}
                               ${profile.address.city}
                               ${profile.address.zipcode}
                               ${profile.address.suite}
                             </li>
                             <li class="list-group-item">
                             phone : ${profile.phone}
                              </li>
                              <li class="list-group-item">
                                  website : ${profile.website}
                             </li>
                             <li class="list-group-item">
                             company : ${profile.company.name}
                            </li>
                        </ul>
                        <h4 class="mt-4">Todo list</h4>
                        <ul id="todo" class="list-group">

                        <ul>
                    </div>
                </div>

            </div>
        
        
        
        `;
  }

  showAlert(text) {
    this.alert.innerHTML = `${text} Aradığınız Kişi Bulunamadı`;
  }

  showTodo(todo) {
    let html = "";

    todo.forEach((item) => {
      if (item.completed) {
        html += `
                    <li class="list-group-item bg-success">
                        ${item.title}
                    </li>    
                `;
      } else {
        html += `
                <li class="list-group-item bg-secondary">
                    ${item.title}
                </li>    
            `;
      }
    });

    this.profileContainer.querySelector("#todo").innerHTML = html;
  }

  clear() {
    this.profileContainer.innerHTML = "";
    this.alert.innerHTML = "";
  }
}
