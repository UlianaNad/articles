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
})






//open text






// const titleBlock = document.querySelector('h3');

// const openText = () => {
//     textBlock.classList.add('show');
// };
// const closeText = () => {
//     textBlock.classList.remove('show');
// };

// const textShowing = () => {

// }
// textBlock.addEventListener('click', () => {
//     console.log(textBlock);
//     // openText();
// });


// const run = async () => {
//     const result = await axios.get('/articles');
//     //console.log('get:', result.data);
//     // 
//     // console.log('post:', result2.data);

//     let articles = result.data;

//     const blockRender = () =>{
//         let html = '';
    
//         articles.forEach((article) => {
//             html += `
//             <div class="container">
//                     <div class="block">
//                         <h3>${article.title}</h3>
//                         <div class="text">
//                             ${article.text}
//                         </div>
//                     </div>
//                     <div class="devider"></div>
//                 </div>
//             `;
//         });
//         const wrapper = document.querySelector('.wrapper');

//         wrapper.innerHTML = html;
//     };
//     blockRender();

//     const input = document.querySelector('input');
//     const text = document.querySelector('textarea');
//     const button = document.querySelector('button');

//     const addNewArticle = () =>{
            
//         button.addEventListener('click', () =>{
//             const inputValue = input.value;
//             //console.log(inputValue);
//             const textValue = text.value;
//             //console.log(textValue);
    
//             if(input && text){
//                 const result2 = async() =>{
//                     await axios.post('/articles', {title:inputValue, text:textValue});
//                 } 
//                 result2();
//             }
//             blockRender(); 
//         }); 
//     };

//     addNewArticle();
//     const textBlock = document.querySelector('.text');
//     const titleBlock = document.querySelector('h3');
    
//     const openText = ()=>{
//         textBlock.classList.add('show');
//     };
//     const closeText = ()=>{
//         textBlock.classList.remove('show');
//     };
    
//     titleBlock.addEventListener('click', () => {
//         console.log('working well');
//         openText();
//     });
    
// };
// run();



