(function app(arr) {
    //----------------------send this-----------------------------------------------TODO:...............

    class Contact {
      constructor(firstName, lastName, phone, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.phone = phone
        this.email = email
        this.online = false
      }

      get online() {
        return this._online
      }

      set online(status) {
        this._online = status
      }

      render(id) {
        // this.onlineDiv.className = 
        let template =
          `<article>
        <div class="title ${this.online}">${this.firstName + ' ' + this.lastName}<button>&#8505;</button></div>
        <div class="info" style = "display: none">
            <span>&phone; ${this.phone}</span>
            <span>&#9993; ${this.email}</span>
        </div>
     </article>`

        document.getElementById(id).innerHTML += template
        this.idCounter++

        Array.from(document.querySelectorAll('button')).map(el =>
          el.addEventListener('click', function (e) {
            let changeClass = this.parentElement.nextElementSibling.style
            changeClass.display == 'none' ? changeClass.display = 'block' : changeClass.display = 'none'

            // this.online ? 'title online' : 'title'

            if (typeof this.online === "undefined") {
              this.online = false
            }

            // console.log('check online: ', this.online);
            if (!this.online) {
              this.parentNode.className = 'title online'
              this.online = true
            } else {
              this.parentNode.className = 'title'
              this.online = false
            }

          }))

      }

    }
  
       
  
//-------------------------------------------------------------------------------------------

  let contacts = [
      new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
      new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
      new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
    ]

    contacts.forEach(c => c.render('main'));
  }

  ())




  //-----------------------------------------------------(2)------------------------- 100 copy

  // class Contact {
  //   constructor (f, l, p, e) {
  //     this.firstName = f
  //     this.lastName = l
  //     this.phone = p
  //     this.email = e
  //     this._online = false
  //   }
  
  //   get online () {
  //     return this._online
  //   }
  
  //   set online (v) {
  //     this._online = v
  
  //     if (this.onlineDiv) {
  //       this.onlineDiv.className = this._online ? 'title online' : 'title'
  //     }
  //   }
  
  //   eFactory (tag, content = '') {
  //     const e = document.createElement(tag)
  //     e.innerHTML = content
  
  //     return e
  //   }
  
  //   render (id) {
  //     this.templ = this.eFactory('article')
  //     this.onlineDiv = this.eFactory('div', `${this.firstName} ${this.lastName}`)
  //     this.infoBtn = this.eFactory('button', '&#8505;')
  //     this.infoDiv =
  //       this.eFactory(
  //         'div',
  //         `<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>`
  //       )
  
  
  //     this.onlineDiv.className = this.online ? 'title online' : 'title'
  //     this.infoDiv.className = 'info'
  //     this.infoDiv.style.display = 'none'
  
  //     this.onlineDiv.appendChild(this.infoBtn)
  //     this.templ.appendChild(this.onlineDiv)
  //     this.templ.appendChild(this.infoDiv)
  
  //     document.getElementById(id).appendChild(this.templ)
  
  //     this.infoBtn.addEventListener('click', () => {
  //       this.infoDiv.style.display = this.infoDiv.style.display === 'none' ? 'block' : 'none'
  //     })
  //   }
  // }