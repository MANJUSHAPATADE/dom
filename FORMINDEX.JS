const labelInputeField = document.querySelector('#lableValue')
const form = document.querySelector('#form')
const inputType = document.querySelector('#inputType')

labelInputeField.addEventListener('keyup',(Event) => {

    const keypressed = Event.key;


   if(keypressed === "Enter"){
        //create inputs
        const type = inputType.value
        const label =labelInputeField.value

        const labelInput = document.createElement("label")
        const div = document.createElement("div")
        let input=null;

        if(type==='textarea')
          input= document.createElement("textarea")
           else
           
        input = document.createElement("input")

        labelInput.innerHTML = label
       
        input.classList.add('form-controle')
        labelInput.classList.add('form')
        div.classList.add("mb-3")

        if(type !='submit'){
           div.appendChild(labelInput)
        }
       if(type=='submit'){
           input.classList.add('btn')
           input.classList.add('btn-success')
           input.value = label
       }

        div.appendChild(labelInput)
        div.appendChild(input)

        form.appendChild(div)


        console.log(type);
    }
 })