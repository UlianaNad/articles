console.log('working');

const firstname = document.querySelector('input[name="firstname"]');
const date = document.querySelector('.date');
const number = document.querySelector('.number');
const math = document.querySelector('.math');
const submitButton = document.querySelector('.submitButton');

const addUser = () => {
    let fname = firstname.value;
    let bdate= date.value;
    let phoneNumber = number.value;
    let answer = Number(math.value);

    if(fname != '' && phoneNumber != ''){
        console.log(fname, bdate, phoneNumber, answer); 
        const result = async() =>{
            await axios.post('/regular', {
            firstname:fname, 
            date:bdate,
            number:phoneNumber,
            math:answer
            });
        }
        result();
    }
    else{
        console.log('empty');
    };
};

submitButton.addEventListener('click', () => {
   addUser();
});

