// Below is the code to my soundboard

// Below I made a variable that cannot be changed, with the sound that has been given
const sounds = ['Ah-ha', 'Back-of-the-net', 'Bang-out-of-order', 'Dan','Email-of-the-evening', 
'Hello-partridge', 'I-ate-a-scotch-egg', 'Im-confused' ]

// For each sound, it will create a button.
sounds.forEach (sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    //After creating a button, the code will get the element when clicked.
    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })

    document.getElementById('buttons')
    .appendChild(btn) 
})

//This is bassically the whole javascript code to make my soundboard.