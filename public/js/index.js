console.log('work');

const blockRender = async () =>{
    let html = '';
    const result = await axios.get('/articles');
    //console.log('get:', result.data);
    // 
    // console.log('post:', result2.data);

    let articles = result.data;
    articles.forEach((article, i) => {
        html += `
        <div class="container">
                <div class="block">
                    <h3 class="title" data-block="${i}" >${article.title}</h3>
                    <div class="text" id="show${i}" data-text="${i}">
                        ${article.text}
                    </div>
                </div>
                <div class="devider"></div>
            </div>
        `;
    });
    const wrapper = document.querySelector('.wrapper');

    wrapper.innerHTML = html;

    textOpener();
    textClose();

};


const textOpener  = () => {
    let blocks  = document.querySelectorAll('.title');
   
    blocks.forEach((block) => {
        block.addEventListener('click', (e) => {
            const item = document.querySelector('#show' + e.target.getAttribute('data-block'));
            //console.log(item)
            item.classList.add('show');
        });
    });    
};

const textClose = () => {
    let texts = document.querySelectorAll('.text');

    texts.forEach((text) => {
        text.addEventListener('click', (e) => {
            const block = document.querySelector('#show' + e.target.getAttribute('data-text'));
            //console.log(block);
            block.classList.remove('show');
        });
    });
};

const input = document.querySelector('input');
const text = document.querySelector('textarea');
const button = document.querySelector('button');

const addNewArticle = () =>{
    const inputValue = input.value;
    //console.log(inputValue);
    const textValue = text.value;
    //console.log(textValue);
    if(input && text){
        const result2 = async() =>{
            await axios.post('/articles', {title:inputValue, text:textValue});
        } 
        result2();
    }
    blockRender();
       
};


document.addEventListener('DOMContentLoaded', ()=>{
    blockRender();

    button.addEventListener('click', () =>{
        addNewArticle();
    });
});







